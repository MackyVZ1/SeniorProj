import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Mainpagenavmobile({ username, roleID, setAction }) {
  const navigate = useNavigate();

  // Responsive on mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Signout
  const handleSignout = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/logout", {
        username,
      });
      if (response.status === 200) {
        console.log(response.data.message); // Logout successful
        alert("ลงชื่อออกสำเร็จ");
        navigate("/"); // Redirect to login page
      } else {
        console.error("Logout failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <>
      {/** Admin */}
      {roleID === 1 && (
        <nav className="sm:hidden sm:w-full sm:h-full sm:justify-between sm:items-center">
          {/** Responsive on mobile */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="flex w-14 h-14 mr-2 bg-purple-700 rounded-2xl cursor-pointer transition duration-300 hover:bg-purple-700/60"
            >
              <img
                src={
                  isOpen
                    ? "/responsive_icon(pressed).svg"
                    : "/responsive_icon.svg"
                }
                className="invert brightness-200 w-12 h-12 m-auto"
              />
            </button>
          </div>
          {isOpen && (
            <div className="absolute flex-grid top-18 left-0 w-full h-auto bg-purple-500 text-white shadow-md sm:hidden">
              <button
                className="w-full py-6 pb-6 px-4 bg-purple-700 hover:bg-purple-700/50 text-end"
                onClick={() => setAction("action1")}
              >
                จัดการข้อมูลผู้ใช้
              </button>
              <button
                className="w-full py-6 pb-6 px-4 bg-purple-700 hover:bg-purple-700/50 text-end"
                onClick={() => setAction("Insert patient")}
              >
                เพิ่มข้อมูลคนไข้ใหม่
              </button>
              <button
                className="w-full py-6 pb-6 px-4 bg-purple-700 hover:bg-purple-700/50 text-end"
                onClick={handleSignout}
              >
                ลงชื่อออก
              </button>
            </div>
          )}
        </nav>
      )}
    </>
  );
}

export default Mainpagenavmobile;
