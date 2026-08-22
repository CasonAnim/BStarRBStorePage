import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

// นำเข้า Components ย่อยที่เราแยกไว้
import ImageGallery from "../components/ImageGallery";
import AccountSummary from "../components/AccountSummary";
import WhyChooseUs from "../components/WhyChooseUs";
import OrderSidebar from "../components/OrderSidebar";

export default function TestPage_Individual() {
    const { id } = useParams();
    const navigate = useNavigate(); // ใช้สำหรับสั่งย้อนกลับหน้าเว็บ
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

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

    const brawlers = product?.account?.brawlers || [];
    const skins = product?.account?.skins || {};
    const totalSkins = Object.values(skins).reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);
    const curr = product?.account?.currencies || {};

    return (
        <div className="min-h-screen bg-[#101426] text-white flex flex-col font-sans">
            <TopBar />

            <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-4">
                
                {/* 🔙 ปุ่มย้อนกลับหน้าก่อนหน้า */}
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white bg-[#181D35] hover:bg-[#212846] px-3.5 py-2 rounded-lg border border-[#2A3150] transition cursor-pointer w-fit"
                >
                    <span>←</span> กลับไปหน้าก่อนหน้า
                </button>

                {/* ชื่อสินค้า (Header) */}
                <h1 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {product?.title || `🔥 บัญชี #ID${product?.id || id} | ${brawlers.length} Brawlers | ${totalSkins} Skins | ${curr.gems || 0} Gems`}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    
                    {/* ฝั่งซ้าย: รวมองค์ประกอบหลัก */}
                    <div className="lg:col-span-2 space-y-6">
                        
                        {/* กล่องบน: รูปภาพ & รายละเอียดเกม */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#181D35] p-5 rounded-xl border border-[#2A3150] shadow-xl">
                            <ImageGallery productId={product?.id || id} />
                            <AccountSummary product={product} />
                        </div>

                        {/* กล่องล่าง: ทำไมต้องเลือกเรา */}
                        <WhyChooseUs />

                    </div>

                    {/* ฝั่งขวา: ตะกร้าสั่งซื้อ */}
                    <OrderSidebar price={product?.price} />

                </div>
            </main>
        </div>
    );
}