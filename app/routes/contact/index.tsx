import type { Route } from "./+types";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - Square Homes" },
    { name: "description", content: "Get in touch with Square Homes." },
  ];
}

export default function Page() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
    }, 1800);
  };

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
            {!sent && (
              <>
                <div className="mb-4">
                  <label className="block mb-1 text-sm text-gray-300">
                    Name
                  </label>
                  <input className="w-full p-2 rounded bg-gray-800" />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-sm text-gray-300">
                    Email
                  </label>
                  <input className="w-full p-2 rounded bg-gray-800" />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-sm text-gray-300">
                    Message
                  </label>
                  <textarea className="w-full p-2 h-28 rounded bg-gray-800"></textarea>
                </div>

                <button
                  onClick={handleSend}
                  disabled={isSending}
                  className="w-full bg-blue-700 hover:bg-blue-600 transition p-2 rounded font-semibold disabled:opacity-50"
                >
                  Send Message
                </button>
              </>
            )}

            {isSending && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 animate-fadeIn">
                <div className="w-10 h-10 border-4 border-gray-400 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                <div className="text-gray-300 animate-pulse">
                  Sending message...
                </div>
              </div>
            )}

            {sent && !isSending && (
              <div className="flex flex-col items-center justify-center h-64 animate-fadeIn">
                <div className="text-3xl mb-2">✅</div>
                <div className="text-lg font-semibold mb-1">Message Sent</div>
                <div className="text-gray-400 text-sm">
                  We’ll get back to you shortly.
                </div>
              </div>
            )}
          </div>

          <div className="text-center text-sm text-gray-400">
            <div>Square Homes HQ</div>
            <div>Lab Lane 13</div>
            <div>Science-Island</div>
            <div>Axo 1.21.1</div>
          </div>
        </div>
      </div>
    </main>
  );
}
