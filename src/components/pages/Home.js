import React from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import RadialChart from './../RadialChart/RadialChart.jsx'
import AreaChart from '../AreaChart/AreaChart';
import ColumnChart from '../ColumnChart/ColumnChart';
import PieChart from '../PieChart/PieChart';
import MultiRadialChart from '../multiRadialChart/MultiRadialChart'
import LineChart from '../LineChart/LineChart';

export default function Home() {
  return (
    <>
    <Grid container direction="row" justify="space-around" alignItems="center"  >

      <Grid item xs={4} >
        <RadialChart labelsProp={["Percent3"]}/>

      </Grid>


      <Grid item xs={6}>
        <AreaChart/>
      </Grid>

    </Grid>

    <Grid container direction="row" justify="space-around" alignItems="center">

      <Grid item xs={4}  style={{paddingLeft:75}}>
        <PieChart/>
      </Grid>
      <Grid item xs={6}  >
        <ColumnChart/>
      </Grid>

    </Grid>

    <Grid container direction="row" justify="space-around" alignItems="center">

      <Grid item xs={4}  >
        <MultiRadialChart/>
      </Grid>
      <Grid item xs={6}  >
        <LineChart/>
        {/* <ColumnChart/> */}
      </Grid>

    </Grid>
    
  

      
      

      
    </>
  );
}
