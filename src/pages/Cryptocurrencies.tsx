import { useState } from "react";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { millify } from "millify";

export default function Cryptocurrencies({ simiplied }) {
  let count = simiplied ? 10 : 100;
  const { data: crytosList, isFetching } = useGetCryptosQuery(count);

  const [crytos, setcrytos] = useState(crytosList?.data?.coins);

  if (isFetching) {
    return <h1>Laoding</h1>;
  }

  console.log(crytos);
  return (
    <>

    
<div className=" container px-8 pt-9">

      <div className=" grid grid-rows-3 grid-flow-col gap-10">
        {crytos?.map((i) => (
          <div className="bg-white rounded-xl p-4 " key={i.id}>
            <div className="card-header flex items-center justify-between my-5">
              <h3
                className="card-title font-medium text-lg"
                style={{ color: i.color }}
              >
                <span> {i.rank}.</span>
                {i.name}
              </h3>

              <img
                src={i.iconUrl}
                alt="coin url"
                className="w-11 object-contain"
              />
            </div>

            <div className="card-body">
              <p className="font-medium text-base">
                Price : ${millify(i.price)} USD{" "}
              </p>
              <p className="font-medium text-base">
                Market Cap : {millify(i.marketCap)}
              </p>

              <p className="font-medium text-base">
                Daily Change : {millify(i.change)}
              </p>
            </div>
          </div>
        ))}
      </div>

      </div>
    </>
  );
}
