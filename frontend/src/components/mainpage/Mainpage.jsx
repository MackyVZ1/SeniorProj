import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import Mainpageheader from './header/Mainpageheader'
import Mainpagebody from './body/Mainpagebody'

function Mainpage() {
    const location = useLocation()
    const {userData} = location.state || {} // รับค่าจากการ Login
    const [action, setAction] = useState('None') // Lifted State สำหรับรับค่า action 

    useEffect(() => {
      if(userData){
        console.log('User Data:', userData); // ตรวจสอบข้อมูลผู้ใช้
      }else{
        console.log('No user data found in location state.');
      }
    },[])

  return (
    <>
        {/**Header */}
        <Mainpageheader username={userData.username} roleID={userData.roleID} setAction={setAction}/>
        {/**Body */}
        <Mainpagebody action = {action}/>
    </>
  )
}

export default Mainpage