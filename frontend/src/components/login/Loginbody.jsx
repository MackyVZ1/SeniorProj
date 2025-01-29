import { useState } from 'react'
import React from 'react'
import Loginbg from './Loginbg'

function Loginbody() {
  const [username, setUsername] = useState(null); // ชื่อผู้ใช้
  const [password, setPassword] = useState(null); // รหัสผา่น

  return (
    <div className="relative flex items-center justify-center p-12">
      {/*พื้นหลังของหน้าล็อคอิน*/}
      <Loginbg/>
      {/*หน้าต่างหน้าลล็อคอิน*/}
      <div className="absolute bg-purple-400 w-4/5 h-96 opacity-80 top-12 flex-row rounded-4xl shadow-2xl shadow-purple-700 ring-2 ring-purple-400">
        <div className="text-center p-2">
          <h1 className="text-2xl font-bold text-white drop-shadow-lg"> .: e-chart :.</h1>
          <h2 className="text-md font-semibold text-white p-2 drop-shadow-lg">เข้าสู่ระบบ</h2>
        </div>
        {/*ส่วนกรอกข้อมูล*/}
        <div className="text-center items-center justify-center p-3">
          <p className="text-md font-semibold text-white mb-2 drop-shadow-lg">ชื่อผู้ใช้</p>
          <input
            className=" bg-white rounded-2xl w-4/5 p-5 h-10 font-medium"
            type="text"
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
          />
          <p className="pb-6"></p>
          <p className="text-md font-semibold text-white mb-2 drop-shadow-lg">รหัสผ่าน</p>
          <input
            className=" bg-white rounded-2xl w-4/5 p-5 h-10"
            type="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
        {/*ปุ่มเข้าสู่ระบบ*/}
        <div className="justify-center items-center flex p-6">
          <button className="bg-purple-600 opa rounded-2xl w-24 h-12 
          font-semibold text-white 
          drop-shadow-lg transition duration-500
          hover:bg-white hover:text-purple-700 hover:border-purple-200"
          onClick={null}>
            ยืนยัน
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Loginbody