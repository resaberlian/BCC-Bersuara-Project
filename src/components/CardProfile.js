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
  export default function MediaControlCard()  {
        const classes = useStyles();
        const theme = useTheme();
        return (
            <Card className={classes.card}>
                <div className={classes.root}>
                    <Grid item xs={3}>
                        <div className={classes.profile}>   
                            <img style={{width:"6rem", height:"6rem"}} src={icon} alt="icon" className={classes.cover}/>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                    <div className={classes.desc}>
                            <Typography component="h5" variant="h5" className={classes.tittle}>
                                Dwiki Raihan -  Pria 
                                <div className="ml-auto">
                                Rate mulai dari Rp.250.000,-
                                </div>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:"1rem"}}>
                                23th Jakarta Selatan
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className="mt-2">
                                Saya seorang penyanyi lepas lapang, sudah memiliki pengalaman panggung lebih dari 5 tahun.
                                saya sangat bersedia menerima permintaan manggung untuk saat ini.
                            </Typography>
                            <div className={classes.tittle}>
                            <div className=" flex ml-auto">
                                <BlueButton> Tambahkan </BlueButton>
                                <Link className={classes.detail}>Detail <ExpandMoreIcon style={{ fontSize: 20,color:'black'}}/></Link>
                            </div>
                            </div>
                    </div>
                    </Grid>
                </div> 
            </Card>
                
        
            
            
        
            
        );
    }

