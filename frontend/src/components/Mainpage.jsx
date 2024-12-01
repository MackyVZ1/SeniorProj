import Listgame from './mainpage/Listgame'
import Navbar from './mainpage/Navbar'


const Mainpage = () => {
  
  return (
    <div className="font-['Kanit'] font-normal ">
      {/*Navigate bar*/}
      <Navbar/>
      {/**Header*/}
      {/**<header className="p-16 bg-black text-3xl text-white font-medium text-center">*/}
        {/* เกมทั้งหมด */}
      {/* </header> */}
      {/**แถวที่แสดงเกมทั้งหมดที่มี */}
      {/* <Listgame/> */}
    </div>
  );

}

export default Mainpage;