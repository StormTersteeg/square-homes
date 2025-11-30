import ListingStore from "~/store/listing";
import ListingPreview from "~/component/listingPreview";
import { useState, useMemo } from "react";
import { useLocation } from "react-router";
import type Listing from "~/model/type/listing";
import type NameId from "~/model/utils/nameId";

const orders: NameId[] = [
  { name: "Order By", id: "none" },
  { name: "Price Descending", id: "priceDesc" },
  { name: "Price Ascending", id: "priceAsc" },
];

function getOrder(orderType: NameId): (a: Listing, b: Listing) => number {
  switch (orderType.id) {
    case "priceAsc":
      return (l1, l2) => (l1.price < l2.price ? 0 : 1);
    case "priceDesc":
      return (l1, l2) => (l1.price > l2.price ? 0 : 1);
    default:
      return (l1, l2) => (l1.price == l2.price ? 1 : 0);
  }
}

export default function Page() {
  const location = useLocation();
  const listingStore = useMemo(() => new ListingStore(), []);
  const listings = useMemo(() => listingStore.getAll(), [listingStore]);
  const params = new URLSearchParams(location.search);

  const [searchQuery, setSearchQuery] = useState(() => {
    return params.get("search") ?? "";
  });

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [orderType, setOrderType] = useState(orders[0]);

  const filteredListings = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const min = minPrice ? parseInt(minPrice, 10) : 0;
    const max = maxPrice ? parseInt(maxPrice, 10) : Infinity;
    const order = getOrder(orderType);

    return listings
      .filter((listing) => {
        const matchesQuery =
          !q ||
          listing.name.toLowerCase().includes(q) ||
          listing.address.toLowerCase().includes(q);

        const withinPrice = listing.price >= min && listing.price <= max;

        return matchesQuery && withinPrice;
      })
      .sort(order);
  }, [listings, searchQuery, minPrice, maxPrice, orderType]);

  return (
    <main>
      <div className="container mx-auto mt-18 sm:mt-26 pb-10 min-h-[calc(100dvh-8rem)]">
        <div className="flex justify-center flex-wrap mb-0 sm:mb-5">
          <input
            value={searchQuery}
            type="text"
            placeholder="Search listings..."
            className="p-3 w-full rounded-none sm:rounded-l bg-gray-900"
            onChange={(e) => {
              const value = e.target.value;
              setSearchQuery(value);
            }}
          />
          <div className="flex w-full items-center">
            <input
              type="number"
              placeholder="Min price"
              className="p-3 w-full rounded-none bg-gray-900"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max price"
              className="p-3 w-full rounded-none bg-gray-900"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <select
              className="p-3 h-full w-full min-w-50 rounded-none sm:rounded-r bg-gray-900"
              onChange={(e) =>
                setOrderType(
                  orders.find((o) => o.id == e.target.value) ?? orders[0]
                )
              }
            >
              {orders.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredListings.map((listing) => (
          <ListingPreview key={listing.id} {...listing} />
        ))}

        {filteredListings.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            No listings found.
          </div>
        )}
      </div>
    </main>
  );
}
