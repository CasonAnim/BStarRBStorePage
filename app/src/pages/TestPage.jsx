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
                        {account.map((users)=> (
                            <Link key={users.id} to={`/products/${users.id}`}>
                            <div key={users.id} className="bg-[#606E9C] text-white rounded-2xl hover:bg-[#354064]"> 
                                <div>
                                    ID : {users.id}
                                </div>
                                <div>
                                    Price : {users.price} THB
                                </div>
                                <div>
                                    Seller : {users.seller}
                                </div>
                                <div>
                                    Status : {users.status}
                                </div>
                                <div>
                                    Group : {users.account.idGroup}
                                </div>
                                <div>
                                    <ul>
                                    Skins : 
                                        <li>Rare : {users.account.skins.rare}</li>
                                        <li>Epic : {users.account.skins.epic}</li>
                                        <li>Legendary : {users.account.skins.legendary}</li>
                                        <li>Mythic : {users.account.skins.mythic}</li>
                                        <li>Super : {users.account.skins.super}</li>
                                        <li>Hyper : {users.account.skins.hyper}</li>
                                    </ul>
                                </div>

                                    <div>
                                        <ul>
                                        Brawlers :
                                            {users.account.brawlers.map((brawler, index) => (
                                                <li key={index}>{brawler}</li>
                                            ))}
                                        </ul>
                                    </div>

                                <div>
                                    <ul>
                                    Currencies : 
                                        <li>Gem : {users.account.currencies.gems}</li>
                                        <li>Coin : {users.account.currencies.coins}</li>
                                        <li>PowerPoint : {users.account.currencies.powerPoints}</li>
                                        <li>StarPoint : {users.account.currencies.starPoints}</li>
                                        
                                    </ul>
                                </div>
                                {/* <div>
                                    Created : N/A
                                    </div> */}
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    export default TestPage