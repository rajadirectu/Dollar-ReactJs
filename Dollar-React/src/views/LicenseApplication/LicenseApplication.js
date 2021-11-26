import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function LicenseApplication(){
   // const {value} = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const [modalStyle] = React.useState(getModalStyle);
    const handleClose = () => {
        setOpen(false);
    };

      const body = (
        <div style={modalStyle}  className={classes.paper}>
          <LicenseApplication />
        </div>
      );
    
      return (
        <div>
          <div>
              <label htmlFor="name">Name:</label>
              <input id = "name" type="name"  name="name" disabled={true} />
          </div>
          <div>
          <button type="button" onClick={handleOpen}>
            Create Jurisdiction
          </button>
          <Modal
            open={open}
            onClose={handleClose}
          >
            {body}  
          </Modal>
          </div>
        </div>
      );
    
};