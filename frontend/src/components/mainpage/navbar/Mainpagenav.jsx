import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Mainpagenav({ username, roleID, setAction }) {
  const navigate = useNavigate();

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
        <nav className="hidden sm:flex sm:bg-purple-700 sm:w-full sm:h-14 sm:justify-between sm:items-center sm:text-white">
          <button className="h-full w-full transition duration-150 hover:bg-purple-600" onClick={() => setAction("Manage user")}>จัดการข้อมูลผู้ใช้</button>
          <button className="h-full w-full transition duration-150 hover:bg-purple-600">ค้นหาคนไข้</button>
          <button className="h-full w-full transition duration-150 hover:bg-purple-600" onClick={() => setAction("Insert patient")}>เพิ่มข้อมูลคนไข้ใหม่</button>
          <button className="h-full w-full transition duration-150 hover:bg-purple-600">จอง/คืนชาร์ต</button>
          <button className="h-full w-full transition duration-150 hover:bg-purple-600" onClick={handleSignout}>ลงชื่อออก</button>
        </nav>
      )}
    </>
  );
}

export default Mainpagenav;