import React, { useState } from "react";

export default function TopUpService() {
  const [amount, setAmount] = useState(50);
  const [method, setMethod] = useState("promptpay"); // 'promptpay' หรือ 'truewallet'
  const [step, setStep] = useState(1); // 1: เลือกวิธีและจำนวนเงิน, 2: สแกน QR, 3: สำเร็จ
  const [loading, setLoading] = useState(false);

  // 🌟 เพิ่ม State สำหรับจัดการไฟล์สลิปและรูปพรีวิว
  const [slipFile, setSlipFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const quickAmounts = [50, 90, 150, 300, 500, 1000]; // จำนวนเงินด่วน

  // ฟังก์ชันเมื่อผู้ใช้เลือกไฟล์รูปสลิป
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSlipFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // สร้างลิงก์ชั่วคราวเพื่อแสดงพรีวิวรูป
    }
  };

  // จำลองการกดยืนยันชำระเงิน (ส่งข้อมูลและสลิปไป Backend)
  const handleConfirmPayment = async () => {
    // 🌟 เช็คว่าแนบสลิปหรือยัง
    if (!slipFile) {
      alert("⚠️ กรุณาแนบสลิปหลักฐานการโอนเงินก่อนกดยืนยันด้วยนะครับ!");
      return;
    }

    setLoading(true);
    try {
      // ตัวอย่างการเตรียมข้อมูลส่งไป Backend (ผ่าน FormData สำหรับอัปโหลดไฟล์)
      const formData = new FormData();
      formData.append("slip", slipFile);
      formData.append("amount", amount);
      formData.append("method", method);

      // ตรงนี้ในอนาคตคุณสามารถเปลี่ยนเป็น fetch ไปหา Backend ได้ เช่น:
      // await fetch("http://localhost:5050/api/topup", { method: "POST", body: formData });

      // จำลอง Delay เหมือนรอ Backend ประมวลผล 2 วินาที
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setStep(3); // ไปหน้าสำเร็จ
    } catch (error) {
      console.error("Error processing topup:", error);
      alert("เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn">
      {/* 🟢 Progress Step Bar แบบรูปอ้างอิง */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 bg-[#181D35] border border-[#2A3150] p-4 rounded-2xl shadow-lg">
        <div className={`flex items-center gap-2 text-xs sm:text-sm transition-colors ${step >= 1 ? "text-cyan-400 font-bold" : "text-gray-500"}`}>
          <span className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-black ${step >= 1 ? "bg-cyan-500 text-slate-950" : "bg-gray-800"}`}>1</span>
          เลือกจำนวนเงิน
        </div>
        <div className={`w-8 sm:w-16 h-1 rounded-full transition-colors ${step >= 2 ? "bg-cyan-500" : "bg-[#2A3150]"}`} />
        <div className={`flex items-center gap-2 text-xs sm:text-sm transition-colors ${step >= 2 ? "text-cyan-400 font-bold" : "text-gray-500"}`}>
          <span className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-black ${step >= 2 ? "bg-cyan-500 text-slate-950" : "bg-gray-800"}`}>2</span>
          สแกนชำระเงิน
        </div>
        <div className={`w-8 sm:w-16 h-1 rounded-full transition-colors ${step === 3 ? "bg-emerald-500" : "bg-[#2A3150]"}`} />
        <div className={`flex items-center gap-2 text-xs sm:text-sm transition-colors ${step === 3 ? "text-emerald-400 font-bold" : "text-gray-500"}`}>
          <span className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-black ${step === 3 ? "bg-emerald-500 text-slate-950" : "bg-gray-800"}`}>3</span>
          เติม Point สำเร็จ
        </div>
      </div>

      {/* 🟢 พื้นที่เนื้อหาหลัก */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* คอลัมน์ซ้าย: จัดการข้อมูลตาม Step */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* ----- STEP 1: เลือกช่องทางและจำนวนเงิน ----- */}
          {step === 1 && (
            <>
              {/* เลือกช่องทางชำระเงิน */}
              <div className="bg-[#181D35] border border-[#2A3150] p-5 sm:p-6 rounded-2xl space-y-4 shadow-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  💳 เลือกช่องทางการชำระเงิน
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setMethod("promptpay")}
                    className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                      method === "promptpay"
                        ? "border-cyan-400 bg-cyan-950/30 text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                        : "border-[#2A3150] bg-[#141930] text-gray-400 hover:border-gray-500"
                    }`}
                  >
                    <div className="bg-white text-[#113566] font-black px-2 py-1 rounded text-xs border border-gray-300">
                      PromptPay
                    </div>
                    <span className="font-bold text-sm">พร้อมเพย์ (QR Code)</span>
                  </button>

                  <button
                    onClick={() => setMethod("truewallet")}
                    className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                      method === "truewallet"
                        ? "border-orange-500 bg-orange-950/30 text-white shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                        : "border-[#2A3150] bg-[#141930] text-gray-400 hover:border-gray-500"
                    }`}
                  >
                    <div className="bg-[#FF8200] text-white font-black px-2 py-1 rounded text-xs border border-orange-600">
                      TrueMoney
                    </div>
                    <span className="font-bold text-sm">ทรูมันนี่ วอลเล็ท</span>
                  </button>
                </div>
              </div>

              {/* เลือกจำนวนเงิน */}
              <div className="bg-[#181D35] border border-[#2A3150] p-5 sm:p-6 rounded-2xl space-y-4 shadow-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  💵 เลือกจำนวนเงินที่ต้องการเติม
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {quickAmounts.map((val) => (
                    <button
                      key={val}
                      onClick={() => setAmount(val)}
                      className={`py-3 px-2 rounded-xl font-bold transition-all border-2 ${
                        amount === val
                          ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 border-transparent shadow-lg transform scale-[1.02]"
                          : "bg-[#141930] border-[#2A3150] text-white hover:border-amber-400/50"
                      }`}
                    >
                      {val} THB
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#2A3150] mt-4">
                  <label className="text-sm text-gray-400 mb-2 block font-medium">ระบุจำนวนเงินเอง (ขั้นต่ำ 10 บาท):</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      min="10"
                      className="w-full bg-[#141930] border border-[#2A3150] focus:border-cyan-400 rounded-xl px-4 py-3 text-white font-bold outline-none transition-colors"
                      placeholder="ระบุจำนวนเงิน"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">THB</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ----- STEP 2: สแกนชำระเงินและแนบสลิป ----- */}
          {step === 2 && (
            <div className="bg-[#181D35] border border-cyan-500/50 p-6 rounded-2xl text-center space-y-6 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <div>
                <h3 className="text-2xl font-black text-white mb-2">สแกน QR Code เพื่อชำระเงิน</h3>
                <p className="text-sm text-gray-400">
                  ระบบเปิดรับชำระผ่าน <strong className="text-white">{method === "promptpay" ? "พร้อมเพย์" : "ทรูมันนี่ วอลเล็ท"}</strong>
                </p>
              </div>

              {/* รูป QR Code จำลอง */}
              <div className="bg-white p-4 rounded-3xl w-56 h-56 mx-auto flex items-center justify-center border-4 border-cyan-400 shadow-2xl relative">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Payment_${method}_${amount}THB`}
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white p-1 rounded-full shadow-md">
                     <span className="text-[10px] font-black text-slate-800">SCAN</span>
                   </div>
                </div>
              </div>

              <div className="bg-[#141930] border border-[#2A3150] p-4 rounded-xl text-sm text-gray-300 space-y-2 max-w-md mx-auto">
                <p>ยอดโอนที่ต้องชำระ: <span className="text-amber-400 font-black text-lg">{amount}.00 บาท</span></p>
                <p className="text-xs text-gray-400">📌 กรุณาโอนเงินให้ตรงกับยอดที่แสดง จากนั้นแนบรูปสลิปหลักฐานด้านล่างเพื่อยืนยัน</p>
              </div>

              {/* 🌟 ส่วนเพิ่มช่องอัปโหลดสลิป */}
              <div className="max-w-md mx-auto bg-[#141930] border-2 border-dashed border-[#2A3150] hover:border-cyan-400 p-4 rounded-2xl text-center transition-all">
                {previewUrl ? (
                  <div className="space-y-3">
                    <p className="text-emerald-400 font-bold text-xs flex items-center justify-center gap-1">
                      ✅ แนบสลิปเรียบร้อยแล้ว
                    </p>
                    <img 
                      src={previewUrl} 
                      alt="Slip Preview" 
                      className="max-h-48 mx-auto rounded-xl border border-gray-600 object-contain shadow-md bg-black/40" 
                    />
                    <button 
                      type="button"
                      onClick={() => { setSlipFile(null); setPreviewUrl(""); }}
                      className="text-xs text-red-400 hover:text-red-300 underline font-medium cursor-pointer"
                    >
                      ลบรูป / เปลี่ยนสลิปใหม่
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer block space-y-2 py-2">
                    <span className="text-3xl">🧾</span>
                    <p className="text-sm font-bold text-cyan-400">คลิกเพื่ออัปโหลดสลิปโอนเงิน</p>
                    <p className="text-[11px] text-gray-400">รองรับไฟล์ภาพ JPG, PNG</p>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileChange} 
                      className="hidden" 
                    />
                  </label>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 border-t border-[#2A3150]">
                <button
                  onClick={() => setStep(1)}
                  disabled={loading}
                  className="px-6 py-3 rounded-xl border border-[#2A3150] bg-[#141930] text-gray-300 font-bold hover:bg-[#1C2341] transition-colors cursor-pointer"
                >
                  ย้อนกลับ
                </button>
                <button
                  onClick={handleConfirmPayment}
                  disabled={loading}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:scale-100 flex justify-center items-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                      กำลังตรวจสอบสลิป...
                    </>
                  ) : (
                    "✅ ยืนยันว่าโอนเงินแล้ว"
                  )}
                </button>
              </div>
            </div>
          )}

          {/* ----- STEP 3: ทำรายการสำเร็จ ----- */}
          {step === 3 && (
            <div className="bg-[#181D35] border border-emerald-500 p-10 rounded-2xl text-center space-y-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] animate-fadeIn">
              <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-4xl font-black shadow-lg shadow-emerald-500/40">
                ✓
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-2">ทำรายการสำเร็จ!</h3>
                <p className="text-gray-300">
                  คุณได้ทำการเติมเงินจำนวน <span className="text-amber-400 font-bold">{amount} บาท</span> พร้อมแนบสลิปเรียบร้อย
                </p>
              </div>
              
              <div className="bg-[#141930] border border-[#2A3150] p-5 rounded-xl inline-block">
                <p className="text-sm text-gray-400 mb-1">พอยต์ที่ได้รับเพิ่ม</p>
                <p className="text-3xl font-black text-cyan-400">+{amount} Points</p>
              </div>

              <div>
                <button
                  onClick={() => {
                    setStep(1);
                    setAmount(50);
                    setSlipFile(null);
                    setPreviewUrl("");
                  }}
                  className="mt-4 px-8 py-3 rounded-xl bg-[#2A3150] text-white font-bold hover:bg-[#343D61] transition-colors cursor-pointer"
                >
                  ทำรายการเติมเงินอีกครั้ง
                </button>
              </div>
            </div>
          )}
        </div>

        {/* คอลัมน์ขวา: Order Summary (สรุปรายการ) */}
        <div className="bg-[#181D35] border border-[#2A3150] p-6 rounded-2xl h-fit space-y-5 shadow-xl sticky top-24">
          <h3 className="text-lg font-bold text-white border-b border-[#2A3150] pb-3">
            สรุปรายการ (Order Summary)
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center text-gray-400">
              <span>ช่องทางชำระเงิน:</span>
              <span className="text-white font-bold bg-[#141930] px-2 py-1 rounded border border-[#2A3150]">
                {method === "promptpay" ? "PromptPay" : "TrueMoney"}
              </span>
            </div>
            
            <div className="flex justify-between items-center text-gray-400">
              <span>จำนวนเงิน:</span>
              <span className="text-white font-bold">{amount || 0} THB</span>
            </div>

            <div className="flex justify-between items-center text-gray-400">
              <span>อัตราแลกเปลี่ยน:</span>
              <span className="text-emerald-400 font-medium">1 THB = 1 Point</span>
            </div>
            
            <div className="flex justify-between items-center text-gray-400">
              <span>ค่าธรรมเนียม:</span>
              <span className="text-gray-400">ฟรี (0.00 THB)</span>
            </div>

            {/* แสดงสถานะสลิปในสรุปรายการด้วย */}
            {step === 2 && (
              <div className="flex justify-between items-center text-gray-400 border-t border-[#2A3150] pt-3">
                <span>สถานะสลิป:</span>
                <span className={slipFile ? "text-emerald-400 font-bold" : "text-amber-400 font-medium"}>
                  {slipFile ? "แนบแล้ว ✓" : "ยังไม่แนบ"}
                </span>
              </div>
            )}

            <div className="border-t border-[#2A3150] pt-4 flex justify-between items-end">
              <div>
                <span className="block font-bold text-white mb-1">ยอดรวมที่ต้องชำระ:</span>
                <span className="text-xs text-cyan-400">คุณจะได้รับ {amount} Points</span>
              </div>
              <span className="text-2xl font-black text-amber-400">{amount || 0} THB</span>
            </div>
          </div>

          {step === 1 && (
            <button
              onClick={() => setStep(2)}
              disabled={!amount || amount < 10}
              className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              ยืนยันการทำรายการ →
            </button>
          )}
        </div>

      </div>
    </div>
  );
}