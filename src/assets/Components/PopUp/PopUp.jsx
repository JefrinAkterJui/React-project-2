import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import './PopUp.css'
import { IoColorPaletteSharp } from "react-icons/io5";
import { IoEyedrop } from "react-icons/io5";
import { getDatabase, push, ref, set } from "firebase/database";
import { useSelector } from 'react-redux';

const PopUp = ({showValue , PopCross }) => {
    const [showColor , setshowColor]    =useState(false)
    const [tododata , setTododata]      =useState({todoTitle:'', todoNote:'', todotError:''})
    const [color , setcolor]            =useState('#fff')     

    // --------------------rwdux data-----------------------------
    const SliceUser =useSelector((state)=>state.User.value)
    
    // ------------------firbase variabls--------------------
    const db = getDatabase();
    // -------------------------------All function part start---------------------------------
    
    // ---------------------------------------------------------------------------------------
    const hendeltodo=()=>{
        if(tododata.todoTitle==''){
            setTododata((prev)=>({...prev , todotError:'Enter your Note title'}))
        }
        else if(tododata.todoNote==''){
            setTododata((prev)=>({...prev , todotError:'Enter your Note '}))
        }else{
            set(push(ref(db, 'AllNotes/')), {
                todoTitle:tododata.todoTitle,
                todoNote:tododata.todoNote,
                Bgcolor:color,
                PinNote:false,
                UserID:SliceUser.uid
            });
            PopCross()
            setTododata((prev)=>({...prev ,todoTitle:'', todoNote:'', todotError:''}))
        }
    }

  return (
    <>
    <div className={`${showValue? 'block' : 'hidden'}  `}>

        <div className={`${showValue? 'w-full ' : 'w-0 ' } popUp z-40`}>
        
                {/* --------------input fild--------------- */}
                <div style={{background:color}} className={`${showValue? 'block' : 'hidden'} inputFild`} >
                    <p className='text-[12px] text-red-600 '>{tododata.todotError}</p>
                    <div className="first_text flex justify-between">
                        <h2>Title</h2>
                        <button onClick={PopCross} className='PopCross'>
                            <RxCross2 />
                        </button>
                    </div>
                    <input value={tododata.todoTitle} onChange={(e)=>setTododata((prev)=>({...prev , todoTitle:e.target.value}))} type="text" placeholder='Title...' /> 
                    <h2 className='Note'>Note</h2>
                    <textarea value={tododata.todoNote} onChange={(e)=>setTododata((prev)=>({...prev , todoNote:e.target.value}))} className='Notetext' type="text" placeholder='Note......' />
                    {/* -------------------------colors--------------------------------- */}
                    <div className='mt-3 flex justify-between overflow-hidden cursor-pointer'>
                        <div className="colours  ">
                            <IoColorPaletteSharp onClick={()=>setshowColor(!showColor)} /> 
                            <div className={`${showColor? 'left-8' : 'left-[-100px]'} Main_colors`}>
                                <button onClick={()=>setcolor('#f30606')} className='Color1'></button>
                                <button onClick={()=>setcolor('#A888B5')}  className='Color2'></button>
                                <button onClick={()=>setcolor('#0A97B0')}  className='Color3'></button>
                                <div className="platte">
                                    <label htmlFor="colors">
                                        <IoEyedrop className='CustomColor' />
                                    </label>
                                    <input  onChange={(e)=>setcolor(e.target.value)} className='hidden' id='colors' type="color" />
                                </div>
                            </div>
                        </div>
                    <div className="Inputs_button"> 
                        <button onClick={hendeltodo}
                        className="px-3 z-30 py-1 bg-[#fbde5b7c] rounded-md text-black relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-[16px]"
                        >
                        Save
                        </button>
                    </div>
                    </div>
                </div>
            
        </div>
    </div>
    </>
  )
}

export default PopUp