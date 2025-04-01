import { useEffect, useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Mainpagenav from '../navbar/Mainpagenav';

function Mainpageheader({username, roleID, setAction}) {
  const navigate = useNavigate()

  return (
    <>
      <header className="sticky top-0 left-0 z-50 bg-purple-500 w-full h-18 flex justify-between items-center shadow-2xl sm:static">
        <div className="flex">
          <p className="m-auto p-6 text-md text-white font-medium sm:text-xl">
            <a href='/mainpage' className='text-2xl  font-extrabold sm:text-3xl'>e - Chart</a> | ยินดีต้อนรับ, {username}
          </p>
        </div>
        <Mainpagenav username={username} roleID={roleID} setAction={setAction}/>
      </header>
    </>
  );
}

export default Mainpageheader