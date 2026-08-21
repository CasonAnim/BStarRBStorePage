    import {useState, useEffect } from "react";
    import { Link } from "react-router-dom";

    function TestPage() {
        const [account, setAccounts] = useState([]);
        // const
            useEffect(() => {   
            async function getAccounts() {
                const response = await fetch("http://localhost:5050/products");
                const data = await response.json();
                setAccounts(data);
        }
            getAccounts();
            }, []);
        
        return (
            <>
    <div className="border-black border-5 rounded-2xl">    
        <div className="grid grid-cols-2 gap-4 m-5 text-center">
            {account.map((users) => {
                // คำนวณหาผลรวมของ Skin ทั้งหมด (ป้องกันกรณีค่าเป็น undefined ด้วย fallback || 0)
                const skins = users.account.skins;
                const totalSkins = 
                    (skins?.rare || 0) + 
                    (skins?.super || 0) + 
                    (skins?.epic || 0) + 
                    (skins?.mythic || 0) + 
                    (skins?.legendary || 0) + 
                    (skins?.hyper || 0);

                // นับจำนวน Brawlers จากความยาวของ Array
                const totalBrawlers = users.account.brawlers?.length || 0;

                return (
                    <Link key={users._id} to={`/products/${users._id}`}>
                        {/* เพิ่ม p-4 (padding) และ gap-2 เพื่อให้การ์ดดูมีพื้นที่จัดเรียงสวยงามขึ้นเล็กน้อย */}
                        <div className="bg-[#606E9C] text-white rounded-2xl p-4 hover:bg-[#354064] flex flex-col gap-2"> 
                            <div className="text-lg font-bold">
                                Price : {users.price} THB
                            </div>
                            <div>
                                Status : <span className="uppercase">{users.status}</span>
                            </div>
                            <div>
                                Group : {users.account.idGroup}
                            </div>
                            <div>
                                Total Brawlers : {totalBrawlers} ตัว
                            </div>
                            <div>
                                Total Skins : {totalSkins} ชิ้น
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    </div>
</>
        )
    }

    export default TestPage