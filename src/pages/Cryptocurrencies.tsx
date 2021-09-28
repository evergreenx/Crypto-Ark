import { useState } from "react";

import { useGetCryptosQuery } from "../services/cryptoApi";
import {millify} from 'millify'

export default function Dashboard() {
  const { data: crytosList, isFetching } = useGetCryptosQuery();

  const [crytos, setcrytos] = useState(crytosList.data.coins);

  console.log(crytos);
  return (
    <>
      {crytos.map((i) => (
        <div className="bg-white rounded-xl p-4 " key={i.id}>
          <div className="card-header flex items-center justify-between">
            <h3 className="card-title font-medium text-lg" style={{color : i.color}}>{i.name}</h3>

            <img
              src={i.iconUrl}
              alt="coin url"
              className="w-11 object-contain"
            />
          </div>

          <div className="card-body">
            <p className="font-medium text-base">Price : ${millify(i.price)} USD </p>
            <p className="font-medium text-base">Market Cap :</p>

            <p className="font-medium text-base">Daily Change :</p>
          </div>
        </div>
      ))}
    </>
  );
}
