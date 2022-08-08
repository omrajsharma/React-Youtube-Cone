import React from 'react'
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { AiFillVideoCamera } from "@react-icons/all-files/ai/AiFillVideoCamera";
import { IoIosNotifications } from "@react-icons/all-files/io/IoIosNotifications";
import { BiUserCircle } from "@react-icons/all-files/bi/BiUserCircle";
import { Link } from 'react-router-dom';
import ytlogo from '../../assets/youtube.svg';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      {/* left side */}
      <div className='header__left'>
        <AiOutlineMenu />
        <Link to='/'>
          <img src={ytlogo} alt="" className='header__logo' />
        </Link>

      </div>

      {/* center side */}
      <div className='header__center'>
        <input type="text" />
        <BsSearch className='header__searchbutton' />
      </div>

      {/* right side */}
      <div className='header__right'>
        <AiFillVideoCamera className='header__icon' />
        <IoIosNotifications className='header__icon' />
        <BiUserCircle className='header__icon' />  
      </div>
    </div>
  )
}

export default Header