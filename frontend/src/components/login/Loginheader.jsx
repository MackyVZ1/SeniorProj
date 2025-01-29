import React from 'react'

function Loginheader() {
  return (
    <header className="w-full h-auto bg-white sm:bg-purple-400 sm:flex sm:h-24">
      <div className='justify-center flex'>
        <img className="w-28 h-28 sm:w-16 sm:h-16 sm:rounded-4xl sm:ml-6 sm:mt-4"src='src\components\elements\dentlogo.png'/>
      </div>
      {/**<div className='text-center sm:text-white sm:p-auto'>โรงพยาบาลทันตกรรม คณะทันตแพทยศาสตร์ มหาวิทยาลัยนเรศวร</div>*/}
    </header>
  )
}

export default Loginheader