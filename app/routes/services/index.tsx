import type { Route } from "../../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services - Square Homes" },
    { name: "description", content: "What Square Homes offers." },
  ];
}

export default function Page() {
  return (
    <main>
      <div className="container mx-auto mt-26 pb-10 min-h-[calc(100dvh-10rem)]">
        <div className="p-4 max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
          <p className="text-center text-gray-400 mb-10">
            Everything you need to buy, sell, or showcase modern properties.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded">
              <h2 className="text-xl font-semibold mb-2">Property Listings</h2>
              <p className="text-gray-400">
                Professionally curated modern homes, survival builds, and
                high-end bases.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded">
              <h2 className="text-xl font-semibold mb-2">Property Promotion</h2>
              <p className="text-gray-400">
                Get your builds featured and seen by buyers across the Square
                Homes network.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded">
              <h2 className="text-xl font-semibold mb-2">Buyer Support</h2>
              <p className="text-gray-400">
                Guidance through every step of your next property purchase.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded">
              <h2 className="text-xl font-semibold mb-2">Seller Support</h2>
              <p className="text-gray-400">
                From listing strategy to final deal, we help you sell with
                confidence.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded">
              <h2 className="text-xl font-semibold mb-2">Featured Placement</h2>
              <p className="text-gray-400">
                Premium exposure on the Square Homes homepage and listings feed.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded">
              <h2 className="text-xl font-semibold mb-2">Private Deals</h2>
              <p className="text-gray-400">
                Exclusive off-market properties for serious buyers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
