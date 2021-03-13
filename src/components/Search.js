import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '18rem',
    background: '#D6D6D6',
    borderRadius: '25px',
    float: 'right',
   
   
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontWeight: 800,
    alignItems: 'center',
  },
}));



export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Masukkan daerah"
        inputProps={{ 'aria-label': 'Masukkan daerah' }}
      />
    </Paper>
  );
}
