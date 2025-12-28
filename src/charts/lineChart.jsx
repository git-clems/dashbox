
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler, RadialLinearScale } from 'chart.js';
import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
import './css/lineChart.scss'
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler, RadialLinearScale);


function MyLineChart({
    xCoord /* X axis data (array) */,
    yCoord /* Y axis data (array) */, 
    xLabel /* the title of X axis (string)*/,
    yLabel, /* the title of Y axis (string)*/
    label, /* the label (string)*/
    title /* the global title of chart (string)*/
}) {
    const data = {
        labels: xCoord,
        datasets: [
            {
                label: label,
                data: yCoord,
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
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
                text: title,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: yLabel
                }
            },
            x: {
                title: {
                    display: true,
                    text: xLabel
                }
            }
        },
    };

    return (

        <div className="chartContainer">
            <div className="chartHeader">
                <select name="" id="" className="btn" >
                    <option value="" disabled style={{ backgroundColor: '#999', color: "white" }}>Display option</option>
                    <option value="">Chart</option>
                    <option value="">Table</option>
                </select>
                <button className="btn">Export data</button>
                <button className="btn">Print</button>
            </div>
            <Line data={data} options={options} label={xCoord} className='chartCanva' />
        </div>
    );
}


export default MyLineChart