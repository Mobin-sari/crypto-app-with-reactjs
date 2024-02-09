import { useState } from "react";
import { converData } from "../../helper/convertData";

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import styles from "./chart.module.css";

function Chart({chart, setChart}) {
    const [type, setType] = useState("prices");

    console.log(chart)

    return (
        <div className={styles.container}>
            <span className={styles.cross} onClick={() => setChart(null)}>X</span>
            <div className={styles.chart}>
                <div>
                    
                </div>
                <div className={styles.graph}>
                    <ChartComponent data={converData(chart, type)} type={type}/>
                </div>
            </div>
        </div>
    );
}

export default Chart;
const ChartComponent = ({data, type}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth="2px"/>
                <CartesianGrid stroke="#404042" />
                <YAxis dataKey={type} domain={["auto", "auto"]}/>
                <XAxis dataKey="data" hide/>
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    );
};