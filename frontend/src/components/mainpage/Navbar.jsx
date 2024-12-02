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
    <nav className="w-auto h-16 bg-red-500 shadow-red-600 shadow-lg flex sticky top-0 z-50 sm:h-16 md:h-18 lg:h-20">
      <div className="bg-white flex justify-between -skew-x-[-24deg] px-12"
      style={{ marginLeft: "-40px"}}>
        <img className="w-auto h-auto skew-x-[-24deg] ml-8 my-1" src={enLogo} />
        <img className="w-auto h-auto skew-x-[-24deg] ml-8 my-1" src={eduLogo} />
      </div>
      <div className="text-white text-2xl font-medium p-auto m-auto">เกมพัฒนาทักษะทางคณิตศาสตร์</div>
    </nav>
  );
}
