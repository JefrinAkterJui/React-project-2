import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";


const Registar = () => {

  const [show , setshow] = useState(false)
  const [fromdta , setFromdata] =useState({username:'' , email:'' , password:''})
  const [error , setError] =useState({usernameError:'' , emailError:'' , passwordError:''})

  const Hregister =()=>{
    if(fromdta.username==""){
      setError((hum)=>({...hum ,usernameError:'Enter Your name '}))
      setError((hum)=>({...hum ,emailError:'Enter Your Mail'}))
      setError((hum)=>({...hum ,passwordError:'Enter Your Password '}))
    }
    if(fromdta.email==""){
      setError((hum)=>({...hum ,emailError:'Enter Your Mail'}))
    }
    if(fromdta.password==""){
      setError((hum)=>({...hum ,passwordError:'Enter Your Password '}))
    }
  }



  return (
    <>
    <div className="Jui_From">
        <div className="container">
          <div className="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden">
            <div className="flex flex-col justify-center items-center space-y-2">
              <h2 className="text-2xl font-medium text-slate-700">Registration From</h2>
              <p className="text-slate-500">Enter details below.</p>
            </div>
            <form className="w-full mt-4 space-y-3">
              {/* ----------user name----------- */}
              <div>
              <p className='text-red-600 text-[15px] font-normal ml-[10px] mb-2'>{error.usernameError}</p>
                <input
                  className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                  placeholder="Username"
                  type="text"
                  onChange={(e)=>{setFromdata((hum)=>({...hum , username:e.target.value})) ,setError((hum)=>({...hum ,usernameError:''}))}}
                />
                
              </div>
              {/* ----------user mail---------- */}
              <div>
              <p className='text-red-600 text-[15px] font-normal ml-[10px] mb-2'>{error.emailError}</p>
                <input
                  className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                  placeholder="User Email"
                  type="email"
                  onChange={(e)=>{setFromdata((go)=>({...go , email:e.target.value})) ,setError((hum)=>({...hum ,emailError:''}))}}
                />
              </div>
              {/* -------------user pass----------- */}
              <div className='relative'>
                <p className='text-red-600 text-[15px] font-normal ml-[10px] mb-2'>{error.passwordError}</p>
                <input
                  className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                  placeholder="Password" 
                  type={show? "text" : "password"}
                  onChange={(e)=>{setFromdata((go)=>({...go , password:e.target.value})) , setError((hum)=>({...hum ,passwordError:' '}))}}
                />
                {
                  show?
                  <FaEye onClick={()=>setshow(false)} className=" absolute top-[30%] right-[7px] text-slate-500  cursor-pointer"/>
                  :
                  <FaEyeSlash onClick={()=>setshow(true)} className=" absolute top-[30%] right-[7px]  text-slate-500 cursor-pointer" />

                }
                
                
                
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    className="mr-2 w-4 h-4"
                    
                    type="checkbox"
                  />
                  <span className="text-slate-500">Remember me </span>
                </div>
                <Link className="text-blue-500 font-medium hover:underline" 
                  >Forgot Password</Link>
              </div>
              <button
                className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 outline-none border-none rounded-md text-white duration-500"
               
                type="button"
                onClick={Hregister}
              >
                Register
              </button>
              <p className="flex justify-center space-x-1">
                <span className="text-slate-700"> Have an account? </span>
                <Link className="text-blue-500 hover:underline" >Sign in</Link>
              </p>
            </form>
          </div>

        </div>
    </div>
    
    </>
  )
}

export default Registar