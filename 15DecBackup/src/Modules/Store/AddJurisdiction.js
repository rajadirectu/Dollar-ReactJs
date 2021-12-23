import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CancelIcon from '@material-ui/icons/Cancel';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import AssociateJurisdictionToStore from 'views/AssociateJurisdictionToStore/AssociateJurisdictionToStore';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import CustomInput from "components/CustomInput/CustomInput.js";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
  import MaterialTable from "material-table";
  import AddBox from "@material-ui/icons/AddBox";
  import ArrowDownward from "@material-ui/icons/ArrowDownward";
  import Clear from "@material-ui/icons/Clear";
  import Search from "@material-ui/icons/Search";
  import FirstPage from "@material-ui/icons/FirstPage";
  import LastPage from "@material-ui/icons/LastPage";
  import Edit from "@material-ui/icons/Edit";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(2),
    },
  }));


   const columns = [
     { title: "ID", field: "id" },
     { title: "TaskName", field: "taskName" },
   ];


  export default function AddJurisdiction(props){
    const classes = useStyles();
    const data =[];
    const {dataValue,name} = props;
    console.log("DataValue" + dataValue);
  
    if(dataValue !=null){
      const j = Object.values(dataValue);
      //***Working***/
      for (var i = 0; i < j.length; i++){
         data.push({"id" : j[i].id , "taskName" : j[i].taskName});
      }
      console.log("Add Jurisdiction" + data);  
    }
    


    return(
     <React.Fragment>
        <Modal
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width:'auto' }}>
            <h4 id="selectJurisdiction">Select Jurisdiction</h4>
            {/* <CustomInput
                    labelText="Select Jurisdiction to Create License Application for store"
                    id="Name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                      value: name
                    }}
            /> */}

             <MaterialTable 
                  columns={columns}
                  data = {data}
                  icons={AddBox,ArrowDownward,Clear,Search,FirstPage,LastPage,Edit} 
                  title="Selected Jurisdictions"
                  options={{
                    emptyRowsWhenPaging: false
                  }}  
                   
             /> 
            

            <div>
              <Button 
                className ={classes.button} 
                onClick={props.onCloseAll} 
                variant="contained" 
                color="secondary"
                startIcon={<CancelIcon />}
              >
                Cancel
              </Button>
              <Button 
                className ={classes.button} 
                onClick= {props.onClose}
                variant="contained" 
                color="primary"
                startIcon={<AddCircleIcon />}  
              >
                Add Jurisdiction
              </Button>
              <Button 
                className ={classes.button} 
                onClick={props.onClose} 
                variant="contained" 
                color="primary"
                startIcon={<PlaylistAddIcon />}
              >
                Select
              </Button>
              
            </div>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }