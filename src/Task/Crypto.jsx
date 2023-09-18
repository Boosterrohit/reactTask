import React, { useEffect, useState } from "react";
const API = "https://api.coincap.io/v2/assets";
const ITEMS_PER_PAGE = 5;

const Crypto = () => {
  const [crypto, setCrypto] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCrypto = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.data) {
        setCrypto(data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCrypto(API);
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentData = crypto.slice(startIndex, endIndex);

  const handleNextClick = () => {
    if (endIndex < crypto.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      style={{ backgroundColor: "white", marginTop: "145px" }}
      className="tab"
    >
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Name</th>
            <th className="th">Price</th>
            <th className="th">MarketCap</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((cryptoItem) => (
            <tr key={cryptoItem.id} className="tr">
              <td className="td">{cryptoItem.name}</td>
              <td className="td">
                ${parseFloat(cryptoItem.priceUsd).toFixed(2)}
              </td>
              <td className="td">
                ${parseFloat(cryptoItem.marketCapUsd).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "12px",
        }}
      >
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          className="button button-prev"
        >
          Back
        </button>
        <button
          onClick={handleNextClick}
          disabled={endIndex >= crypto.length}
          className="button button-next"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Crypto;
