import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' exact activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' exact activeStyle>
            About
          </NavLink>
          <NavLink to='/store' exact activeStyle>
            Store
          </NavLink>
          <NavLink to='/annual' exact activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/team' exact activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' exact activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' exact activeStyle>
            Sign Up
          </NavLink>
        
           <NavBtnLink to='/sign-in'>To Sign In</NavBtnLink> 
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;