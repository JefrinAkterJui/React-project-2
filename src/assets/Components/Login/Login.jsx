import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa6'
import 'react-toastify/dist/ReactToastify.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Bounce, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { userData } from '../../../Slice/userSlice'

const Login = () => {
  // -----------------use state part------------------------------
  const [show, setshow] = useState(false)
  const [fromdta, setFromdata] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    emailError: '',
    passwordError: ''
  })

  // ---------------------Navigate----------------------------------
  const navigate=useNavigate()
  // -----------------firbase variables-----------------------------
  const auth = getAuth()
  // -------------------Store the user data variable---------------------
  const Dispatch=useDispatch()

  const Hregister = () => {
    if (fromdta.email == '') {
      setError((hum) => ({ ...hum, emailError: 'Enter Your Mail' }))
    }
    if (fromdta.password == '') {
      setError((hum) => ({ ...hum, passwordError: 'Enter Your Password ' }))
    } else {
      signInWithEmailAndPassword(auth, fromdta.email, fromdta.password)
        .then((userCredential) => {
          const user = userCredential.user
          if(user.emailVerified==true){
            // --------------------Navigate to the home page-------------------------
            navigate('/')
            // ----------------------Login success tost--------------------------------
            toast.success('Login success', {
              position: "top-right",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
              // --------------------store the userDtata-----------------------
              Dispatch(userData(user))
              localStorage.setItem('currentuser', JSON.stringify(user))
          }else{
            toast.error('Email is not varify', {
              position: "top-right",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
          }
        })
        .catch((error) => {
          const errorCode = error.code
          if(errorCode){
            // -----------error tost-----------------
            toast.error(' Something went wrong', {
              position: "top-right",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
          }
        })
    }
  }

  return (
    <>
      <div className="Jui_From flex justify-center items-center w-[174%] h-[100vh]">
        <div className="container">
          <div className="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden">
            <div className="flex flex-col justify-center items-center space-y-2">
              <h2 className="text-2xl font-medium text-slate-700">
                Login From
              </h2>
              <p className="text-slate-500">Enter Email & Password.</p>
            </div>
            <form className="w-full mt-4 space-y-3">
              {/* ----------user name----------- */}
              <div>
                {/* <p className='text-red-600 text-[15px] font-normal ml-[10px] mb-2'>{error.usernameError}</p> */}
                {/* <input
                  className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                  placeholder="Username"
                  type="text"
                  onChange={(e)=>{setFromdata((hum)=>({...hum , username:e.target.value})) ,setError((hum)=>({...hum ,usernameError:''}))}}
                /> */}
              </div>
              {/* ----------user mail---------- */}
              <div>
                <p className="text-red-600 text-[15px] font-normal ml-[10px] mb-2">
                  {error.emailError}
                </p>
                <input
                  className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                  placeholder="User Email"
                  type="email"
                  onChange={(e) => {
                    setFromdata((go) => ({ ...go, email: e.target.value })),
                      setError((hum) => ({ ...hum, emailError: '' }))
                  }}
                />
              </div>
              {/* -------------user pass----------- */}
              <div className="div">
                <p className="text-red-600 text-[15px] font-normal ml-[10px] mb-2">
                  {error.passwordError}
                </p>
                <div className="relative">
                  <input
                    className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                    placeholder="Password"
                    type={show ? 'text' : 'password'}
                    onChange={(e) => {
                      setFromdata((go) => ({
                        ...go,
                        password: e.target.value
                      })),
                        setError((hum) => ({ ...hum, passwordError: ' ' }))
                    }}
                  />
                  {show ? (
                    <FaEye
                      onClick={() => setshow(false)}
                      className=" absolute top-[30%] right-[7px] text-slate-500  cursor-pointer"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setshow(true)}
                      className=" absolute top-[30%] right-[7px]  text-slate-500 cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input className="mr-2 w-4 h-4" type="checkbox" />
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
                Log in
              </button>
              <p className="flex justify-center space-x-1">
                <span className="text-slate-700"> Have no account? </span>
                <Link className="text-blue-500 hover:underline" to={'/Regitar'}>
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
