import type { Tag } from "./tag";

export default interface Listing {
  id: string;
  price: number;
  address: string;
  name: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags?: Tag[];
}
