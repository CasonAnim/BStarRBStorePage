import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmptyProductList({ currentCategory }) {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center text-center py-20 px-4 bg-[#181D35] border-4 border-[#2A3150] rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      
      {/* ลูกเล่นแสงออร่าพื้นหลัง */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#181D35] to-[#181D35]"></div>

      {/* ไอคอนกล่องว่างเปล่า (ทำแอนิเมชันขยับขึ้นลง) */}
      <div className="relative z-10 animate-bounce mb-6">
        <div className="w-24 h-24 bg-[#141930] rounded-3xl border-4 border-[#2A3150] shadow-xl flex items-center justify-center rotate-[-10deg]">
          <span className="text-5xl drop-shadow-md">📦</span> 
          <span className="absolute -bottom-2 -right-3 text-3xl drop-shadow-md">💨</span>
        </div>
      </div>

      {/* ข้อความหลัก สีเหลืองทอง สไตล์ Brawl Stars */}
      <h3 className="relative z-10 text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mb-4 tracking-wider uppercase">
        Oops! สต๊อกแตกเกลี้ยง
      </h3>

      {/* ข้อความอธิบายแบบกวนๆ */}
      <p className="relative z-10 text-gray-300 font-medium text-sm sm:text-base max-w-md leading-relaxed">
        เหล่านักสู้ Brawlers เหมาไอดีหมวด <span className="text-cyan-400 font-black border-b-2 border-cyan-500 pb-0.5">{currentCategory}</span> ไปหมดแล้ว! <br/>
        แอดมินกำลังรีบฟาร์มของมาเติมให้อยู่นะ รอกันแป๊บนึง 🚀
      </p>

    </div>
  );
}