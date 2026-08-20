import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0E1222] border-t border-[#1E2545] text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16">
        
        {/* ส่วนแบ่งคอลัมน์เนื้อหา */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* คอลัมน์ที่ 1: แนะนำเว็บไซต์ */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-white font-bold text-lg tracking-wider">
              RB SHOP<span className="text-cyan-400">.brawlStarsMarket</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
              ตลาดกลางดิจิทัลที่น่าเชื่อถือสำหรับทุกบริการที่เกี่ยวข้องกับเกม เราให้บริการชุมชนเกมด้วยความปลอดภัยเพื่อยกระดับประสบการณ์การเล่นเกมของคุณให้ยอดเยี่ยมยิ่งขึ้น
            </p>
          </div>

          {/* คอลัมน์ที่ 2: Info */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide">Info</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#seller" className="hover:text-cyan-400 transition-colors">Become a Seller</a></li>
              <li><a href="#terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* คอลัมน์ที่ 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#affiliate" className="hover:text-cyan-400 transition-colors">Affiliate</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
              <li><a href="#support" className="hover:text-cyan-400 transition-colors">Support</a></li>
              <li><a href="#merchants" className="hover:text-cyan-400 transition-colors">GM Coins Merchants</a></li>
            </ul>
          </div>

          {/* คอลัมน์ที่ 4: Follow us & Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide">Follow us & Links</h4>
            <div className="flex items-center gap-3 text-sm">
              
              {/* 1. เฟซบุ๊กร้าน */}
              <a 
                href="https://www.facebook.com/share/1DWyuAxXDm/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="เฟซบุ๊กร้านค้า"
                className="w-9 h-9 rounded-full bg-[#181D35] border border-[#2A3150] flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all shadow-md"
              >
                f
              </a>

              {/* 2. เว็บไซต์ทางการ Brawl Stars */}
              <a 
                href="https://supercell.com/en/games/brawlstars/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="เว็บไซต์ทางการ Brawl Stars"
                className="w-9 h-9 rounded-full bg-[#181D35] border border-[#2A3150] flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all shadow-md"
              >
                🌐
              </a>

              {/* 3. ลิงก์ดาวน์โหลดเกม Brawl Stars */}
              <a 
                href="https://supercell.com/en/games/brawlstars/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="ดาวน์โหลดเกม Brawl Stars"
                className="w-9 h-9 rounded-full bg-[#181D35] border border-[#2A3150] flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all shadow-md"
              >
                📥
              </a>

            </div>
            <p className="text-xs text-slate-500 pt-2">
              © 2026 จัดทำเพื่อส่งงานพ่อกอร์ฟครับอ้วนนนนนนน
            </p>
          </div>

        </div>

      </div>

      {/* เส้นขอบเรืองแสงสีฟ้าด้านล่างสุด */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-80 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
    </footer>
  );
}