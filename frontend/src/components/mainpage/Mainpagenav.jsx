import React from 'react'
import { useNavigate } from 'react-router-dom'

function Mainpagenav({username, role}) {
    const navigate = useNavigate()
  return (
    <nav className='hidden sm:flex sm:w-full sm:h-16
     sm:bg-purple-600 sm:shadow-md sm:shadow-purple-600
     sm:justify-between sm:items-center'>
        <button className="w-full h-full text-white text-sm font-medium transition duration-300 hover:bg-purple-800 ">เพิ่มบัญชีเจ้าหน้าที่/อาจารย์/นทพ.</button>
        <button className="w-full h-full  text-white text-sm font-medium transition duration-300 hover:bg-purple-800 ">ค้นหาคนไข้</button>
        <button className="w-full h-full  text-white text-sm font-medium transition duration-300 hover:bg-purple-800 ">ลงทะเบียนคนไข้ใหม่</button>
        <button className="w-full h-full  text-white text-sm font-medium transition duration-300 hover:bg-purple-800 ">แก้ไขข้อมูลคนไข้</button>
        <button className="w-full h-full  text-white text-sm font-medium transition duration-300 hover:bg-purple-800 ">จอง/คืน ชาร์ต</button>
    </nav>
  )
}

export default Mainpagenav