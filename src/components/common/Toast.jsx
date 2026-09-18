import React from 'react';
import { CheckCircle, Info, X } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export const Toast = () => {
  const { toastMessage, setToastMessage } = useBooking();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-fade-in p-4 sm:p-0">
      <div className="bg-white/95 backdrop-blur-xl border border-gold-500/40 p-4 rounded-xl shadow-2xl flex items-start gap-3 text-slate-900">
        <CheckCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
        <div className="flex-1 text-sm font-medium">
          <p className="text-slate-900 leading-snug">{toastMessage.message}</p>
        </div>
        <button
          onClick={() => setToastMessage(null)}
          className="text-slate-400 hover:text-slate-800 p-1 font-bold"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
