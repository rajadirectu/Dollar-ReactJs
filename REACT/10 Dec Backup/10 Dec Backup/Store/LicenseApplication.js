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
import AddJurisdiction from './AddJurisdiction';
import AssociateJurisdictionToStore  from './AssociateJurisdictionToStore';
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
      //  const {value} = props;
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => {
//         setOpen(true);
//     };
//     const [modalStyle] = React.useState(getModalStyle);
//     const handleClose = () => {
//         setOpen(false);
//     };

//       const body = (
//         <div style={modalStyle}  className={classes.paper}>
//           <LicenseApplication />
//         </div>
      // );

      
    const [SelectModal, SetSelectModal] = React.useState(false);
    const [AssociateModal, SetAssociateModal] = React.useState(false);   
    // const [active,setActive] = React.useState(false);
    const [value,setVal] = React.useState({}); //[]
    
    const handleSelectModalOpen = () => {     
      SetSelectModal(true);
      SetAssociateModal(false);
    };
    const handleSelectModalClose = () => {     
      SetSelectModal(false);
      SetAssociateModal(true);
      
    };
    const handleAssociateModalOpen = () => {     
      SetAssociateModal(true);
      SetSelectModal(false);
    };
    const handleAssociateModalClose = (val) => { 
      // let str = JSON.parse(val);
      console.log("value" + val);   
      // const keys = Object.keys(val);
      // for (let i = 0; i < keys.length; i++) {
      //   // console.log(val[keys[i]]);
      //   console.log(keys.length);
      //   selectedJuris.push(val[keys[i]])
      //   setVal(val[keys[i]]);
      // } 
      // console.log("Value after set" + val);

      //  const j = Object.values(val);
      //  for (var i = 0; i < val.length; i++){
      //    for(var j=1; j< i; j++){
      //      console.log("id property" + val[i][j]);
      //      setVal(val[i][j]);
      //    }
      //  }

      //************Working************** */
      //  const formattedTasks = [];

      //  const tasks = Object.values(val);
      
      //   tasks.forEach(task =>Object.entries(task).forEach(([key, value]) =>
      //       formattedTasks.push({ id: key, content: value })
      //   )
      //  );
      //  console.log(tasks);
        console.log("LicenseApplication" + val);
       setVal(val);

      // const { id, content } = val;
      // if (Object.values(content).every(Boolean)) {
      // // Form is valid
      // console.log(content);
      // } 
      // else {
      // for (let key in id) {
      // let target = {
      // name: key,
      // value: val[key]
      // };
      // }
      
      // console.log(val);

      // setVal(val);
      // console.log(target);



      SetAssociateModal(false);
      SetSelectModal(true);
  }

    // const handleClick = (e,val) => { 
    //   console.log("value" + val);    
    //   setVal(val);
    //   SetAssociateModal(false);
    //   SetSelectModal(true);
    // };

    const handleAllModalClose = () => {     
      SetAssociateModal(false);
      SetSelectModal(false);
    };
    
    const handleChange =(val) => {
      setVal(val);
      console.log("value" + value);
    }

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
            <Button 
              onClick={handleSelectModalOpen} 
              className ={classes.button} 
              variant="contained" 
              color="primary"
            >
            Create New License App
            </Button>
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
      <AddJurisdiction open={SelectModal} onOpen={handleAssociateModalOpen} onClose={handleSelectModalClose} onCloseAll={handleAllModalClose} dataValue={value} name={props.value.name}/>       
      <AssociateJurisdictionToStore open={AssociateModal} onChange={handleChange} onClose={handleAssociateModalClose} />  
          </div> 

        </div>
      );
    
};