import React from 'react'
import { Outlet } from 'react-router-dom'
import Registar from '../assets/Components/Registar/Registar'

const LayoutsOne = () => {
  return (
    <>
    <Registar/>
    <Outlet/>
    </>
  )
}

export default LayoutsOne