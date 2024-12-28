import React, { useState } from 'react'
import './AddCard.css'
import { IoMdAddCircle } from "react-icons/io";
import PopUp from '../PopUp/PopUp';

const AddCard = () => {
     // ----------------Custom variables----------
     const [show ,setShow] =useState(false)


  return (
    <>
        <div onClick={()=>setShow(true)} className="Jui-card">
            <IoMdAddCircle />
            <p className='Add'>Add</p>
        </div>
         <PopUp showValue={show}  PopCross={()=>setShow(false)}/>
    </>
  )
}

export default AddCard