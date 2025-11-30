import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900/66 backdrop-blur-md fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/icon.png" className="h-7" alt="Square Homes" />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            Square homes
          </span>
        </Link>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <input
            placeholder="Search..."
            type="email"
            id="Email"
            className="p-1 mt-0.5 w-full rounded bg-gray-950 sm:text-sm hidden md:block"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.keyCode === 13) {
                const target = e.target as HTMLInputElement;
                navigate(
                  "/properties?search=" + encodeURIComponent(target.value)
                );
              }
            }}
          />

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between ${
            isOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:p-0 mt-4 font-medium rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary w-full md:w-auto">
            <li>
              <Link
                to="/"
                className="block py-2 px-1 text-white bg-brand rounded-sm md:bg-transparent md:text-fg-brand md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/properties"
                className="block py-2 px-1 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Listings
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="block py-2 px-1 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="block py-2 px-1 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>

            <li className="mt-3 md:hidden w-full">
              <input
                type="email"
                id="EmailMobile"
                className="p-2 pr-0 w-full rounded bg-gray-950 sm:text-sm"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.keyCode === 13) {
                    const target = e.target as HTMLInputElement;
                    window.location.href =
                      "/properties?search=" + encodeURIComponent(target.value);
                  }
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
