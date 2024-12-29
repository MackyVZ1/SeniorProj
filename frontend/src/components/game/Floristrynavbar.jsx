import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Login from "../mainpage/Login";


export default function Floristrynavbar() {
  // ตัวแปรต่างๆ
    const enLogo =
      "https://upload.wikimedia.org/wikipedia/th/thumb/1/1d/NU_ENG_2015_Logo.png/800px-NU_ENG_2015_Logo.png";
    const eduLogo =
      "https://nclist.fiet.kmutt.ac.th/images/nclist2022/logo/04_logo_NU.png";
  
    const nav = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false); // ควบคุมการเปิด/ปิดเมนู
    const [openLogin, setOpenLogin] = useState(false); // ควบคุมการเปิดหน้าต่างลงชื่อเข้าใช้
    const [user, setUser] = useState(null); // เก็บข้อมูลผู้ใช้
  
    // ฟังก์ชันต่างๆ
    const handleLogin = (userData) => {
      setUser(userData); // อัปเดตข้อมูลผู้ใช้ใน State
      sessionStorage.setItem("user", JSON.stringify(userData)); // เก็บข้อมูลใน sessionStorage
      setOpenLogin(false); // ปิดหน้าต่างล็อกอิน
    };
  
    const handleLogout = () => {
      setUser(null); // ล้างข้อมูลผู้ใช้
      sessionStorage.removeItem("user"); // ลบข้อมูลใน sessionStorage
      setMenuOpen(false); // ปิดลงชื่อออก
    };
  
    // โหลดข้อมูลผู้ใช้จาก sessionStorage เมื่อ Component โหลดครั้งแรก
    useEffect(() => {
      const storedUser = sessionStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser)); // ดึงข้อมูลจาก sessionStorage มาใช้
      }
    }, []);
  
    return (
      <nav className="w-auto h-16 bg-yellow-500 shadow-yellow-300 shadow-lg flex justify-between sticky top-0 z-50 md:h-18 lg:h-20">
        {/* ชื่อเว็บเกม */}
        <div className="text-center py-5 mx-5 text-4xl font-bold text-white sm:py-3 md:py-3 lg:py-5">Floristry🌻🪙</div>
        {/* ปุ่มสำหรับ Responsive */}
        <button
          className="ml-auto p-4 xl:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
  
        {/* Desktop View */}
        <div className={`flex item-center gap-6 sm:hidden md:hidden xl:flex`}>
  
          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white px-2 py-2 my-5 mr-4 flex items-center transition duration-150 relative group"
              >
                {user.email}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ml-2 transition-transform ${
                    menuOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
  
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    ลงชื่อออก
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="text-white  px-4 my-4 mr-2 transition duration-150 relative group"
              onClick={() => setOpenLogin(true)}
            >
              ลงชื่อเข้าใช้/สมัครบัญชี
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          )}
        </div>
  
        {/* Pop-up Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-0 w-full bg-white shadow-lg shadow-yellow-300 flex flex-col items-center gap-4 py-4 my-4 sm:my-0 lg:my-4 xl:hidden">
            {user ? (
              <>
                <span className="w-3/4 text-yellow-500 border-2 rounded-lg px-4 py-2 text-center">
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="w-3/4 text-yellow-500 border-2 rounded-lg px-4 py-2 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition duration-150"
                >
                  ลงชื่อออก
                </button>
              </>
            ) : (
              <button
                className="w-3/4 text-yellow-500 border-2 rounded-lg px-4 py-2 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition duration-150"
                onClick={() => setOpenLogin(true)}
              >
                ลงชื่อเข้าใช้/สมัครบัญชี
              </button>
            )}
          </div>
        )}
  
        {/* Pop-up Login */}
        {openLogin && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-40">
            <div
              className="bg-white rounded-lg shadow-lg p-6 relative text-center flex-row justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 focus:outline-none"
                onClick={() => setOpenLogin(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h1 className="text-xl font-medium text-black mb-4">
                ลงชื่อเข้าใช้ / สมัครบัญชี
              </h1>
              <div className="w-full flex justify-center p-16">
                <Login
                  setUser={(user) => {
                    handleLogin(user);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    );
}
