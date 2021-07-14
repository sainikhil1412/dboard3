import React ,{useState} from 'react';
import {ColumnChartData} from './ColumnChartData';
import ReactApexChart from "react-apexcharts";

function ColumnChart(props) {
  const[options,setOptions] = useState({
    chart: {
      type: 'bar',
      height: 350,
      toolbar:{
          tools :{
              download : false,
          }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: ColumnChartData.xaxis,
    yaxis: ColumnChartData.yaxis,
    fill: {
      opacity: 1
    },
    tooltip: ColumnChartData.tooltip,
  })
  return (
    <div id="chart">
      <ReactApexChart options={options} series={ColumnChartData.series} type="bar" height={ColumnChartData.height} />
    </div>
  );
}

export default ColumnChart;

// import React, { Component, useState } from "react";
// import ReactApexChart from "react-apexcharts";
// import {ColumnChartData} from './ColumnChartData';
// class ColumnChart extends React.Component {
//     constructor(props) {
//       super(props);
//     }

  

//     render() {
//       return (
        


//             <div id="chart">
//             <ReactApexChart options={ColumnChartData.options} series={ColumnChartData.series} type="bar" height={ColumnChartData.height} />
//             </div>



//       );
//     }
//   }


//   export default ColumnChart;

