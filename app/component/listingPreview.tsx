import type Listing from "~/model/type/listing";
import FormatPrice from "~/util/price";
import TagElement from "./tag";
import { Link } from "react-router";

export default function ListingPreview(listing: Listing) {
  return (
    <Link
      to={
        "/property/" +
        listing.id +
        "/" +
        listing.name.toLowerCase().replaceAll(" ", "-")
      }
    >
      <div className="pt-3 p-4 mb-5 bg-gray-900 hover:bg-gray-800 rounded-none sm:rounded">
        <h1 className="text-lg font-bold mb-2">{listing.name}</h1>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2">
            <img
              className="rounded-t"
              src={"/listings/" + listing.id + "/" + listing.thumbnail}
            ></img>
            <div className="rounded-b bg-green-700 p-2.5 py-1.5 text-sm whitespace-nowrap text-green-100">
              <h2 className="text-lg font-bold">
                {FormatPrice(listing.price)}
              </h2>
              Guide Price
            </div>
          </div>

          <div className="w-full md:w-1/2 px-2 whitespace-break-spaces">
            <h3 className="text-lg font-bold mt-5 md:mt-0">Address</h3>
            {listing.address.replaceAll("\n", ", ")}
            <h3 className="text-lg font-bold mt-5">Description</h3>
            {listing.description.substring(0, 120)}...
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
        </div>
      </div>
    </Link>
  );
}
