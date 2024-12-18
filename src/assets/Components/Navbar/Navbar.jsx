import React from 'react'
import './Navbar.css'
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../../Slice/userSlice';
import { IoReorderThreeOutline } from "react-icons/io5";


const Navbar = () => {
        // -----------------Redux theke data niye aikhane import kortesi------------------------------------------
        const sliceUser = useSelector((state)=>state.User.value)

        // -----------------------Logout variables part----------------------------------------------------------
        const Navigate =useNavigate()
        const dispatch=useDispatch()
        // -------------------logOut onclick---------------------------------------------------------------------
        const hendelLogOut=()=>{
            Navigate('/Login')
            localStorage.removeItem('currentuser')
            dispatch(userData(null))
        }


  return (
    <>
    <nav className='Jui-Navbar dark:bg-[#202124] dark:shadow-[0px_1px_0px_0px_#dadce0]'>
        <div className="container">
                <div className="userData">
                    <div className="logom">
                        <div className="Three_lines dark:text-white ">
                            <IoReorderThreeOutline className='Line'/>
                        </div>
                        <div className="NoteLogo ">
                            <img className='w-[103px] h-[37px]' src="imge/logo.png" alt="imge" />
                        </div>
                    </div>
                    <div className="ProfileData">
                        <h1 className=' dark:text-white'>{sliceUser?.displayName}</h1>
                        <div className="userPhoto overflow-hidden"><img src={sliceUser?.photoURL} alt="profile" /></div>
                        <AiOutlineLogout onClick={hendelLogOut} className='Licon dark:text-white' />
                    </div>
                </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar