// ไฟล์: src/components/ProductModal.jsx
import React from "react";

// 🌟 รับ Props มา 3 ตัว: 
// 1. isOpen (เช็คว่าเปิดอยู่ไหม) 
// 2. onClose (ฟังก์ชันสั่งปิด) 
// 3. data (ข้อมูลสินค้า)
function ProductModal({ isOpen, onClose, data }) {
  
  // ถ้า isOpen เป็น false ให้รีเทิร์น null (ซ่อนหน้าต่างไว้ ไม่ต้องแสดงผลอะไร)
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose} // 🌟 คลิกที่พื้นหลังสีดำเพื่อสั่งปิด
    >
      {/* กล่อง Pop-up หลัก */}
      <div 
        className="bg-[#13172B] border border-[#2A3150] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl p-4 sm:p-6 text-white relative shadow-2xl"
        onClick={(e) => e.stopPropagation()} // 🌟 ป้องกันไม่ให้คลิกโดนเนื้อหาข้างในแล้วทะลุไปปิด
      >
        
        {/* ปุ่มปิด (X) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-[#1C2136] p-2 rounded-full w-8 h-8 flex items-center justify-center transition"
        >
          ✕
        </button>

        {/* --- ส่วนเนื้อหา Layout แบ่ง 2 ฝั่ง (ซ้าย-ขวา) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
          
          {/* 📸 ฝั่งซ้าย: รูปภาพ + รายละเอียดสินค้า */}
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-base sm:text-lg font-bold text-gray-100 leading-snug">
              TAIGOONSTAR ACCOUNT - FULL ACCESS BRAWL STARS
            </h1>

            <div className="relative rounded-xl overflow-hidden bg-[#1C2136] aspect-video">
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Detail Screenshot" 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 right-3 bg-black/60 text-xs px-2.5 py-1 rounded-full text-gray-300">
                1/20
              </span>
            </div>

            <div className="bg-[#1C2136] p-4 rounded-xl text-xs sm:text-sm space-y-2 text-gray-300">
              <p><span className="text-gray-400">Game:</span> Brawl Stars</p>
              <p><span className="text-gray-400">Type:</span> {data?.account?.idGroup || 'Accounts'}</p>
              <p><span className="text-gray-400">Platform:</span> Others</p>
              <hr className="border-[#2A3150] my-2" />
              <p className="text-gray-400">Note: Available on Android, iOS. You will get full access to the provided email.</p>
            </div>
          </div>

          {/* 🛒 ฝั่งขวา: Order Information */}
          <div className="bg-[#1C2136] p-5 rounded-xl flex flex-col justify-between space-y-4 h-fit border border-[#2A3150]">
            <div>
              <h3 className="text-base font-bold text-gray-100 border-b border-[#2A3150] pb-3 mb-4">
                Order Information
              </h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-gray-400">Price</span>
                <span className="text-xl font-bold text-[#FFD700]">{data?.price || 0} / THB</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-gray-400 block mb-1">Delivery methods</label>
                  <select className="w-full bg-[#13172B] border border-[#2A3150] rounded-lg p-2.5 text-white focus:outline-none">
                    <option>In-Chat Delivery</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 block mb-1">Note to seller (Optional)</label>
                  <textarea 
                    rows="3" 
                    placeholder="Write special requests here..."
                    className="w-full bg-[#13172B] border border-[#2A3150] rounded-lg p-2.5 text-white focus:outline-none text-xs"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#2A3150]">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Total price</span>
                <span className="text-lg font-bold text-[#FFD700]">{data?.price || 0} / THB</span>
              </div>
              <button className="w-full bg-[#00A3FF] hover:bg-blue-500 text-white font-semibold py-2.5 rounded-xl transition shadow-lg text-sm">
                Checkout now
              </button>
              <button className="w-full bg-[#2A3150] hover:bg-[#353E65] text-white font-semibold py-2.5 rounded-xl transition text-sm">
                🛒 Add to cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductModal;