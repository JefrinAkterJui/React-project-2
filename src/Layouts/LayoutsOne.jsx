import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../assets/Components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import SideNavbar from '../assets/Components/SideNavbar/SideNavbar'

const LayoutsOne = () => {
  const sliceUser = useSelector((state)=>state.User.value)
  const navigate =useNavigate()

  useEffect(()=>{
    if(sliceUser==null){
        navigate('/Login')
    }
  },[])


  return (
    <>
    <Navbar/>
    <div className='flex dark:bg-[#202124]'>

    <SideNavbar/>
    <Outlet/>
    </div>
    </>
  )
}

export default LayoutsOne