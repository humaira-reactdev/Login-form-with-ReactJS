import { useState } from 'react';
import './App.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import login from '../public/images/login.json'
import Lottie from 'lottie-react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [showPass, setShowPass]=useState(false)
  
  const handleShowPass=()=>{
    setShowPass(!showPass)
  }

  // ==========state part start
  const [email, setEmail]=useState('')
  const [pass, setPass]=useState('')
  const [emailError, setEmailError]=useState('')
  const [passError, setPassError]=useState('')

  // =========state part end

  // ===========function part start 
  const handleEmail=(e)=>{
    setEmail(e.target.value)
    setEmailError('')
  }

  const handlePassword=(e)=>{
    setPass(e.target.value)
    setPassError('')
  }
 // ==============function part end

//  =============submit part start

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!email){
      setEmailError('Please enter a valid email address')
    }
    else if(!pass){
      setPassError('Please enter your password')
    }
    else{
      toast.success('Login successful', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  
  }

// ============submit part end



  return (
    <>
    <ToastContainer />
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center bg-[#91DDCF] w-[500px] h-[900px] rounded-3xl relative'>
        
        {
          showPass?
          <FaEye onClick={handleShowPass} className='absolute left-[78%] bottom-[17%]'/>
          :
          <FaEyeSlash onClick={handleShowPass} className='absolute left-[78%] bottom-[17%]'/>
        }   
        <h2 className='text-[40px] font-bold'>Welcome Back!</h2>

        <Lottie animationData={login} loop={true} />
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
          <input onChange={handleEmail} className="w-[350px] h-[40px] border-[2px] border-black p-2" type="email" placeholder='Enter your email' />
          <p className='text-lg font-medium text-red-600'>{emailError}</p>
          <input onChange={handlePassword} className='w-[350px] h-[40px] border-[2px] border-black p-2 mt-[10px]' type={showPass? 'text':'password'} placeholder='Enter your password' />
          <p className='text-lg font-medium text-red-600'>{passError}</p>
          <button type='submit' className='mt-5 bg-black text-white font-bold p-4 rounded-lg'>Sign in</button>
        </form>     
   
      </div>

    </div>
      
      
    </>
  )
}

export default App
