import { useState, useEffect } from 'react';

// ==========================================
// 1. ตัวแปรคงที่ (Constants)
// ==========================================
const BRAWLERS_LIST = [
  // Starting Brawler
  "Shelly",

  "Colt", "Bull", "Brock", "Barley", "Nita", "El Primo", "Poco", "Rosa",

  "Rico", "Jessie", "Dynamike", "Darryl", "Penny", "Tick", "Carl", "8-Bit", "Jacky", "Gus",

  "Bo", "Piper", "Pam", "Frank", "Bibi", "Bea", "Emz", "Gale", "Nani", "Colette",
  "Edgar", "Stu", "Belle", "Grom", "Griff", "Ash", "Lola", "Bonnie", "Sam", "Mandy",
  "Maisie", "Hank", "Pearl", "Larry & Lawrie", "Angelo", "Berry", "Shade", "Meeple", "Trunk", "Bolt",

  "Mortis", "Tara", "Gene", "Mr. P", "Max", "Sprout", "Lou", "Byron", "Ruffs", "Squeak",
  "Buzz", "Fang", "Eve", "Janet", "Otis", "Buster", "Gray", "R-T", "Willow", "Doug",
  "Chuck", "Charlie", "Mico", "Melodie", "Lily", "Clancy", "Moe", "Juju", "Ollie", "Lumi",
  "Finx", "Jae-Yong", "Alli", "Mina", "Ziggy", "Gigi", "Glowy", "Najia", "Damian", "Starr Nova", "Wendy",

  "Spike", "Crow", "Leon", "Sandy", "Surge", "Amber", "Meg", "Chester", "Cordelius", "Kit",
  "Draco", "Kenji", "Pierce", "Nori",

  "Kaze", "Sirius",
];

// ==========================================
// 2. Component หลัก: AdminAddProduct
// ==========================================
export default function AdminAddProduct() {

  const [formData, setFormData] = useState({
    id: '', price: '', status: 'available', idGroup: 'ไอดีเริ่มต้น',
    rare: 0, superSkin: 0, epic: 0, mythic: 0, legendary: 0, hyper: 0,
    gems: 0, coins: 0, powerPoints: 0, bling: 0,
    brawlers: [] // เก็บเป็น Array
  });


  // จัดการการเปลี่ยนค่า Input ทั่วไป
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // จัดการการ Submit ฟอร์ม
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      price: Number(formData.price),

      account: {
        idGroup: formData.idGroup,
        skins: {
          rare: Number(formData.rare), super: Number(formData.superSkin),
          epic: Number(formData.epic), mythic: Number(formData.mythic),
          legendary: Number(formData.legendary), hyper: Number(formData.hyper)
        },
        brawlers: formData.brawlers, 
        currencies: {
          gems: Number(formData.gems), coins: Number(formData.coins),
          powerPoints: Number(formData.powerPoints), bling: Number(formData.bling)
        }
      }
    };

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5050/admin', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert('เพิ่มสินค้าสำเร็จ!');
        // สามารถเพิ่มโค้ดรีเซ็ตฟอร์มตรงนี้ได้ถ้าต้องการ
      } else {
        alert('เกิดข้อผิดพลาดในการเพิ่มสินค้า');
      }
    } catch (error) {
      alert('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้');
    }
  };



  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>เพิ่มสินค้าใหม่ , {BRAWLERS_LIST.length} (Admin Panel)</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <fieldset>
          <legend>ข้อมูลพื้นฐาน</legend>
          <div><label>Price: <input type="number" name="price" value={formData.price} onChange={handleChange} required /></label></div>
          <div>
            
          </div>
          <div><label>Group ID: <input type="text" name="idGroup" value={formData.idGroup} onChange={handleChange} /></label></div>
        </fieldset>

        <fieldset>
          <legend>สกิน (Skins)</legend>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
            <label>Rare: <input type="number" name="rare" value={formData.rare} onChange={handleChange} min="0" /></label>
            <label>Super: <input type="number" name="superSkin" value={formData.superSkin} onChange={handleChange} min="0" /></label>
            <label>Epic: <input type="number" name="epic" value={formData.epic} onChange={handleChange} min="0" /></label>
            <label>Mythic: <input type="number" name="mythic" value={formData.mythic} onChange={handleChange} min="0" /></label>
            <label>Legendary: <input type="number" name="legendary" value={formData.legendary} onChange={handleChange} min="0" /></label>
            <label>Hyper: <input type="number" name="hyper" value={formData.hyper} onChange={handleChange} min="0" /></label>
          </div>
        </fieldset>

        {/* เรียกใช้ Sub-component สำหรับ Brawlers */}
        <BrawlerSelector formData={formData} setFormData={setFormData} />

        <fieldset>
          <legend>ทรัพยากร (Currencies)</legend>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <label>Gems: <input type="number" name="gems" value={formData.gems} onChange={handleChange} min="0" /></label>
            <label>Coins: <input type="number" name="coins" value={formData.coins} onChange={handleChange} min="0" /></label>
            <label>Power Points: <input type="number" name="powerPoints" value={formData.powerPoints} onChange={handleChange} min="0" /></label>
            <label>Bling: <input type="number" name="bling" value={formData.bling} onChange={handleChange} min="0" /></label>
          </div>
        </fieldset>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          บันทึกสินค้า
        </button>
      </form>
    </div>
  );
}

// ==========================================
// 3. Sub-component: ตัวเลือก Brawlers
// ==========================================
// แยกออกมาเพื่อให้ Component หลักดูไม่รก
function BrawlerSelector({ formData, setFormData }) {
  const handleBrawlerToggle = (brawlerName) => {
    setFormData((prev) => {
      const isSelected = prev.brawlers.includes(brawlerName);
      if (isSelected) {
        return { ...prev, brawlers: prev.brawlers.filter(b => b !== brawlerName) };
      }
      return { ...prev, brawlers: [...prev.brawlers, brawlerName] };
    });
  };

  const handleSelectAll = () => setFormData(prev => ({ ...prev, brawlers: [...BRAWLERS_LIST] }));
  const handleDeselectAll = () => setFormData(prev => ({ ...prev, brawlers: [] }));

  return (
    <fieldset>
      <legend>Brawlers (เลือกแล้ว: {formData.brawlers.length} ตัว)</legend>
      <div style={{ marginBottom: '10px' }}>
        <button type="button" onClick={handleSelectAll} style={{ marginRight: '10px' }}>เลือกทั้งหมด</button>
        <button type="button" onClick={handleDeselectAll}>ยกเลิกทั้งหมด</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '10px' }}>
        {BRAWLERS_LIST.map((brawler) => (
          <label key={brawler} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <input
              type="checkbox"
              checked={formData.brawlers.includes(brawler)}
              onChange={() => handleBrawlerToggle(brawler)}
            />
            {brawler}
          </label>
        ))}
      </div>
    </fieldset>
  );
}