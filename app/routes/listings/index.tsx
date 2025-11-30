import ListingStore from "~/store/listing";
import ListingPreview from "~/component/listingPreview";
import type { Route } from "../../+types/root";
import { useState, useMemo } from "react";
import { useLocation } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Square Homes - Find Your Dream Property" },
    { name: "description", content: "Your gateway to the best properties." },
  ];
}

export default function Page() {
  const location = useLocation();
  const listingStore = useMemo(() => new ListingStore(), []);
  const listings = useMemo(() => listingStore.getAll(), [listingStore]);

  const [searchQuery, setSearchQuery] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get("search") ?? "";
  });

  const [minPrice, setMinPrice] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get("minPrice") ?? "";
  });

  const [maxPrice, setMaxPrice] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get("maxPrice") ?? "";
  });

  const filteredListings = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const min = minPrice ? parseInt(minPrice, 10) : 0;
    const max = maxPrice ? parseInt(maxPrice, 10) : Infinity;

    return listings.filter((listing) => {
      const matchesQuery =
        !q ||
        listing.name.toLowerCase().includes(q) ||
        listing.address.toLowerCase().includes(q);

      const withinPrice = listing.price >= min && listing.price <= max;

      return matchesQuery && withinPrice;
    });
  }, [listings, searchQuery, minPrice, maxPrice]);

  return (
    <main>
      <div className="container mx-auto mt-18 sm:mt-26 pb-10 min-h-[calc(100dvh-8rem)]">
        <div className="flex justify-center mb-0 sm:mb-5">
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
          <div className="flex items-center">
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
              className="p-3 w-full rounded-none sm:rounded-r bg-gray-900"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
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
