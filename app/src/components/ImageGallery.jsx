import React, { useState, useRef } from "react";

export default function ImageGallery({ productId }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const scrollRef = useRef(null);

    // จำลอง Array รูปภาพ (สามารถเปลี่ยนเป็นรูปจริงได้ทีหลัง)
    const mainImage = `/IDbrawl/ID${productId || 1}.jpg`;
    const galleryImages = [mainImage, mainImage, mainImage, mainImage, mainImage, mainImage, mainImage, mainImage];

    // ฟังก์ชันกดเปลี่ยนรูปหลักด้วยลูกศร
    const handlePrev = () => {
        setCurrentImageIndex((prev) => {
            const newIndex = prev === 0 ? galleryImages.length - 1 : prev - 1;
            scrollToThumbnail(newIndex);
            return newIndex;
        });
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) => {
            const newIndex = prev === galleryImages.length - 1 ? 0 : prev + 1;
            scrollToThumbnail(newIndex);
            return newIndex;
        });
    };

    // ฟังก์ชันช่วยเลื่อนแถบ Thumbnail ให้รูปที่ถูกเลือกขยับมาอยู่ในจออัตโนมัติ
    const scrollToThumbnail = (index) => {
        if (scrollRef.current) {
            const thumbNode = scrollRef.current.children[index];
            if (thumbNode) {
                thumbNode.scrollIntoView({
                    behavior: "smooth",
                    inline: "nearest",
                    block: "nearest"
                });
            }
        }
    };

    return (
        <div className="space-y-3">
            {/* รูปภาพหลัก พร้อมปุ่มลูกศรเปลี่ยนรูปบนรูปภาพ */}
            <div className="relative aspect-[4/3] w-full bg-[#13172B] rounded-xl overflow-hidden border border-[#2A3150] flex items-center justify-center group">
                <img
                    src={galleryImages[currentImageIndex]}
                    alt={`Account Preview ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.src = "/logoAndPicture/logo.jpg"; }}
                />

                {/* ตัวนับจำนวนรูปภาพ */}
                <span className="absolute top-3 right-3 bg-black/70 text-xs px-2.5 py-1 rounded-md text-gray-300 font-mono backdrop-blur-sm border border-white/10">
                    {currentImageIndex + 1}/{galleryImages.length}
                </span>

                {/* ปุ่มลูกศรซ้าย (เปลี่ยนรูป) */}
                <button 
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#181D35]/80 hover:bg-[#181D35] text-white flex items-center justify-center border border-[#2A3150] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                    ←
                </button>

                {/* ปุ่มลูกศรขวา (เปลี่ยนรูป) */}
                <button 
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#181D35]/80 hover:bg-[#181D35] text-white flex items-center justify-center border border-[#2A3150] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                    →
                </button>
            </div>

            {/* แถบรูปภาพย่อย (Thumbnail) แบบซ่อนแถบเลื่อนกวนใจ */}
            <div 
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto pb-1 snap-x px-1"
                style={{
                    scrollbarWidth: 'none', /* สำหรับ Firefox */
                    msOverflowStyle: 'none', /* สำหรับ IE/Edge */
                }}
            >
                {galleryImages.map((img, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`snap-center w-16 h-12 sm:w-20 sm:h-14 flex-shrink-0 bg-black/50 rounded-lg cursor-pointer transition-all duration-200 overflow-hidden ${
                            currentImageIndex === idx 
                            ? "border-2 border-cyan-400 opacity-100 scale-105 shadow-[0_0_10px_rgba(6,182,212,0.4)]" 
                            : "border border-[#2A3150] opacity-50 hover:opacity-80"
                        }`}
                    >
                        <img 
                            src={img}
                            alt={`Thumb ${idx + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.src = "/logoAndPicture/logo.jpg"; }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}