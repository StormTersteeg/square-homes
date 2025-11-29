import { useParams } from "react-router";
import type { Route } from "./+types";
import ListingStore from "~/store/listing";
import FormatPrice from "~/util/price";
import TagElement from "~/component/tag";
import { CgSearchLoading } from "react-icons/cg";
import Carousel from "~/component/carousel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Square Homes - Find Your Dream Property" },
    { name: "description", content: "Your gateway to the best properties." },
  ];
}

export default function Page() {
  const listingStore = new ListingStore();
  const params = useParams();
  const listingId = params.id;

  if (!listingId) {
    return (
      <div className="container h-[calc(100vh-10rem)] flex mx-auto mt-26 pb-5">
        <CgSearchLoading className="text-8xl" />
        <div className="mt-6 ml-5">
          Could not find that property, view our other properties instead.
          <br />
          <a href="/listings" className="text-blue-500 hover:underline">
            View Listings
          </a>
        </div>
      </div>
    );
  }

  const listing = listingStore.get(listingId);

  return (
    <main>
      <div className="container mx-auto mt-18 sm:mt-26 pb-5">
        <div className="pt-5 p-6 mb-5 bg-gray-900 rounded">
          <h1 className="text-2xl font-bold mb-4">
            <a
              href="/properties"
              className="text-blue-500 hover:underline mr-3"
            >
              &larr;
            </a>
            {listing.name}
          </h1>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2">
              <Carousel
                images={listing.images.map(
                  (image) => `listings/${listing.id}/${image}`
                )}
              />

              <div className="rounded-b bg-green-700 p-2.5 py-1.5 text-sm whitespace-nowrap text-green-100">
                <h2 className="text-lg font-bold">
                  {FormatPrice(listing.price)}
                </h2>
                Guide Price
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {listing.tags && listing.tags.length > 0 ? (
                  listing.tags.map((tag, index) =>
                    TagElement(tag, `tag-${index}`)
                  )
                ) : (
                  <span></span>
                )}
              </div>
            </div>

            <div className="w-full px-2 whitespace-break-spaces">
              <h3 className="text-lg font-bold mt-10">Description</h3>
              {listing.description}
              <h3 className="text-lg font-bold mt-10">Address</h3>
              {listing.address}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
