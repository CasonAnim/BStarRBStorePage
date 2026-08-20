import React from "react";
import bannerImage from "../assets/logoAndPicture/Topbar.jpg";

export default function BannerWithCategory({ selectedCategory, onSelectCategory }) {
  // รายการหมวดหมู่ทั้งหมด
  const categories = [
    { name: "หน้าหลัก", count: null },
    { name: "ไอดีเริ่มต้น", count: 6 },
    { name: "ไอดีทั่วไป", count: 0 },
    { name: "ไอดีแรร์", count: 0 },
    { name: "กล่องสุ่มไอดี", count: 0 },
    { name: "บริการเติมเงิน", count: null },
  ];

  return (
    <div className="w-full pt-4 sm:pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* กรอบรวมแบนเนอร์และเมนู */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#2A3150]/80 bg-[#161B33]">
          
          {/* ส่วนรูปแบนเนอร์ */}
          <div className="relative w-full h-32 sm:h-48 md:h-64">
            <img 
              src={bannerImage} 
              alt="Brawl Stars Promotion Banner" 
              className="w-full h-full object-cover object-center"
            />
            
            {/* Breadcrumb เปลี่ยนข้อความตามหมวดหมู่ที่เลือก */}
            <div className="absolute bottom-3 left-4 flex items-center gap-2 text-xs text-gray-300 bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-md">
              <span>🏠</span>
              <span>&gt;</span>
              <span>Brawl Stars</span>
              <span>&gt;</span>
              <span className="text-white font-medium">
                {selectedCategory === "หน้าหลัก" ? "หน้าหลัก" : selectedCategory}
              </span>
            </div>
          </div>

          {/* ส่วน CategoryBar ด้านล่าง */}
          <div className="bg-[#181D35] px-4 py-3 border-t border-[#2A3150]/60 flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => onSelectCategory(cat.name)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                    isSelected
                      ? "bg-[#1E2545] text-white shadow-inner border border-cyan-500/50"
                      : "text-gray-400 hover:text-white hover:bg-[#1E2545]/50"
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.count !== null && (
                    <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                      isSelected ? "bg-cyan-500/20 text-cyan-300" : "bg-gray-800 text-gray-400"
                    }`}>
                      {cat.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}