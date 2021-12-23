//import React from "react";
//import CustomInput from "components/CustomInput/CustomInput.js";
import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Clear from "@material-ui/icons/Clear";
import Search from "@material-ui/icons/Search";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Edit from "@material-ui/icons/Edit";

export default function BusinessLicenseHistory(props) {
    console.log('history props');
    console.log(props.value.birthYear);
  
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
          'https://reqres.in/api/products',
        );
        const json = await res.json();
        setData(json.data);
      };
      fetchData();
    });

    const columns = [
      { title: "Id", field: "id" },
      { title: "Color", field: "color" },
      { title: "Value", field: "pantone_value", type: "numeric" },
    ];

  return (
    <div className="BusinessLicenseDetail">
         {/* <CustomInput
  labelText="Store"
  id="store"  
  formControlProps={{
    fullWidth: false,
  }}
  inputProps={{
    value:props.value.birthYear,
    disabled: true,
  }}
/> */}
<MaterialTable 
                  columns={columns} 
                  data={data} 
                  icons={AddBox,ArrowDownward,Clear,Search,FirstPage,LastPage,Edit} 
                  title="Business License History"
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

