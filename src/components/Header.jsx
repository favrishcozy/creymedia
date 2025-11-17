export default function Header(){
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-container px-6 py-4 flex items-center justify-between backdrop-blur bg-navy/60 border-b border-white/6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-brand-light flex items-center justify-center text-navy font-bold">CD</div>
          <div className="text-white font-semibold tracking-tight">CREY DREAM HOUSE</div>
        </div>

        <nav className="hidden md:flex items-center gap-4 text-sm text-white/90 absolute left-1/2 -translate-x-1/2">
          <a className="px-3 py-2 rounded-md hover:bg-white/6">Home</a>
          <a className="px-3 py-2 rounded-md hover:bg-white/6">Live</a>
          <a className="px-3 py-2 rounded-md hover:bg-white/6">Blog</a>
          <a className="px-3 py-2 rounded-md hover:bg-white/6">About</a>
        </nav>
        <div className="hidden md:flex items-center">
          <button className="px-4 py-2 rounded-md bg-brand text-navy font-semibold drop-shadow-btn">Get started</button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button className="p-2 bg-white/6 rounded-md">🔍</button>
          <button className="p-2 bg-white/6 rounded-md">☰</button>
        </div>
      </div>
    </header>
  )
}
