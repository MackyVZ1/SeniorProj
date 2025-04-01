import axios from 'axios';
import React, {useState} from 'react'

function Addaccount() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("");
  const [addError, setaddError] = useState("") // ใช้แสดง error
  const totalRole = ["Admin", "Teacher", "Student", "Staff"]

  // เพิ่มข้อมูล
  const insertAccount = async () => {
    // ถ้าไม่ได้กรอกชื่อผู้ใช้หรือรหัสผ่าน
    if(!username && !password && !role){
      setaddError('กรุณากรอกชื่อผู้ใช้, รหัสผ่าน และ role');
    }
    else if(!password){
      setaddError('กรุณากรอกรหัสผ่าน');
    }
    else if(!username){
      setaddError('กรุณากรอกชื่อผู้ใช้');
    }
    else if(!role){
      setaddError('กรุณาเลือก role')
    }
    else{
      try{
        const dataResponse = await axios.post("http://localhost:3000/api/addaccount", {username, password, role})
        if(dataResponse.data){
          setaddError("เพิ่มผู้ใช้สำเร็จ")
        }
        else{
          setaddError("ไม่พบผู้ใช้  ")
        }
      }catch(e){
        setaddError(e.message || 'Insert Failed!');
      }
    }
  }

  return (
    <div className="flex-row text-center justify-center pt-14 sm:pt-12">
      <p className="font-bold text-2xl sm:text-xl">เพิ่มบัญชี</p>
      <div className="pt-10 pb-10 mx-8 my-4 text-lg rounded-3xl bg-purple-400 shadow-xl shadow-purple-600/50 text-white sm:mx-28 md:mx-38 lg:mx-48 xl:mx-68 2xl:mx-96">
        <p className="pb-4">ชื่อผู้ใช้</p>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className="rounded-md bg-white text-black text-center"/>
        <p className="pb-4">รหัสผ่าน</p>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-md bg-white text-black text-center"/>
        <p className="pb-4">Role</p>
        <select 
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className='rounded-md bg-white text-black text-center'
        >
          <option value="" disabled>กรุณาเลือก role ของผู้ใช้</option>
          {totalRole.map((roleOption) => (
            <option key={roleOption} value={roleOption}> {roleOption} </option>
          ))}
        </select>
        <div className="justify-center items-center flex pt-6">
          <button className="bg-purple-600 rounded-2xl w-28 h-12 
          font-semibold text-white drop-shadow-lg transition duration-500 cursor-pointer 
          hover:bg-purple-700 "
          onClick={insertAccount}>
            ยืนยัน
          </button>
        </div>
      </div>
      {addError === 'เพิ่มผู้ใช้สำเร็จ' ? (<p className="pt-6 text-green-400">{addError}</p>) 
      : (
        <p className="pt-6 text-red-500">{addError}</p>
      )}
    </div>
  )
}

export default Addaccount