import React from 'react'

function Loginheader() {
  return (
 <header className="w-full h-auto bg-white sm:bg-purple-600/80 sm:flex sm:h-23 sm:shadow-purple-400/70 sm:shadow-xl sm:ring-2 sm:ring-purple-400">
      <div className='justify-center flex'>
        <img className="w-32 h-32 relative 
        sm:w-18 sm:h-18 sm:rounded-4xl sm:ml-2 sm:mt-2 sm:border-purple-300 sm:ring-2 sm:ring-purple-400 
        md:ml-3 
        lg:ml-4
        "src='/dentlogo.png'/>
      </div>
      <div className='text-center font-bold drop-shadow-lg 
      sm:flex sm:justify-center sm:text-white sm:text-lg sm:m-auto sm:p-auto sm:drop-shadow-lg
      lg:text-xl'>
        <p>โรงพยาบาลทันตกรรม คณะทันตแพทยศาสตร์ <br className='md:hidden'/> มหาวิทยาลัยนเรศวร</p>
      </div>
    </header>
  )
}

export default Loginheader