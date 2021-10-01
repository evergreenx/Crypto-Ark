import { useState , useEffect } from "react";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { millify } from "millify";
import InputIcon from "@material-tailwind/react/InputIcon";

export default function Cryptocurrencies({ simplified }) {
  const count = simplified ? 10 : 100;
  
  
  const [searchvalue, setSearchValue] = useState("");


  const { data: crytosList, isFetching } = useGetCryptosQuery(count);
  const [coinsdata] = useState(crytosList?.data?.coins);
  const [filtered, setFiltered] = useState([])

  useEffect(() => {

    setFiltered(coinsdata?.filter((i: any) => (
      i.name.toLowerCase().includes(searchvalue.toLocaleLowerCase())
 
   )) )
  
  }, [coinsdata , searchvalue])

  // if (isFetching) {
  //   return <h1>Laoding</h1>;
  // }

  console.log(searchvalue);





//   const searchCoins = () => 
 
// );
  return (
    <>
      <div className=" container  pt-9 w-full">

        {!simplified && (
   <div className="search w-60 my-5 text-primary-brand">
   <InputIcon
     type="text"
     color="orange"
     size="regular"
     outline={true}
     placeholder="Search "
     iconFamily="material-icons"
     iconName="search"
     onChange={(e: any) => setSearchValue(e.target.value)}
   />
 </div>
        )}
     

        <div className="grid grid-flow-row grid-cols-3 gap-10">
          {filtered?.map((i: any) => (
            <div className="bg-white rounded-xl p-4" key={i.id}>
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
