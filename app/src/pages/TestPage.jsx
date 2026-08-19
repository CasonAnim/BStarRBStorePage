import { useState, useEffect } from "react";
import TopBar from "../components/TopBar";
import ProductCard from "../components/ProductCard";

function TestPage() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function getAccounts() {
      try {
        const response = await fetch("http://localhost:5050/products");
        const data = await response.json();
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getAccounts();
  }, []);

  return (
    <div className="bg-[#13172B] min-h-screen w-full overflow-x-hidden">
      <TopBar />

      <div className="p-3 sm:p-6 max-w-7xl mx-auto">
        {/* 🌟 เปลี่ยนเป็น xl:grid-cols-2 (1280px ขึ้นไปถึงจะแยก 2 คอลัมน์) จอเล็กกว่านั้นเรียง 1 คอลัมน์ยาวลงมา */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mt-2 sm:mt-6">
          {accounts.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestPage;