import React, {useState} from "react";
import Junto from '../assets/junto-logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const SiteNav = () => {

  const [Click, setClick] = useState(false)
  const [Navbar, setNavbar] = useState(false)

  const handleClick = () => {
    setClick(!Click)
  }

  const closeMobileMenu = () => {setClick(false)}

  const changeBackground = () => {
    if (window.scrollY >= 50){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  

  return (
    <>
      <nav className={Navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <a href="/" className = "navbar-logo" onCLick = {closeMobileMenu}><img src={Junto} /></a>
          <div className="menu-icon" onClick = {handleClick}>
            <i>{Click ? <CloseIcon/> : <MenuIcon/>}</i>
          </div>
          <ul className = {Click ? 'nav-menu active' : 'nav-menu'}>
              <li className = 'nav-item'>
                <a href="/" className = 'nav-links' onClick = {closeMobileMenu}>
                  Home
                </a>
              </li>
              <li className = 'nav-item'>
                <a href="/" className = 'nav-links' onClick = {closeMobileMenu}>
                  About Us
                </a>
              </li>
              <li className = 'nav-item'>
                <a href="/" className = 'nav-links' onClick = {closeMobileMenu}>
                  Blog  
                </a>
              </li>
              <li className = 'nav-item'>
                <a href="/" className = 'nav-links' onClick = {closeMobileMenu}>
                  Services  
                </a>
              </li>
          </ul>
              <button className = "GetStarted">Get started</button>
        </div>
      </nav>
    </>
  );
};

export default SiteNav;
