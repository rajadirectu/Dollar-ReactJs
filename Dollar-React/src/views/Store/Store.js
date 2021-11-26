import React from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import ModalDialog from 'components/ModalDialog/ModalDialog';

//const useStyles = makeStyles(styles);

export default function Store() {
 // const classes = useStyles();
  //let history = useHistory();
  return (
    <div>
<GridContainer>
        <GridItem xs={12} sm={12} md={6}>
        <ModalDialog value={5}/> <br />
        </GridItem> 
</GridContainer>
</div>
 );
}