import React from 'react'
import Mainpagehome from './Mainpagehome'
import Addaccount from '../navbar/Addaccount'
import Insertpatient from '../navbar/Insertpatient'


function Mainpagebody({action}) {
  return (
  <>
  {/**หน้าหลัก */}
  {action === 'None' && (
    <Mainpagehome/>
  )}
  {action === 'Add account'&& (
    <Addaccount/>
  )}
  {action === 'Insert patient' && (
    <Insertpatient/>
  )}  
  </>
  )
}

export default Mainpagebody