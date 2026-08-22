import React from "react";

export default function OrderSidebar({ price }) {
    return (
        <div className="lg:col-span-1 bg-[#181D35] p-5 rounded-xl border border-[#2A3150] shadow-xl flex flex-col space-y-5 sticky top-24">
            <div className="flex items-center justify-between border-b border-[#2A3150] pb-3">
                <h2 className="text-base font-bold text-white">Order Information</h2>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Price</span>
                <span className="text-2xl font-black text-amber-400">{price || 189} THB</span>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3.5 rounded-xl transition cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                Checkout now
            </button>
        </div>
    );
}