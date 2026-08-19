import { useState, useEffect } from "react";
import TopBar from "../components/TopBar";
import CategoryBar from "../components/CategoryBar";
import ProductCard from "../components/ProductCard";

function TestPage() {
  const [accounts, setAccounts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("หน้าหลัก");

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

  const filteredAccounts = accounts.filter((item) => {
    if (selectedCategory === "หน้าหลัก") {
      return false;
    }
    return item.account?.idGroup === selectedCategory;
  });

  return (
    <div className="bg-[#13172B] min-h-screen w-full overflow-x-hidden text-white flex flex-col">
      <TopBar />

      <CategoryBar onSelectCategory={(category) => setSelectedCategory(category)} />

      <div className="p-3 sm:p-6 max-w-7xl mx-auto w-full flex-1">
        <div className="mb-4 flex items-center justify-between px-1">
          <h2 className="text-base sm:text-lg font-bold text-gray-100">
            หมวดหมู่: <span className="text-[#00D09E]">{selectedCategory}</span>
          </h2>
          <span className="text-xs text-gray-400">
            พบสินค้า {filteredAccounts.length} รายการ
          </span>
        </div>

        {filteredAccounts.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mt-2">
            {filteredAccounts.map((item) => (
              <ProductCard key={item._id || item.id} data={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#181D35] rounded-2xl border border-[#2A3150] mt-4">
            <p className="text-gray-400 text-sm">ยังไม่มีสินค้าในหมวดหมู่นี้</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestPage;