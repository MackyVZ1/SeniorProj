import Listgame from './mainpage/Listgame'
import Navbar from './mainpage/Navbar'
import Footer from './mainpage/Footer';
const Mainpage = () => {
  
  return (
    <div className="font-['Kanit'] font-normal">
      {/*Navigate bar*/}
      <Navbar/>
      {/**Header*/}
      <header className="w-full h-auto bg-black p-12 text-center text-white text-3xl font-medium">
        เกมทั้งหมด
      </header>
      {/**แถวที่แสดงเกมทั้งหมดที่มี */}
      <Listgame/>
      {/**Footer */}
      <Footer/>
    </div>
  );

}

export default Mainpage;