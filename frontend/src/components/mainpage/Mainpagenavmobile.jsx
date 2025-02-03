import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Mainpagenavmobile({ role, isResponsiveClick }) {
  const [responsive, setResponesive] = useState(isResponsiveClick);
  const navigate = useNavigate();
  return (
    <>
      {/**on Mobile */}
      <nav className="flex sm:hidden">
      {/**สำหรับ admin */}
      {role === "Admin" && (
        {/** Mobile */},
        <button
          className="m-6 bg-purple-900 rounded-2xl transition duration-300 hover:bg-purple-900/80"
          onClick={() => setResponesive(!responsive)}
        >
          {/**ถ้าเกิดการกด ไอคอนจะเปลี่ยน*/}
          {responsive ? (
            <svg
              viewBox="0 -15 46 80"
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
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
              viewBox="0 -15 46 80"
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
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
      )}
      {/** เมื่อเกิดการ Navigator Icon */}
      {responsive && (
        <div className="fixed bg-purple-400 w-full h-auto top-24 left-0 flex-row">
          <div className="flex justify-center m-6">
            <button
              className="bg-purple-900 text-white text-sm w-64 h-16 rounded-3xl transition duration-300
               hover:bg-purple-900/80"
            >
              เพิ่มบัญชีเจ้าหน้าที่/อาจารย์/นทพ.
            </button>
          </div>
          <div className="flex justify-center m-6">
            <button
              className="bg-purple-900 text-white text-sm w-64 h-16  rounded-3xl transition duration-300
               hover:bg-purple-900/80"
            >
              ค้นหาคนไข้
            </button>
          </div>
          <div className="flex justify-center m-6">
            <button
              className="bg-purple-900 text-white text-sm w-64 h-16  rounded-3xl transition duration-300
               hover:bg-purple-900/80"
            >
              ลงทะเบียนคนไข้ใหม่
            </button>
          </div>
          <div className="flex justify-center m-6">
            <button
              className="bg-purple-900 text-white text-sm w-64 h-16  rounded-3xl transition duration-300
               hover:bg-purple-900/80"
            >
              แก้ไขข้อมูลคนไข้
            </button>
          </div>
          <div className="flex justify-center m-6">
            <button
              className="bg-purple-900 text-white text-sm w-64 h-16 rounded-3xl transition duration-300
               hover:bg-purple-900/80"
            >
              จอง/คืน ชาร์ต
            </button>
          </div>
          <div className="flex justify-center m-6">
            <button
              className="bg-purple-900 text-white text-sm w-64 h-16 rounded-3xl transition duration-300
               hover:bg-purple-900/80"
              onClick={() => {
                navigate("/");
              }}
            >
              ลงชื่อออก
            </button>
          </div>
        </div>
      )}
      </nav>
    </>
  );
}

export default Mainpagenavmobile;
