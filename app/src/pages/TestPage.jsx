import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TestPage() {
  const [accounts, setAccounts] = useState([]); // เปลี่ยนชื่อเป็นพหูพจน์ให้เมคเซนส์

  useEffect(() => {
    async function getAccounts() {
      try {
        const response = await fetch("http://localhost:5050/products");
        const data = await response.json();
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getAccounts();
  }, []);

  return (
    // คอนเทนเนอร์หลัก จัดให้อยู่กึ่งกลางและมีระยะขอบ
    <div className="p-5 max-w-4xl mx-auto">
      <div className="flex flex-col gap-6">
        {accounts.map((item) => (
          <Link key={item.id} to={`/products/${item.id}`} className="block">
            
            {/* 🌟 การ์ดหลัก (Main Card Container) */}
            <div className="flex flex-col md:flex-row bg-[#232946] rounded-2xl p-4 gap-6 hover:bg-[#2C3456] transition-all duration-300 shadow-xl relative overflow-hidden group">
              
              {/* ป้าย % มุมขวาบน (ถ้ามี) */}
              <div className="absolute top-0 right-0 bg-[#00B87A] text-white text-xs px-2 py-1 rounded-bl-lg font-bold">
                21%
              </div>

              {/* 📸 ฝั่งซ้าย: รูปภาพและข้อมูลทับรูป */}
              <div className="relative w-full md:w-[280px] aspect-[4/5] rounded-xl overflow-hidden flex-shrink-0 bg-gray-800">
                {/* หมายเหตุ: ใส่ URL รูปจริงของคุณตรง src นี้ */}
                <img 
                  src="https://via.placeholder.com/300x400" 
                  alt="Account Info" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* แถบข้อมูลด้านล่างของรูป */}
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-white text-sm bg-[#121629]/80 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></div>
                    <span className="truncate max-w-[80px] font-medium">Account</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-blue-400 bg-white rounded-full w-3 h-3 flex items-center justify-center text-[8px]">✔</span>
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="font-semibold">4.9 <span className="text-gray-400 font-normal">(455)</span></span>
                  </div>
                </div>
              </div>

              {/* 📝 ฝั่งขวา: รายละเอียด (Details) */}
              <div className="flex flex-col justify-between w-full text-white py-2">
                {/* หัวข้อและคำอธิบาย */}
                <div>
                  <h2 className="text-lg md:text-xl font-medium leading-snug mb-2 text-gray-200">
                    PlaceTEXTHEREPlaceTEXTHERE PlaceTEXT PlaceTEXTHERE PlaceTEXTHERE PlaceTEXT PlaceTEXTHERE
                  </h2>
                  <button className="text-gray-400 text-sm font-medium underline hover:text-white transition">
                    Show description
                  </button>
                </div>

                {/* เส้นคั่น (Divider) */}
                <hr className="border-[#3A4264] my-5" />

                {/* ข้อมูล Type / Platform */}
                <div className="flex gap-16 mb-5 text-sm">
                  <div>
                    <p className="text-gray-400 mb-0.5">Type</p>
                    <p className="font-semibold text-lg">{item.account?.idGroup || 'Accounts'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-0.5">Platform</p>
                    <p className="font-semibold text-lg">Others</p>
                  </div>
                </div>

                {/* 💰 กล่องราคา (Price Box) */}
                <div className="bg-[#151A2D] rounded-xl p-5 flex items-center shadow-inner">
                  <span className="text-[#FFD700] text-2xl font-bold tracking-wide">
                    {item.price} / THB
                  </span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TestPage;