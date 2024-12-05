import React from "react";
import Navbar from "../components/mainpage/Navbar";
import Teacherinfo from "./aboutus/Teacherinfo";
import Students from "./aboutus/Students";
import Footer from "./mainpage/Footer";

export default function Aboutus() {
  return (
    <div className="font-['Kanit'] font-normal">
      {/**Navigator bar */}
      <Navbar />
      <header className="w-full h-auto bg-black p-12 text-center text-white text-3xl font-medium">
          เกี่ยวกับเรา
      </header>
      {/**ข้อมูลอาจารย์ */}
      <Teacherinfo/>
      {/**ช้อมูลนิสิต */}
      <Students/>
      {/**Footer */}
      <Footer/>
    </div>
  );
}
