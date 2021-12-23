import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import BusinessLicenseList from './BusinessLicenseList';
import BusinessLicenseDetail from './BusinessLicenseDetail';
import BusinessLicenseHistory from './BusinessLicenseHistory';

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

export default function BusinessLicense() {
  const classes = useStyles();
  const [data, setData] = React.useState("");
  const [value, setValue] = React.useState(0);
  {console.log(value)}

  const handleChangeTab = (newTab,rowData) => {
    console.log("Store Value" + newTab + "" + "RowData" + rowData);
    setValue(newTab);
    if(rowData != null){
      setData(rowData);
    }
   };

  const handleChange = (event,newValue) => {
    console.log("list new value " + newValue);
     setValue(newValue);
  };
  return (
    <div className={classes.root}>
{/* <GridContainer>
        <GridItem xs={12} sm={12} md={6}> */}
        <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="Business License">
                <Tab label="List" value = {0}  />
                <Tab label="Details" value ={1} disabled={value==0?true:false}/>
                <Tab label="History" value ={2} disabled={value==0?true:false}/>
              </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
             <BusinessLicenseList  onChange={handleChangeTab}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
             <BusinessLicenseDetail value={data}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
             <BusinessLicenseHistory value={data}/>
          </TabPanel>
        {/* </GridItem> 
</GridContainer> */}
</div>
 );

  
}

// const BusinessLicenseWithRouter = withRouter(BusinessLicense);
