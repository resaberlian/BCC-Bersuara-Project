import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme,Card, CardContent, CardMedia,Typography,IconButton, Grid } from '@material-ui/core';
import icon from "./img/icon.png";
import {BlueButton }from "./Atribut";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
    card:{
        borderRadius:'25px',
        display: 'flex',
    },
    root:{
        display: 'flex',
        
    },
    tittle:{
        display: 'flex',
        fontFamily: 'Roboto',
        fontSize: '1 rem',
        color: '#1C1C1C',
        fontWeight: 350,
        width: '100%',
        float: 'right',
    },
    profile:{
       display:'flex',
       justifyContent:'center',
       textAlign:'center',
       margin: '3rem 3rem',
    },
    desc: {
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        margin: "2rem 2rem 2rem 2rem"
    },
    detail:{
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1rem',
        marginLeft:'1rem'

    }


  }));
  export default function CardView()  {
        const classes = useStyles();
        const theme = useTheme();
        return (
            <Card className={classes.card}>
                
            </Card>
                
        
            
            
        
            
        );
    }

