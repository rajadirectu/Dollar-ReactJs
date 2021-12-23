  import React from "react";
  import MaterialTable from "material-table";
  import AddBox from "@material-ui/icons/AddBox";
  import ArrowDownward from "@material-ui/icons/ArrowDownward";
  import Clear from "@material-ui/icons/Clear";
  import Search from "@material-ui/icons/Search";
  import FirstPage from "@material-ui/icons/FirstPage";
  import LastPage from "@material-ui/icons/LastPage";
  import Edit from "@material-ui/icons/Edit";

  
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

  // IxClickOut.propTypes = {
  //   children: PropTypes.any,
  //   onClickOut: PropTypes.func,
  // };
  
  export default function BeerAndWineStores(props) {
    let newTab=0;
    // // const {history } = this.props;
    // function handleChange(newValue) {
    //   // Here, we invoke the callback with the new value
    //   props.OnChange(newValue);
    // }
    
    return(
      <div className="BusinessLicense">
                <MaterialTable 
                  columns={columns} 
                  data={data} 
                  icons={AddBox,ArrowDownward,Clear,Search,FirstPage,LastPage,Edit} 
                  title="LicenseType Details"
                  options={{
                    exportButton: true,
                    filtering: true,
                    sorting: true,
                    emptyRowsWhenPaging: false
                  }} 
                   actions={[
                     {
                      icon: 'details',
                      tooltip: 'Details',
                      onClick: (event,rowData) => {
                        console.log(rowData);
                        if(rowData !=null){
                          newTab = 1;
                          props.onChange(newTab,rowData);
                          console.log(rowData);
                        }
                      } 
                    }
                   ]}
                  />
        </div>
    );
  }

