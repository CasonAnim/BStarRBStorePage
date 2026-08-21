import { useState, useEffect } from 'react';
import AdminAddProduct from './adminAddProduct';
import { data } from 'react-router-dom';

export default function AdminPanel() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    price: '',
    status: 'available',
    idGroup: 'ไอดีเริ่มต้น',
    rare: 0, superSkin: 0, epic: 0, mythic: 0, legendary: 0, hyper: 0,
    brawlers: '',
    gems: 0, coins: 0, powerPoints: 0, bling: 0
  });
    const token = localStorage.getItem("token"); 
  // 1. ตรวจสอบสิทธิ์ตอนเปิดหน้านี้
  useEffect(() => {
    
    if (!token) {
      alert('กรุณาล็อกอินก่อนเข้าใช้งาน');
      window.location.href = '/login'; // หรือใช้ useNavigate() ของ react-router-dom
      return;
    }

    const verifyAuth = async () => {
      fetch('http://localhost:5050/profile/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => res.json())
      .then((data) => {
          if (data.role !== 1) {
            alert('คุณไม่มีสิทธิ์เข้าถึงหน้านี้ (Admin Only) roles : ' , data.role);
            window.location.href = '/'; // เตะกลับหน้าแรก
            return;
            }
            setIsAuthorized(true)
        })
      
    };

    // เรียกใช้งานฟังก์ชัน
    verifyAuth();
  }, [token]);



  

  // ถ้าอยู่ระหว่างตรวจสอบสิทธิ์ ให้ขึ้น Loading ไว้ก่อน
  if (!isAuthorized) return <div style={{ padding: '20px' }}>กำลังตรวจสอบสิทธิ์...</div>;

  return (
    <>      
        <h1>Success</h1>

        <AdminAddProduct/>
    </>
  );
}