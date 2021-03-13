import React, { Component } from 'react';
import Nav from "../components/Nav";
import  Video from "../components/video/1.mp4";
import  Video2 from "../components/video/2.mp4";
import  Search from "../components/Search";
import  CardProfile from "../components/CardProfile";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Container,Row,Col} from 'react-bootstrap/'
import {
    MainButton, GreenButton
  } from "../components/Atribut";

export default function Popup(props) {

        const { title, children, openPopup, setOpenPopup } = props;
        return (
            <div>
                <div className="home">
                <Nav/>
                <Container fluid>
                    <Row className="wrapper">
                        <Col sm={6}>
                            <h1 style={{fontSize: "7vw"}}>Bersuara.</h1>
                            <h3 style={{lineHeight: "4vw",fontSize: "2vw"}} >promote your talent</h3>
                            <MainButton style={{marginTop: "2vw"}} type="submit" href="#talent">Cari Talent Di sini<ExpandMoreIcon style={{ fontSize: 20}} /></MainButton>
                            <h2 style={{marginTop: "6vw",fontSize: "2.8vw"}} >“The only thing better than singing is more singing” —Ella Fitzgerald </h2>
                            <hr style={{height: "3vw"}}></hr>

                        </Col>
                        <Col sm={3}>
                            <video controls autostart autoPlay src={Video} type="video/mp4" />
                        </Col>  
                        <Col sm={3}>
                            <div className="video-bg mt-5">
                            <video controls autostart autoPlay src={Video2} type="video/mp4" />
                            </div>
                        </Col>  
                    </Row>
                </Container>
                </div>
                <div className="pushCard">
                <Container>
                    <Row className="wrapper" href="#talent">
                        <h4>Selamat Datang</h4>
                        
                        <div className="ml-auto">
                            <GreenButton className="list">Cari</GreenButton>
                            <Search className="list"></Search>
                        </div>
                    </Row>
                </Container>
                <Container className="mt-5">
                    <CardProfile/>
                </Container>

                <Container className="mt-5">
                    <CardProfile/>
                </Container>

                <Container className="mt-5">
                    <CardProfile/>
                </Container>
                </div>
            </div>
          )
}