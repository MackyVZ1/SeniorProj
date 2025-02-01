import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios' // ใช้งาน axios
import Loginbg from './Loginbg'
import {useNavigate} from 'react-router-dom' // ใช้งาน useNavigate

function Loginbody() {
  const [username, setUsername] = useState(''); // ชื่อผู้ใช้
  const [password, setPassword] = useState(''); // รหัสผา่น
  const [userData, setuserData] = useState(''); // ข้อมูลผู้ใช้
  const [loginError, setloginError] = useState(''); // ข้อผิดพลาดในการเข้าสู่ระบบ
  const navigate = useNavigate(); // ใช้งาน useNavigate สำหรับการย้ายหน้า

  // Login
  const login = async () => {
    // ถ้าไม่ได้กรอกชื่อผู้ใช้หรือรหัสผ่าน
    if(!username && !password){
      setloginError('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
    }
    else if(!password){
      setloginError('กรุณากรอกรหัสผ่าน');
    }
    else if(!username){
      setloginError('กรุณากรอกชื่อผู้ใช้');
    }
    else{
      try {
        const dataResponse = await axios.post('http://localhost:3000/api/login', {username, password});
        if(dataResponse.data[0]){
          setuserData(dataResponse.data[0]);
          navigate('/mainpage', {state: {userData: dataResponse.data[0]}}); // ย้ายหน้าไปที่ Mainpage
        }
      }catch(e){
        setuserData(e.message || 'Login Failed!');
      }
    }
  }

  useEffect(() => {
    console.log(`User: ${userData.username}, Role: ${userData.role}`);
  }, [userData])

  return (
    <div className="relative flex items-center justify-center p-12">
      {/*พื้นหลังของหน้าล็อคอิน*/}
      <Loginbg/>
      {/*หน้าต่างหน้าลล็อคอิน*/}
      <div className="absolute bg-purple-400 w-86 h-96 opacity-80 top-12 flex-row rounded-4xl shadow-2xl shadow-purple-700 ring-2 ring-purple-400
      sm:w-104 sm:top-20
      md:w-136 
      lg:w-162">
        <div className="text-center p-2">
          <h1 className="text-2xl font-bold text-white drop-shadow-lg"> .: e-chart :.</h1>
          <h2 className="text-md font-semibold text-white p-2 drop-shadow-lg">เข้าสู่ระบบ</h2>
        </div>
        {/*ส่วนกรอกข้อมูล*/}
        <div className="text-center items-center justify-center p-3">
          {/**ชื่อผู้ใช้ */}
          <p className="text-md font-semibold text-white mb-2 drop-shadow-lg">ชื่อผู้ใช้</p>
          <input
            className=" bg-white rounded-2xl w-64 p-5 h-10 font-medium text-center md:w-76"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          />
          <p className="pb-6"></p>
          {/**ชื่อผู้ใช้ */}
          <p className="text-md font-semibold text-white mb-2 drop-shadow-lg">รหัสผ่าน</p>
          <input
            className=" bg-white rounded-2xl w-64 p-5 h-10 text-center md:w-76"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/*ปุ่มเข้าสู่ระบบ*/}
        <div className="justify-center items-center flex p-6">
          <button className="bg-purple-600 rounded-2xl w-28 h-12 
          font-semibold text-white drop-shadow-lg transition duration-500 
          hover:bg-white hover:text-purple-700 hover:border-purple-200"
          onClick={login}>
            ยืนยัน
          </button>
        </div>
        {/*ข้อผิดพลาดในการเข้าสู่ระบบ*/}
        {loginError && <p className="text-red-500 text-center p-10 sm:text-2xl">{loginError}</p>}
      </div>
    </div>
  )
}

export default Loginbody