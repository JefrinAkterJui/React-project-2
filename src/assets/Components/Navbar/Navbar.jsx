import React from 'react'
import './Navbar.css'
import { AiOutlineLogout } from "react-icons/ai";
import { useSelector } from 'react-redux';


const Navbar = () => {
        // -----------------Redux theke data niye aikhane import kortesi------------------------------------------
        const sliceUser = useSelector((state)=>state.User.value)



  return (
    <>
    <nav className='Jui-Navbar'>
        <div className="container">
                <div className="userData">
                    <div className="NoteLogo">
                        <img src="imge/logo.png" alt="imge" />
                    </div>
                    <div className="ProfileData">
                        <div className="userPhoto overflow-hidden"><img src={sliceUser?.photoURL} alt="" /></div>
                        <h1>{sliceUser?.displayName}</h1>
                        <AiOutlineLogout className='Licon' />
                    </div>
                </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar