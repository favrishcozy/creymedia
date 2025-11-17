import React from "react";

export default function Footer(){
  return (
    <footer className="px-6 mt-12 pb-12">
      <div className="bg-gray-700 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold text-lg">CREY DREAM HOUSE</div>
          <p className="mt-2 text-sm text-muted">Creative news, in-depth conversations & storytelling.</p>
          <div className="mt-4 flex gap-3 text-sm">Instagram · TikTok · X</div>
        </div>

        <div>
          <div className="font-semibold">Explore</div>
          <ul className="mt-3 text-sm text-muted space-y-2">
            <li>Live session</li>
            <li>Blog post</li>
            <li>Portfolio</li>
            <li>About us</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-3 text-sm text-muted">+234 8123 456 789<br/>emailaddress@gmail.com</div>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-muted">© 2025 CreyDreamHouse.com</div>
    </footer>
  )
}
