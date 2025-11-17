import { motion } from "framer-motion"

const items = ['placeholder1','placeholder2','placeholder3','placeholder4','placeholder5']

export default function LatestVideos(){
  return (
    <section className="px-6 mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Latest Videos</h3>
        <a className="text-sm text-muted hidden md:inline">View all</a>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((img,i) => (
          <motion.div key={i} className="rounded-xl overflow-hidden bg-white/4 p-2 shadow-card" whileHover={{ scale: 1.05 }}>
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-400 flex items-center justify-center">
              {/* <img src={img} className="w-full h-full object-cover" /> */}
              <div className="text-gray-600">Video Image {i+1}</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full">
                  <svg className="w-5 h-5 text-navy" viewBox="0 0 24 24"><path d="M5 3v18l15-9L5 3z" fill="currentColor"/></svg>
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm font-medium">Studio Tour • Sound Design</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
