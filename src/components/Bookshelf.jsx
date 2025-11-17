const books = ['placeholder1','placeholder2','placeholder3']

export default function Bookshelf(){
  return (
    <section className="px-6 mt-10">
      <h3 className="text-2xl font-bold">Exploring Books</h3>
      <div className="mt-4 flex gap-4 overflow-x-auto scrollbar-hide snap-x">
        {books.map((img,i)=> (
          <div key={i} className="snap-center min-w-[140px] shrink-0 rounded-xl overflow-hidden shadow-card transform hover:-rotate-1 hover:scale-105 transition">
            {/* <img src={img} className="w-full h-full object-cover" /> */}
            <div className="aspect-[3/4] bg-gray-400 flex items-center justify-center text-gray-600">Book {i+1}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
