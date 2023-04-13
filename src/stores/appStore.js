import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { subscribeWithSelector } from 'zustand/middleware';
import StorefrontAPI from '../clients/BigCommerceAPI';
import BigCommerceGraphQL from '../clients/BigCommerceGraphQL';
import Address from '../types/Address';

const API_QUERY_PARAMS = 'include=lineItems.physicalItems.options';
const appStore = create(
  subscribeWithSelector((set, get) => ({
    /* State */
    storedCartId: '',
    isMiniCartOpen: false,
    isCartLoading: false,
    isCartFetchError: false,
    isCheckoutLoading: false,
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
    userData: null,
    isLoggedIn: false,
    relatedProducts: null,
    topProductId: 0,
    // Product LOADING STATUS START
    productLoading: [],
    buyNowCtaClicked: false,
    getProductLoadingStatus(productId, variantId) {
      if (variantId) {
        return (
          get().productLoading.filter(
            (item) =>
              item.productId === productId && item.variantId === variantId
          ).length >= 1
        );
      }
      return (
        get().productLoading.filter((item) => item.productId === productId)
          .length >= 1
      );
    },
    // LOADING STATUS END
    // CHECKING WHETHER A PRODUCT IS IN CART OR NOT :START
    getQuantityInCart(productId, variantId) {
      if (variantId) {
        return (
          get()
            .getCartItems()
            .find(
              (item) =>
                item.productId === Number(productId) &&
                item.variantId === Number(variantId)
            )?.quantity || 0
        );
      }
      return (
        get()
          .getCartItems()
          .find((item) => item.productId === Number(productId))?.quantity || 0
      );
    },
    // CHECKING WHETHER A PRODUCT IS IN CART OR NOT :END
    /* Getters */
    getCartItems() {
      return get().cartData?.lineItems?.physicalItems || [];
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
        get().cartData?.id || ''
        // get().cartData?.id || window.localStorage.getItem('storedCartId') || ''
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
      return get().cartData?.cartAmount || 0;
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
    // Fetching Related Products Start
    isTopProductChanged: () => {
      if (get().cartData !== undefined) {
        const id = get().getCartItems()?.at(0)?.productId || 0;
        set({
          topProductId: id,
        });
      } else {
        set({ topProductId: 0 });
      }
    },
    fetchRelatedProducts: async () => {
      try {
        if (get().topProductId !== 0) {
          const response = await fetch(
            `https://kapiva.app/releated-product/related_products_default_price.php?productId=${
              get().topProductId
            }`
          );
          const data = await response.json();
          // console.log(data.data.site.product.relatedProducts.edges);
          set({
            relatedProducts:
              data.data?.site?.product?.relatedProducts?.edges || [],
          });
        } else {
          set({ relatedProducts: [] });
        }
        // console.log(get().relatedProducts);
        // return allProducts;
      } catch (err) {
        console.log('Error is', err);
      }
    },
    // Fetching Related Products END

    // LOGIN START
    checkIsLoggedIn() {
      console.log('Runnign CheckIsLoggedIn');
      const loggedInInfo = localStorage.getItem('ins-is-user-logged-in');
      const userData = localStorage.getItem('userData');
      if (loggedInInfo !== null && userData !== null) {
        console.log('Both Variable Exists');
        const isLoggedIn = JSON.parse(loggedInInfo).data;
        if (isLoggedIn === true) {
          // logged in and customer data already fetched
          const customerData = JSON.parse(userData);
          const { infoFetchedTime } = customerData;
          const now = new Date().getTime();
          const timeDiff = now - infoFetchedTime;
          if (timeDiff > 10 * 60 * 1000) {
            // customer Data fetched is older than 10 mins, fetch data again
            console.log('The time difference is greater than 10 minutes.');
            get().fetchCurrentLoggedInUser();
          } else {
            // cutomer data fetched is still valid , load user data from localStorage
            set({ isLoggedIn: true, userData: customerData });
          }
        } else {
          // logged out ,but customer information exists in localStorage
          localStorage.removeItem('userData');
          set({ isLoggedIn: false, userData: null });
        }
      } else if (loggedInInfo === null && userData !== null) {
        // loggedIn localStorage variable does not exists
        // but userData is Exists in localStorage
        // applicable when user directly lands to headless page HP or PDP
        // but was logged in already
        // since cookies/localstorage variables has not been loaded
        console.log('user Data variable exists');
        const customerData = JSON.parse(userData);
        const { infoFetchedTime } = customerData;
        const now = new Date().getTime();
        const timeDiff = now - infoFetchedTime;
        if (timeDiff > 2 * 60 * 1000) {
          console.log('The time difference is greater than 5 minutes.');
          get().fetchCurrentLoggedInUser();
        } else {
          set({ isLoggedIn: true, userData: customerData });
        }
      } else if (loggedInInfo !== null && userData === null) {
        // loggedIn variable exists in localStorage but customer data is not fetched yet
        // user was in some other page and now just visited HP or PDP
        const isLoggedIn = JSON.parse(loggedInInfo).data;
        if (isLoggedIn === true) {
          get().fetchCurrentLoggedInUser();
        }
      } else {
        get().fetchCurrentLoggedInUser();
      }
    },
    fetchCurrentLoggedInUser: async () => {
      try {
        const response = await BigCommerceGraphQL(`
      query CustomerInformation {
            customer {
              firstName
              lastName
              email
            }
          }
          `);
        const resJson = await response.json();
        if (resJson.data.customer !== null) {
          // customer is valid
          resJson.data.customer.infoFetchedTime = new Date().getTime();
          const dateObj = new Date();
          resJson.data.customer.timeAdded = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
          set({ isLoggedIn: true, userData: resJson.data.customer });
          const userData = JSON.stringify(resJson.data.customer);
          localStorage.setItem('userData', userData);
        } else {
          // customer is not valid => delete variable saved in localStorage
          const userData = localStorage.getItem('userData');
          if (userData !== null) {
            localStorage.removeItem('userData');
          }
          set({ isLoggedIn: false, userData: null });
        }
      } catch (err) {
        console.log(err);
      }
      return null;
    },
    // LOGIN ENDS

    // checkIsLoggedIn() {
    //   console.log('Runnign CheckIsLoggedIn');
    //   const loggedInInfo = localStorage.getItem('ins-is-user-logged-in');
    //   const userData = localStorage.getItem('userData');
    //   if (loggedInInfo !== null) {
    //     console.log('Login Variable Exists');
    //     // console.log('Logged In: status ', JSON.parse(loggedInInfo).data);
    //     const isLoggedIn = JSON.parse(loggedInInfo).data;
    //     if (isLoggedIn === true) {
    //       // user is logged in but data not fetched yet
    //       if (userData === null) {
    //         get().fetchCurrentLoggedInUser();
    //       } else {
    //         // userData Exists
    //         const customerData = JSON.parse(userData);
    //         const { infoFetchedTime } = customerData;
    //         // checking whether userInfo is older than 10mins
    //         const now = new Date().getTime();
    //         const timeDiff = now - infoFetchedTime;
    //         if (timeDiff > 10 * 60 * 1000) {
    //           console.log(
    //             'The time difference is greater than 10 minutes. Regenerating'
    //           );
    //           get().fetchCurrentLoggedInUser();
    //         } else {
    //           set({ userData: customerData });
    //           set({ isLoggedIn: true });
    //         }
    //       }
    //     } else {
    //       set({ userData: null });
    //       set({ isLoggedIn: false });
    //     }
    //   } else if (userData !== null) {
    //     // userData Exists
    //     console.log('User Data Variable Second Level');

    //     const customerData = JSON.parse(userData);
    //     console.log('Customer Data Ava', customerData);
    //     const { infoFetchedTime } = customerData;
    //     // checking whether userInfo is older than 10mins
    //     const now = new Date().getTime();
    //     const timeDiff = now - infoFetchedTime;
    //     if (timeDiff > 5 * 60 * 1000) {
    //       console.log('The time difference is greater than 5 minutes.');
    //       get().fetchCurrentLoggedInUser();
    //     } else {
    //       set({ userData: customerData });
    //       set({ isLoggedIn: true });
    //     }
    //   } else {
    //     console.log('You have not yet visited login page yet');
    //     get().fetchCurrentLoggedInUser();
    //   }
    // },
    // fetchCurrentLoggedInUser: async () => {
    //   try {
    //     const response = await BigCommerceGraphQL(`
    //     query CustomerInformation {
    //           customer {
    //             firstName
    //             lastName
    //             email
    //           }
    //         }
    //         `);
    //     const resJson = await response.json();
    //     if (resJson.data.customer !== null) {
    //       resJson.data.customer.infoFetchedTime = new Date().getTime();
    //       const userData = JSON.stringify(resJson.data.customer);
    //       set({ userData });
    //       set({ isLoggedIn: true });
    //       localStorage.setItem('userData', userData);
    //     } else {
    //       const userData = localStorage.getItem('userData');
    //       if (userData !== null) {
    //         localStorage.removeItem('userData');
    //       }
    //       set({ userData: null });
    //       set({ isLoggedIn: false });
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    //   return null;
    // },
    /* Mutations */
    setCartLoading: () => set(() => ({ isCartLoading: true })),
    toggleMiniCart: () =>
      set((state) => ({ isMiniCartOpen: !state.isMiniCartOpen })),

    /* Actions */
    fetchCart: async () => {
      // const cartId = get().getCartId();
      // if (cartId !== '') {
      //   const response = await StorefrontAPI.get(`/carts?id=${cartId}`);
      //   set({ cartData: response.data.data });
      // }
      try {
        set({ isCartFetchError: false });
        set({ isCartLoading: true });
        const response = await StorefrontAPI.get(`/carts?${API_QUERY_PARAMS}`);
        const cartData = response.data;
        set({ cartData: cartData[0] });
      } catch (ex) {
        console.error(ex);
        set({ isCartFetchError: true });
      }
      set({ isCartLoading: false });
    },
    buyNow: async (productId, variantId, quantity) => {
      set({ buyNowCtaClicked: true });
      await get().addCartItemOrCreateCart(productId, variantId, quantity);
      /* Todo: ATB bool check */
      window.location.href = '/checkout/';
    },
    addCartItemOrCreateCart: async (productId, variantId, quantity) => {
      try {
        const cartId = get().getCartId();
        set((state) => {
          if (variantId) {
            return {
              productLoading: [
                ...state.productLoading,
                { productId, variantId },
              ],
            };
          }
          return { productLoading: [...state.productLoading, { productId }] };
        });
        console.log('Loading Status', get().productLoading);
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
              return x.node?.productOptions?.edges[0]?.node?.values?.edges[0]
                ?.node.isDefault;
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

        if (cartId === '') {
          // When Cart is Empty, We don't get CartID. Using this logic to create a cart with provided payload.
          const response = await StorefrontAPI.post(
            `/carts?${API_QUERY_PARAMS}`,
            {
              cartId,
              customerId,
              lineItems: [lineitem],
            }
          );
          set({ cartData: response.data });
          localStorage.setItem('storedCartId', response.data.id); // cart ID
        } else {
          // When Cart is not empty pass Cart ID to the Function to Add Products in Existing Cart
          const response = await StorefrontAPI.post(
            `/carts/${cartId}/items?${API_QUERY_PARAMS}`,
            {
              cartId,
              customerId,
              lineItems: [lineitem],
            }
          );
          set({ cartData: response.data });
          localStorage.setItem('storedCartId', response.data.id); // cart ID
        }
        set((state) => {
          if (variantId) {
            return {
              productLoading: state.productLoading.filter(
                (item) =>
                  item.productId !== productId && item.variantId !== variantId
              ),
            };
          }
          return {
            productLoading: state.productLoading.filter(
              (item) => item.productId !== productId
            ),
          };
        });
        console.log('After Loading Status', get().productLoading);
      } catch (error) {
        console.error(error);
      }
    },
    updateCartItem: async (itemId, productId, variantId, quantity) => {
      set({ isCartLoading: true });
      try {
        const cartId = get().getCartId();
        window.console.log(
          'Cart Id: ',
          cartId,
          'Item ID :',
          itemId,
          'ProductID :',
          productId,
          'VariantID :',
          variantId,
          'Quantity :',
          quantity
        );
        // The official Bigcommerce StoreFront Update Line Item Api is Failing
        const response = await StorefrontAPI.put(
          `/carts/${cartId}/items/${itemId}?${API_QUERY_PARAMS}`,
          {
            lineItem: {
              productId,
              variantId,
              quantity,
            },
          }
        );
        set({ cartData: response.data });
        set({ isCartLoading: false });

        // await BigCommerceAPI.post(`/carts/items/?`, {
        //   cartId,
        //   itemId,
        //   productId,
        //   variantId,
        //   quantity,
        // });
        // await get().fetchCart();
      } catch (err) {
        set({ isCartLoading: false });

        console.log('Error', err);
      }
    },
    deleteCartItem: async (itemId) => {
      set({ isCartLoading: true });
      try {
        const cartId = get().getCartId();
        const response = await StorefrontAPI.delete(
          `/carts/${cartId}/items/${itemId}?${API_QUERY_PARAMS}`
        );
        set({ cartData: response.data });
        if (typeof response.data?.data === 'undefined') {
          localStorage.removeItem('storedCartId');
        }
        set({ isCartLoading: false });
      } catch (err) {
        console.log('Error', err);
        set({ isCartLoading: false });
      }
    },
  }))
);

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', appStore);
}
// appStore.subscribe(appStore.getState().checkIsLoggedIn);

appStore.subscribe(
  (state) => state.cartData,
  appStore.getState().isTopProductChanged
);
// this gets fired when top product in cart gets changed
appStore.subscribe(
  (state) => state.topProductId,
  appStore.getState().fetchRelatedProducts
);
// for fetching related products which will get triggered when there is change in cartData
// disabled for now, since it gets triggered when there is even small change in cart(like updating)
// appStore.subscribe(
//   (state) => state.cartData,
//   appStore.getState().fetchRelatedProducts
// );

// eslint-disable-next-line import/prefer-default-export
export { appStore };
