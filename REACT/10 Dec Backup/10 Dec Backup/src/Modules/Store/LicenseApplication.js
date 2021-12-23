import React from "react";
// import CustomizedDialogs from "components/CustomizedDialogs/CustomizedDialogs";
//import CustomInput from "components/CustomInput/CustomInput.js";
// import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
// import CancelIcon from '@material-ui/icons/Cancel';
// // import AddCircleIcon from '@material-ui/icons/AddCircle';
// import CustomInput from "components/CustomInput/CustomInput.js";
import DeleteIcon from '@material-ui/icons/Delete';
// import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
// import AddJurisdiction from './AddJurisdiction';
// import AssociateJurisdictionToStore  from './AssociateJurisdictionToStore';
import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';


// // function rand() {
//     return Math.round(Math.random() * 20) - 10;
//   }

// function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();
  
//     return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//     };
//   }

// const useStyles = makeStyles((theme) => ({
//     paper: {
//       position: 'absolute',
//       width: 400,
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
//   }));

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

export default function LicenseApplication(props){
  const classes = useStyles();
  console.log("InsideDialog" + props.name);
  console.log("LicenseApplication" + " " + props.value.name);
      
      return (
        <div>
          {/* <CustomInput
                    labelText="Name"
                    id="Name"
                    formControlProps={{
                      fullWidth: false,
                    }}
                    inputProps={{
                      disabled: true,
                      value: props.value.name
                    }}
          />
          */}
          <div>
          <Box 
          m="auto"
          mt={1} 
          mb={2}
          alignItems="center"
          justifyContent="center"
      >
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {/* <Button 
              onClick={handleSelectModalOpen} 
              className ={classes.button} 
              variant="contained" 
              color="primary"
            >
            Create New License App
            </Button> */}
            <Button 
              className ={classes.button} 
              variant="contained" 
              color="primary"
              disabled
            >
              License app Detail
            </Button>
            <Button 
              className ={classes.button} 
              variant="contained" 
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Delete License App
            </Button>
        </ButtonGroup>
      </Box>
      {/* <AddJurisdiction open={SelectModal} onOpen={handleAssociateModalOpen} onClose={handleSelectModalClose} onCloseAll={handleAllModalClose} dataValue={value} name={props.value.name}/>        */}
      {/* <AssociateJurisdictionToStore open={AssociateModal} onChange={handleChange} onClose={handleAssociateModalClose} />   */}
          </div> 

        </div>
      );
    
};