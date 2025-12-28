
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler, RadialLinearScale } from 'chart.js';
import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
import './css/pieChart.scss'
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler, RadialLinearScale);


function MyPieChart({title}) {
    const data = {
        labels: ['Direct', 'Social', 'Referral', 'Email', 'Organic'],
        datasets: [
            {
                label: 'Traffic Source',
                data: [55, 30, 15, 25, 40],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                ],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    }

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
            <Pie data={data} className='pieCanva' options={options}/>
            {/* <Pie data={data} className='pieCanva' /> */}
        </div>
    );
}


export default MyPieChart