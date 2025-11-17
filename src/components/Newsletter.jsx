import React from "react";

export default function Newsletter() {
  return (
    <section className="px-6 mt-10">
      <div className="bg-white/6 rounded-xl p-4 flex items-center gap-4 justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-brand/20 p-3 rounded-lg">✉️</div>
          <div>
            <div className="font-semibold text-headline">Subscribe to updates</div>
            <div className="text-xs text-muted">Get notified on new live sessions</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <input className="bg-white outline-none px-3 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500" placeholder="Email address" />
          <button className="px-3 py-2 rounded-md bg-brand text-navy font-semibold">Subscribe</button>
        </div>
        <div className="md:hidden">
          <button className="px-4 py-2 rounded-md bg-brand text-navy font-semibold" onClick={() => alert('Open subscribe modal')}>Subscribe</button>
        </div>
      </div>
    </section>
  );
}
