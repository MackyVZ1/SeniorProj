import React from 'react'
import Floristrynavbar from './floristryNavbar'
import Floristrybody from './Floristrybody'
import Floristrygame from './Floristrygame'

function Floristry() {
  return (
    <div className="font-['Kanit'] font-normal">
        <Floristrynavbar/>
        <Floristrybody/>
        <Floristrygame/>
    </div>
  )
}

export default Floristry