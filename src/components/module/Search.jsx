import { useEffect, useState } from "react";

import { searchCoin } from "../../services/cryproApi";

import {RotatingLines} from "react-loader-spinner";

import styles from "./search.module.css";

function Search({ currency, setCurrency }) {
    const [text, setText] = useState("");
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setCoins([]);
        if (!text) return;
        const search = async () => {
            try {
                const res = await fetch(
                    searchCoin(text), 
                    {signal: controller.signal, }
                    );
                    const json = await res.json();
                    if (json.coins) {setCoins(json.coins);setIsLoading(false)}
                    else {alert(json.status.error_message);setIsLoading(false)}
                } catch (error) {
                    if (error.name !== "AbroatError") {
                        setIsLoading(false)
                    }
                }
            }
            setIsLoading(true)
            search();
            return () => controller.abort();
    }, [text])

    return (
        <div className={styles.searchBox}>
            <input 
                type="text" 
                placeholder="Search" 
                value={text}
                onChange={(e) => setText(e.target.value.toLocaleUpperCase().trim())}/>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>
            <div>
                <ul className={styles.searchResult}>
                {isLoading && <RotatingLines 
                                    width="50px" 
                                    height="50px" 
                                    strokeColor="#3874ff" 
                                    strokeWidth="2"
                                />
                }
                    {
                        coins.map((coin) => (
                            <li key={coin.id}>
                                <img src={coin.thumb} alt={coin.name} />
                                <p>{coin.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Search;