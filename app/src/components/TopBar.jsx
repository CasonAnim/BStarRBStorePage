import React, { useState } from "react";
import myLogo from "../assets/logoAndPicture/logo.jpg";

function TopBar() {
  const [selectedGame, setSelectedGame] = useState("Brawl Stars");
  const [searchQuery, setSearchQuery] = useState("");
  
  // 🌟 State สำหรับควบคุมการเปิด-ปิด และข้อความของ Modal แจ้งเตือน
  const [modalInfo, setModalInfo] = useState({ isOpen: false, gameName: "" });

  const supercellGames = [
    { id: "brawl-stars", name: "Brawl Stars" },
    { id: "clash-of-clans", name: "Clash of Clans" },
    { id: "clash-royale", name: "Clash Royale" },
    { id: "hay-day", name: "Hay Day" },
    { id: "boom-beach", name: "Boom Beach" },
    { id: "mo-co", name: "Mo.Co" },
  ];

  const handleGameChange = (e) => {
    const gameName = e.target.value;
    if (gameName !== "Brawl Stars") {
      // เปิด Custom Modal สไตล์ Supercell ตรงกลางจอ
      setModalInfo({ isOpen: true, gameName: gameName });
      setSelectedGame("Brawl Stars"); // รีเซ็ตค่ากลับมาที่ Brawl Stars
    } else {
      setSelectedGame(gameName);
    }
  };

  return (
    <>
      <header className="w-full bg-[#13172B] border-b border-[#2A3150] px-4 sm:px-8 py-3 flex items-center justify-between gap-4 sticky top-0 z-50">
        
        {/* 1. โลโก้และชื่อร้าน */}
        <a 
          href="https://www.facebook.com/share/1DWyuAxXDm/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 flex-shrink-0 cursor-pointer group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1C2136] border border-[#2A3150] flex items-center justify-center overflow-hidden group-hover:border-cyan-500 transition">
            <img 
              src={myLogo} 
              alt="BSTAR STORE Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded group-hover:opacity-80 transition" 
            />
          </div>
          <span className="font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-cyan-400 transition hidden md:inline-block">
            BSTAR STORE
          </span>
        </a>

        {/* 2. ช่องค้นหาพร้อม Dropdown */}
        <div className="flex-1 max-w-xl mx-2 sm:mx-4">
          <div className="flex items-center bg-[#181D35] border border-[#2A3150] rounded-xl overflow-hidden focus-within:border-[#00A3FF] transition">
            <select
              value={selectedGame}
              onChange={handleGameChange}
              className="bg-[#1C2136] text-gray-200 text-xs sm:text-sm px-2.5 sm:px-3 py-2 border-r border-[#2A3150] outline-none cursor-pointer hover:text-white transition font-medium"
            >
              {supercellGames.map((game) => (
                <option key={game.id} value={game.name} className="bg-[#181D35] text-white py-1">
                  {game.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder={`ค้นหาใน ${selectedGame}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-500 outline-none"
            />

            <button className="px-3 py-2 text-gray-400 hover:text-white transition cursor-pointer">
              🔍
            </button>
          </div>
        </div>

        {/* 3. ฝั่งขวา: ปุ่ม Login / Register */}
        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0 text-xs sm:text-sm">
          <button className="text-gray-300 hover:text-white transition px-2 py-1 cursor-pointer">
            Login
          </button>
          <button className="bg-[#00D09E] hover:bg-[#00B386] text-[#13172B] font-bold px-3.5 py-1.5 rounded-lg transition cursor-pointer shadow-md">
            Register
          </button>
        </div>

      </header>

      {/* 🌟 Supercell-Style Custom Modal Popup (อยู่ตรงกลางจอเป๊ะๆ) */}
      {modalInfo.isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-gradient-to-b from-[#1E2548] to-[#13172B] border-2 border-amber-400/80 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-[0_0_30px_rgba(245,158,11,0.3)] text-center relative transform transition-all scale-100">
            
            {/* ไอคอนแจ้งเตือนสไตล์เกม */}
            <div className="w-16 h-16 bg-amber-500/20 border border-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <span className="text-3xl">🛠️</span>
            </div>

            {/* หัวข้อ */}
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide mb-2 uppercase drop-shadow-md">
              Coming Soon!
            </h3>

            {/* รายละเอียดข้อความ */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              เกม <span className="text-amber-400 font-bold">{modalInfo.gameName}</span> กำลังอยู่ระหว่างพัฒนาระบบ ขออภัยในความไม่สะดวกครับ!
            </p>

            {/* ปุ่มตกลงสไตล์ปุ่มเกมเมอร์ */}
            <button
              onClick={() => setModalInfo({ isOpen: false, gameName: "" })}
              className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-gray-950 font-black rounded-xl shadow-lg transition-all transform active:scale-95 cursor-pointer text-sm sm:text-base tracking-wider uppercase border border-yellow-200"
            >
              เข้าใจแล้ว
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TopBar;