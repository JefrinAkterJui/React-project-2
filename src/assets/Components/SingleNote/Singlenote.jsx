import React, { useEffect, useState } from 'react'
import './Singlenote.css'
import { getDatabase, ref, onValue } from "firebase/database";

const Singlenote = ({}) => {
    // ----------------Redux data--------------------------------------


    // ----------------curtom variables---------------------------------
    const [AllNotes , setAllnotes]=useState([])
    // ----------------------firbase variables--------------------------
    const db = getDatabase();
    // ---------------------real tiome database data--------------------
    useEffect(()=>{
        onValue(ref(db, 'AllNotes/'), (snapshot) => {
                let arr =[]
                snapshot.forEach((item)=>{
                    arr.push(item.val())
                })
                setAllnotes(arr)
        });
    },[]);
    // ------------------function part----------------------------------



  return (
    <>
    <div className='flex flex-wrap gap-4 mt-7'>
        {
            AllNotes.map((item)=>(

                <div className="single_Note">
                    <h2 className='Note_title'> {item.todoTitle}</h2>
                    <div className="line"></div>
                    <p className='Notes'>{item.todoNote}</p>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Singlenote