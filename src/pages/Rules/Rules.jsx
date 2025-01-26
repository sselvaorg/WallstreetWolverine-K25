import Navbar from "../../components/Navbar/Navbar";

export default function Rules() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="absolute inset-0 bg-[url('https://png.pngtree.com/background/20230616/original/pngtree-express-transportation-service-3d-render-of-cardboard-parcel-packaging-in-brown-picture-image_3666167.jpg')] bg-cover bg-center opacity-70 -z-10"></div>
      <section className="flex flex-col items-center py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 tracking-wider mb-8">
          RULES
        </h1>
        <div className="bg-gradient-to-b from-red-300 to-blue-300 bg-opacity-90 p-6 rounded-lg shadow-md max-w-6xl max-h-[500px] overflow-y-scroll">
          <ul className="space-y-7 text-lg">
            <li className="flex items-center space-x-2">
              <span className="text-green-500 font-bold">▲</span>
              <p>
                An initial capital of 1,00,000 of virtual credit will be
                provided to trade and you can trade from 09:00 A.M to 04:00
                P.M(IST) in a day.
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">&#9660;</span>
              <p>
                To enable the sell option for stock, at least 1 stock of its own
                kind must be bought initially.
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500 font-bold">▲</span>
              <p>
                The stock statistics are subject to change in regular intervals
                (30 mins).
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">&#9660;</span>
              <p>
                The Stock value updates every 30mins throughout the event
                session.
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500 font-bold">▲</span>
              <p>Newsfeed updates 5mins before the graph changes.</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">&#9660;</span>
              <p>
                The Buy/sell button will be enabled only for 20mins after the
                graph updates.
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500 font-bold">▲</span>
              <p>
                The trading for a particular stock value can only be done within
                the time interval before the graph updates and changes to a new
                value.
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">&#9660;</span>
              <p>
                Once a stock is bought/sold, it cannot be reverted back within
                the interval. Choose wisely!
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500 font-bold">▲</span>
              <p>
                Any player without a valid K! Id or invalid details can be
                disqualified.
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">&#9660;</span>
              <p>
                At the end of the event, the player with the highest total
                assets (credit holding with healthy trades) across the series
                will be declared the winner.
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500 font-bold">▲</span>
              <p>
                For any trade missed during the session, it may/may not affect
                the end result and can be continued from the current interval.
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">&#9660;</span>
              <p>
                Participants should strictly adhere to time constraints. No
                extra time will be given under any circumstances.
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500 ">▲</span>
              <p className=" font-euroStyle">
                Any malpractice or misbehavior will lead to disqualification.
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">&#9660;</span>
              <p>Organizers decision is final.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
