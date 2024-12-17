import React, { useState, useEffect} from "react";


function Floristrynavbar() {
  // ตัวแปร
  const [menuOpen, setMenuOpen] = useState(false); // ควบคุมการเปิด/ปิดเมนู
  const [openLogin, setOpenLogin] = useState(false); // ควบคุมการเปิดหน้าต่างลงชื่อเข้าใช้
  const [user, setUser] = useState(null); // เก็บข้อมูลผู้ใช้

  // โหลดข้อมูลผู้ใช้จาก sessionStorage เมื่อ Component โหลดครั้งแรก
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // ดึงข้อมูลจาก sessionStorage มาใช้
    }
  }, []);

  return (
    <nav className="font-['Kanit'] font-normal bg-yellow-500 w-full h-auto flex justify-between">
      <div className="m-6 text-white font-semibold text-4xl">Floristry🌻</div>
      <div className="flex justify-end">
        <button className="text-white text-lg px-4 my-4 mr-2 transition duration-150 relative group">
          ลงชื่อเข้าใช้ / สมัครบัญชี
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>
        
      </div>
    </nav>
  );
}

export default Floristrynavbar;
