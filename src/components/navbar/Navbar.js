import React, { useState } from 'react';
import { ButtonComp } from './../button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Dropdown from './../dropdown/Dropdown';
import {LogoData , MenuData , ItemData} from './NavbarData.js';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to={LogoData.path} className={LogoData.cname} onClick={closeMobileMenu}>
         { LogoData.title}
          <i className={LogoData.icname} />
        </Link>
        <div className={MenuData.cname} onClick={handleClick}>
          <i className={click ? MenuData.icnameIfTrue : MenuData.icnameIfFalse} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          {ItemData.map((item , index) => {
            
            if(!item.isDropDown){
              return(
                <li className={item.cname} key={item.key}>
  
                  <Link to={item.path} className={item.linkCName} onClick={closeMobileMenu} >
                    {item.title}
                  </Link>
  
                </li>
              )

            } 
            else{
              return(
                <li
                  className={item.cname}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  key={item.key}
                >
                  <Link
                    to={item.path}
                    className={item.linkCName}
                    onClick={closeMobileMenu}
                  >
                    {item.title} <i className={item.icname} />
                  </Link>
                  {dropdown && item.DropdownComponent}
                </li>

              )
            }
            
          
          
            } )
          }
          </ul>
          </nav>

          <div className="pushout">

          </div>

          </>



         
  );
}

export default Navbar;
