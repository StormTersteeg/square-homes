import { Link, useParams } from "react-router";
import listingStore from "~/store/listing";
import FormatPrice from "~/util/price";
import TagElement from "~/component/tag";
import { CgSearchLoading } from "react-icons/cg";
import Carousel from "~/component/carousel";

function ListingNotFound() {
  return (
    <div className="container h-[calc(100dvh-10rem)] flex mx-auto mt-26 pb-5">
      <CgSearchLoading className="text-8xl" />
      <div className="mt-6 ml-5">
        Could not find that property, view our other properties instead.
        <br />
        <Link to="/listings" className="text-blue-500 hover:underline">
          View Listings
        </Link>
      </div>
    </div>
  );
}

export default function Page() {
  const { id } = useParams();
  if (!id) return <ListingNotFound />;

  const listing = listingStore.get(id);
  if (!listing) return <ListingNotFound />;

  return (
    <main>
      <div className="container mx-auto mt-18 sm:mt-26 pb-5">
        <div className="pt-5 p-6 mb-5 bg-gray-900 rounded">
          <h1 className="text-2xl font-bold mb-4">
            <Link
              to="/properties"
              className="text-blue-500 hover:underline mr-3"
            >
              &larr;
            </Link>
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
