import React from 'react'

function Loginheader() {
  return (
 <header className="w-full h-auto bg-white sm:grid sm:h-23">
      <div className='justify-center flex'>
        <img className="w-32 h-32 relative 
        sm:w-24 sm:h-24 sm:rounded-4xl sm:ml-2 sm:mt-2 sm:border-purple-300 
        md:ml-3 
        lg:ml-4
        "src='/dentlogo.png'/>
      </div>
      <div className='text-center font-bold drop-shadow-lg 
      sm:flex sm:justify-cente sm:text-lg sm:m-auto sm:p-auto sm:drop-shadow-lg
      lg:text-xl'>
        <p>โรงพยาบาลทันตกรรม คณะทันตแพทยศาสตร์ <br className='md:hidden'/> มหาวิทยาลัยนเรศวร</p>
      </div>
    </header>
  )
}

export default Loginheader