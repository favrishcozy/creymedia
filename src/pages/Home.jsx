import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CustomVideoPlayer from "../components/CustomVideoPlayer";

// ====== SAMPLE DATA ======
const articles = [
  {img:'/images/Ladies_podcast.jpeg',title:'Breaking down the latest market trends',date:'20 Dec 2025'},
  {img:'/images/Podcast_show.jpeg',title:'The mysterious tribe in Eastern Africa',date:'18 Dec 2025'},
  {img:'/images/Catching Chasebook.jpeg',title:'Brazilian aquatic market discovery',date:'14 Dec 2025'},
];

const videos = ['workstation.jpeg','producereditor.jpeg','editor.jpeg','workstation2.jpeg','light_skin_presenter.jpeg'];

const books = ['The Last Werewolf (The Last Werewolf 1) (The Last Werewolf Trilogy).jpeg','Werewolf Book Cover ideas_.jpeg','Queen of the cursed.jpeg'];

export default function Home(){
  const [videoModal, setVideoModal] = useState(null);
  const [bookModal, setBookModal] = useState(null);

  return (
    <div className="min-h-screen bg-navy font-inter">
      <div className="relative">
        {/* soft radial glow to mimic screenshot */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="w-full h-full" style={{background: 'radial-gradient(800px 400px at 10% 10%, rgba(124,241,209,0.08), transparent 10%), radial-gradient(600px 300px at 90% 80%, rgba(255,138,0,0.04), transparent 12%)'}} />
        </div>

        <Navigation />
        <main className="pt-24 max-w-container mx-auto">
          {/* HERO */}
          <section className="px-6 py-12">
            <div className="grid grid-cols-12 gap-6 items-start">
              {/* Left */}
              <div className="col-span-12 lg:col-span-7">
                <div className="relative">
                  <p className="text-sm text-mint font-medium">We Are a</p>
                  <h1 className="mt-2 text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-headline">
                    <span className="text-brand">CREATIVE</span>
                    <span className="text-headline"> News & Lifestyle Brand</span>
                  </h1>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="text-xs px-3 py-1 rounded-full bg-white/6 text-headline">Est. 2025</div>
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                      <div className="text-xs px-3 py-1 rounded-full bg-white/6 text-headline">4+ yrs</div>
                      <div className="text-xs px-3 py-1 rounded-full bg-white/6 text-headline">20+ projects</div>
                      <div className="text-xs px-3 py-1 rounded-full bg-white/6 text-headline">25+ books</div>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-muted max-w-xl">We organise live sessions on creative topics and feature in-depth content. Join our community and stay updated.</p>
                </div>
              </div>

              {/* Right */}
              <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-md relative">
                  <div className="rounded-xl overflow-hidden shadow-card bg-white/6 p-3">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-600">
                      <img src="/images/Homehero_ladiesshow.jpeg" alt="Hero" className="w-full h-full object-cover" />
                      <button onClick={() => setVideoModal(0)} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-mint p-4 rounded-full border-4 border-white/90 shadow-btn">
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

          {/* Trending Articles */}
          <section className="px-6 mt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-headline">Trending Articles</h3>
              <a className="text-sm text-muted hidden md:inline">See all</a>
            </div>

            <div className="mt-4 flex gap-4 overflow-x-auto snap-x snap-mandatory">
              {articles.map((a,i)=> (
                <article key={i} className="snap-start min-w-[82%] md:min-w-[300px] bg-white/6 rounded-xl18 p-3 shadow-card transform-gpu transition hover:-translate-y-2">
                  <div className="aspect-[4/3] md:aspect-[16/9] rounded-md overflow-hidden mb-3 bg-gray-600">
                    <img src={a.img} alt={`Article ${i+1}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-xs text-muted">{a.date}</div>
                  <h4 className="mt-2 font-semibold text-lg text-headline">{a.title}</h4>
                  <p className="text-sm text-muted mt-2">Quick read • By Admin</p>
                </article>
              ))}
            </div>
          </section>

          {/* Latest Videos */}
          <section className="px-6 mt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-headline">Latest Videos</h3>
              <a className="text-sm text-muted hidden md:inline">View all</a>
            </div>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {videos.map((img,i) => (
                <motion.div key={i} className="rounded-xl overflow-hidden bg-white/6 p-2 shadow-card" whileHover={{ scale: 1.05 }}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-600">
                    <img src={`/images/${img}`} alt={`Video ${i+1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full">
                        <svg className="w-5 h-5 text-navy" viewBox="0 0 24 24"><path d="M5 3v18l15-9L5 3z" fill="currentColor"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm font-medium text-headline">Studio Tour • Sound Design</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Bookshelf */}
          <section className="px-6 mt-10">
            <h3 className="text-2xl font-bold text-headline">Exploring Books</h3>
            <div className="mt-4 flex gap-4 overflow-x-auto scrollbar-hide snap-x">
              {books.map((img,i)=> (
                <div key={i} className="snap-center min-w-[100px] shrink-0 rounded-xl overflow-hidden shadow-card transform hover:-rotate-1 hover:scale-105 transition">
                  <img src={`/images/${img}`} alt={`Book ${i+1}`} className="w-full h-full object-cover aspect-[3/4]" />
                </div>
              ))}
            </div>
          </section>

          <Newsletter />
          <Footer />
        </main>

        {/* Video Modal */}
        {videoModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="max-w-xl w-full p-6 bg-slate-800 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <div className="font-semibold text-headline">Playing video</div>
                <button onClick={() => setVideoModal(null)} className="text-headline">Close</button>
              </div>
              <CustomVideoPlayer src="/images/podcastshow.mp4" poster="/images/Podcast_show.jpeg" className="aspect-video rounded-lg" />
            </div>
          </div>
        )}

        {/* Book modal */}
        {bookModal && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30">
            <div className="w-full max-w-lg bg-slate-900 rounded-t-2xl p-6">
              <div className="flex justify-between items-center mb-3">
                <div className="font-bold text-headline">{bookModal.title}</div>
                <button onClick={() => setBookModal(null)} className="text-headline">Close</button>
              </div>
              <p className="text-sm text-muted">Short book blurb goes here. Choose to read or listen.</p>
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 rounded-md bg-brand text-navy font-semibold">Read</button>
                <button className="px-4 py-2 rounded-md bg-white/6 text-headline">Listen</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
