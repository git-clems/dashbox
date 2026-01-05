
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler, RadialLinearScale } from 'chart.js';
import { Eye } from 'lucide-react';
import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler, RadialLinearScale);


function MyPieChart({ title }) {
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
                <Pie data={data} className='pieChart' options={options} />
            </div>
        </div>
    );
}


export default MyPieChart