import React, { useState } from "react";

export default function AccountSummary({ product }) {
    const [showMore, setShowMore] = useState(false);

    const accountData = product?.account || {};
    const curr = accountData.currencies || {};
    const brawlers = accountData.brawlers || [];
    const skins = accountData.skins || {};
    const totalSkins = Object.values(skins).reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);

    return (
        <div className="text-sm text-gray-300 space-y-4">
            <div className="grid grid-cols-[100px_1fr] gap-2 mb-4">
                <span className="text-gray-500">Game</span>
                <span className="text-white">: Brawl Stars</span>
                <span className="text-gray-500">Type</span>
                <span className="text-white">: {accountData.idGroup || "Accounts"}</span>
                <span className="text-gray-500">Platform</span>
                <span className="text-white">: Others</span>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-2">Account Summary:</h3>
                <ul className="space-y-1.5 list-none">
                    <li>- <span className="font-medium text-white">Brawlers Collected:</span> {brawlers.length}/80+</li>
                    {/* ดึงค่า powerPoints กลับมาแสดงที่นี่ครับ */}
                    <li>- <span className="font-medium text-white">Currencies:</span> {curr.bling ?? 0} Bling, {curr.gems ?? 0} Gems, {curr.coins ?? 0} Coins, {curr.powerPoints ?? 0} Power Points</li>
                    <li>- <span className="font-medium text-white">Total Skins:</span> {totalSkins} Skins</li>
                    {totalSkins > 0 && (
                        <li className="pl-3 text-xs text-gray-400">
                            ( {Object.entries(skins).filter(([_, v]) => v > 0).map(([k, v]) => `${v} ${k}`).join(', ')} )
                        </li>
                    )}
                    <li>- <span className="font-medium text-white">Login:</span> Supercell ID (Full Access)</li>
                </ul>
            </div>

            <button 
                onClick={() => setShowMore(!showMore)}
                className="text-cyan-400 hover:text-cyan-300 text-xs font-medium underline mt-2 cursor-pointer"
            >
                {showMore ? "Show less description" : "Show more description"}
            </button>
            
            {showMore && (
                <div className="mt-4 p-4 bg-[#13172B] rounded-lg border border-[#2A3150] space-y-3 animate-fade-in text-xs">
                    <h4 className="font-bold text-white border-b border-[#2A3150] pb-2">📋 รายชื่อ Brawlers</h4>
                    <p className="text-gray-300 leading-relaxed">
                        {brawlers.length > 0 ? brawlers.join(', ') : 'ไม่มีข้อมูล'}
                    </p>
                </div>
            )}
        </div>
    );
}