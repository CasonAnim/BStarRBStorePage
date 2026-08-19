// ไฟล์: src/components/ProductCard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
// 🌟 1. Import Component ที่เราเพิ่งแยกเอาไว้เข้ามา
import ProductModal from "./ProductModal"; 

function ProductCard({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleCloseModal = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      <Link to={`/products/${data.id}`} className="block h-full min-w-0">
        <div className="flex flex-col sm:flex-row bg-[#232946] rounded-2xl p-3 sm:p-4 gap-3 sm:gap-4 hover:bg-[#2C3456] transition-all duration-300 shadow-xl relative overflow-hidden group h-full border border-[#2C3456]">

          <div className="relative w-full sm:w-36 md:w-44 xl:w-52 aspect-[4/5] rounded-xl overflow-hidden flex-shrink-0 bg-gray-800">
            <img 
              src="https://via.placeholder.com/300x400" 
              alt="Account Info" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col justify-between w-full text-white min-w-0 py-1">
            <div>
              <h2 className="text-xs sm:text-sm md:text-base font-medium leading-snug mb-1 text-gray-200 line-clamp-2">
                PlaceTEXTHEREPlaceTEXTHERE PlaceTEXT PlaceTEXTHERE
              </h2>
              
              {/* ปุ่มกดเปิด Modal */}
              <button 
                onClick={handleOpenModal}
                className="text-[#00D09E] hover:text-teal-300 text-[11px] sm:text-xs font-medium underline transition cursor-pointer"
              >
                Show description
              </button>
            </div>

            <hr className="border-[#3A4264] my-2 sm:my-3" />

            <div className="flex gap-4 sm:gap-8 mb-3 text-xs">
              <div>
                <p className="text-gray-400 text-[10px]">Type</p>
                <p className="font-semibold text-xs">{data.account?.idGroup || 'Accounts'}</p>
              </div>
            </div>

            <div className="bg-[#151A2D] rounded-xl p-2.5 sm:p-3 flex items-center justify-between shadow-inner mt-auto">
              <span className="text-[#FFD700] text-base sm:text-lg font-bold">
                {data.price} / THB
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* 🌟 2. เรียกใช้งาน Modal โดยส่งค่า State และข้อมูลเข้าไปให้มัน */}
      <ProductModal 
        isOpen={isOpen} 
        onClose={handleCloseModal} 
        data={data} 
      />
    </>
  );
}

export default ProductCard;