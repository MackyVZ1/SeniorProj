import React from 'react'
import { useLocation } from 'react-router-dom'
import Mainpageheader from './Mainpageheader'

function Mainpage() {
    const location = useLocation()
    const {userData} = location.state || {} // รับค่าจากการ Login

  return (
    <>
        {/**Header */}
        <Mainpageheader username={userData.username} role={userData.role}/>
        {/**Body */}
    </>
  )
}

export default Mainpage