import { useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Mainpageheader({username, role}) {
  const [resposinveClick, setresposinveClick] = useState(false) // สำหรับการคลิกเพื่อแสดงเมนู
  const navigate = useNavigate(); // ใช้งาน useNavigate สำหรับการย้ายหน้า  
  return (
    <>
      {/**ส่วนที่ 1*/}
      <header className=" bg-purple-600/80 w-full h-24 flex justify-between items-center shadow-2xl">
        <div className="flex">
          <p className="m-auto p-6 text-xl text-white font-bold">
            e - Chart | ยินดีต้อนรับ, {username}
          </p>
        </div>
        {/**ส่วนที่ 2*/}
        {role === "Admin" && (
          <div className="flex p-6">
            <button 
            className="bg-purple-900 rounded-3xl transition duration-300 hover:bg-purple-900/80"
            onClick={() => setresposinveClick(!resposinveClick)}
            >
              {resposinveClick ? (
                <svg
                  viewBox="0 -8 48 64"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  strokeWidth="3.25"
                  transform="rotate(0) matrix(1 0 0 1 0 0)"
                >
                  <g
                    fill="none"
                    stroke="#FFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3.25"
                  >
                    <path d="M6 9L42 9"></path>
                    <path d="M6 19L42 19"></path>
                    <path d="M6 26L24 40L42 26"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  viewBox="0 -8 48 64"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  strokeWidth="3.25"
                  transform="rotate(0) matrix(1 0 0 1 0 0)"
                >
                  <g
                    fill="none"
                    stroke="#FFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3.25"
                  >
                    <path d="M7.94971 11.9497H39.9497"></path>
                    <path d="M7.94971 23.9497H39.9497"></path>
                    <path d="M7.94971 35.9497H39.9497"></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
        )}
      </header>
      {resposinveClick && (
          <div className="absolute bg-purple-400 w-full h-auto top-24 flex-row">
            <div className="flex justify-center m-6">
              <button className="bg-purple-900 text-white w-64 h-16 rounded-3xl transition duration-300
               hover:bg-purple-900/80">เพิ่มบัญชีเจ้าหน้าที่/อาจารย์/นทพ.</button>
            </div>
            <div className="flex justify-center m-6">
              <button className="bg-purple-900 text-white w-64 h-16 rounded-3xl transition duration-300
               hover:bg-purple-900/80">ค้นหาคนไข้</button>
            </div>
            <div className="flex justify-center m-6">
              <button className="bg-purple-900 text-white w-64 h-16 rounded-3xl transition duration-300
               hover:bg-purple-900/80">ลงทะเบียนคนไข้ใหม่</button>
            </div>
            <div className="flex justify-center m-6">
              <button className="bg-purple-900 text-white w-64 h-16 rounded-3xl transition duration-300
               hover:bg-purple-900/80">แก้ไข้ข้อมูลคนไข้</button>
            </div>
            <div className="flex justify-center m-6">
              <button className="bg-purple-900 text-white w-64 h-16 rounded-3xl transition duration-300
               hover:bg-purple-900/80">จอง/คืน ชาร์ต</button>
            </div>
            <div className="flex justify-center m-6">
              <button className="bg-purple-900 text-white w-64 h-16 rounded-3xl transition duration-300
               hover:bg-purple-900/80"
               onClick={() => {navigate('/')}}>ลงชื่อออก</button>
            </div>
            
          </div>
        )}
    </>
  );
}

export default Mainpageheader