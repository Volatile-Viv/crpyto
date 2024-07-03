import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 10;

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCoins.length / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Crypto-Tracer</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>

      <div className="heading">
        <div className="coin-heading">
          <p>Name</p>
          <p>Symbol</p>
          <p>Price</p>
          <p>Total Volume</p>
          <p>Change (%)</p>
          <p>Market Cap</p>
        </div>
      </div>

      {currentCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}

      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`page-number ${number === currentPage ? "active" : ""}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
