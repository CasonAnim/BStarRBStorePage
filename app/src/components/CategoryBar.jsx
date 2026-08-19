import React, { useState } from "react";

function CategoryBar({ onSelectCategory }) {
  const [activeTab, setActiveTab] = useState("หน้าหลัก");

  // รายการหมวดหมู่ตามที่คุณต้องการ
  const categories = [
    { name: "หน้าหลัก", count: null },
    { name: "ไอดีเริ่มต้น", count: 1 },
    { name: "ไอดีทั่วไป", count: 1 },
    { name: "ไอดีแรร์", count: 1 },
    { name: "กล่องสุ่มไอดี", count: 0 },
    { name: "บริการเติมเงิน",count: null},
  ];

  const handleTabClick = (categoryName) => {
    setActiveTab(categoryName);
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    }
  };

  return (
    <div className="w-full bg-[#181D35] border-b border-[#2A3150] px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 sm:space-x-3 overflow-x-auto scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeTab === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => handleTabClick(cat.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-[#232946] text-white shadow-md border border-[#3A4264]"
                  : "text-gray-400 hover:text-white hover:bg-[#202640]"
              }`}
            >
              <span>{cat.name}</span>
              {/* แสดงตัวเลขเฉพาะหมวดที่มีค่า count */}
              {cat.count !== null && (
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive
                      ? "bg-[#00A3FF] text-white"
                      : "bg-[#2A3150] text-gray-400"
                  }`}
                >
                  {cat.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryBar;