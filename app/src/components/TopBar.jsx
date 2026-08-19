import React from "react";
import myLogo from "../assets/logoAndPicture/logo.jpg";

function TopBar() {
  return (
    <nav className="bg-[#1C2136] border-b border-[#2A3150] px-3 sm:px-6 py-3 flex items-center justify-between gap-2 sm:gap-4 w-full overflow-hidden">
      
      {/* 1. โลโก้ (ยืดหยุ่นไม่หดตัว) */}
      <div className="flex items-center cursor-pointer flex-shrink-0">
        <img 
          src={myLogo} 
          alt="Brawl Star Shop Logo" 
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded hover:opacity-80 transition" 
        />
      </div>

      {/* 2. ช่องค้นหา (ปรับขนาดตามจอ / ซ่อนปุ่มเลือกเกมในมือถือ) */}
      <div className="flex-1 max-w-xl mx-1 sm:mx-4 min-w-0">
        <div className="flex items-center bg-[#13172B] rounded border border-[#2A3150] overflow-hidden focus-within:border-gray-500 text-xs sm:text-sm">
          <button className="hidden sm:flex items-center px-3 py-2 bg-[#1C2136] text-gray-300 hover:text-white border-r border-[#2A3150] flex-shrink-0">
            Brawl Stars
            <svg className="w-3 h-3 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="w-full min-w-0 bg-transparent px-2 sm:px-4 py-2 text-white focus:outline-none placeholder-gray-500 text-xs sm:text-sm"
          />
          <button className="px-2 sm:px-3 text-gray-400 hover:text-white flex-shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>
      </div>

      {/* 3. ปุ่ม Auth และ ภาษา (ซ่อนภาษาในจอเล็ก) */}
      <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm flex-shrink-0">
        <div className="flex items-center space-x-1.5 sm:space-x-3">
          <button className="text-[#00D09E] font-medium hover:text-teal-300 px-1 py-1">
            Login
          </button>
          <button className="bg-[#00D09E] text-[#13172B] px-2.5 sm:px-4 py-1.5 rounded font-semibold hover:bg-[#00b88a] transition">
            Register
          </button>
        </div>

        {/* ซ่อนตัวเลือกภาษาในจอมือถือ/แท็บเล็ตเล็ก */}
        <div className="hidden lg:flex items-center space-x-3 text-gray-300 border-l border-[#2A3150] pl-4">
          <button className="hover:text-white">English ▾</button>
          <button className="hover:text-white">THB ▾</button>
        </div>
      </div>

    </nav>
  );
}

export default TopBar;