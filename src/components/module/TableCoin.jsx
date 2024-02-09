import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"

import axios from "axios"

import {RotatingLines} from "react-loader-spinner";

import styles from "./tablecoin.module.css"
import { marketChart } from "../../services/cryproApi";

function TableCoin({ coins, isLoading, setChart }) {
    
    return (
        <div className={styles.container}>
            {
                isLoading ? (<RotatingLines strokeColor="#3874ff" strokeWidth="2"/>) :
                (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24h</th>
                            <th>Total Volume</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coins.map((coin) => (
                                <TableRow coin={coin} key={coin.id} setChart={setChart}/>
                            ))
                        }
                    </tbody>
                </table>
                )
            }
        </div>
    );
}

export default TableCoin;

const TableRow = ({ coin, setChart }) => {
    const {
            id,
            name,
            image,
            symbol,
            total_volume,
            current_price,
            price_change_percentage_24h
    } = coin;
    const showHandler = async () => {

        try {
            const res = await fetch(marketChart(id));
            const json = await res.json()
            setChart(json);
        } catch (error) {
            setChart(null)
        }
    };

    return (
        <tr>
            <td>
                <div className={styles.symbol} onClick={showHandler}>
                    <img src={image} alt={symbol} />
                    <span>{symbol.toUpperCase()}</span>
                </div>
            </td>
            <td>{name}</td>
            <td>{current_price.toLocaleString()}</td>
            <td className={price_change_percentage_24h > 0 ? styles.success : styles.error }
            >{price_change_percentage_24h.toFixed(2)}%</td>
            <td>{total_volume.toLocaleString()}</td>
            <td>
                <img src={
                        price_change_percentage_24h > 0 ? chartUp : chartDown} 
                alt="" />
            </td>
        </tr>
    )
}