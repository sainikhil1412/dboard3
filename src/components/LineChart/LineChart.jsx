import React ,{useState} from 'react';
import  ReactApexChart from "react-apexcharts";
import {LineChartData} from './LineChartData.js'

function LineChart(props) {

    const [options , setOptions] = useState({
      
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar:{
            tools :{
                download : false,
            }
        }
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight'
        },
        title: LineChartData.title,
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: LineChartData.xaxis
      },
      )

    return (
        
        <div id="chart">
            <ReactApexChart options={options} series={LineChartData.series} type="line" height={LineChartData.height} />
        </div>
        
    );
}

export default LineChart;