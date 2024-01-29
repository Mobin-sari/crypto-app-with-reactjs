import { useEffect, useState } from "react";

import TableCoin from "../module/TableCoin";

import { getCoinList } from "../../services/cryproApi";

function HomePage() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(getCoinList());
            const json = await res.json();
            setCoins(json)
        }

        getData();
    }, [])

    return (
        <div>
            <TableCoin coins={coins} />
        </div>
    );
}

export default HomePage;