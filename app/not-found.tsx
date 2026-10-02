import Link from 'next/link';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-sand-50">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-sand-200">
        <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto shadow-inner">
          <Compass className="w-8 h-8 text-brand-700 animate-spin-slow" />
        </div>
        <div className="space-y-2">
          <h1 className="font-display text-4xl font-extrabold text-gray-900">404</h1>
          <h2 className="font-display text-xl font-bold text-gray-800">Page Not Found</h2>
          <p className="text-sm text-gray-500">
            The tropical path you are looking for seems to have drifted away. Let's get you back on track!
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
