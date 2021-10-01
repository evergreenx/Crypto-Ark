import React from "react";
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";
import PlacholderImg from "../assets/img/placeholder.png";

export default function Dashboard({ simplified }) {
  let searchTerm = "cryptocurrencies";

  const { data: crytosNewsList, isFetching } = useGetCryptosNewsQuery({
    searchTerm: searchTerm,
    count: simplified ? 6 : 20,
  });

  console.log(crytosNewsList, "news");

  return (
    <>
      <div className="grid grid-flow-row grid-cols-1 gap-10 pt-9">
        {crytosNewsList?.value.map((news) => (
          <>
            <a href={news.url}>
              <div className="flex lg:flex-row flex-col">
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
                      src={news?.provider[0].image?.thumbnail?.contentUrl}
                      alt="Avatar of Jonathan Reinink"
                    />
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        {news.provider[0].name}
                      </p>
                      <p className="text-gray-600">Aug 18</p>
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
