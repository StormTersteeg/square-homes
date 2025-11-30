import ListingStore from "~/store/listing";
import type { Route } from "../../+types/root";
import ListingPreview from "~/component/listingPreview";
import Steps from "~/component/steps";
import { CgMail } from "react-icons/cg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Square homes" },
    {
      name: "description",
      content: "Discover your perfect modern property with Square Homes.",
    },
  ];
}

export default function Page() {
  const listingStore = new ListingStore();
  const randomListing =
    listingStore.getAll()[
      Math.floor(Math.random() * listingStore.getAll().length)
    ];

  return (
    <main>
      <div className="container mx-auto mt-26 pb-10 min-h-[calc(100dvh-10rem)]">
        <div className="pt-5 p-4">
          <h1 className="text-4xl text-center font-bold mb-5">Square Homes</h1>
          <Steps />
        </div>
        <div className="mx-auto w-full sm:w-3/4 pt-3 p-4 mb-10 rounded">
          Browse modern properties, and carefully selected listings all in one
          place. Whether you're buying, selling, or just exploring, Square Homes
          makes finding the right space simple.
        </div>

        <span className="flex items-center mb-5">
          <span className="h-px flex-1 bg-gray-300"></span>
          <span className="shrink-0 px-4 text-gray-900">
            <span className="mr-2 rounded-full bg-blue-700 px-2.5 py-0.5 text-sm whitespace-nowrap text-blue-100">
              Featured Property
            </span>
          </span>
          <span className="h-px flex-1 bg-gray-300"></span>
        </span>

        <ListingPreview {...randomListing} />

        <div className="flex justify-center mt-10 space-x-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
          <a
            href="/services"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            Our Services
          </a>
        </div>
      </div>
    </main>
  );
}
