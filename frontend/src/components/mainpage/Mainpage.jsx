import { useState, useEffect } from 'react'
import { X } from 'lucide-react' // import icon กากบาท
import floristryLogo from '../../elements/floristryLogo.png'
import Listgame from '../Listgame'
import Navbar from '../navbar'


const Mainpage = () => {
  
  return (
    <div className="font-['Kanit'] font-normal">
      {/*Navigate bar*/}
      <Navbar/>
      {/**Header*/}
      <header className="p-16 bg-black text-3xl text-white font-medium text-center">
        เกมทั้งหมด
      </header>
      {/**แถวที่แสดงเกมทั้งหมดที่มี */}
      <Listgame/>
    </div>
  );

}

export default Mainpage;