import React from "react";
import HTMLReactParser from "html-react-parser";
import {useParams} from "react-router-dom"
// import millify from 'millify';
import {useGetCryptoDetailsQuery} from  '../services/cryptoApi'




const CryptoDetails = () => {


  const {coinId} = useParams()

// console.log(coinId)

  const {data , isFetching} = useGetCryptoDetailsQuery(coinId);

  console.log(data)

  if(isFetching) {

    return <h2 className="text-4xl animate-pulse font-bold flex justify-center mt-20 text-orange-500">Loading</h2>;

  }

  return(
<div className="py-8">


<h1 className="font-bold text-2xl"> {data.data.coin.name}

  </h1>



<h2 className="font-normal text-lg">

  What Is {data.data.coin.name}
{HTMLReactParser(data.data.coin.description)}

  </h2>


</div>

  ) 
};

export default CryptoDetails;
