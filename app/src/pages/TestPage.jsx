import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import BannerWithCategory from "../components/BannerWithCategory"; 
import HomeContent from "../components/HomeContent";
import ExtraContent from "../components/ExtraContent"; 
import ProductList from "../components/ProductList";
import PageBackground from "../components/PageBackground";
import Footer from "../components/Footer"; 

function TestPage() {
  const [accounts, setAccounts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get("category");
  const currentSearch = searchParams.get("search") || "";

  // ถ้ามีการพิมพ์ค้นหา หรือเลือกหมวดหมู่ จะไม่ถือว่าเป็นหน้าหลัก เพื่อแสดงรายการสินค้า
  const isHomePage = (!currentCategory || currentCategory === "หน้าหลัก") && !currentSearch;

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
    const newParams = new URLSearchParams(searchParams);
    if (category === "หน้าหลัก") {
      newParams.delete("category");
    } else {
      newParams.set("category", category);
    }
    setSearchParams(newParams);
  };

  // --- ระบบกรองข้อมูลที่รองรับการค้นหาตัวอักษรและข้อความต่างๆ ได้อย่างครอบคลุม ---
  const filteredAccounts = isHomePage
    ? []
    : accounts.filter((item) => {
      console.log(item.status)
        // เช็คสถานะว่าสินค้าต้องพร้อมขาย
        const isAvailable = item.status === "avaliable";
        console.log(`isAvaliable .. ${isAvailable}`)
        // เช็คหมวดหมู่ (ถ้าไม่ได้เลือก หรืออยู่หน้าหลักแต่กดค้นหา ให้ผ่านเงื่อนไขหมวดหมู่)
        const matchCategory = (!currentCategory || currentCategory === "หน้าหลัก")
          ? true 
          : item.account?.idGroup === currentCategory;

        // แปลงคำค้นหาเป็นตัวพิมพ์เล็ก เพื่อให้รองรับทั้งตัวพิมพ์ใหญ่และเล็ก (Case-insensitive)
        const searchLower = currentSearch.toLowerCase().trim();

        // เช็คคำค้นหาจากหลายฟิลด์พร้อมกัน (ID, กลุ่มสินค้า, หัวข้อ, ชื่อ)
        const matchSearch = currentSearch === ""
          ? true
          : (
              String(item.id || "").toLowerCase().includes(searchLower) ||
              String(item.account?.idGroup || "").toLowerCase().includes(searchLower) ||
              String(item.title || "").toLowerCase().includes(searchLower) ||
              String(item.name || "").toLowerCase().includes(searchLower)
            );

        return isAvailable && matchCategory && matchSearch;
      });

  return (
    <div className="bg-[#13172B] min-h-screen w-full overflow-x-hidden text-white flex flex-col relative">
      
      {/* ลูกเล่นพื้นหลังหน้า TestPage */}
      <PageBackground />

      {/* เนื้อหาเว็บไซต์ทั้งหมด */}
      <div className="relative z-10 flex flex-col flex-1">
        <TopBar />

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
              currentCategory={currentCategory || (currentSearch ? `ผลการค้นหา: "${currentSearch}"` : "ทั้งหมด")} 
              filteredAccounts={filteredAccounts} 
            />
          )}
        </div>

        {/* ส่วน Footer ด้านล่างสุดของเว็บ */}
        <Footer />
      </div>

    </div>
  );
}

export default TestPage;