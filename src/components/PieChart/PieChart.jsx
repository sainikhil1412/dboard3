import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import {PieChartData} from './PieChartData.js'

function PieChart(props) {

  const [options,SetOptions] = useState({
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: PieChartData.labelsProps,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  })

  return (
    <div id="chart">
      <ReactApexChart options={options} series={PieChartData.series} type="pie" width={PieChartData.width} />
    </div>
  );
}
  
export default PieChart;


  // import React, { Component } from "react";
// class PieChart extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
      
//         series: [44, 55, 13, 43, 22],
//         options: {
//           chart: {
//             width: 380,
//             type: 'pie',
//           },
//           labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
//           responsive: [{
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200
//               },
//               legend: {
//                 position: 'bottom'
//               }
//             }
//           }]
//         },
      
      
//       };
//     }

  

//     render() {
//       return (
        


//   <div id="chart">
// <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
// </div>



//       );
//     }
//   }

//   export default PieChart;