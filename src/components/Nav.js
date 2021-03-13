import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import Popup from './Popup';
export default function AlertDialog() {
    const [openPopup,setOpenPopup] = useState(false);
  
        return (
          <div> 
          <Navbar collapseOnSelect expand="lg"  >
            <Navbar.Brand ><Link to={'/'} className="logo ml-4">Bersuara.</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link > <Link to={'/About'}>Tentang Kami</Link></Nav.Link>
                <Nav.Link > <Link onClick={() => setOpenPopup(true)}>Masuk</Link></Nav.Link>
                <Nav.Link ><Link to={'/Register'}>Daftar</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Navbar collapseOnSelect expand="lg" className="subnav" >
          <Navbar.Brand ></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link > <Link >explore</Link></Nav.Link>
                <Nav.Link > <Link to={'/BookmarkAntrian'}>bookmark</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Popup
            openPopup = {openPopup}
            setOpenPopup = {setOpenPopup}>
          </Popup> 
          </div>


          
       );
}
