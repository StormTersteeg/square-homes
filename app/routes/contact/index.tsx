import ContactForm from "./contactForm";

export default function Page() {
  return (
    <main>
      <div className="container mx-auto mt-26 pb-10 min-h-[calc(100dvh-10rem)]">
        <div className="p-4 max-w-xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-center text-gray-400 mb-8">
            Have a question about a property or want to work with us? Drop us a
            message.
          </p>

          <div className="bg-gray-900 p-6 rounded mb-8 relative overflow-hidden">
            <ContactForm />
          </div>

          <div className="text-center text-sm text-gray-400">
            <div>Square Homes HQ</div>
            <div>Lab Lane 13</div>
            <div>Science-Island</div>
            <div>AXO 1.21.1</div>
          </div>
        </div>
      </div>
    </main>
  );
}
