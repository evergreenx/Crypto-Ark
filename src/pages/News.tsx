import React , {useState} from "react";
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";
import PlacholderImg from "../assets/img/placeholder.png";
import moment from "moment";

import { useGetCryptosQuery } from "../services/cryptoApi";



export default function News({ simplified }) {


  const [searchTerm, setSearchTerm] = useState('Cryptocurrencies')
  const { data } = useGetCryptosQuery(100);
  // console.log(data.data)

  

  const { data: crytosNewsList , isFetching } = useGetCryptosNewsQuery({
    searchTerm: searchTerm,
    count: simplified ? 6 : 20,
  });

  console.log(crytosNewsList, "news");

 
  return (
    <>
      <div className="my-20">

      <div className="my-10">
        {!simplified && (
          <div className="inline-block relative ">

            <label className="font-bold" >Filter News Result </label>
            <select
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Cryptocurrencies</option>
              {data?.data?.coins.map((i) => (
                <option> {i.name} </option>
              ))}
            </select>
         
          </div>
        )}

        
      </div>
     
    
      </div>


      


      {isFetching ?(

     <h2 className="text-4xl animate-pulse font-bold flex justify-center mt-20 text-orange-500">Loading</h2>

      ) :( <div className="grid grid-flow-row grid-cols-1 gap-10 pt-9 w-full">
        {crytosNewsList?.value.map((news) => (
          <>
            <a href={news.url} key={news.id}>
              <div className="flex lg:flex-row flex-col w-full hover:shadow-xl transition duration-500 ease-in-out ">
                <div
                  className="h-48 lg:h-auto lg:w-48 flex-none bg-no-repeat rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-cover"
                  style={{
                    backgroundImage: `url(${
                      news?.image?.thumbnail?.contentUrl
                        ? news?.image?.thumbnail?.contentUrl
                        : PlacholderImg
                    })`,
                  }}
                ></div>

                <div className=" w-full border-gray-400  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {news.name > 20
                        ? `${news?.name.substring(0, 20)}...`
                        : news.name}
                    </div>
                    <p className="text-gray-700 text-base">
                      {news.description > 100
                        ? `${news?.description.substring(0, 100)}...`
                        : news.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src={
                        news?.provider[0].image?.thumbnail?.contentUrl
                          ? news?.provider[0].image?.thumbnail?.contentUrl
                          : PlacholderImg
                      }
                      alt="news-provider-img"
                    />
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        {news.provider[0].name}
                      </p>
                      <p className="text-gray-600">
                        {moment(news?.datePublished).startOf("ss").fromNow()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </>
        ))}
      </div>) }

     
    </>
  );
}
