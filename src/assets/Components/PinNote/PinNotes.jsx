import React, { useEffect, useState } from 'react'
import './PinNotes.css'
import { useSelector } from 'react-redux'
import { getDatabase, onValue, push, ref, remove, set, update } from 'firebase/database'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const PinNotes = () => {
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
                      if(item.val().UserID == SliceUser.uid && item.val().PinNote==true){
                          arr.push({...item.val() ,key:item.key})
                      }
                  })
                  setAllnotes(arr)
          });
        },[]);
      // ------------------ Unpin function part----------------------------------
        const hendelUnpin =(UnpinNotedata)=>{
            update(ref(db ,'AllNotes/' + UnpinNotedata.key ),{
            PinNote:false
            })
        }
        //   -------------------remove data function----------------------------------
        const removePinNotes =(RemovePinNote)=>{
            set(push(ref(db, 'BinNotes/')), {
                        todoTitle:RemovePinNote.todoTitle,
                        todoNote:RemovePinNote.todoNote,
                        Bgcolor:RemovePinNote.Bgcolor,
                        PinNote:RemovePinNote.PinNote,
                        UserID:SliceUser.uid
                    });
                    remove(ref(db , 'AllNotes/' + RemovePinNote.key))
                    console.log(RemovePinNote)
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
                                     <button onClick={()=>hendelUnpin(item)}>Unpin</button>
                                     <button>Edit</button>
                                     <button onClick={()=>removePinNotes(item)}>Remove</button>
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

export default PinNotes