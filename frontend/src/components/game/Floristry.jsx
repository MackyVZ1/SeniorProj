import React from 'react'
import Floristrynavbar from './Floristrynavbar'
import Floristrybody from './Floristrybody'
import Floristrygame from './Floristrygame'
import Footer from '../mainpage/Footer'

function Floristry() {
  return (
    <div className="font-['Kanit'] font-normal bg-white">
        <Floristrynavbar/>
        <Floristrybody/>
        {/**เกมที่เราจะใส่ */}
        <Floristrygame/>
        <Footer/>
    </div>
  )
}

export default Floristry