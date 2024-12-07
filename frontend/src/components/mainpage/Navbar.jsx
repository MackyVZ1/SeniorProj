import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

export default function Navbar() {
  // ลิงค์รูป
  const enLogo =
    "https://upload.wikimedia.org/wikipedia/th/thumb/1/1d/NU_ENG_2015_Logo.png/800px-NU_ENG_2015_Logo.png";
  const eduLogo =
    "https://nclist.fiet.kmutt.ac.th/images/nclist2022/logo/04_logo_NU.png";

  // ตัวแปรใช้ย้ายหน้าเว็บ
  const nav = useNavigate();

  // ตัวแปรเก็บค่าต่างๆ
  const [menuOpen, setMenuOpen] = useState(false); // ควบคุมการเปิด/ปิดเมนู
  const [openLogin, setopenLogin] = useState(false) // คงบคุมการเปิดหน้าต่างลงชื่อเข้าใช้

  return (
    // Navigator Bar
    <nav className="w-auto h-16 bg-red-500 shadow-red-600 shadow-lg flex sticky top-0 z-50 md:h-18 lg:h-20">
      {/* Logo */}
      <div
        className="bg-white flex justify-between -skew-x-[-24deg] px-12"
        style={{ marginLeft: "-40px" }}
      >
        <img className="w-auto h-auto skew-x-[-24deg] ml-8 my-1" src={enLogo} />
        <img
          className="w-auto h-auto skew-x-[-24deg] ml-8 my-1"
          src={eduLogo}
        />
      </div>
      {/**ชื่อเว็บ */}
      <a
        href="/"
        className="text-white text-2xl font-medium p-auto m-auto sm:text-sm md:text-base lg:text-xl"
      >
        เกมพัฒนาทักษะทางคณิตศาสตร์ | Mathimatical Game
      </a>
      {/**ปุ่มกดสำหรับ Responsive */}
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
      {/**Desktop View */}
      <div className="flex gap-6 sm:hidden md:hidden xl:flex">
        <button
          onClick={() => nav("/aboutus")}
          className="text-white  border-2 rounded-lg px-4 my-4 hover:bg-white hover:text-red-500 transition duration-150"
        >
          เกี่ยวกับเรา
        </button>
        <button
          className="text-white  border-2 rounded-lg px-4 my-4 mr-2 hover:bg-white hover:text-red-500 transition duration-150"
          onClick={() => setopenLogin(true)}
        >
          ลงชื่อเข้าใช้/สมัครบัญชี
        </button>
      </div>

      {/* Pop-up Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-lg shadow-red-500 flex flex-col items-center gap-4 py-4 my-4 sm:my-0 lg:my-4 xl:hidden">
          <button
            onClick={() => nav("/aboutus")}
            className="w-3/4 text-red-500 border-2 rounded-lg px-4 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition duration-150"
          >
            เกี่ยวกับเรา
          </button>
          <button className="w-3/4 text-red-500 border-2 rounded-lg px-4 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition duration-150"
          onClick={() => setopenLogin(true)}>
            ลงชื่อเข้าใช้/สมัครบัญชี
          </button>
        </div>
      )}

      {/* Pop-up Login */}
      {openLogin && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-40">
          <div
            className="bg-white rounded-lg shadow-lg p-6 relative text-center flex-row justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 focus:outline-none"
              onClick={() => setopenLogin(false)}
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
            {/* ชื่อหัวข้อ */}
            <h1 className="text-xl font-medium text-black mb-4">
              ลงชื่อเข้าใช้ / สมัครบัญชี
            </h1>
            {/* ส่วนของ Google Authentication */}
            <div className="w-full flex justify-center p-16">
              <Login />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
