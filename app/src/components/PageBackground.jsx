import React from "react";
import bannerImage from "../assets/logoAndPicture/Topbar.jpg";

export default function PageBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* 🌟 พื้นหลังรูปภาพจาก Topbar ที่ค่อยๆ เฟดจางหายลงมาด้านล่าง */}
      <div 
        className="absolute top-0 left-0 w-full h-[700px] opacity-25 bg-cover bg-top"
        style={{
          backgroundImage: `url(${bannerImage})`,
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* ชั้นเสริมแสงเงาด้านบนให้ดูมีมิติยิ่งขึ้น */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent opacity-40" />

    </div>
  );
}