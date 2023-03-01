import Link from "next/link";
import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-white shadow-lg">
      {({ open }) => (
        <div className="bg-gray-100 w-full fixed z-10 ">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-center">
                <Link href="/">
                  <h2 className="text-gray-800 font-bold lg:text-3xl md:text-xl">Ethingo</h2>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Link href="/pbout">
                    <p className="text-gray-800 hover:text-gray-500">About</p>
                  </Link>
                  <Link href="/services">
                    <p className="text-gray-800 hover:text-gray-500">
                      Services
                    </p>
                  </Link>
                  <Link href="/contact">
                    <p className="text-gray-800 hover:text-gray-500">Contact</p>
                  </Link>
                  <Link href="/payment">
                    <p className="text-gray-800 hover:text-gray-500">Payment</p>
                  </Link>
                </div>
              </div>
              <div className="block md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/pbout">
                <p
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </p>
              </Link>
              <Link href="/services">
                <p
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </p>
              </Link>
              <Link href="/contact">
                <p
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </p>
              </Link>
              <Link href="/payment">
                <p
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Payment
                </p>
              </Link>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
