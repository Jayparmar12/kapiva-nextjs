import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { BigCommerceAPI } from '../clients/BigCommerceAPI';
import BigCommerceGraphQL from '../clients/BigCommerceGraphQL';
import Address from '../types/Address';

const appStore = create((set, get) => ({
  /* State */
  storedCartId: '',
  isMiniCartOpen: false,
  isCartLoading: true,
  isCartFetchError: false,
  isCheckoutLoading: true,
  isCheckoutFetchError: false,
  cartData: null,
  checkoutData: null,
  isCouponCodeApplying: false,
  couponErrorObj: false,
  addresses: {
    billingEditing: new Address(),
    billingSelected: new Address(),
    shippingEditing: new Address(),
    shippingSelected: new Address(),
  },
  loginForm: {
    isVisible: false,
  },
  phoneVerifyForm: {
    isVisible: false,
  },
  availableCoupons: null,
  isShippingSameAsBilling: null,
  isBillingSynced: false,
  isShippingSynced: false,
  isPaymentAllowed: false,
  hasAgreedCodCharge: true,
  codCharge: '0',
  codMaxLimit: '0',
  skipBillingUpdateDebounce: false,
  isJusPayUpdateAllowed: false,
  selectedPaymentMethod: 'online',
  isPaying: false,
  defaultPrices: null,
  onlineDiscount: {
    enabled: false,
    type: null,
    value: null,
    limitInRupee: null,
    minOrderAmount: null,
    startDatetime: null,
    endDatatime: null,
  },
  isCodBlocked: false,
  freeProductSamples: {
    items: [],
  },

  /* Getters */
  getCartItems() {
    return get().cartData?.line_items?.physical_items || [];
  },
  getCartItemsCount() {
    return get()
      .getCartItems()
      ?.reduce((total, product) => {
        if (/sample/i.test(product.name)) {
          return total;
        }
        return total + product.quantity;
      }, 0);
  },
  getIsCartEmpty() {
    return get().getters.cartItemsCount() < 1;
  },
  getCartId() {
    return (
      get().cartData?.id || window.localStorage.getItem('storedCartId') || ''
    ); // Fallback to cookie too
  },
  getCheckoutId() {
    return get().getCartId();
  },
  getCheckoutData() {
    return null;
  },
  getCheckoutItems() {
    return null;
  },
  getCheckoutItemsCount() {
    return null;
  },
  getSavedAddresses() {
    return null;
  },
  getUpstreamBillingAddress() {
    return null;
  },
  getUpstreamShippingAddress() {
    return null;
  },
  getIsLoggedIn() {
    return null;
  },
  getIsValidGuest() {
    return null;
  },
  getCustomerData() {
    return null;
  },
  getCustomerId() {
    return null;
  },
  getCustomerEmail() {
    return null;
  },
  getCustomerStoreCredit() {
    return null;
  },
  getSummeryStoreCredit() {
    return null;
  },
  getGetAvailableCoupons() {
    return null;
  },
  getIsGuestEmailSynced() {
    return null;
  },
  getConsignments() {
    return null;
  },
  getConsignmentId() {
    return null;
  },
  getAvailableShippingMethodId() {
    return null;
  },
  getUpstreamShippingMethodId() {
    return null;
  },
  getAppliedCoupon() {
    return null;
  },
  getSubTotal() {
    return get().cartData?.cart_amount || 0;
  },
  getFinalTotal() {
    return null;
  },
  getIsStoreCreditFulfilled() {
    return null;
  },
  getOnlinePaymentDiscount() {
    return null;
  },

  /* Mutations */
  setCartLoading: () => set(() => ({ isCartLoading: true })),
  toggleMiniCart: () =>
    set((state) => ({ isMiniCartOpen: !state.isMiniCartOpen })),

  /* Actions */
  fetchCart: async () => {
    const cartId = get().getCartId();
    if (cartId !== '') {
      const response = await BigCommerceAPI.get(`/carts?id=${cartId}`);
      set({ cartData: response.data.data });
    }
  },
  buyNow: async (productId, variantId, quantity) => {
    await get().addCartItemOrCreateCart(productId, variantId, quantity);
    /* Todo: ATB bool check */
    window.location.href = '/checkout/';
  },
  addCartItemOrCreateCart: async (productId, variantId, quantity) => {
    const cartId = get().getCartId();
    const customerId = 0; // get from state later (login system)

    let localVariantId = variantId;
    if (!localVariantId) {
      const resp = await BigCommerceGraphQL(`
        query productById {
          site {
            product(entityId: ${productId}) {
              entityId
              name
              variants {
                edges {
                  node {
                    id
                    entityId
                    sku
                    productOptions {
                      edges {
                        node {
                          entityId
                          displayName
                          isRequired
                          isVariantOption
                          ... on CheckboxOption {
                            checkedByDefault
                          }
                          ... on MultipleChoiceOption {
                            values(first: 10) {
                              edges {
                                node {
                                entityId
                                label
                                isDefault
                                  ... on SwatchOptionValue {
                                    hexColors
                                    imageUrl(width: 200)
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `);

      const productData = await resp.json();

      // window.console.log(productData);

      const defaultVariations =
        productData?.data?.site?.product?.variants?.edges.filter((x) => {
          return x.node?.productOptions?.edges[0]?.node?.values?.edges[0]?.node
            .isDefault;
        });

      /*
        productOptions?.edges[0]?.node?.values?.edges?.filter(
          (o) => {
            return o.node.isDefault;
          }
        );
        */
      // window.console.log(defaultVariations);

      if (defaultVariations && defaultVariations[0]?.node?.entityId) {
        localVariantId = defaultVariations[0].node.entityId;
        window.console.log(localVariantId);
      }
    }

    const lineitem = {
      productId,
      quantity: quantity || 1,
    };

    if (localVariantId) {
      lineitem.variantId = localVariantId;
    }

    // window.console.log(lineitem);

    const response = await BigCommerceAPI.post(`/carts`, {
      cartId,
      customerId,
      lineItems: [lineitem],
    });
    set({ cartData: response.data.data });
    localStorage.setItem('storedCartId', response.data.data.id); // cart ID
  },
  updateCartItem: async (itemId, productId, variantId, quantity) => {
    const cartId = get().getCartId();
    const response = await BigCommerceAPI.post(`/carts/items/?`, {
      cartId,
      itemId,
      productId,
      variantId,
      quantity,
    });
    set({ cartData: response.data.data });
  },
  deleteCartItem: async (itemId) => {
    const cartId = get().getCartId();
    const response = await BigCommerceAPI.delete(
      `/carts/items/?cartId=${cartId}&itemId=${itemId}`
    );
    set({ cartData: response.data.data });
    if (typeof response.data?.data === 'undefined') {
      localStorage.removeItem('storedCartId');
    }
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', appStore);
}

// eslint-disable-next-line import/prefer-default-export
export { appStore };
