import { useState } from 'react';
import './App.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


function App() {

  const [showPass, setShowPass]=useState(false)
  
  const handleShowPass=()=>{
    setShowPass(!showPass)
  }

  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center bg-[#91DDCF] w-[500px] h-[400px] rounded-3xl relative'>
        
        {
          showPass?
          <FaEye onClick={handleShowPass} className='absolute left-[78%] bottom-[49%]'/>
          :
          <FaEyeSlash onClick={handleShowPass} className='absolute left-[78%] bottom-[49%]'/>
        }   
      
        <input className="w-[350px] h-[40px] border-[2px] border-black p-2" type="email" placeholder='Enter your email' /><br />
        <input className='w-[350px] h-[40px] border-[2px] border-black p-2' type={showPass? 'text':'password'} placeholder='Enter your password' />
        <button className='mt-5 bg-black text-white font-bold p-4 rounded-lg'>Sign in</button>
      </div>

    </div>
      
      
    </>
  )
}

export default App
