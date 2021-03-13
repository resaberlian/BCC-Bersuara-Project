import React, { Component } from 'react';
import Nav from '../components/Nav'
import  CardAntrian from "../components/CardAntrian";
import {Container,Row,Col} from 'react-bootstrap/'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
    MainButton, GreenButton
  } from "../components/Atribut";

  export default function DisabledTabs() {
    const [value, setValue] = React.useState(2);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
            <div>
                <Nav/>
                <Container>
                    <Row className="wrapper" href="#talent">
                        <h4>Tawaran untuk Anda</h4>
                        
                        <div className="ml-auto">
                        <Paper  style={{borderRadius:"100px"}}>
                            <Tabs
                                
                                value={value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleChange}
                            >
                                <Tab label="Antrian" />
                                <Tab label="Diterima" />
                            </Tabs>
                            </Paper>
                        </div>
                    </Row>
                </Container>

                <Container className="mt-5">
                    <CardAntrian/>
                </Container>

                <Container className="mt-5">
                    <CardAntrian/>
                </Container>

                <Container className="mt-5">
                    <CardAntrian/>
                </Container>
            </div>
        );
    }
