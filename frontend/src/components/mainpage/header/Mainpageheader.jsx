import { useEffect, useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Mainpagenav from '../navbar/Mainpagenav';
import Mainpagenavmobile from '../navbar/Mainpagenavmobile';
function Mainpageheader({username, roleID, setAction}) {
  const navigate = useNavigate()

  return (
    <>
      <header className="sticky top-0 left-0 z-50 bg-purple-500 w-auto h-18 flex justify-between items-center ring-2 ring-purple-700 sm:static sm:justify-center">
          <p className='text-white text-2xl mx-2 font-extrabold'>
            <a href='/mainpage' className='text-white text-3xl mx-2 font-extrabold'>e - Chart</a>| ยินดีต้อนรับ {username}
          </p>
        <Mainpagenavmobile username={username} roleID={roleID} setAction={setAction}/>
      </header>
      {/** Desktop Navigation */}
      <Mainpagenav username={username} roleID={roleID} setAction={setAction}/>
    </>
  );
}

export default Mainpageheader