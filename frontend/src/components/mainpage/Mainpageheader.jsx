import { useState } from 'react';
import React from 'react'
import Mainpagenavmobile from './Mainpagenavmobile';
import { useNavigate } from 'react-router-dom';

function Mainpageheader({username, role}) {
  const [resposinveClick, setresposinveClick] = useState(false) // สำหรับการคลิกเพื่อแสดงเมนู
  const navigate = useNavigate()
  return (
    <>
      <header className="top-0 left-0 z-50 bg-purple-600/80 w-full h-24 flex justify-between items-center shadow-2xl">
        <div className="flex">
          <p className="m-auto p-6 text-md text-white font-bold sm:text-xl">
            e - Chart | ยินดีต้อนรับ, {username}
          </p>
        </div>
        {/**Navigator on Mobile*/}
        <Mainpagenavmobile role={role} isResponsiveClick={resposinveClick} className="sm:hidden"/>
        <button className="hidden sm:flex sm:m-6 sm:px-5 sm:py-2 sm:rounded-2xl sm:bg-purple-900 sm:text-white sm:transition sm:duration-300  hover:bg-purple-700/70 hover:ring-purple-800"
        onClick={() => navigate('/')}>ลงชื่อออก</button>
      </header>
    </>
  );
}

export default Mainpageheader