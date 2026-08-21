import React from "react";

export default function WhyChooseUs() {
    return (
        <div className="bg-[#181D35] p-5 rounded-xl border border-[#2A3150] shadow-xl">
            <h2 className="text-lg font-black text-white mb-4 border-l-4 border-cyan-400 pl-3 flex items-end gap-2">
                WHY CHOOSE US? <span className="text-xs font-normal text-gray-400 mb-0.5">(ทำไมถึงต้องเลือกเรา?)</span>
            </h2>
            <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                    <span className="text-cyan-400 font-bold">1.</span>
                    <p className="text-gray-300"><strong className="text-white">Full Access (เข้าถึงได้ 100%)</strong> – You’ll receive complete account details. <br/><span className="text-xs text-gray-400">คุณจะได้รับรายละเอียดบัญชีครบถ้วน ไม่มีหมกเม็ด</span></p>
                </div>
                <div className="flex gap-3">
                    <span className="text-cyan-400 font-bold">2.</span>
                    <p className="text-gray-300"><strong className="text-white">Transparent Guarantee (รับประกันความโปร่งใส)</strong> – What you see is exactly what you get. <br/><span className="text-xs text-gray-400">เห็นแบบไหน ได้แบบนั้น ไม่มีเซอร์ไพรส์ ไม่จกตา</span></p>
                </div>
                <div className="flex gap-3">
                    <span className="text-cyan-400 font-bold">3.</span>
                    <p className="text-gray-300"><strong className="text-white">100% Safe (ปลอดภัย 100%)</strong> – All accounts are legit. <br/><span className="text-xs text-gray-400">บัญชีทั้งหมดถูกต้องตามกฎ</span></p>
                </div>
                <div className="flex gap-3">
                    <span className="text-cyan-400 font-bold">4.</span>
                    <p className="text-gray-300"><strong className="text-white">Fast Delivery & Support</strong> – Quick processing and ready to help anytime. <br/><span className="text-xs text-gray-400">ดำเนินการรวดเร็ว และซัพพอร์ตตลอด 24/7</span></p>
                </div>
                <div className="flex gap-3">
                    <span className="text-cyan-400 font-bold">5.</span>
                    <p className="text-gray-300"><strong className="text-white">10+ Years of Experience</strong> – Proven track record in the gaming market. <br/><span className="text-xs text-gray-400">ประสบการณ์กว่า 10 ปีในตลาดเกม</span></p>
                </div>
            </div>
        </div>
    );
}