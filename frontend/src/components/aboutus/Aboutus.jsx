import React from "react";
import Navbar from "../navbar";

export default function Aboutus() {
  return (
    <div className="font-['Kanit'] font-normal">
      <Navbar />
      <header className="p-16 bg-black text-3xl text-white font-medium text-center">
        
        เกี่ยวกับเรา
        
      </header>
      <p className="my-12 font-medium text-2xl text-center">
        อาจารย์ที่ปรึกษาโครงงาน
      </p>
      {/**ข้อมูลอาจารย์ */}
      <div className="mx-96 my-12 p-10">
        <div className="flex justify-between items-center">
          <div className="overflow-hidden text-center">
            <img
              className="w-48 h-52 object-cover mb-3"
              src="http://www.ecpe.nu.ac.th/web/images/people/suradat.png"
            />
            <p> ดร.สุรเดช จิตประไพกุลศาล</p>
            <p> Dr.Suradet Jitprapaikulsan</p>
            <p> Faculty of Engineering</p>
          </div>
          <div className="overflow-hidden text-center">
            <img
              className="w-48 h-52 object-cover mb-3"
              src="https://ww2.edu.nu.ac.th/wp-content/uploads/2022/03/pic-teacher-suparat-65.png"
            />
            <p> อ.สุภารัตน์ เชื้อโชติ</p>
            <p> Suparat Chuecote</p>
            <p> Faculty of Education</p>
          </div>
        </div>
      </div>
      <p className="my-12 font-medium text-2xl text-center">สมาชิกทีม</p>
      {/**สมาชิกทีม */}
      <div>
        <p>65363810</p>
      </div>
    </div>
  );
}
