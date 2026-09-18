import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#FCFBF7] flex items-center justify-center p-4 text-center">
      <div className="max-w-md w-full p-8 sm:p-10 rounded-2xl bg-white border border-stone-200 shadow-xl">
        <div className="w-14 h-14 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-700 mx-auto flex items-center justify-center mb-4 shadow-sm">
          <Sparkles className="w-7 h-7" />
        </div>
        
        <h1 className="font-serif text-5xl text-gold-700 font-bold mb-2">404</h1>
        <h2 className="font-serif text-2xl text-slate-900 font-semibold mb-3">Page Not Found</h2>
        
        <p className="text-xs sm:text-sm text-slate-600 mb-8 leading-relaxed font-normal">
          The hospitality page or property experience you are looking for might have moved or does not exist.
        </p>

        <Link to="/" className="btn-gold text-xs px-7 py-3.5 inline-flex items-center gap-2 rounded-lg font-bold shadow-md">
          <Home className="w-4 h-4" />
          <span>Return to Prabhaa Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
