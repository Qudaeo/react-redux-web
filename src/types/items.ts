export interface ICategory {
  id: number;
  item_id: number;
  category_id: number;
}

export interface IItem {
  categories: ICategory[];
  description: string;
  id: number;
  image: string;
  image_mini: string;
  name: string;
  price: number;
}

interface ILinks {
  active: boolean;
  label: string;
  url: string;
}

export interface IItemsResponse {
  current_page: number;
  data: IItem[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ILinks[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null | string;
  to: number;
  total: number;
}
