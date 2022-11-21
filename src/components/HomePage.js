import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Key from '@mui/icons-material/VpnKey';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
// import fusioncharts from 'fusioncharts';
// // Load the charts module
// import charts from 'fusioncharts/fusioncharts.charts';
// import ReactFC from 'react-fusioncharts';


// // Pass fusioncharts as a dependency of charts
// charts(FusionCharts)



var chartConfigs = {
  
    type: "Column2D",
   width:"80%",height:400,
    className: "fc-column2d", // ReactJS attribute-name for DOM classes
    dataFormat: "JSON",
    dataSource: {
        chart:{ caption:"Harry's SuperMart",subCaption:"Top 5 stores in last month by revenue",numberPrefix:"$", theme: "zune",
        palettecolors: "#0075c2"},
        data: [{label:"Bakersfield Central",value:"880000"},{label:"Garden Groove harbour",value:"730000"},{label:"Los Angeles Topanga",value:"590000"},{label:"Compton-Rancho Dom",value:"520000"},{label:"Daly City Serramonte",value:"330000"}]
    }
};





var pieChartConfig={

type:"Pie3d",
width:"80%",
height:"400",
className:'fc-pie3d',
dataFormat:"JSON",
dataSource:
  {
    chart: {
        caption: "Sales Per Employee for 2014",
        "palette": "2",
        "animation": "1",
        "formatnumberscale": "1",
        "decimals": "0",
        "numberprefix": "$",
        "pieslicedepth": "30",
        "startingangle": "125",
        "showborder": "0"
    },
    "data": [
        {
            "label": "Leverling",
            "value": "100524",
            "issliced": "1"
        },
        {
            "label": "Fuller",
            "value": "87790",
            "issliced": "1"
        },
        {
            "label": "Davolio",
            "value": "81898",
            "issliced": "0"
        },
        {
            "label": "Peacock",
            "value": "76438",
            "issliced": "0"
        },
        {
            "label": "King",
            "value": "57430",
            "issliced": "0"
        },
        {
            "label": "Callahan",
            "value": "55091",
            "issliced": "0"
        },
        {
            "label": "Dodsworth",
            "value": "43962",
            "issliced": "0"
        },
        {
            "label": "Suyama",
            "value": "22474",
            "issliced": "0"
        },
        {
            "label": "Buchanan",
            "value": "21637",
            "issliced": "0"
        }
    ]
}


};
  

const HomePage = () => (
  <React.Fragment>
    
   <Grid container spacing={24}>
        <Grid item xs={12} style={{marginTop:10}}>
          <Paper className="homepagepaper">
            <Typography variant="body1" gutterBottom align="center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
            
            </Paper>
        </Grid>
        <Grid item xs={6}>
          
         
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
        </Grid>
  </React.Fragment>
);

export default HomePage;