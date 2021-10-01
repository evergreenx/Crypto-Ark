import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import GlobalStatsCard from "../components/GlobalStatsCard";

import Cryptocurrencies from "../pages/Cryptocurrencies";

import News from "../pages/News";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  console.log(location, "check am");
  const { data, isFetching } = useGetCryptosQuery(10);

  let globalstats = data?.data?.stats;

  console.log(data?.data);

  if (isFetching) {
    return <h2 className="text-4xl flex justify-center mt-20">Loading</h2>;
  }
  return (
    <>
      <div className=" container pt-9">
        <h2 className="text-2xl  my-4 font-extrabold">
          Global Cryptocurrencies Statistics
        </h2>
        <div className=" grid  grid-rows-2 grid-flow-col gap-4">
          <GlobalStatsCard
            data={globalstats?.total}
            title={"Total Cryptocurrencies"}
          />
          <GlobalStatsCard
            data={millify(globalstats?.totalExchanges)}
            title={"Total Exchanges"}
          />
          <GlobalStatsCard
            data={millify(globalstats?.total24hVolume)}
            title={"Total 24h Volume"}
          />
          <GlobalStatsCard
            data={millify(globalstats?.totalMarkets)}
            title={"Total Markets"}
          />

          {/* <GlobalStatsCard />
          <GlobalStatsCard />
          <GlobalStatsCard /> */}
        </div>

        <div className=" py-10">
          <div className="">
            <div className="">
              <div className=" flex items-center justify-between">
                <h2 className="text-2xl  my-4 font-extrabold">
                  Top Ten Cryptocurrencies in the world{" "}
                </h2>

                <Link to="/cryptocurrencies" className="font-medium">
                  {" "}
                  See more{" "}
                </Link>
              </div>

              <Cryptocurrencies simplified />
            </div>
          </div>

          {/* <Cryptocurrencies /> */}
        </div>

        <div className=" py-10">
          <div className="">
            <div className="">
              <div className=" flex items-center justify-between">
                <h2 className="text-2xl  my-4 font-extrabold">
                  Latest Cryptocurrencies News{" "}
                </h2>

                <Link to="/cryptocurrencies" className="font-medium">
                  {" "}
                  See more{" "}
                </Link>
              </div>

              <News simplified />
            </div>
          </div>

          {/* <Cryptocurrencies /> */}
        </div>
      </div>
    </>
  );
}
