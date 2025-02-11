export const rules = [
  {
    icon: "▲",
    color: "text-green-500",
    text: "Every hour there will be 4 headlines with respect to 4 different companies, and the price value will be affected exactly 1 hour (buffer time) after these headlines.",
  },
  {
    icon: "▼",
    color: "text-red-500",
    text: "The market opens at 4 pm and closes at 12 am.",
  },
  {
    icon: "▲",
    color: "text-green-500",
    text: "This is a 2-day event, the first day will have the first headline about the 24 companies and the 2nd day will have the next set of headlines.",
  },
  {
    icon: "▼",
    color: "text-red-500",
    text: "Initially each user must be given 1,00,000 kuros (imaginary kuros) and if a user buys something and sells it for a profit only the amount for which he purchased the stock will be returned to his balance and the profit will be added to a separate column which will not be visible for the user until the end of the event and if he makes a loss, the user will be given the entire selling amount(i,e if they buy a share for 500 and the value drops to 400 after the second deadline, he made a loss, now he sells it, now update the balance by adding the 400).",
  },
  {
    icon: "▲",
    color: "text-green-500",
    text: "So, on the first day, participants can buy stocks as soon as the headline releases or after the 1hr buffer time, but on the second day, after the same company's 2nd headline gets published, if they want to sell the shares, they shall sell it, but the updated balance will be reflected only after the buffer time (based on rule 4). If they sell it within the buffer time, then the 1st headline’s value will be credited to the player’s account & they won’t be allowed to buy the same stock after selling it.",
  },
  {
    icon: "▼",
    color: "text-red-500",
    text: "Give a description as to why you buy/sell a stock, so that the admin can fairly assess and declare the winner in case of a tight competition.",
  },
  {
    icon: "▲",
    color: "text-green-500",
    text: "Participants can start playing anytime during the 2-day duration.",
  },
  {
    icon: "▼",
    color: "text-red-500",
    text: "The event ends on the same time for all participants on the second day.",
  },
  {
    icon: "▲",
    color: "text-green-500",
    text: "All decisions made by the organizers are final.",
  },
];

export const instructions = [
  {
    icon: "▲",
    color: "text-green-500",
    text: "Wallstreet Wolverine is an imaginary stock exchange event with 8 companies across various sectors.",
  },
  {
    icon: "▼",
    color: "text-red-500",
    text: "All stocks are purely imaginary and any resemblance is only a coincidence.",
  },
  {
    icon: "▲",
    color: "text-green-500",
    text: "The fluctuations in stock prices have no relation with the real stock market.",
  },
  {
    icon: "▼",
    color: "text-red-500",
    text: "The provided news feeds are totally imaginary, created specifically for this event, and do not have any relation with the real world and market.",
  },
  {
    icon: "▲",
    color: "text-green-500",
    text: "One needs to buy or sell before the market closes or stocks will be squared off.",
  },
  {
    icon: "▼",
    color: "text-red-500",
    text: "The companies used here are imaginary and any resemblance is only a coincidence.",
  },
  {
    icon: "▲",
    color: "text-green-500",
    text: "The graph and statistics are subject to change in the provided time interval (30 mins), predict the stock value with the news feed, and buy/sell within the time interval.",
  },
  {
    icon: "▼",
    color: "text-red-500",
    text: "Make sure that the value of no of stock to be bought does not exceed the available credit and the occurrence of such a case may lead to negative credit and paths to disqualification.",
  },
  {
    icon: "▲",
    color: "text-green-500",
    text: "The newsfeed displayed is only relevant for the companies in this event. Hence, the change in stock value can be predicted from it. For any queries, kindly send them to the mail ID on the website.",
  },
];
