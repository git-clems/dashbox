
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler, RadialLinearScale } from 'chart.js';
import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
import './css/barChart.scss'
import Table from './table';
import { useEffect, useState } from 'react';
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler, RadialLinearScale);


function MyBarChart({}) {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '#Nb of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
        borderColor: [
          'rgba(243, 0, 53, 1)',
          'rgba(4, 0, 255, 1)',
          'rgba(238, 255, 6, 1)',
          'rgba(0, 38, 255, 1)',
          'rgba(85, 0, 255, 1)',
          'rgba(255, 128, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: "Bar chart"
      }
    },
  };

  const [display, setDisplay] = useState("chartDisplay")


  return (
    <div className="chartContainer barChart">
      <div className="chartHeader">
        <select name="" id="" className="btn" onChange={(e) => setDisplay(e.target.value)}>
          <option value="chartDisplay">Chart</option>
          <option value="tableDisplay">Table</option>
        </select>
        <button className="btn">Export data</button>
        <button className="btn">Print</button>
      </div>
      {
        display == 'chartDisplay' && <Bar data={data} options={options} className='chart' />
      }
      {
        display == 'tableDisplay' && <Table/>
      }
    </div>
  );
}


export default MyBarChart