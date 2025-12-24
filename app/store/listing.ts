import { listingItems } from "~/mock/db/listing";
import type Listing from "~/model/type/listing";
import BaseStore from "./base";

class ListingStore extends BaseStore<Listing> {
  private static instance: ListingStore;

  private constructor() {
    super();
  }

  static getInstance(): ListingStore {
    if (!ListingStore.instance) {
      ListingStore.instance = new ListingStore();
    }
    return ListingStore.instance;
  }

  readonly items: Listing[] = listingItems;

  get(id: string): Listing | undefined {
    return this.items.find((listing) => listing.id === id);
  }

  getAll(): Listing[] {
    return this.items;
  }

  getFirstByFilters<T>(filters: (l: Listing) => T): Listing {
    return this.getByFilters(filters)[0];
  }

  getByFilters<T>(filters: (l: Listing) => T): Listing[] {
    return this.items.filter(filters);
  }
}

export default ListingStore.getInstance();
