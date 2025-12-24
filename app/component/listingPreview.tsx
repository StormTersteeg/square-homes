import type Listing from "~/model/type/listing";
import FormatPrice from "~/util/price";
import TagElement from "./tag";
import { Link } from "react-router";
import { Slugify } from "~/util/string";

interface ListingPreviewProps {
  listing: Listing;
}

export default function ListingPreview(props: ListingPreviewProps) {
  return (
    <Link
      to={"/property/" + props.listing.id + "/" + Slugify(props.listing.name)}
    >
      <div className="pt-3 p-4 mb-5 bg-gray-900 hover:bg-gray-800 rounded-none sm:rounded">
        <h1 className="text-lg font-bold mb-2">{props.listing.name}</h1>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2">
            <img
              className="rounded-t"
              src={
                "/listings/" + props.listing.id + "/" + props.listing.thumbnail
              }
              alt={props.listing.name + " first impression thumbnail."}
              loading="lazy"
            />
            <div className="rounded-b bg-green-700 p-2.5 py-1.5 text-sm whitespace-nowrap text-green-100">
              <h2 className="text-lg font-bold">
                {FormatPrice(props.listing.price)}
              </h2>
              <span>Guide Price</span>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-2 whitespace-break-spaces">
            <h3 className="text-lg font-bold mt-5 md:mt-0">Address</h3>
            {props.listing.address.replaceAll("\n", ", ")}
            <h3 className="text-lg font-bold mt-5">Description</h3>
            {props.listing.description.substring(0, 120)}...
            <div className="flex flex-wrap gap-2 mt-5">
              {props.listing.tags && props.listing.tags.length > 0 ? (
                props.listing.tags.map((tag, index) =>
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
