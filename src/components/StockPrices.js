import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

const columns = ["Name", "Company", "City", "State"];
 
const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];
 
const options = {
  selectableRows: false,
};

class StockPrices extends Component {
  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTable: {
        root: {
        },
        paper: {
          boxShadow: "none",
          border: "1px solid #707070", 
          backgroundColor: "transparent"
        }
      },
      MUIDataTableBodyRow: {
        root: {
          '&:nth-child(odd)': { 
            backgroundColor: 'rgba(49,0,255,0.48)'
          }
        }
      },
      MUIDataTableBodyCell: {
      }
    }
  })
 
  render() {
    return (
      <div >
        <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={"Stock Prices"}
          data={data}
          columns={columns}
          options={options}
        />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default StockPrices;
