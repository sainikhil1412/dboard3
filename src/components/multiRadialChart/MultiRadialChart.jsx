import React ,{useState} from 'react';
import  ReactApexChart from "react-apexcharts";
import {MultiRadialChartData} from './MultiRadialChartData.js'

function MultiRadialChart(props) {
    const [options,setOptions] = useState({
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Average value',
                // formatter: function (w) {
                //   // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                //   return 249
                // }
              }
            }
          }
        },
        labels: MultiRadialChartData.labels,
      })

    return (
        <div id="chart">
            <ReactApexChart options={options} series={MultiRadialChartData.series} type="radialBar" height={MultiRadialChartData.height} />
        </div>
    
    );
}

export default MultiRadialChart;