import React from "react";

export default function Instructions()
{
    return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-[url('https://png.pngtree.com/background/20230616/original/pngtree-express-transportation-service-3d-render-of-cardboard-parcel-packaging-in-brown-picture-image_3666167.jpg')] bg-cover bg-center opacity-70 -z-10"
      ></div>
      <main className="flex flex-col items-center py-10 px-4">
        <h2 className="text-3xl font-bold text-red-600 mb-8">INSTRUCTIONS</h2>
        <div className="bg-gradient-to-b from-red-300 to-blue-300 bg-opacity-90 p-6 rounded-lg shadow-md max-w-6xl max-h-[500px] overflow-y-scroll">
          <ul className="space-y-6">
            <li className="flex items-center text-lg text-gray-800">
              <span className="text-green-500 text-2xl mr-3">&#9650;</span>
              Wallstreet Wolverine is an imaginary stock exchange event with 8
              companies across various sectors.
            </li>
            <li className="flex items-center text-lg text-gray-800">
              <span className="text-red-500 text-2xl mr-3">&#9660;</span>
              All stocks are purely imaginary and any resemblance is only a
              coincidence.
            </li>
            <li className="flex items-center text-lg text-gray-800">
              <span className="text-green-500 text-2xl mr-3">&#9650;</span>
              The fluctuations in stock prices have no relation with the real
              stock market.
            </li>
            <li className="flex items-center text-lg text-gray-800">
              <span className="text-red-500 text-2xl mr-3">&#9660;</span>
              The provided news feeds are totally imaginary, created
              specifically for this event, and do not have any relation with the
              real world and market.
            </li>
            <li className="flex items-center text-lg text-gray-800">
              <span className="text-green-500 text-2xl mr-3">&#9650;</span>
              One needs to buy or sell before the market closes or stocks will
              be squared off.
            </li>
            <li className="flex items-center text-lg text-gray-800">
              <span className="text-red-500 text-2xl mr-3">&#9660;</span>
              The companies used here are imaginary and any resemblance is only
              a coincidence.
            </li>
            <li className="flex items-center text-lg text-gray-800">
              <span className="text-green-500 text-2xl mr-3">&#9650;</span>
              The graph and statistics are subject to change in the provided
              time interval(30 mins),predict the stock value with the news
              feed,and buy/sell within the time interval
            </li>
            <li className="flex items-center text-lg text-gray-800">
              <span className="text-red-500 text-2xl mr-3">&#9660;</span>
              Make sure that the value of no of stock to be bought does not
              exceed the available credit and the occurrence of such a case
              may lead to negative credit and paths to disqualification
            </li>
            <li className="flex items-center text-lg text-gray-800">
              <span className="text-green-500 text-2xl mr-3">&#9650;</span>
              The newsfeed displayed is only relevant for the companies in
              this event. hence, the change in stock value can be predicted
              from it. For any queries, kindly send them to the mail id on the
              website.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
