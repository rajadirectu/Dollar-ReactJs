import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import BeerAndWineStores from './BeerAndWineStores';
import LicenseApplication from './LicenseApplication';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
 const useStyles = makeStyles((theme) => ({
  root: {
     flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
   },
 }));

export default function SimpleTabs() {
  const classes = useStyles();
  const [data, setData] = React.useState("");
  const [value, setValue] = React.useState(0);
    const handleChangeTab = (newTab,rowData) => {
   // console.log("Store Value" + newTab + "" + "RowData" + rowData);
    setValue(newTab);
    if(rowData != null){
      setData(rowData);
    }
   };
  const handleChange = (event, newValue) => {
   // console.log("Store mewvalue" + newValue);
     setValue(newValue);
  };

  return (
      <div className={classes.root}>  
          <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="Beer And Wine Stores">
                <Tab label="Beer And Wine Stores" />
                <Tab label="License Application"  disabled/>
              </Tabs>
          </AppBar>
              <TabPanel value={value} index={0}>
                <BeerAndWineStores  onChange={handleChangeTab}/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <LicenseApplication value={data}/>
              </TabPanel>
      </div>
  );
}
