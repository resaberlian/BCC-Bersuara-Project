import React, { Component } from 'react';
import Nav from '../components/Nav'
import icon from '../components/img/icon.png'
import {Typography} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import {Container,Form,Row,Col} from 'react-bootstrap/';
import styles from '../components/formstyles'
import {InputGroup,FormControl} from 'react-bootstrap/'
import CardView from '../components/Card'
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
class ProfilTalent extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="bg">
                   
                    <AddIcon style={{color:"#8F8F8F",fontSize: 30 }} />
                </div>
                
                <Container>
                    <Row>
                        <Col md={2}>
                        <img style={{width:"9rem", height:"9rem"}} src={icon} alt="icon" className="profil-picture"/>
                        </Col>
                        <Col md={5} style={{marginTop:"1vw"}}>
                            <div className="username">
                            Nama User   -   Username
                            <p>Kota, Provinsi, Negara   -   Jenis Kelamin, Umur</p>
                            </div>
                        </Col>
                        <Col  md={5} style={{marginTop:"1vw"}}>
                        <div class="inputWithIcon">
                        <i><AttachMoneyIcon style={{color:"black"}}/></i>
                            <input type="text" placeholder="Masukkan" className="hallo"/>
                        </div>
                
                        
                        </Col> 
                    </Row> 
                </Container>
                <Container>
                    <Row className="mt-5">
                        <Col>
                        <div class="inputWithIcon">
                        <i > <InstagramIcon style={{color:"black"}}/></i>
                            <input type="text" placeholder="Masukkan" className="hallo"/>
                        </div>
                        <div class="inputWithIcon">
                        <i > <MailOutlineIcon style={{color:"black"}}/></i>
                            <input type="text" placeholder="Masukkan" className="hallo"/>
                        </div>
                        <div class="inputWithIcon">
                        <i > <CallIcon style={{color:"black"}}/></i>
                            <input type="text" placeholder="Masukkan" className="hallo"/>
                        </div>
                        </Col>
                        <Col>
                        <div class="shadow p-5 mb-5 bg-white imageSlider">
                        <AddIcon style={{color:"#8F8F8F",fontSize: 40 }} />
                        </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-4">
                    <div class="shadow p-5 mb-5 bg-white ">
                            <div className="flex">
                                <h6 > Tentang</h6>
                                <h6 style={{float:"right"}} className="ml-auto"> Edit</h6>
                            </div>
                            <div  className="flex">
                                <input type="text" placeholder="Masukkan" className="inputbox"/>
                            </div>
                           
                        </div>
                    <div class="shadow p-5 mb-5 bg-white ">
                            <div className="flex">
                                <h6 > Pengalaman</h6>
                                <h6 style={{float:"right"}} className="ml-auto"> Edit</h6>
                            </div>
                            <div  className="flex">
                                <input type="text" placeholder="Masukkan" className="inputbox"/>
                            </div>
                    </div>
                    <div class="shadow p-5 mb-5 bg-white ">
                            <div className="flex">
                                <h6 > Pendidikan</h6>
                                <h6 style={{float:"right"}} className="ml-auto"> Edit</h6>
                            </div>
                            <div  className="flex">
                                <input type="text" placeholder="Masukkan" className="inputbox"/>
                            </div>
                            <div className="flex">
                               
                               <h6 style={{float:"right"}} className="ml-auto"> Simpan</h6>
                           </div>
                            
                        </div>
                </Container>
               
                
            
            </div>
        );
    }
}

export default ProfilTalent;