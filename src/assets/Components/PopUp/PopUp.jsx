import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import './PopUp.css'
import { IoColorPaletteSharp } from "react-icons/io5";
import { IoEyedrop } from "react-icons/io5";

const PopUp = ({showValue , PopCross}) => {
    const [showColor , setshowColor] =useState(false)

  return (
    <>
    <div className={`${showValue? 'w-full' : 'w-0'} popUp `}>
       
            <button onClick={PopCross} className='PopCross'>
                <RxCross2 />
            </button>
            {/* --------------input fild--------------- */}
            <div className={`${showValue? 'block' : 'hidden'} inputFild`} >
                <h2>Title</h2>
                <input type="text" placeholder='Title...' /> 
                <h2 className='Note'>Note</h2>
                <textarea className='Notetext' type="text" placeholder='Note......' />
                {/* -------------------------colors--------------------------------- */}
                <div className='mt-3 overflow-hidden cursor-pointer'>
                    <div className="colours  ">
                        <IoColorPaletteSharp onClick={()=>setshowColor(!showColor)} /> 
                        <div className={`${showColor? 'left-8' : 'left-[-100px]'} Main_colors`}>
                            <button className='Color1'></button>
                            <button className='Color2'></button>
                            <button className='Color3'></button>
                            <div className="platte">
                                <label htmlFor="colors">
                                <IoEyedrop className='CustomColor' />

                                </label>
                                <input className='hidden' id='colors' type="color" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    </>
  )
}

export default PopUp