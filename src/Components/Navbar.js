import React from 'react'
import burgerlogo from '../assets/burgerlogo.png'
import {Link} from 'react-router-dom'
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
<div className='main'>
    <img src={burgerlogo} alt=""/>
    <div className='mainLink'>
            <Link to={"/"}>Ana Sayfa</Link>
            <Link to="/menu">Menü</Link>
            <Link to={"/about"}>Hakkımızda</Link>
            <Link to={"/contact"}>İletişim</Link>
    </div>
</div>

    </div>
  )
}

export default Navbar