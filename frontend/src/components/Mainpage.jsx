import Listgame from './mainpage/Listgame'
import Navbar from './mainpage/Navbar'


const Mainpage = () => {
  
  return (
    <div className="font-['Kanit'] font-normal ">
      {/*Navigate bar*/}
      <Navbar/>
      {/**Header*/}
      <header className="p-16 bg-black text-2xl text-white font-medium text-center sm:p-6 sm:text-base md:p-6 md:text-xl lg:p-8 lg:text-xl xl:p-16 xl:text-2xl">
        เกมทั้งหมด
      </header>
      {/**แถวที่แสดงเกมทั้งหมดที่มี */}
      <Listgame/>
    </div>
  );

}

export default Mainpage;