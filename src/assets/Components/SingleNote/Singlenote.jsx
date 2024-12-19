import React, { useEffect, useState } from 'react'
import './Singlenote.css'
import { getDatabase, ref, onValue, update, remove, set, push } from "firebase/database";
import { useSelector } from 'react-redux';
import { HiOutlineDotsVertical } from "react-icons/hi";
import PinNotes from '../PinNote/PinNotes';

const Singlenote = ({}) => {
    // ----------------Redux data--------------------------------------
    const SliceUser                         =useSelector((state)=>state.User.value)
    
    // ----------------curtom variables---------------------------------
    const [AllNotes , setAllnotes]          =useState([])
    const [ShowOptions ,setShowoptionOption]=useState(false)
    const [UnicCard , setUnicCard]          =useState('')
    // ----------------------firbase variables--------------------------
    const db = getDatabase();
    // ---------------------real tiome database data--------------------
    useEffect(()=>{
        onValue(ref(db, 'AllNotes/'), (snapshot) => {
                let arr =[]
                snapshot.forEach((item)=>{
                    if(item.val().UserID==SliceUser.uid){
                        arr.push({...item.val() ,key:item.key})
                    }
                })
                setAllnotes(arr)
        });
    },[]);
    // ------------------function part----------------------------------
            // -----------------Pin Function---------------
    const hendelPin =(PinNotedata)=>{
        update(ref(db ,'AllNotes/' + PinNotedata.key),{
            PinNote:true
        })
        setShowoptionOption(false)
    }
            // -----------------Remove function-------------
    const hendelRemove =(removeData)=>{
        set(push(ref(db, 'BinNotes/')),{
            todoTitle:removeData.todoTitle,
            todoNote:removeData.todoNote,
            Bgcolor:removeData.Bgcolor,
            PinNote:removeData.PinNote,
            UserId:SliceUser.uid
        });
        // ------------delate data--------------------------
        remove(ref(db,'AllNotes/' + removeData.key))
    }


  return (
    <>
    <div className='flex flex-wrap gap-4 mt-7 '>
        {
            AllNotes.map((item)=>(

                <div key={item.key} style={{background:item.Bgcolor}} className="single_Note relative ">
                    <div className="dot-icon absolute top-5 right-2">
                        <HiOutlineDotsVertical className=' cursor-pointer' onClick={()=>{setShowoptionOption(!ShowOptions), setUnicCard(item)}}/>
                        {
                            ShowOptions&& UnicCard.key==item.key&&
                            <div className="Note_F_text">
                                <button onClick={()=>hendelPin(item)}>Pin</button>
                                <button>Edit</button>
                                <button onClick={()=>hendelRemove(item) }>Remove</button>
                            </div>
                        }
                    </div>
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