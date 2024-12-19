import React from 'react'
import BinNotePage from '../assets/Components/BinNotePage/BinNotePage'

const BinNote = () => {
  return (
    <>
    <div className='pl-10 py-5 w-full'>

    <h1 className='dark:bg-[#202124] w-full text-3xl text-black font-Popins font-semibold 
    dark:text-white'> Manage Your Deleted Notes</h1>
    <BinNotePage/>
    </div>
    </>
  )
}

export default BinNote