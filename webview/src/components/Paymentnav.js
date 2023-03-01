import Link from 'next/link';

export default function Paymentnav() {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <p className="text-white font-bold text-xl">Ethingo</p>
            </Link>
          </div>
          <div>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
