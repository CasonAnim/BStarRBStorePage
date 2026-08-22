import React from "react";

export default function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  const imageSrc = `/IDbrawl/ID${product.id || 1}.jpg`;
  
  // เจาะเข้าไปดึงข้อมูลจากออบเจกต์ account
  const accountData = product.account || {};
  const curr = accountData.currencies || {};
  const brawlers = accountData.brawlers || [];
  const skins = accountData.skins || {};

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in overflow-y-auto">
      <div className="bg-gradient-to-b from-[#1E2548] to-[#13172B] border-2 border-cyan-400/80 rounded-3xl max-w-2xl w-full shadow-[0_0_40px_rgba(6,182,212,0.4)] overflow-hidden relative my-8">
        
        {/* หัวข้อ Modal */}
        <div className="bg-[#181D35] px-6 py-4 border-b border-[#2A3150] flex items-center justify-between">
          <h3 className="text-white font-black text-lg tracking-wider flex items-center gap-2">
            🔥 รายละเอียดไอดี #ID{product.id}
          </h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 flex items-center justify-center hover:bg-red-500 hover:text-white transition cursor-pointer font-bold"
          >
            ✕
          </button>
        </div>

        {/* เนื้อหาภายใน Modal */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar text-slate-300 text-sm">
          
          {/* รูปภาพสินค้า */}
          <div className="rounded-2xl overflow-hidden border border-[#2A3150] bg-black/40 flex justify-center">
            <img 
              src={imageSrc} 
              alt={`ID ${product.id}`} 
              className="w-full h-auto max-h-80 object-contain"
              onError={(e) => { e.target.src = "/logoAndPicture/logo.jpg"; }} 
            />
          </div>

          {/* ข้อมูลทรัพยากร (Currencies) */}
          <div className="bg-[#181D35]/80 border border-[#2A3150] rounded-2xl p-4 space-y-2">
            <h4 className="text-cyan-400 font-bold text-base border-b border-[#2A3150] pb-2">
              📊 ทรัพยากรในบัญชี (Currencies)
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm pt-1">
              <p>💎 Gems: <span className="text-cyan-300 font-semibold">{curr.gems ?? "-"}</span></p>
              <p>🟡 Coins: <span className="text-yellow-400 font-semibold">{curr.coins ?? "-"}</span></p>
              <p>⚡ Power Points: <span className="text-amber-300 font-semibold">{curr.powerPoints ?? "-"}</span></p>
              <p>🟣 Bling: <span className="text-purple-300 font-semibold">{curr.bling ?? "-"}</span></p>
              <p className="col-span-2">🔑 Login: <span className="text-white font-semibold">Supercell ID (Full Access)</span></p>
            </div>
          </div>

          {/* ตัวละคร (Brawlers) */}
          {brawlers.length > 0 && (
            <div className="bg-[#181D35]/80 border border-[#2A3150] rounded-2xl p-4 space-y-2">
              <h4 className="text-cyan-400 font-bold text-base border-b border-[#2A3150] pb-2">
                🥊 รายชื่อตัวละคร ({brawlers.length} ตัว)
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {brawlers.map((bName, idx) => (
                  <span key={idx} className="bg-[#13172B] border border-[#2A3150] px-2.5 py-1 rounded-lg text-xs text-white">
                    {bName}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* สกิน (Skins) */}
          {Object.keys(skins).length > 0 && (
            <div className="bg-[#181D35]/80 border border-[#2A3150] rounded-2xl p-4 space-y-2">
              <h4 className="text-cyan-400 font-bold text-base border-b border-[#2A3150] pb-2">
                ✨ ข้อมูลสกิน (Skins)
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                {Object.entries(skins).map(([key, val], idx) => (
                  <p key={idx} className="capitalize">
                    {key}: <span className="text-white font-semibold">{val}</span>
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* หมายเหตุอ้างอิงจากรูปภาพจริง */}
          <div className="bg-[#181D35]/50 border border-[#2A3150] rounded-2xl p-4 text-xs text-slate-400">
            📌 <span className="text-white font-medium">หมายเหตุ:</span> โปรดตรวจสอบรายละเอียดสเปกและองค์ประกอบทั้งหมดจากรูปภาพตัวอย่างด้านบนของสินค้าชิ้นนี้
          </div>

        </div>

        {/* ปุ่มปิด Modal */}
        <div className="bg-[#181D35] px-6 py-4 border-t border-[#2A3150] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition cursor-pointer shadow-lg text-sm uppercase tracking-wider"
          >
            ปิดหน้าต่าง
          </button>
        </div>

      </div>
    </div>
  );
}