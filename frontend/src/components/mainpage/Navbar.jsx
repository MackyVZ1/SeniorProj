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
  const [logging, setLogging] = useState(false); // เก็บข้อมูลจะเปิดหน้าล็อคอิน

  // เมิ่อกดปุ่ม ลงชื่อเข้าใช้
  const openPopup = () => {
    setLogging(true);
  };

  // กดปิดหน้าต่างลงชื่อเข้าใช้
  const closePopup = () => {
    setLogging(false);
  };

  return (
    <nav className="bg-red-500 shadow-red-600 shadow-lg flex justify-between sm:flex sm:justify-between sticky top-0 z-50 md:flex md:justify-between">
      <div className="bg-white flex justify-between p-6 -skew-x-[-24deg]"
      style={{ marginLeft: "-40px"}}>
        <img className="w-24 h-24 skew-x-[-24deg] ml-8 my-1" src={enLogo} />
        <img className="w-24 h-24 skew-x-[-24deg] ml-8 my-1" src={eduLogo} />
      </div>
      <div className="bg-white p-6 border-8 border-black"></div>
      <div className="bg-white p-6 border-8 border-black"></div>
    </nav>
  );
}
