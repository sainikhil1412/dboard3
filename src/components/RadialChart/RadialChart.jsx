// import React, { Component, useState } from "react";
import React , {useState} from 'react';
import ReactApexChart from "react-apexcharts";
import {RadialChartData} from './RadialChartData.js';




function RadialChart(props) {
  
  const [options,SetOptions] = useState( {
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        // startAngle: -180,
        // endAngle: 280,
         hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },
    
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: function(val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: RadialChartData.lablelsProp, // make it props later
  });



  return (
            <div id="chart">
            <ReactApexChart options={options} series={RadialChartData.series} type="radialBar" width={RadialChartData.width}  />
           
            </div>
  );
}

export default RadialChart;

// class RadialChart extends Component {
//     constructor(props) {
//       super(props);
      
//       this.state = {

//         options: {
//           chart: {
//             height: 350,
//             type: 'radialBar',
//             toolbar: {
//               show: false
//             }
//           },
//           plotOptions: {
//             radialBar: {
//               // startAngle: -180,
//               // endAngle: 280,
//                hollow: {
//                 margin: 0,
//                 size: '70%',
//                 background: '#fff',
//                 image: undefined,
//                 imageOffsetX: 0,
//                 imageOffsetY: 0,
//                 position: 'front',
//                 dropShadow: {
//                   enabled: true,
//                   top: 3,
//                   left: 0,
//                   blur: 4,
//                   opacity: 0.24
//                 }
//               },
//               track: {
//                 background: '#fff',
//                 strokeWidth: '67%',
//                 margin: 0, // margin is in pixels
//                 dropShadow: {
//                   enabled: true,
//                   top: -3,
//                   left: 0,
//                   blur: 4,
//                   opacity: 0.35
//                 }
//               },
          
//               dataLabels: {
//                 show: true,
//                 name: {
//                   offsetY: -10,
//                   show: true,
//                   color: '#888',
//                   fontSize: '17px'
//                 },
//                 value: {
//                   formatter: function(val) {
//                     return parseInt(val);
//                   },
//                   color: '#111',
//                   fontSize: '36px',
//                   show: true,
//                 }
//               }
//             }
//           },
//           fill: {
//             type: 'gradient',
//             gradient: {
//               shade: 'dark',
//               type: 'horizontal',
//               shadeIntensity: 0.5,
//               gradientToColors: ['#ABE5A1'],
//               inverseColors: true,
//               opacityFrom: 1,
//               opacityTo: 1,
//               stops: [0, 100]
//             }
//           },
//           stroke: {
//             lineCap: 'round'
//           },
//           labels: RadialChartData.lablelsProp, // make it props later
//         },

//       }

//       }

    
//     render() {
//       return (
          

//             <div id="chart">
//             <ReactApexChart options={this.state.options} series={RadialChartData.series} type="radialBar" width={RadialChartData.width}  />
           
//             </div>
//         )      
//     }

// }

// export default RadialChart;