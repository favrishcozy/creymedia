const articles = [
  {img:'placeholder',title:'Breaking down the latest market trends',date:'20 Dec 2025'},
  {img:'placeholder',title:'The mysterious tribe in Eastern Africa',date:'18 Dec 2025'},
  {img:'placeholder',title:'Brazilian aquatic market discovery',date:'14 Dec 2025'},
]

export default function TrendingArticles(){
  return (
    <section className="px-6 mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Trending Articles</h3>
        <a className="text-sm text-muted hidden md:inline">See all</a>
      </div>

      <div className="mt-4 flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {articles.map((a,i)=> (
          <article key={i} className="snap-start min-w-[82%] md:min-w-[300px] bg-white/4 rounded-xl18 p-3 shadow-card transform-gpu transition hover:-translate-y-2">
            <div className="aspect-[16/9] rounded-md overflow-hidden mb-3 bg-gray-400 flex items-center justify-center">
              <div className="text-gray-600">Article Image {i+1}</div>
            </div>
            <div className="text-xs text-muted">{a.date}</div>
            <h4 className="mt-2 font-semibold text-lg">{a.title}</h4>
            <p className="text-sm text-muted mt-2">Quick read • By Admin</p>
          </article>
        ))}
      </div>
    </section>
  )
}
