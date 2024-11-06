import React from "react";
import Navbar from "../components/mainpage/Navbar";
import Teacherinfo from "./aboutus/Teacherinfo";

export default function Aboutus() {
  return (
    <div className="font-['Kanit'] font-normal">
      {/**Navigator bar */}
      <Navbar />
      <header className="p-16 bg-black text-3xl text-white font-medium text-center"> เกี่ยวกับเรา </header>
      {/**ข้อมูลอาจารย์ */}
      <Teacherinfo/>
      {/**ช้อมูลนิสิต */}
    </div>
  );
}
