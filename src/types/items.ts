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
