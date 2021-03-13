import React, { Component } from 'react';
import Nav from "../components/Nav";
import {Container} from "../components/Atribut"
import {Typography} from '@material-ui/core';
import {Row,Col} from 'react-bootstrap/'
import adit from "../components/img/adit.png";
import daffa from "../components/img/daffa.png";
import resa from "../components/img/resa.png";
import irvan from "../components/img/irvan.png";
class About extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Container>
                    <div className="box">
                    <h1 style={{fontSize:"4rem"}}>Bersuara.</h1>
                    <h3 style={{lineHeight: "4vw",fontSize: "1.5rem"}} >promote your talent</h3>
                    <Typography variant="p">
                        Bersuara. <br/>
                        merupakan platform digital yang dapat menghubungkan orang-orang bertalenta dengan orang yang membutuhkan talenta tersebut. 
                    </Typography>
                    <Typography style={{marginTop:"8vw"}}>
                    website ini dibuat sepenuh hati oleh :  </Typography>
                  
                    <Row >
                        <Col sm={4}>
                            <img style={{width:"10rem"}} src={adit} alt="icon"/>
                        </Col>
                        <Col sm={8} className="identity">
                            <h5> 
                            Aditya Ikhwan Saputro <br/> as <br/>Product Manajemen
                            </h5>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={4}>
                            <img style={{width:"10rem"}} src={daffa} alt="icon"/>
                        </Col>
                        <Col sm={8} className="identity">
                            <h5> 
                            Muhammad Daffa Syahdilla Darama <br/> as  <br/>Product Design
                            </h5>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={4}>
                            <img style={{width:"10rem"}} src={resa} alt="icon"/>
                        </Col>
                        <Col sm={8} className="identity">
                            <h5> 
                            Reza Berlian Ananda <br/> as <br/>Front End
                            </h5>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={4}>
                            <img style={{width:"10rem"}} src={irvan} alt="icon"/>
                        </Col>
                        <Col sm={8} className="identity">
                            <h5> 
                            Muhammad Irvan Hanif <br/> as <br/>Back End
                            </h5>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default About;