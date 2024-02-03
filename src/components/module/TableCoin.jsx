import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"

import {RotatingLines} from "react-loader-spinner";

import styles from "./tablecoin.module.css"

function TableCoin({ coins, isLoading }) {
    
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
                                <TableRow coin={coin} key={coin.id}/>
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

const TableRow = ({
    coin: {
        name,
        image,
        symbol,
        total_volume,
        current_price,
        price_change_percentage_24h,
    }
}) => {
    return (
        <tr>
            <td>
                <div className={styles.symbol}>
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