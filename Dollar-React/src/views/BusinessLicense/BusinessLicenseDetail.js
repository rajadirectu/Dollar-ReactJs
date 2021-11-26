import React from "react";
  import MaterialTable from "material-table";
  import AddBox from "@material-ui/icons/AddBox";
  import ArrowDownward from "@material-ui/icons/ArrowDownward";
  import Clear from "@material-ui/icons/Clear";
  import Search from "@material-ui/icons/Search";
  import FirstPage from "@material-ui/icons/FirstPage";
  import LastPage from "@material-ui/icons/LastPage";
  import Edit from "@material-ui/icons/Edit";
  import CustomInput from "components/CustomInput/CustomInput.js";
//   import FormControl from "@material-ui/core/FormControl";
//   import InputLabel from "@material-ui/core/InputLabel";
//  import Input from "@material-ui/core/Input";

const data = [ 
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

// IxClickOut.propTypes = {
//   children: PropTypes.any,
//   onClickOut: PropTypes.func,
// };

export default function BusinessLicenseDetail(props) {
    console.log('detail props');
    console.log(props.value.birthYear);
  // // const {history } = this.props;
  // function handleChange(newValue) {
  //   // Here, we invoke the callback with the new value
  //   props.OnChange(newValue);
  // }
  //let newTab=0;
  // const sendData = ()=> {
  //   //   // Here, we invoke the callback with the new value
  //   //   props.OnChange(newValue);
  //   // }
  //   console.log("send data called");
  //   props.parentCallback(1);
  // }
  return (
    <div className="BusinessLicenseDetail">
         <CustomInput
  labelText="Store"
  id="store"  
  formControlProps={{
    fullWidth: false,
  }}
  inputProps={{
    value:props.value.birthYear,
    disabled: true,
  }}
//   value={props.value.birthYear}
/>
       <MaterialTable 
                  columns={columns} 
                  data={data} 
                  icons={AddBox,ArrowDownward,Clear,Search,FirstPage,LastPage,Edit} 
                  title="Business License Details"
                  options={{
                    exportButton: true,
                    filtering: true,
                    sorting: true,
                    emptyRowsWhenPaging: false
                  }} 
               />
        </div>
    );
  }

