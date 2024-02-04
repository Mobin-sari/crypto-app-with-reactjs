import { useEffect, useState } from "react";

import TableCoin from "../module/TableCoin";
import Pagination from "../module/Pagination";

import { getCoinList } from "../../services/cryproApi";
import Search from "../module/Search";

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [currency, setCurrency] = useState("usd")

    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {
            const res = await fetch(getCoinList(page, currency));
            const json = await res.json();
            setCoins(json);
            setIsLoading(false);
        }

        getData();
    }, [page, currency])

    return (
        <div>
            <Search currency={currency} setCurrency={setCurrency}/>
            <TableCoin coins={coins} isLoading={isLoading}/>
            <Pagination page={page} setPage={setPage}/>
        </div>
    );
}

export default HomePage;