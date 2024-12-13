import React from 'react'
import AddCard from '../assets/Components/AddCard/AddCard'
import Singlenote from '../assets/Components/SingleNote/Singlenote'

const Home = () => {
  return (
    <>
    <div className='p-7 w-full dark:bg-[#202124]'>

      <AddCard/>
      {/* -------------- */}
      

        <Singlenote/>
      
    </div>
    </>
  )
}

export default Home