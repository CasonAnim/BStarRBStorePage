import React, { useState, useEffect } from "react";

export default function HomeContent() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:5050/news");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news from database:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const displayedNews = showAll ? news : news.slice(0, 3);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-yellow-400 font-bold text-lg animate-pulse">
        ⚡ กำลังชาร์จพลังข้อมูลข่าวสาร Brawl Stars...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* หัวข้อหน้าข่าว */}
        <div className="flex items-center justify-between mb-10 border-b border-yellow-500/20 pb-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 tracking-wider drop-shadow-md">
              🔥 ข่าวสารและอัปเดตล่าสุด
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              ติดตามข่าวสาร อีเวนต์ บาลานซ์แพตช์ และซีซั่นใหม่ล่าสุดจาก Brawl Stars ก่อนใคร
            </p>
          </div>
        </div>

        {/* Grid แสดงรายการข่าว */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.map((item) => (
            <div
              key={item._id || item.newsId}
              onClick={() => setSelectedNews(item)}
              className="bg-slate-900/90 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 hover:border-yellow-400/80 transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-2 hover:shadow-yellow-500/10"
            >
              <div>
                <div className="relative overflow-hidden h-52">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60" />
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/600x400/1e293b/facc15?text=Brawl+Stars";
                    }}
                  />
                  <span className="absolute top-3 left-3 z-20 bg-yellow-400/90 backdrop-blur-md text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-lg">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-xs text-yellow-400/80 font-semibold mb-2 flex items-center gap-2">
                    <span>📅 {item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white line-clamp-2 mb-3 group-hover:text-yellow-300 transition-colors">
                    {item.thaiTitle}
                  </h3>
                  <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="inline-flex items-center gap-1 text-xs text-yellow-400 font-bold group-hover:translate-x-1 transition-transform">
                  อ่านเนื้อหาฉบับเต็ม <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ปุ่มสลับ ดูข่าวทั้งหมด / แสดงน้อยลง */}
        {news.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black py-3.5 px-10 rounded-full transition-all shadow-xl hover:shadow-yellow-400/30 transform hover:scale-105 active:scale-95"
            >
              {showAll ? "▲ แสดงน้อยลง" : "▼ ดูข่าวทั้งหมดเพิ่มเติม"}
            </button>
          </div>
        )}

        {/* Popup (Modal) แสดงเนื้อหาข่าว */}
        {selectedNews && (
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-slate-900 border border-yellow-400/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl shadow-yellow-500/20">
              
              {/* ปุ่มปิด Modal */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-5 right-5 bg-slate-800 hover:bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all font-bold shadow-md z-10"
              >
                ✕
              </button>

              {/* รูปภาพหลักใน Modal */}
              <div className="relative rounded-2xl overflow-hidden mb-6 shadow-xl h-72 sm:h-80 border border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 z-10" />
                <img
                  src={selectedNews.imageUrl}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x400/1e293b/facc15?text=Brawl+Stars";
                  }}
                />
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                  <span className="bg-yellow-400 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full shadow-lg">
                    {selectedNews.category}
                  </span>
                  <span className="bg-slate-900/80 backdrop-blur-md text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-400/30">
                    📅 {selectedNews.date}
                  </span>
                </div>
              </div>

              {/* หัวข้อข่าว */}
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
                {selectedNews.thaiTitle}
              </h2>
              <p className="text-xs sm:text-sm text-yellow-400/80 mb-6 font-medium tracking-wide uppercase">
                {selectedNews.title}
              </p>

              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent my-6" />

              {/* เนื้อหาข่าว */}
              <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800 shadow-inner mb-6">
                <p className="text-slate-200 text-base leading-relaxed whitespace-pre-line">
                  {selectedNews.content}
                </p>
              </div>

              {/* ปุ่มลิงก์ไปอ่านต่อที่เว็บไซต์ทางการ (แสดงเฉพาะเมื่อใน DB มีการใส่ sourceUrl ไว้) */}
              {selectedNews.sourceUrl && (
                <div className="text-center">
                  <a
                    href={selectedNews.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-yellow-400/30 transform hover:scale-105"
                  >
                    🌐 อ่านเนื้อหาฉบับเต็มบนเว็บไซต์ทางการ (Supercell) →
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}