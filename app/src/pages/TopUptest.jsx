import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

function TopupTest() {
  const [amount, setAmount] = useState('');
  const [showQR, setShowQR] = useState(false);
  const token = localStorage.getItem("token");

  // ฟังก์ชันเลือกจำนวนเงิน
  const handleSelectAmount = (value) => {
    setAmount(value);
    setShowQR(false); // ซ่อน QR ก่อนเพื่อกด Confirm ใหม่
  };

  // ฟังก์ชันสร้าง QR Code
  const handleGenerateQR = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      alert("กรุณาระบุจำนวนเงินให้ถูกต้อง");
      return;
    }
    setShowQR(true);
  };

  // ฟังก์ชันจำลองการส่งข้อมูลเมื่อจ่ายเงินสำเร็จ
  const handleConfirmPay = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("กรุณาเข้าสู่ระบบก่อนทำรายการ");
    return;
  }

  try {
    // ต้องสั่ง await fetch เพื่อให้ได้ Response object
    const res = await fetch("http://localhost:5050/topup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        topupAmount: Number(amount) // แปลงเป็น Number เสมอ
      })
    });

    // อ่านข้อมูลจาก Response (ใช้อันใดอันหนึ่ง)
    const data = await res.json(); 

    if (res.ok) {
      alert(data.message || "เติมเงินสำเร็จ!");
      setShowQR(false);
      setAmount('');
    } else {
      // ดึง message จาก JSON ที่ Backend ส่งกลับมา
      alert(`เกิดข้อผิดพลาด (${res.status}): ${data.message || data || "Bad Request"}`);
    }

  } catch (error) {
    console.error("Topup error:", error);
    alert("ไม่สามารถติดต่อ Server ได้");
  }
};
    
    return (
    <div className="p-6 max-w-md mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">Topup Page</h1>

      <form onSubmit={handleGenerateQR} className="flex flex-col gap-4">
        {/* ช่องกรอกจำนวนเงิน */}
        <div className="flex flex-col gap-1">
          <label htmlFor="amount">จำนวนเงิน (บาท):</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setShowQR(false);
            }}
            placeholder="0.00"
            className="p-2 bg-gray-900 border border-gray-700 rounded text-white"
          />
        </div>

        {/* ปุ่มตัวเลือกสำเร็จรูป */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => handleSelectAmount(50)}
            className="p-2 border border-gray-700 rounded hover:bg-gray-800 flex-1"
          >
            50
          </button>
          <button
            type="button"
            onClick={() => handleSelectAmount(100)}
            className="p-2 border border-gray-700 rounded hover:bg-gray-800 flex-1"
          >
            100
          </button>
          <button
            type="button"
            onClick={() => handleSelectAmount(500)}
            className="p-2 border border-gray-700 rounded hover:bg-gray-800 flex-1"
          >
            500
          </button>
        </div>

        {/* ปุ่มยืนยันเพื่อเจน QR */}
        <button
          type="submit"
          className="p-2 bg-white text-black font-bold rounded hover:bg-gray-200 mt-2 cursor-pointer"
        >
          Confirm Topup
        </button>
      </form>

      {/* ส่วน QR Code Mockup */}
      {showQR && (
        <div className="mt-6 p-4 bg-white rounded text-black flex flex-col items-center gap-3">
          <p className="font-bold">สแกนเพื่อชำระเงิน: {amount} บาท</p>
          
          <QRCodeSVG 
            value={`https://example.com/pay?amount=${amount}`} 
            size={200} 
          />

          <p className="text-xs text-gray-500">(Mockup สำหรับทดสอบเท่านั้น)</p>
          
          {/* ปุ่มจำลองสแกนจ่ายสำเร็จ -> เรียกใช้ handleConfirmPay */}
          <button 
            type="button"
            onClick={handleConfirmPay}
            className="p-2 bg-green-600 text-white rounded text-sm w-full mt-2 cursor-pointer hover:bg-green-700"
          >
            [Dev Test] จำลองว่าสแกนจ่ายสำเร็จ
          </button>
        </div>
      )}
    </div>
  );
}

export default TopupTest;