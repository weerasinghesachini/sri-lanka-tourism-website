import Link from 'next/link';
import { MapPin, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 bg-sand-100">
      <div className="max-w-sm w-full text-center space-y-6 bg-white p-8 rounded border border-sand-300 shadow-card">

        <div className="w-14 h-14 rounded bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto">
          <MapPin className="w-7 h-7 text-brand-600" />
        </div>

        <div className="space-y-2">
          <p className="text-5xl font-display font-bold text-brand-700">404</p>
          <h1 className="font-display text-xl font-bold text-gray-800">Page Not Found</h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            This path seems to end in the jungle. Let&apos;s get you back to the main road.
          </p>
        </div>

        <Link
          href="/"
          className="btn-primary mx-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
