import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ data }) {
  // ดึง ID สินค้า (รองรับทั้ง _id ของ MongoDB และ id ทั่วไป)
  const productId = data?._id || data?.id;

  return (
    <Link to={`/products/${productId}`} className="block h-full min-w-0">
      <div className="flex flex-col sm:flex-row bg-[#232946] rounded-2xl p-3 sm:p-4 gap-3 sm:gap-4 hover:bg-[#2C3456] transition-all duration-300 shadow-xl relative overflow-hidden group h-full border border-[#2C3456]">

        {/* 📸 รูปภาพหน้าปกการ์ดสินค้า */}
        <div className="relative w-full sm:w-36 md:w-44 xl:w-52 aspect-[4/5] rounded-xl overflow-hidden flex-shrink-0 bg-[#13172B]">
          <img 
            src={data?.image || "https://via.placeholder.com/300x400/13172B/FFFFFF?text=Brawl+Stars+Account"} 
            alt="Account Cover" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* 📝 รายละเอียดฝั่งขวา */}
        <div className="flex flex-col justify-between w-full text-white min-w-0 py-1">
          <div>
            {/* 🔥 Title สินค้า */}
            <h2 className="text-xs sm:text-sm md:text-base font-semibold leading-snug mb-1 text-gray-100 line-clamp-2">
              {data?.title || "🔥 ไอดีดองเริ่มต้น | ทรัพยากรแน่นๆ พร้อมปั้น"}
            </h2>
            
            {/* ข้อความบอกใบ้ (กดตรงไหนการ์ดก็พาไปหน้า Detail) */}
            <span className="text-[#00D09E] text-[11px] sm:text-xs font-medium underline">
              Show description
            </span>
          </div>

          <hr className="border-[#3A4264] my-2" />

          {/* 📊 สถิติทรัพยากรดึงจาก Database */}
          <div className="space-y-1.5 text-xs">
            {/* บรรทัดที่ 1: Trophies | Gems | Coins */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-300">
              <span>🏆 Trophies: <strong className="text-white">{data?.trophies || "400-410"}</strong></span>
              <span className="text-gray-500">|</span>
              <span>💎 Gems: <strong className="text-[#00D09E]">{data?.gems || "0"}</strong></span>
              <span className="text-gray-500">|</span>
              <span>🟡 Coins: <strong className="text-[#FFD700]">{data?.coins || "0"}</strong></span>
            </div>

            {/* บรรทัดที่ 2: Power Points | Bling */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-300">
              <span>⚡ Power Points: <strong className="text-orange-400">{data?.powerPoints || "0"}</strong></span>
              <span className="text-gray-500">|</span>
              <span>🟣 Bling: <strong className="text-purple-400">{data?.bling || "0"}</strong></span>
            </div>

            {/* บรรทัดที่ 3: Login Method */}
            <div className="text-gray-400 truncate">
              🔑 Login: <span className="italic text-gray-300">{data?.loginMethod || "Supercell ID (Full Access)"}</span>
            </div>
          </div>

          {/* 💰 ราคาและสถานะ */}
          <div className="bg-[#151A2D] rounded-xl p-2.5 sm:p-3 flex items-center justify-between shadow-inner mt-3 border border-[#2A3150]">
            <span className="text-[#FFD700] text-base sm:text-lg font-bold">
              {data?.price || "45"} / THB
            </span>
            <span className="text-[11px] text-gray-400 bg-[#1C2136] px-2.5 py-1 rounded-md border border-[#2A3150]">
              Stock: {data?.stock || "1"}
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
}

export default ProductCard;