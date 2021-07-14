import React, {useState} from 'react';
import ReactApexChart from "react-apexcharts";
import{AreaChartData} from './AreaChartData.js'

  
function AreaChart(props) {
  const[options , setOptions] = useState({
    chart: {
      height: 328,
      type: 'area',
      toolbar:{
          tools :{
              download : false,
          }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: AreaChartData.xaxis,
    tooltip: {
      x: {
        format: AreaChartData.format,
      },
    },
  })
  return (
    <div id="chart">
    < ReactApexChart options={options} series={AreaChartData.series} type="area" height={AreaChartData.height}  />
    </div>
  );
}

export default AreaChart;


// import React, { Component } from "react";
// class AreaChart extends React.Component {
//     constructor(props) {
//       super(props);

//     }

  

//     render() {
//       return (
        


//   <div id="chart">
//     <ReactApexChart options={AreaChartData.options} series={AreaChartData.series} type="area" height={AreaChartData.height}  />
//   </div>



//       );
//     }
//   }


//   export default AreaChart;
