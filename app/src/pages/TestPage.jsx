import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import BannerWithCategory from "../components/BannerWithCategory"; // ใช้คอมโพเนนต์รวมตัวใหม่
import HomeContent from "../components/HomeContent";
import ExtraContent from "../components/ExtraContent"; 
import ProductList from "../components/ProductList";
import PageBackground from "../components/PageBackground";

function TestPage() {
  const [accounts, setAccounts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get("category");
  const isHomePage = !currentCategory || currentCategory === "หน้าหลัก";

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

  const handleSelectCategory = (category) => {
    if (category === "หน้าหลัก") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredAccounts = isHomePage
    ? []
    : accounts.filter((item) => item.account?.idGroup === currentCategory);

  return (
    <div className="bg-[#13172B] min-h-screen w-full overflow-x-hidden text-white flex flex-col relative">
      
      {/* ลูกเล่นพื้นหลังหน้า TestPage */}
      <PageBackground />

      {/* เนื้อหาเว็บไซต์ */}
      <div className="relative z-10 flex flex-col flex-1">
        <TopBar />

        {/* แบนเนอร์และแถบหมวดหมู่ขนาดเท่ากันและติดกันในกรอบเดียว */}
        <BannerWithCategory 
          selectedCategory={isHomePage ? "หน้าหลัก" : currentCategory} 
          onSelectCategory={handleSelectCategory} 
        />

        <div className="p-3 sm:p-6 max-w-7xl mx-auto w-full flex-1">
          {isHomePage ? (
            <div className="space-y-12">
              <HomeContent />
              <ExtraContent />
            </div>
          ) : (
            <ProductList 
              currentCategory={currentCategory} 
              filteredAccounts={filteredAccounts} 
            />
          )}
        </div>
      </div>

    </div>
  );
}

export default TestPage;