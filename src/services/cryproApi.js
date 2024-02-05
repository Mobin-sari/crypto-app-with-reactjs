const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "	CG-he8NgRAErv6G5ap83bYA3E6i";

const getCoinList = (page, currency) => {
    return `
        ${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}
    `;
};

const searchCoin = (query) => `https://api.coingecko.com/api/v3/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;

export { getCoinList, searchCoin };
