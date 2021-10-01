import React from "react";
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";
import PlacholderImg from "../assets/img/placeholder.png";
import moment from "moment";

import { useGetCryptosQuery } from "../services/cryptoApi";


export default function News({ simplified }) {

  const { data } = useGetCryptosQuery(100);
  // console.log(data.data)

  let searchTerm = "cryptocurrencies";

  const { data: crytosNewsList } = useGetCryptosNewsQuery({
    searchTerm: searchTerm,
    count: simplified ? 6 : 20,
  });

  console.log(crytosNewsList, "news");

  return (
    <>
      <div>

      <div className="inline-block relative w-64">
  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Cryptocurrencies</option>
    {data?.data?.coins.map(i => (
            <option> {i.name} </option>
            
            ))}
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
    
      </div>

      <div className="grid grid-flow-row grid-cols-1 gap-10 pt-9">
        {crytosNewsList?.value.map((news) => (
          <>
            <a href={news.url}>
              <div className="flex lg:flex-row flex-col hover:shadow-xl transition duration-500 ease-in-out ">
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

                <div className=" border-gray-400  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
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
      </div>
    </>
  );
}
