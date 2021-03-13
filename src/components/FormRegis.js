import RadioButton from './RadioButton';
import React, { Component } from 'react';
import styles from './formstyles'
import { BlueButton } from './Atribut';
import {Container,Form,Row,Col} from 'react-bootstrap/'
import Checkbox from '@material-ui/icons/CheckBox';
import axios from 'axios';
import { Link } from 'react-router-dom';
class FormRegis extends Component {

    constructor(props){
        super(props)
        this.state={
            valueRadioButton: 'ada isi',
            checked: false,
        
        }
    }

    setRadioButton = (event) => {
        this.setState({valueRadioButton: event.target.value})
    }

    setChecked = (event) => {
        this.setState({checked:event.target.checked})
    }

    handleSubmit = e => {
        const {valueRadioButton ,checked} = this.state

        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            age: this.age, 
            gender: this.gender, 
            username: this.username, 
            password: this.password, 
            telp: this.telp, 
            email: this.email,
            provinsi: this.provinsi, 
            kota: this.kota,
            talent: valueRadioButton,
        };
        axios.post('http:localhost:3000/register',data).then(
            res =>{
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )

    };
    render() {
        const {setRadioButton, setChecked} = this
        const {valueRadioButton ,checked} = this.state

        return (
           <div>
               <Container fluid>
               <Form style={{margin: "0vw 9vw "}} onSubmit={this.handleSubmit}>
                   <h4 style={{textAlign:"left"}}>Masukan Data Diri Anda</h4>
                    <Row  style={{marginTop:"1vw"}}>
                        <Col sm={6}>
                        <div>
                            <label>Nama Depan</label>
                            <input type="text" style={styles.form} onChange={e=> this.firstName = e.target.value}></input>
                        </div>
                       
                        </Col>
                        <Col sm={6}>
                        <div>
                            <label>Nama Belakang</label>
                            <input type="text" style={styles.form} onChange={e=> this.lastName = e.target.value}></input>
                        </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"0.5vw"}}>
                        <Col sm={6}>
                        <div>
                            <label>Umur</label>
                            <input type="number" style={styles.form} onChange={e=> this.age = e.target.value}></input>
                        </div>
                       
                        </Col>
                        <Col sm={6}>
                        <div>
                            <label>Jenis Kelamin</label>
                            <input type="text" style={styles.form} onChange={e=> this.gender = e.target.value}></input>
                        </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"0.5vw"}}>
                        <Col sm={6}>
                        <div>
                            <label>Username</label>
                            <input type="text" style={styles.form} onChange={e=> this.username = e.target.value}></input>
                        </div>
                       
                        </Col>
                        <Col sm={6}>
                        <div>
                            <label>Kata Sandi</label>
                            <input type="password" style={styles.form} onChange={e=> this.password = e.target.value}></input>
                        </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"0.5vw"}}>
                        <Col sm={6}>
                        <div>
                            <label>No Telp</label>
                            <input type="number" style={styles.form} onChange={e=> this.telp = e.target.value}></input>
                        </div>
                       
                        </Col>
                    </Row>
                    <Row style={{marginTop:"0.5vw"}}>
                        <Col sm={6}>
                        <div>
                            <label>Email</label>
                            <input type="email" style={styles.form} onChange={e=> this.email = e.target.value}></input>
                        </div>
                       
                        </Col>
                    </Row>
                    <Row style={{marginTop:"0.5vw"}}>
                        <Col sm={6}>
                        <div>
                            <label>Provinsi</label>
                            <input type="text" style={styles.form} onChange={e=> this.provinsi = e.target.value}></input>
                        </div>
                        </Col>
                        <Col sm={6}>
                        <div>
                            <label>Kota</label>
                            <input type="text" style={styles.form} onChange={e=> this.kota = e.target.value}></input>
                        </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"0.5vw"}}>
                        <Col sm={6}>
                        <label >Pilihan</label>
                        <div>
                            <RadioButton
                                onChange={setRadioButton}
                                value={valueRadioButton}
                               
                            />
                        </div>
                        </Col>
                        <Col sm={6}>
                            <Row style={{marginTop:"2vw"}}>
                                <Col sm={8}>
                                    <label>Saya telah memasukkan Data 
                                    Diri dengan benar</label>
                                </Col>
                                <Col sm={2}>
                                    <Checkbox
                                        label="Saya telah memasukkan Data Diri dengan benar"
                                        onChange={setChecked}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    /> 
                                </Col>
                                <Col sm={2}>
                                <BlueButton style={{backgroundColor:"#155547"}}><Link to={'/Profilpic'} style={{color:"white"}}> Lanjut</Link></BlueButton>
                        
                                </Col>
                            </Row>
                        </Col>
                       
                          
                    </Row>
                    
                </Form>
                </Container>
            </div>
        );
    }
}

export default FormRegis;