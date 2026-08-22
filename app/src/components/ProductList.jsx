import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDetailModal from "./ProductDetailModal";
import TopUpService from "./TopUpService"; 
import EmptyProductList from "./EmptyProductList"; // <-- 1. นำเข้าไฟล์ใหม่ที่เพิ่งแยกออกไป

export default function ProductList({ currentCategory, filteredAccounts }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  // เช็คว่าถ้าเป็นหมวดหมู่ "บริการเติมเงิน" ให้แสดงหน้าเติมเงินแทน
  if (currentCategory === "บริการเติมเงิน") {
    return (
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide border-l-4 border-cyan-400 pl-3 mb-8">
          หมวดหมู่: <span className="text-cyan-400">{currentCategory}</span>
        </h2>
        <TopUpService /> 
      </div>
    );
  }

  // ถ้าเป็นหมวดหมู่อื่น ก็แสดงรายการสินค้าตามปกติ
  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide border-l-4 border-cyan-400 pl-3">
        หมวดหมู่: <span className="text-cyan-400">{currentCategory}</span>
      </h2>

      {/* 2. เรียกใช้งาน Component ที่แยกไว้ตรงนี้ ทำให้โค้ดสั้นลงมาก! */}
      {filteredAccounts.length === 0 ? (
        <>
        <EmptyProductList currentCategory={currentCategory} />
        <h1>{console.log(filteredAccounts.length)} AA</h1>
        </>
        
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredAccounts.map((item) => {
            const imageSrc = `/IDbrawl/ID${item.id || 1}.jpg`;
            const accountData = item.account || {};
            const curr = accountData.currencies || {};

            return (
              <div 
                key={item._id}
                onClick={() => navigate(`/products/${item._id}`)}
                className="bg-[#181D35] border border-[#2A3150] rounded-2xl overflow-hidden hover:border-cyan-500/50 transition flex flex-col justify-between shadow-xl cursor-pointer group"
              >
                {/* ส่วนบน: รูปภาพปกสินค้า */}
                <div className="relative w-full h-56 bg-black/40 overflow-hidden flex items-center justify-center border-b border-[#2A3150]">
                  <img 
                    src={imageSrc} 
                    alt={`ID Brawl ${item.id}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    onError={(e) => { e.target.src = "/logoAndPicture/logo.jpg"; }}
                  />
                  <span className="absolute top-3 left-3 bg-emerald-500 text-gray-950 font-bold text-xs px-2.5 py-1 rounded-md shadow-md">
                    Instant Delivery
                  </span>
                </div>

                {/* ส่วนกลาง: ข้อมูลดึงจากฐานข้อมูล */}
                <div className="p-5 space-y-3 flex-1">
                  <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1 group-hover:text-cyan-400 transition">
                    🔥 ไอดีดองเริ่มต้น #ID{item.id} | ทรัพยากรแน่นๆ พร้อมปั้น
                  </h3>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      setSelectedProduct(item);
                    }}
                    className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm underline font-medium transition"
                  >
                    Quick View (เปิดป๊อปอัป)
                  </button>

                  <div className="border-t border-[#2A3150] pt-3 grid grid-cols-2 gap-2 text-xs text-gray-300">
                    <p>💎 Gems: <span className="text-cyan-400 font-semibold">{curr.gems ?? 0}</span></p>
                    <p>🟡 Coins: <span className="text-yellow-400 font-semibold">{curr.coins ?? 0}</span></p>
                    <p>⚡ Power P.: <span className="text-amber-300 font-semibold">{curr.powerPoints ?? 0}</span></p>
                    <p>🟣 Bling: <span className="text-purple-300 font-semibold">{curr.bling ?? 0}</span></p>
                    <p className="col-span-2">🔑 Login: <span className="text-white font-semibold">Supercell ID (Full Access)</span></p>
                  </div>
                </div>

                {/* ส่วนล่าง: ราคา */}
                <div className="px-5 py-4 bg-[#141930] border-t border-[#2A3150] flex items-center justify-between group-hover:bg-[#1C2341] transition">
                  <div>
                    <span className="text-lg sm:text-xl font-black text-amber-400">
                      {item.price} / THB
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 bg-[#1E2548] px-3 py-1.5 rounded-lg border border-[#2A3150]">
                    Stock: <span className="text-white font-bold">1</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}