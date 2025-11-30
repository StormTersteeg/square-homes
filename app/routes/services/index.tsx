interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Property Listings",
    description:
      "Professionally curated modern homes, survival builds, and high-end bases.",
  },
  {
    title: "Property Promotion",
    description:
      "Get your builds featured and seen by buyers across the Square Homes network.",
  },
  {
    title: "Buyer Support",
    description: "Guidance through every step of your next property purchase.",
  },
  {
    title: "Seller Support",
    description:
      "From listing strategy to final deal, we help you sell with confidence.",
  },
  {
    title: "Featured Placement",
    description:
      "Premium exposure on the Square Homes homepage and listings feed.",
  },
  {
    title: "Private Deals",
    description: "Exclusive off-market properties for serious buyers.",
  },
];

function ServiceElement(service: Service) {
  return (
    <div className="bg-gray-900 p-6 rounded">
      <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
      <p className="text-gray-400">{service.description}</p>
    </div>
  );
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
            {services.map((service: Service, index: number) => (
              <ServiceElement key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
