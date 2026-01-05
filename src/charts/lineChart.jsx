
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler, RadialLinearScale } from 'chart.js';
import { Eye } from 'lucide-react';
import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
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
            <div className="chartHeader flex justify-between">
                <div>
                    <select name="" id="" className="btn" onChange={(e) => setDisplay(e.target.value)}>
                        <option value="chartDisplay">Chart</option>
                        <option value="tableDisplay">Table</option>
                    </select>
                    <button className="btn">Export data</button>
                    <button className="btn">Print</button>
                </div>
                <button className='btn'>
                    <Eye />
                </button>
            </div>
            <div className='chartCanva'>
                <Line data={data} options={options} label={xCoord} className='lineChart' />
            </div>
        </div>
    );
}


export default MyLineChart