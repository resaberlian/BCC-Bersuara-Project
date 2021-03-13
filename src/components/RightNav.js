import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';
export default function RightNav(){

        const [openPopup,setOpenPopup] = useState(false);
        return (
            <div>
            <nav className="rightnav navbar-expand-lg ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" href="#">Tentang Kami</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" onClick={() => setOpenPopup(true)}>Masuk</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Popup
            openPopup = {openPopup}
            setOpenPopup = {setOpenPopup}>
          </Popup> 
            </div>
        );
    
}

