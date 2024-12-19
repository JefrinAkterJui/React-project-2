import React from 'react'
import AddCard from '../assets/Components/AddCard/AddCard'
import Singlenote from '../assets/Components/SingleNote/Singlenote'
import PinNotes from '../assets/Components/PinNote/PinNotes'

const Home = () => {
  return (
    <>
    <div className='p-7 w-full dark:bg-[#202124]'>

      <AddCard/>
      {/* -------------- */}
      
        <div>
          <h2 className='font-Albart font-normal text-[20px]  text-black dark:text-white mb-4 mt-4'>Pin Notes</h2>
          <hr />
        </div>
        <PinNotes/>
        <div>
          <h2 className='font-Albart font-normal text-[20px]  text-black dark:text-white mb-4 mt-4'>All Notes</h2>
          <hr />
        </div>
        <Singlenote/>
      
    </div>
    </>
  )
}

export default Home