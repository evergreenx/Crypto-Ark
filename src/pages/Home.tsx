import millify from "millify";
import { Link } from "react-router-dom";
import GlobalStatsCard from "../components/GlobalStatsCard";
import { useGetCryptosQuery } from "../services/cryptoApi";

export default function Dashboard() {
  const { data, isFetching } = useGetCryptosQuery();

  let globalstats = data?.data?.stats;

  console.log(data?.data);

  if (isFetching) {
    return <h2 className="text-4xl flex justify-center mt-20">Loading</h2>;
  }
  return (
    <>
      <div className=" container px-8 pt-9">
        <h2 className="text-4xl  my-4 font-extraboldt">Global Cryptocurrencies Statistics</h2>
        <div className=" grid  grid-rows-2 grid-flow-col gap-4">
          <GlobalStatsCard
            data={millify(globalstats?.total)}
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
 
      </div>
    </>
  );
}
