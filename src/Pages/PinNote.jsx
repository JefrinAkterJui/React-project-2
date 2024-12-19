import React from 'react'
import PinNotes from '../assets/Components/PinNote/PinNotes'

const PinNote = () => {
  return (
    <>
    <div className='dark:bg-[#202124] pl-10 py-5'>

    <h1 className='dark:bg-[#202124] w-full  text-3xl text-black font-Popins font-semibold 
     dark:text-white'>Your Favorite Pinned Notes</h1>
     <PinNotes/>
    </div>
    </>
  )
}

export default PinNote