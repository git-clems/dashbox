import "./css/order.scss"
import MyLineChart from './../charts/lineChart'
import MyPieChart from "../charts/pieChart";
import MyBarChart from "../charts/barChart";
import Box from "../components/box";
import DatePicker from "../components/datePicker";


const data = [24, 48, 38, 16, 17, 23, 41, 44, 43, 11, 53, 50, 9, 20];
const xCoord = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const title = "Sale data"
const labelChart = "Sales of 2025"
const xLabel = "Months"
const yLabel = "Sales"

const data1 = [27, 21, 39, 13, 46, 46, 15, 30, 7, 31, 0, 48, 9, 50, 41, 47, 7, 32, 17, 28, 13, 35, 11, 40, 38, 15, 43, 48, 35, 2, 23, 22, 17, 47, 24, 35, 5, 34, 16, 7, 32, 17, 45, 49, 8, 17, 43, 14, 21, 28, 36, 13, 32, 9, 20, 30, 16, 5, 8, 49, 10, 30, 39, 45, 3, 11, 13, 21, 31, 0, 9, 3, 22, 7, 31, 34, 26, 38, 9, 32, 24, 33, 14, 14, 33, 38, 13, 32, 48, 31, 46, 11, 11, 39, 13, 24, 9, 34, 2, 35, 46, 49, 27, 46, 17, 9, 30, 39, 45, 39, 17, 43, 40, 44, 38, 5, 12, 29]
const xCoord1 = [...Array(data1.length).keys()].map((i) => i + 1)

function Order() {

    return (
        <div className="orderPage page">
            <DatePicker />
             <section className="line line1">
                    <Box label='Commandes totale' value='847'></Box>
                    <Box label='Commandes validées' value='847'></Box>
                    <Box label='Commandes en traitement' value='847'></Box>
                    <Box label='En livraison' value='847'></Box>
                    <Box label='Commandes livrés' value='847'></Box>
                    <Box label='Commandes retournés' value='847'></Box>
            </section>

            <section className="line line2">
                <MyLineChart yCoord={data} xCoord={xCoord} label={labelChart} title={title} xLabel={xLabel} yLabel={yLabel} />
                <MyPieChart title={"Pie chart data"} />
                <MyLineChart yCoord={data1} xCoord={xCoord1} label={labelChart} title={title} xLabel={xLabel} yLabel={yLabel} />
                <MyBarChart />
                <MyLineChart yCoord={data} xCoord={xCoord} label={labelChart} title={title} xLabel={xLabel} yLabel={yLabel} />
                <MyPieChart title={"Pie chart data"} />
                <MyLineChart yCoord={data1} xCoord={xCoord1} label={labelChart} title={title} xLabel={xLabel} yLabel={yLabel} />
                <MyBarChart />
            </section >
        </div >
    )
}

export default Order