import React from "react";
  import MaterialTable from "material-table";
  import AddBox from "@material-ui/icons/AddBox";
  import ArrowDownward from "@material-ui/icons/ArrowDownward";
  import Clear from "@material-ui/icons/Clear";
  import Search from "@material-ui/icons/Search";
  import FirstPage from "@material-ui/icons/FirstPage";
  import LastPage from "@material-ui/icons/LastPage";
  import Edit from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
  
const data = [
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1990 },
  { name: "Raihan ", surname: "Shuvo", birthYear: 1993 },
  { name: "Nayeem", surname: "Shuvo", birthYear: 1999 },
  { name: "Nayhan ", surname: "Shuvo", birthYear: 1974 },
  { name: "Raj ", surname: "Shuvo", birthYear: 1997 },
  { name: "Kumar ", surname: "Talluri", birthYear: 1993 },
  { name: "Hema ", surname: "Prasanth", birthYear: 1992 },
  { name: "Murali ", surname: "Krishna", birthYear: 1986 },
];

const columns = [
  { title: "Name", field: "name" },
  { title: "Surname", field: "surname" },
  { title: "Birth Year", field: "birthYear", type: "numeric" },
];


// const styles = theme => ({
//   tableRow: {
//     "&$hover:hover": {
//       backgroundColor: "blue"
//     }
//   },
//   tableCell: {
//     "$hover:hover &": {
//       color: "pink"
//     }
//   },
//   hover: {}
// });


// IxClickOut.propTypes = {
//   children: PropTypes.any,
//   onClickOut: PropTypes.func,
// };

export default function BusinessLicenseList(props) {
  // // const {history } = this.props;
  // function handleChange(newValue) {
  //   // Here, we invoke the callback with the new value
  //   props.OnChange(newValue);
  // }
  const { useState } = React;
  //const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRowObj, setSelectedRow] = useState({name:'',surname:'',birthYear:''});
  const [showDetailsTab, setShowDetialsTab] = useState(0);
  //let newTab=0;
  // const sendData = ()=> {
  //   //   // Here, we invoke the callback with the new value
  //   //   props.OnChange(newValue);
  //   // }
  //   console.log("send data called");
  //   props.parentCallback(1);
  // }

  return (
    <div className="BusinessLicenseList">
      <Button variant="contained" color="primary" onClick={() =>props.onChange(showDetailsTab,selectedRowObj)} disabled={showDetailsTab==0?true:false}>Show Details</Button>
       <MaterialTable 
                  columns={columns} 
                  data={data} 
                  icons={AddBox,ArrowDownward,Clear,Search,FirstPage,LastPage,Edit} 
                  title="Business License List" 
                  onRowClick={function(evt, selectedRow){ 
                    console.log("row single click");
                    selectedRowObj.name=selectedRow.name;
                    selectedRowObj.surname=selectedRow.surname;
                    selectedRowObj.birthYear=selectedRow.birthYear;
                    setSelectedRow(selectedRowObj); 
                   // newTab = 1;  
                    setShowDetialsTab(1);                 
                    (evt.target).ondblclick = () =>{
                    console.log("double clicked");
                    selectedRowObj.name=selectedRow.name;
                    selectedRowObj.surname=selectedRow.surname;
                    selectedRowObj.birthYear=selectedRow.birthYear;
                    setSelectedRow(selectedRowObj);
                    console.log(selectedRow);
                  if(selectedRow !=null){
                   // newTab = 1;
                    setShowDetialsTab(1);
                    props.onChange(showDetailsTab,selectedRow);
                    console.log(selectedRow);
                  }
                }
                  } }       
                  options={{
                    exportButton: true,
                    filtering: true,
                    sorting: true,
                    emptyRowsWhenPaging: false,
                    rowStyle: rowData => ({
                      backgroundColor: (selectedRowObj.birthYear === rowData.birthYear) ? '#ADD8E6' : '#FFF'
                      
                    })
                  }} 
                   actions={[
                     {
                      icon: 'details',
                      tooltip: 'Details',
                      onClick: (event,rowData) => {
                      //  (event.target).ondblclick = () =>{
                          console.log("single clicked");
                          setSelectedRow(rowData);
                          console.log(rowData);
                        if(rowData !=null){
                         // newTab = 1;
                          setShowDetialsTab(1);
                          props.onChange(showDetailsTab,rowData);
                          console.log(rowData);
                        }
                      //  }                        
                      } 
                    }
                   ]}
                  />
        </div>
    );
  }

