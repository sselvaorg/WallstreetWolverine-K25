import Navbar from "../../components/Navbar/Navbar";

export default function Rules() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://png.pngtree.com/background/20230616/original/pngtree-express-transportation-service-3d-render-of-cardboard-parcel-packaging-in-brown-picture-image_3666167.jpg')] bg-cover bg-center opacity-70 -z-10"></div>
      <Navbar />
      <section className="flex flex-col items-center py-12 px-6">
        <h1 className="text-4xl font-extrabold text-red-600 tracking-wider mb-8">
          RULES
        </h1>
        <div className="bg-gradient-to-b from-red-300 to-blue-300 bg-opacity-90 p-6 rounded-lg shadow-md max-w-6xl max-h-[500px] overflow-y-scroll">
         <ul className="space-y-7 text-lg">
          <li className="flex items-center space-x-2">
              <span className="text-green-500 font-bold">▲</span>
              <p>Every hour there will be 4 headlines with respect to 4 different companies, 
and the price value will be affected exactly 1 hour (buffer time) after these 
headlines. </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">&#9660;</span>
              <p>The market opens at 4 pm and closes at 12 am.</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500 font-bold">▲</span>
              <p>This is a 2-day event, the first day will have the first headline about the 24 
              companies and the 2nd day will have the next set of headlines.</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">&#9660;</span>
              <p>Initially each user must be given 1,00,000 kuros (imaginary kuros) and if a 
user buys something and sells it for a profit only the amount for which he 
purchased the stock will be returned to his balance and the profit will be 
added to a separate column which will not be visible for the user until the 
end of the event and if he makes a loss, the user will be given the entire 
selling amount(i,e if they buy a share for 500 and the value drops to 400 after 
the second deadline, he made a loss, now he sells it, now update the balance 
by adding the 400).</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500 font-bold">▲</span>
              <p>So, on the first day, participants can buy stocks as soon as the headline 
releases or after the 1hr buffer time, but on the second day, after the same 
company's 2nd headline gets published, if they want to sell the shares, they 
shall sell it, but the updated balance will be reflected only after the buffer 
time (based on rule 4). If they sell it within the buffer time, then the 1st
headline’s value will be credited to the player’s account & they won’t be 
allowed to buy the same stock after selling it.</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">&#9660;</span>
              <p>Give a description as to why you buy/sell a stock, so that the admin can fairly 
              assess and declare the winner in case of a tight competition</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500 font-bold">▲</span>
              <p>Participants can start playing anytime during the 2-day duration.</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">&#9660;</span>
              <p>The event ends on the same time for all participants on the second day.</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500 font-bold">▲</span>
              <p>All decisions made by the organizers are final.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
