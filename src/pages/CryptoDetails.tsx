import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
// import millify from 'millify';
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import millify from "millify";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  LineChartOutlined,
  FallOutlined,
} from "@ant-design/icons";

import '../assets/styles/cryptodetails.css'

const CryptoDetails = () => {
  const { coinId } = useParams();

  // console.log(coinId)

  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const [ setTimePeriod] = useState("7d");

  const cryptoDetail = data?.data?.coin;

  console.log(data);
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  if (isFetching) {
    return (
      <h2 className="text-4xl animate-pulse font-bold flex justify-center mt-20 text-orange-500">
        Loading
      </h2>
    );
  }

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetail?.price && millify(cryptoDetail?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetail?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetail?.volume && millify(cryptoDetail?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${cryptoDetail?.marketCap && millify(cryptoDetail?.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetail?.allTimeHigh?.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetail?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetail?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetail?.approvedSupply ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetail.totalSupply ? millify(cryptoDetail?.totalSupply) : "N/A"
      }`,
      icon: <FallOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetail?.circulatingSupply)}`,
      icon: <LineChartOutlined />,
    },
  ];

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
          value="7d"
        >
          <option selected> 7h </option>
          {time.map((i) => (
            <option> {i} </option>
          ))}
        </select>
      </div>

      <div className="row grid gap-10  lg:grid-cols-2 my-10">
        <div className="coin-stats">
          <h1 className="text-2xl font-bold my-5">
            {cryptoDetail?.name} Value Statistics
          </h1>

          <div className="bg-white p-5 rounded-lg hover:shadow-lg">
            <p>An overview showing the stats of {cryptoDetail.name}</p>

            {stats?.map(({ icon, title, value }) => (
              <div className="stats-container flex justify-between py-3 ">
                <div className="first flex">
                  {icon}

                  <p className="ml-5">{title}</p>
                </div>

                <div className="second font-bold ">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="coin-stats">
          <h1 className="text-2xl font-bold my-5">Other Statistics</h1>

          <div className="bg-white p-5 rounded-lg hover:shadow-lg">
            <p>An overview showing the stats of all CryptoCurrencies.</p>

            {genericStats?.map(({ icon, title, value }) => (
              <div
                className="stats-container flex justify-between py-3 "
                key={value}
              >
                <div className="first flex">
                  {icon}

                  <p className="ml-5">{title}</p>
                </div>

                <div className="second font-bold ">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="cryptoDetail">
        What Is {cryptoDetail?.name} </h3>
        {HTMLReactParser(cryptoDetail?.description)}
    
    </div>
  );
};

export default CryptoDetails;
