import React, { useState, useEffect } from "react";
import TopBar from "../components/TopBar";
import { useParams, useNavigate } from "react-router-dom";

function TestPage_Individual() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // ดึงข้อมูลไอดีรายชิ้นจาก Backend
    useEffect(() => {
        async function getProductDetail() {
            try {
                const response = await fetch(`http://localhost:5050/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product detail:", error);
            } finally {
                setLoading(false);
            }
        }
        getProductDetail();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#13172B] text-white flex items-center justify-center">
                <p className="animate-pulse text-gray-400">กำลังโหลดข้อมูลไอดี...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#13172B] text-white flex flex-col">
            <TopBar />

            <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">

                {/* ปุ่มย้อนกลับ */}
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-4 transition cursor-pointer"
                >
                    ← ย้อนกลับ
                </button>

                {/* 🌟 กล่องใหญ่รายละเอียดไอดี (จำลองดีไซน์จากรูปแรก) */}
                <div className="bg-[#181D35] rounded-2xl border border-[#2A3150] p-4 sm:p-6 shadow-2xl">

                    {/* Header Title */}
                    <h1 className="text-lg sm:text-xl font-bold text-white mb-6 uppercase tracking-wide">
                        {product?.title || "TAIGOONSTAR ACCOUNT - FULL ACCESS BRAWL STARS"}
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* 📸 ฝั่งซ้าย (2 Column): รูปภาพ & รายละเอียดเกม */}
                        <div className="lg:col-span-2 space-y-4">

                            {/* ตัวแสดงรูปภาพ + ตัวนับรูป 1/20 */}
                            <div className="relative aspect-video w-full bg-[#13172B] rounded-xl overflow-hidden border border-[#2A3150] flex items-center justify-center">
                                <img
                                    src={product?.image || "https://via.placeholder.com/800x450/13172B/FFFFFF?text=Brawl+Stars"}
                                    alt="Account Preview"
                                    className="w-full h-full object-contain"
                                />
                                <span className="absolute top-3 right-3 bg-black/70 text-xs px-2.5 py-1 rounded-md text-gray-300 font-mono">
                                    1/20
                                </span>
                            </div>

                            {/* กล่องรายละเอียดด้านล่างรูปภาพ */}
                            <div className="bg-[#13172B] p-4 rounded-xl border border-[#2A3150] space-y-2 text-sm text-gray-300">
                                <p><span className="text-gray-500">Game:</span> Brawl Stars</p>
                                <p>
                                    <span className="text-gray-500">Type:</span>{" "}
                                    <strong className="text-white">{product?.account?.idGroup || product?.category || "ไอดีเริ่มต้น"}</strong>
                                </p>
                                <p><span className="text-gray-500">Platform:</span> Others</p>
                                <hr className="border-[#2A3150] my-2" />
                                <p className="text-xs text-gray-400">
                                    Note: Available on Android, iOS. You will get full access to the provided email.
                                </p>
                            </div>

                        </div>

                        {/* 🛒 ฝั่งขวา (1 Column): Order Information */}
                        <div className="bg-[#1C2136] p-5 rounded-xl border border-[#2A3150] flex flex-col justify-between h-fit space-y-5">

                            <h2 className="text-base font-bold text-white border-b border-[#2A3150] pb-3">
                                Order Information
                            </h2>

                            {/* ราคา */}
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-400">Price</span>
                                <span className="text-xl font-bold text-[#FFD700]">
                                    {product?.price || 45} / THB
                                </span>
                            </div>

                            {/* วิธีการจัดส่ง */}
                            <div className="space-y-1">
                                <label className="text-xs text-gray-400">Delivery methods</label>
                                <select className="w-full bg-[#13172B] border border-[#2A3150] text-sm text-white rounded-lg p-2.5 outline-none focus:border-[#00A3FF]">
                                    <option>In-Chat Delivery</option>
                                </select>
                            </div>

                            {/* ข้อความถึงผู้ขาย */}
                            <div className="space-y-1">
                                <label className="text-xs text-gray-400">Note to seller (Optional)</label>
                                <textarea
                                    rows="3"
                                    placeholder="Write special requests here..."
                                    className="w-full bg-[#13172B] border border-[#2A3150] text-xs text-white rounded-lg p-2.5 outline-none focus:border-[#00A3FF] resize-none"
                                />
                            </div>

                            <hr className="border-[#2A3150]" />

                            {/* ราคารวม */}
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-400">Total price</span>
                                <span className="text-xl font-bold text-[#FFD700]">
                                    {product?.price || 45} / THB
                                </span>
                            </div>

                            {/* ปุ่มสั่งซื้อ */}
                            <div className="space-y-2 pt-2">
                                <button className="w-full bg-[#00A3FF] hover:bg-[#0082CC] text-white font-bold py-3 rounded-xl transition cursor-pointer shadow-lg">
                                    Checkout now
                                </button>
                                <button className="w-full bg-[#2A3150] hover:bg-[#343D63] text-white font-medium py-2.5 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 text-sm">
                                    🛒 Add to cart
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
}

export default TestPage_Individual;