import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Sidenav extends Component {
    render() {
        return (
            <div>
            <aside className="sidebar">
                <h1 className="mt-3"><Link to={'/'} style={{color:"white"}}>Bersuara.</Link></h1>
                <div className="link">
                <Link className="nav-link active" aria-current="page" to={'/Register'} href="#">Data Diri</Link>
                <Link className="nav-link active" aria-current="page" to={'/ProfilPic'} href="#">Foto Profil</Link>
                </div>
            </aside>
             <aside className="leftbar">
             
            </aside>
            </div>
        );
    }
}

export default Sidenav;