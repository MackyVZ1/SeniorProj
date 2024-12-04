import Listgame from './mainpage/Listgame'
import Navbar from './mainpage/Navbar'
import Footer from './mainpage/Footer';
import Header from './mainpage/Header';
const Mainpage = () => {
  
  return (
    <div className="font-['Kanit'] font-normal ">
      {/*Navigate bar*/}
      <Navbar/>
      {/**Header*/}
      <Header/>
      {/**แถวที่แสดงเกมทั้งหมดที่มี */}
      <Listgame/>
      {/**Footer */}
      <Footer/>
    </div>
  );

}

export default Mainpage;