import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import Loginpopup from "./Loginpopup";


export default function Navbar() {
  // ลิงค์รูป
  const enLogo =
    "https://upload.wikimedia.org/wikipedia/th/thumb/1/1d/NU_ENG_2015_Logo.png/800px-NU_ENG_2015_Logo.png";
  const eduLogo =
    "https://nclist.fiet.kmutt.ac.th/images/nclist2022/logo/04_logo_NU.png";

  // ตัวแปรใช้ย้ายหน้าเว็บ
  const nav = useNavigate()

  // ตัวแปรเก็บค่าต่างๆ
  const [logging, setLogging] = useState(false) // เก็บข้อมูลจะเปิดหน้าล็อคอิน

  const handleLoginpopup = () => {
    setLogging(true)
  }

  const closePopup = () => {
    setLogging(false)
  }

  return (
    <nav className="bg-red-500 flex overflow-hidden shadow-md shadow-red-400 sticky w-full top-0 z-50">
      <div
        className="bg-slate-100 flex p-3 pr-10 -skew-x-[-24deg]"
        style={{ marginLeft: "-20px", paddingLeft: "20px" }}
      >
        <img className="w-16 h-16 skew-x-[-24deg] ml-8 my-1" src={enLogo} />
        <img className="w-16 h-16 skew-x-[-24deg] ml-8 my-1" src={eduLogo} />
      </div>
      <a href="/" className="ml-5 py-8 font-semibold text-2xl text-white hover:underline">
        เกมพัฒนาทักษะทางคณิตศาสตร์ | Mathimatical Game
      </a>
      <button
        onClick={() => {nav('/aboutus')}}
        className="text-white border-2 rounded-2xl ml-auto my-6 pl-6 pr-6 hover:text-red-500 hover:bg-white hover:transfrom duration-150 "
      >
        เกี่ยวกับเรา
      </button>
      <button
        onClick={handleLoginpopup}
        className="text-white border-2 rounded-2xl ml-5 mr-5 my-6 pl-6 pr-6 hover:text-red-500 hover:bg-white hover:transfrom duration-150"
      >
        ลงชื่อเข้าใช้ / สมัครบัญชี
      </button>
      {logging && <Loginpopup onOpen={logging} onClose={closePopup}/>}
    </nav>
  );
}
