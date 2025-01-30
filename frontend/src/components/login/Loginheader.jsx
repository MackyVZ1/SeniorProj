import React from 'react'

function Loginheader() {
  return (
 <header className="w-full h-auto bg-white sm:bg-fuchsia-600/70 sm:flex sm:h-23 sm:shadow-purple-400/70 sm:shadow-xl sm:ring-2 sm:ring-purple-400">
      <div className='justify-center flex'>
        <img className="w-32 h-32 
        sm:w-18 sm:h-18 sm:rounded-4xl sm:ml-12 sm:mt-2 sm:border-purple-300 sm:ring-2 sm:ring-purple-400 
        md:ml-12 
        lg:ml-18
        xl:ml-20
        "src='/dentlogo.png'/>
      </div>
      <div className='text-center font-bold drop-shadow-lg sm:text-white sm:text-lg sm:ml-14 sm:mt-4 sm:drop-shadow-lg
      md:ml-18 md:mt-8
      lg:text-xl lg:ml-42
      xl:ml-64
      2xl:ml-94'>โรงพยาบาลทันตกรรม คณะทันตแพทยศาสตร์ <br className='md:hidden'/> มหาวิทยาลัยนเรศวร</div>
    </header>
  )
}

export default Loginheader