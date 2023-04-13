export interface Category {
  id: number;
  image: string;
  name: string;
  category_url?: string;
  customizedSolutionLink?: string;
  healthExpertLink?: string;
  rounded?: boolean;
}
export interface SubCategory {
  id: number;
  name: string;
  category_id?: number;
  status?: number;
  sub_order?: number;
  subcategory_id?: number;
}

export interface Product {
  bigc_id: number;
  image: string;
  ingredient_new: string;
  solution_new: string;
  name: string;
  price: string;
  rating: string;
  sale_price?: string;
  id?: number;
  inventory_level?: string;
  product_url?: string;
  retail_price: string;
  sku?: string;
  sort_order?: number;
}

export interface ChooseYourTherapyContexts {
  categories: Category[];
  products: Product[];
  selectedCategory: number;
  handleCategoryChange: (catId: number) => void;
  loading: boolean;
}

// export interface ChooseYourTherapyContexts_Old {
//   categories: Category[];
//   subCategories: SubCategory[];
//   products: Product[];
//   selectedCategory: number;
//   selectedSubCategory: number;
//   handleCategoryChange: (catId: number) => void;
//   handleSubCategoryChange: (subId: number) => void;
//   loading: boolean;
// }

export interface Testimonial {
  description: string;
  id: number;
  image_icon_url: string;
  image_url: string;
  isImage: string;
  name: string;
  video_url: null | string;
  ratings: number;
  status?: string;
  updated_at?: string;
  url?: null | string;
  category_id?: number;
  created_at?: string;
}

export interface TestimonialsActive {
  active: boolean;
  id: number;
}

export interface GeneralSettings {
  id: number;
  name: string;
  value: string;
}

export interface Banner {
  id: number;
  mobile_image: string;
  banner_url: string;
  image: string;
  heading?: string;
  content?: string;
  order?: number;
  status?: number;
  created_at?: string;
}

export interface NewsItem {
  id: number;
  image_url: string;
  title: string;
  status?: number;
}

export interface NewsHead {
  sub_heading: string;
  sub_inner_heading: string;
  sub_inner_main_heading: string;
  login_user?: LoginUser;
}

export interface UnlockDetail {
  heading: string;
  subHeading: string;
  discountTitle?: string;
  code?: string;
  offerStrip?: string;
  login_user?: LoginUser;
}

export interface LoginUser {
  id?: number;
  role?: string;
  email?: string;
  iat?: number;
  exp?: number;
}

export interface WhatToExpect {
  headingImage: string;
  content: Content[];
}

export interface Content {
  image: string;
  heading: string;
  subHeading: string;
}

export interface Blog {
  id: number;
  category_name: string;
  title: string;
  date: string;
  image_url: string;
  url: string;
  category_id?: number;
  status?: number;
  created_at?: string;
}

export interface Item {
  label: string;
  item_id?: number;
  url?: string;
}

export interface MenuItemType {
  label: string;
  item_id?: number;
  url?: string;
  showWhenLoggedIn?: boolean;
  items?: Item[];
}
export interface ImageBigCommerceType {
  altText: string;
  isDefault: boolean;
  url: string;
  urlOriginal: string;
}
export interface FaqType {
  id: number;
  product_id: number;
  query: string;
  description: string;
  status: number;
}
declare global {
  interface Window {
    jdgmCacheServer: any;
  }
}

// types for pdp api data
export interface SpecsType {
  id: number;
  product_id: number;
  title: string;
  description: string;
  is_main: string;
  status: string;
}

export interface WhyKapivaType {
  id: number;
  title: string;
  image: string;
  description: string;
  status: string;
}
export interface HomeWhyKapivaType {
  id: number;
  section_id: number;
  head_title: string;
  name: string;
  description: string;
  status: number;
}

export interface HowToUseStepType {
  id?: number;
  product_id?: number;
  sort_order?: number;
  title?: string;
  description?: string;
  status?: string;
}
export interface HowToUseImageType {
  id?: number;
  product_id?: number;
  image?: string;
  type?: string;
  video_url?: string;
}
export interface ProductType {
  id: number;
  bigc_id: number;
  name: string;
  image?: string;
  product_url?: string;
  sku?: string;
  price?: string;
  cost_price?: string;
  retail_price?: string;
  sale_price?: string;
  map_price?: string;
  is_featured?: string;
  is_visible?: string;
  availability?: string;
  rating?: string;
  suitable_for?: string;
  short_description?: string;
  sort_order?: number;
  inventory_level?: string;
  solution_new?: string;
  ingredient_new?: string;
  date_created?: string;
  date_modified?: string;
}

export interface KeyIngredientsType {
  id: number;
  name?: string;
  internal_title?: string;
  image?: string;
  description?: string;
  status?: number;
}

export interface BenefitsType {
  after_image?: string;
  before_image?: string;
  description?: string;
  id?: number;
  product_id?: number;
  status?: number;
  title?: string;
}

export interface UspsType {
  id: number;
  title: string;
  image: string;
  status: string;
}
export interface PdpReviewsType {
  id: number;
  product_id: number;
  type: string;
  name: string;
  image: string;
  rating: number;
  description: string;
  video_url: string;
  status: string;
}

export interface ExpertSpeakType {
  id: number;
  product_id: number;
  type: string;
  title: string;
  image: string;
  video_url: string;
  status: string;
}
