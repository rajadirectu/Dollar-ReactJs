import React from 'react';
import Box from '@material-ui/core/Box';
// import CancelIcon from '@material-ui/icons/Cancel';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import JurisdictionDetail from 'views/JurisdictionDetail/JurisdictionDetail';
import Modal from '@material-ui/core/Modal';
// import AvailableJurisdiction from 'views/Store/AvailableJurisdiction';
import AvailableJurisdiction from './AvailableJurisdiction';

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
  height:"450px",
  overflowY:"scroll"
};


export default function AssociateJurisdictionToStore(props){
    // const [active,setActive] = React.useState(false);
    // const [val,setVal] = React.useState("");

    // const handleActive = () => {
    //   setActive(true);
    //   console.log("handleActive" + active);
    // }
  
    const handleClose = (val) => {
      props.onClose(val);
    }
    // const handleChange =(val) => {
    //   props.onChange(val);
    // }
  
    return(
     <React.Fragment>
        <Modal
           hideBackdrop
           open={props.open}
           onClose={props.onClose}
           aria-labelledby="child-modal-title"
           aria-describedby="child-modal-description"
         >
           <Box sx={{ ...style, width: 'auto' }}>
           <h4 id="selectJurisdiction">Associate Jurisdiction To Store</h4>
             {/* <AvailableJurisdiction  onClose={handleClose}/> */}
             <AvailableJurisdiction onClose={handleClose}/>
           </Box>
         </Modal>
     </React.Fragment>
    );
  }
  