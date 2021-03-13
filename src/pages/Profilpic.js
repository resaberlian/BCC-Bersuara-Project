import React, { Component } from 'react';
import Sidenav from '../components/Sidenav';
import RightNav from '../components/RightNav';
import {BlueButton, Wrapper} from '../components/Atribut'
import FotoProfil from "../components/img/icon.png";
import {Container,Form,Row,Col} from 'react-bootstrap/';
import { Link } from 'react-router-dom';
class ProfilPic extends Component {
   
    render() {
        return (
            <div>
                
                <Sidenav/>
                <RightNav/>
                <Wrapper>
                    <Container>
                    <h4 style={{textAlign:"left"}}>Masukkan Foto Profil Anda</h4>
                        <Row>
                            <img  src={FotoProfil} alt="" id="img" className="profil-pic" />
                        </Row>
                        <Row >
                            {/* <input type="file"   />  */}
                            <div className="center mr-5 mb-5">
                            <BlueButton>Unggah foto Profil</BlueButton>
                            </div>
                          
                        </Row>
                        <Row>
                            <div className="bottom ml-auto mr-5 ">
                            <BlueButton style={{backgroundColor:"#155547"}}><Link to={'/ProfilTalent'} style={{color:"white"}}>Kirim</Link></BlueButton>
                            </div>
                        </Row>
                 
                        
                        
                    
                    </Container>
                </Wrapper>
            </div>
        );
    }
}

export default ProfilPic;