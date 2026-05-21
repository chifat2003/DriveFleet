import Link from "next/link";
import { Car } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center px-6">

      <p className="text-8xl font-black text-blue-600 tracking-tighter leading-none">404</p>

      <div className="my-6">
        <svg width="80" height="40" viewBox="0 0 72 36" fill="none" className="animate-bounce mx-auto">
          <rect x="8" y="14" width="56" height="16" rx="4" fill="#185FA5"/>
          <path d="M16 14 L24 4 H48 L56 14Z" fill="#378ADD"/>
          <rect x="26" y="6" width="8" height="8" rx="1" fill="#B5D4F4"/>
          <rect x="38" y="6" width="8" height="8" rx="1" fill="#B5D4F4"/>
          <circle cx="20" cy="30" r="6" fill="#1f1f1f"/>
          <circle cx="20" cy="30" r="3" fill="#aaa"/>
          <circle cx="52" cy="30" r="6" fill="#1f1f1f"/>
          <circle cx="52" cy="30" r="3" fill="#aaa"/>
          <rect x="56" y="18" width="6" height="4" rx="1" fill="#FAC775"/>
          <rect x="2" y="20" width="4" height="3" rx="1" fill="#E24B4A"/>
        </svg>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Looks like this road doesn't exist
      </h1>
      <p className="text-gray-500 text-sm max-w-sm mb-8">
        The page you're looking for has been moved, deleted, or never existed.
        Let's get you back on track.
      </p>

      <div className="flex gap-3 flex-wrap justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          Go home
        </Link>
        <Link
          href="/explore-cars"
          className="flex items-center gap-2 border border-gray-200 text-gray-600 px-6 py-2.5 rounded-xl font-medium hover:bg-white transition-colors"
        >
          <Car className="w-4 h-4" /> Browse cars
        </Link>
      </div>

    </div>
  );
}