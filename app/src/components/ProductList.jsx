import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ currentCategory, filteredAccounts }) {
  return (
    <div className="animate-fade-in">
      <div className="mb-4 flex items-center justify-between px-1">
        <h2 className="text-base sm:text-lg font-bold text-gray-100">
          หมวดหมู่: <span className="text-[#00D09E]">{currentCategory}</span>
        </h2>
        <span className="text-xs text-gray-400">
          พบสินค้า {filteredAccounts.length} รายการ
        </span>
      </div>

      {filteredAccounts.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mt-2">
          {filteredAccounts.map((item) => (
            <ProductCard key={item._id || item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#181D35] rounded-2xl border border-[#2A3150] mt-4">
          <p className="text-gray-400 text-sm">ยังไม่มีสินค้าในหมวดหมู่นี้</p>
        </div>
      )}
    </div>
  );
}