import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
// import millify from 'millify';
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";

const CryptoDetails = () => {
  const { coinId } = useParams();

  // console.log(coinId)

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y"];
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const [timePeriod, setTimePeriod] = useState("7d");

  const [cryptoDetail, setCryptoDetail] = useState(data?.data?.coin);

  console.log(data);

  if (isFetching) {
    return (
      <h2 className="text-4xl animate-pulse font-bold flex justify-center mt-20 text-orange-500">
        Loading
      </h2>
    );
  }

  return (
    <div className="py-8">
      <div className="top-content mb-10 text-center">
        <h1 className="font-bold text-3xl ">
          {" "}
          {cryptoDetail?.name} ({cryptoDetail?.slug})
        </h1>

        <p className="text-lg">
          {cryptoDetail.name} live pirce is US dollars. View value statstics ,
          market cap and supply
        </p>
      </div>

      <div className="select-period w-36 mb-10">
        <label className="font-bold">Select time period </label>
        <select
          onChange={(e) => setTimePeriod(e.target.value)}
          className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Select time period"
        >


          <option selected="selected"> </option>
          {time.map((i) => (
            <option> {i} </option>
          ))}

        </select>
      </div>

      <h2 className="font-normal text-lg">
        What Is {cryptoDetail?.name}
        {HTMLReactParser(cryptoDetail?.description)}
      </h2>
    </div>
  );
};

export default CryptoDetails;
