import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">About Us</h3>
            <p className="text-gray-500 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam massa ac magna bibendum tempus.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Quick Links</h3>
            <nav className="flex flex-col">
              <Link href="/"><p className="text-gray-500 text-base mb-2 hover:text-gray-900">Home</p></Link>
              <Link href="/features"><p className="text-gray-500 text-base mb-2 hover:text-gray-900">Features</p></Link>
              <Link href="/about"><p className="text-gray-500 text-base mb-2 hover:text-gray-900">About Us</p></Link>
              <Link href="/contact"><p className="text-gray-500 text-base mb-2 hover:text-gray-900">Contact Us</p></Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Us</h3>
            <address className="text-gray-500 text-base">
              123 Main Street<br />
              Suite 200<br />
              New York, NY 10001<br />
              <a href="tel:+1-555-555-5555" className="hover:text-gray-900">+1 (555) 555-5555</a>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500">&copy; 2023 Crypto Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
