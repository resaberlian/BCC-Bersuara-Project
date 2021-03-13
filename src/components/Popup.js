import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { BlueButton } from './Atribut';
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h4">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection:'column',
    margin: 0,
    padding: theme.spacing(1),
    
  },
}))(MuiDialogActions);



export default function CustomizedDialogs(props) {
  const{ openPopup,setOpenPopup} = props;
  const{ closePopup,setClosePopup} = props;

  
  return (
    <div>
      <Dialog  aria-labelledby="customized-dialog-title" open={openPopup}>
      <DialogTitle id="customized-dialog-title"  onClick={()=>{setOpenPopup(false)}}  >
          Login
        <Typography style={{fontSize:"0.34em"}}>Mulai mencari pekerjaan anda disini.</Typography>
        </DialogTitle>
        <DialogContent >
        <TextField 
          fullWidth
         
          label="Email/username" 
          defaultValue="emai@.com" 
          style={{marginTop:"1vw"}}
         ></TextField>

        <TextField
            autoFocus
            defaultValue="...."
            id="name"
            label="Password"
            type="password"
            marginTop="30px"
            fullWidth
            style={{marginTop:"2vw"}}
          />
        </DialogContent>
        <DialogActions>
        <BlueButton> Login </BlueButton>
        <Typography className="desc"  style={{fontSize:"0.34em",marginTop:"2vw",color:"#8F8F8F"}}>Belum punya akun?</Typography>
        <BlueButton style={{backgroundColor:"#155547", marginBottom:"3vw"}}> Register</BlueButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
