import styled from 'styled-components'
import {Link} from "react-router-dom";
import { TextField } from '@material-ui/core'

export const Container = styled.div`
    background-color:white;
    width:90%;
    border-radius:1rem;
    padding:5rem;
    justify-content:center;
    margin-left:5%;
    margin-top:3%;
    flex-direction:column;
    box-shadow:0 2rem 6rem rgba(0,0,0,.3);
`

export const Wrapper = styled.div`
    width:60%;
    float:right;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-direction:column;
`

export const MainForm = styled.form`
    display:flex;
    flex-direction:column;
    margin:2rem 0;
`

export const Title = styled.h1`
    font-size:4rem;
    font-weight:bold;
`

export const Input = styled(TextField).attrs(() => ({
    InputProps: {style: {fontSize: "1.4rem",fontFamily:"inherit"}}, 
    InputLabelProps: {style: {fontSize: "1.5rem",fontFamily:"inherit"}}
}))`
background: #D6D6D6;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
`

export const MainButton = styled.button`
    background-color:#EB4F20;
    font-weight:bold;
    color:#fff;
    outline:none;
    border:none;
    padding:0.5vw 1vw;
    font-size:1vw;
    font-family:inherit;
    
    border-radius:2rem;
    transition: .2s all;
    &:hover{
        cursor:pointer;
        background-color:#2CAFC9;

    }
`
export const GreenButton = styled.button`
    background-color:#155547;
    font-weight:bold;
    color:#fff;
    outline:none;
    border:none;
    font-size:1em;
    font-family:inherit;
    padding: 0.2rem 0.6rem;
    border-radius:0.2rem;
    transition: .2s all;
    
    &:hover{
        cursor:pointer;
        background-color:#2CAFC9;

    }
`

export const BlueButton = styled.button`
    background-color:#0476AC;
    text-decoration:none;
    font-size:1em;
    display:flex;
    justify-content:center;
    align-items:center;
    line-height: 1.6;

    color:#fff;
    outline:none;
    border:none;
    padding:0.5rem 2rem;
    border-radius:0.2rem;
    transition: .2s all;
    &:hover{
        cursor:pointer;
        background-color:#05668A;

    }
`
