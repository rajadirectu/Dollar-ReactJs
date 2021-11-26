import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BusinessLicense from "views/BusinessLicense/BusinessLicense";
import LicenseApplication from "views/LicenseApplication/LicenseApplication";
import SelectItem from "components/SelectItem/SelectItem";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

// const tabNameToIndex ={
//   0: "Businesslicense",
//   1: "LicenseApplication"
// };

export default function Store(){
  const classes = useStyles();
  
  const [selectedTab,setSelectedTab] = React.useState(0);
  const [data,setRowData] = React.useState("");
   const handleChange = (newValue,rowData) => {
    setSelectedTab(newValue);
    setRowData(rowData);
    console.log(newValue,rowData);
  }; 

  return(
    <div className="Store">
               <SelectItem />
      <div className={classes.root}>
          <AppBar position="static">
              <Tabs value={selectedTab} onChange={handleChange}>
                  <Tab label="Business License" />
                  <Tab label="License Application"/>
              </Tabs>
          </AppBar>
      {/* {selectedTab === 0 && <BusinessLicense />} */}
      {
      selectedTab === 0 && 
      <BusinessLicense  
        value ={selectedTab} 
        onChange={handleChange}
      />
      }
      {
      selectedTab === 1 && 
      <LicenseApplication 
         value={data} 
      />
      }
      </div>
    </div>
  );
}
