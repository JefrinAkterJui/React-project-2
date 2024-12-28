import React, { useEffect, useState } from 'react'
import './BinNotePage.css'
import { GoTrash } from "react-icons/go";
import { MdOutlineReplay } from "react-icons/md";
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";

const BinNotePage = () => {
    // ------------------Redux---------------------------
    const SliceUser =useSelector((state)=>state.User.value)
    // ------------------Firebase variables--------------
    const db = getDatabase();
    // ------------------Variables-----------------------
    const [RemoveData , setremoveDta]=useState([])
    // ------------------Realtime Time database----------
    useEffect(()=>{
        onValue(ref(db , 'BinNotes/'), (snapshot) => {
            let arr=[]
            snapshot.forEach((item)=>{
                if(item.val().UserId==SliceUser.uid){
                    arr.push({...item.val() , key:item.key })
                }
            })
            setremoveDta(arr)
        });
    } ,[])
    // ------------------All Function--------------------
        // --------------indivisual delate function------
    const hendelPerDelate =(delatedata)=>{
        remove(ref(db , 'BinNotes/' + delatedata.key))
    }
        // -------------all delete function------------
    const AllDelete =()=>{
        let array=[]
        onValue(ref(db, 'BinNotes/') , (snapshot)=>{
            snapshot.forEach((item)=>{
                array.push({...item.val(), key:item.key})
            });
            for(const Note of array){
                if (Note.UserId==SliceUser.uid){
                    remove(ref(db, 'BinNotes/' + Note.key))
                }
            }

        })
        // remove(ref(db , 'BinNotes/'))
    }
    // ------------------recover data function-------------
    const Recover =(recoverData)=>{
        set(push(ref(db, 'AllNotes/')), {
            todoTitle:recoverData.todoTitle,
            todoNote:recoverData.todoNote,
            Bgcolor:recoverData.Bgcolor,
            PinNote:recoverData.PinNote,
            UserId:SliceUser.uid
            
        });
        remove(ref(db , 'BinNotes/' + recoverData.key))
    }


  return (
    <>
    <div className="container ">
            <div className="Delateall_buttons ">
                    <button onClick={AllDelete}>
                        Delete All
                        <GoTrash/>
                    </button>
            </div>
            {
                RemoveData.map((item)=>(

                    <div key={item.key} className="main flex justify-between mt-6">
                        <div className='flex flex-wrap gap-4 mt-7 '>
                            <div  className="single_BinNote">
                                <h2 className='BinNote_title'>{item.todoTitle} </h2>
                                <div className="lines"></div>
                                <p className='BinNotes'>{item.todoNote}</p>
                            </div>
                        </div>
                        <div className="second_button">
                            <button onClick={()=>hendelPerDelate(item)}>
                                <GoTrash/>
                            </button>
                            <button onClick={()=>Recover(item)}>
                                <MdOutlineReplay/>
                            </button>
                        </div>

                    </div>
                ))
            }
    </div>
    </>
  )
}

export default BinNotePage