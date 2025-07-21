import React, { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

const COOKIE_KEY = "cookieConsent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);
  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-xl px-6 py-5 bg-gradient-to-br from-amber-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border border-amber-200/40 dark:border-slate-700/40 rounded-2xl shadow-2xl flex items-center justify-between gap-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg border border-amber-300/40">
          <ShieldCheck className="h-6 w-6 text-white" />
        </div>
        <div>
          <span className="text-base font-semibold text-slate-900 dark:text-white">
            Utilizziamo i cookie per migliorare la tua esperienza.
          </span>
          <br />
          <a
            href="/cookie-policy"
            className="text-amber-600 dark:text-amber-400 underline font-bold hover:text-orange-600 transition-colors"
          >
            Cookie Policy
          </a>
        </div>
      </div>
      <button
        onClick={acceptCookies}
        className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-5 py-2 rounded-xl shadow transition-all border border-amber-300/40"
      >
        Accetta
      </button>
    </div>
  );
};

export default CookieBanner;