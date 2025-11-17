export default function Hero(){
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Left */}
        <div className="col-span-12 lg:col-span-7">
          <div className="relative">
            <p className="text-sm text-mint/80 font-medium">We Are a</p>
            <h1 className="mt-2 text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="text-white">We Are a </span>
              <span className="text-brand">CREATIVE</span>
              <span className="text-white"> News & Lifestyle Brand</span>
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <div className="text-xs px-3 py-1 rounded-full bg-white/6">Est. 2025</div>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                <div className="text-xs px-3 py-1 rounded-full bg-white/6">4+ yrs</div>
                <div className="text-xs px-3 py-1 rounded-full bg-white/6">20+ projects</div>
                <div className="text-xs px-3 py-1 rounded-full bg-white/6">25+ books</div>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted max-w-xl">We organise live sessions on creative topics and feature in-depth content. Join our community and stay updated.</p>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-md relative">
            <div className="rounded-xl overflow-hidden shadow-card bg-gradient-to-b from-white/6 to-white/3 p-3">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-400 flex items-center justify-center">
                {/* <img src={hero} alt="hero" className="w-full h-full object-cover" /> */}
                <div className="text-gray-600">Hero Image Placeholder</div>
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-mint p-4 rounded-full border-4 border-white/90 shadow-btn">
                  <svg className="w-6 h-6 text-navy" viewBox="0 0 24 24"><path d="M5 3v18l15-9L5 3z" fill="currentColor"/></svg>
                </button>
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 hidden lg:block">
              <div className="px-3 py-1 rounded-full bg-brand/10 text-brand font-medium">Live now • Join</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
