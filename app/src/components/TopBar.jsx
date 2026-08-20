import React, { useState } from "react";
import { Link } from "react-router-dom";
import myLogo from "../assets/logoAndPicture/logo.jpg";

function TopBar() {
  const [selectedGame, setSelectedGame] = useState("Brawl Stars");
  const [searchQuery, setSearchQuery] = useState("");

  // 🌟 รายชื่อเกมทั้งหมดในเครือ Supercell
  const supercellGames = [
    { id: "brawl-stars", name: "Brawl Stars" },
    { id: "clash-of-clans", name: "Clash of Clans" },
    { id: "clash-royale", name: "Clash Royale" },
    { id: "hay-day", name: "Hay Day" },
    { id: "boom-beach", name: "Boom Beach" },
    { id: "mo-co", name: "Mo.Co" },
  ];

  return (
    <header className="w-full bg-[#13172B] border-b border-[#2A3150] px-4 sm:px-8 py-3 flex items-center justify-between gap-4 sticky top-0 z-50">
      
      {/* 1. โลโก้ร้านค้า */}
      <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1C2136] border border-[#2A3150] flex items-center justify-center overflow-hidden">
          <img 
          src={myLogo} 
          alt="Brawl Star Shop Logo" 
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded hover:opacity-80 transition" 
        />
        </div>
        <span className="font-bold text-sm sm:text-base tracking-wide text-white hidden md:inline-block">
          BSTAR STORE
        </span>
      </Link>

      {/* 2. ช่องค้นหาพร้อม Dropdown เลือกเกม Supercell */}
      <div className="flex-1 max-w-xl mx-2 sm:mx-4">
        <div className="flex items-center bg-[#181D35] border border-[#2A3150] rounded-xl overflow-hidden focus-within:border-[#00A3FF] transition">
          
          {/* 🌟 Dropdown เลือกเกมในเครือ Supercell */}
          <select
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
            className="bg-[#1C2136] text-gray-200 text-xs sm:text-sm px-2.5 sm:px-3 py-2 border-r border-[#2A3150] outline-none cursor-pointer hover:text-white transition font-medium"
          >
            {supercellGames.map((game) => (
              <option key={game.id} value={game.name} className="bg-[#181D35] text-white py-1">
                {game.name}
              </option>
            ))}
          </select>

          {/* Input ค้นหา */}
          <input
            type="text"
            placeholder={`ค้นหาใน ${selectedGame}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-500 outline-none"
          />

          {/* ปุ่มไอคอนแว่นขยาย */}
          <button className="px-3 py-2 text-gray-400 hover:text-white transition cursor-pointer">
            🔍
          </button>
        </div>
      </div>

      {/* 3. ฝั่งขวา: ปุ่ม Login / Register & ภาษา */}
      <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0 text-xs sm:text-sm">
        <button className="text-gray-300 hover:text-white transition px-2 py-1 cursor-pointer">
          Login
        </button>
        <button className="bg-[#00D09E] hover:bg-[#00B386] text-[#13172B] font-bold px-3.5 py-1.5 rounded-lg transition cursor-pointer shadow-md">
          Register
        </button>
      </div>

    </header>
  );
}

export default TopBar;