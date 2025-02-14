import { useState, useEffect } from "react";
// import { apiGetHistory } from '../../auth/auth';
import Heading from "../../components/Heading/Heading";
import styles from "./History.module.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

// function Historyrecord(props){

//     return(
//         <>
//         <tr>
//             <td>{props.companyName}</td>
//             <td>{props.nstocks}</td>
//             <td>{props.flag}</td>
//         </tr>
//         </>
//     )
// }

// function HistoryList(props){
//     // console.log(props+"skj");
//     var datalist=props.data.map((item,i)=>{
//         return (<Historyrecord companyName={item.company} nstocks={item.number} flag={item.flag} />);
//     })
//     return {datalist};
//     // return <>hii</>

// }

// class History extends React.Component{

//     constructor(props){
//         super(props);
//         this.state={
//             datalist:[],
//         }
//     }

//     fetchHistory = async (config) => {
//         const history = await apiGetHistory(config);
//         if (history === undefined) {
//           console.log("Error");
//         }
//         else {
//           if (history.status >= 200 && history.status <= 299) {
//             // console.log(profile.data);
//             const res = history.data;
//             if (res) {
//               console.log(res);
//               const list=res.map((item,i)=>{
//                   return <Historyrecord companyName={item.company} nstocks={item.number} flag={item.flag} />
//               });

//               this.setState({datalist:list});

//             }
//           }
//           else if (history.status >= 400 && history.status < 500) {
//             //about to fill
//           }
//           else if (history.status >= 500 && history.status < 600) {
//             console.log("Server Side Error");
//           }
//         }
//       }

//     componentDidMount() {
//       if(localStorage.getItem('token')==null){
//         window.location='/login';
//         // showMessage('Login to continue','danger')
//       }
//         const config = {
//           headers: {
//             authorization: localStorage.getItem("token"),
//           },
//         };
//         this.fetchHistory(config);
//       }

//       render(){
//         //   console.log(response+"askj")
//           return (<div className={`${styles.tableContainer}`}>
//                 <Heading text="TRANSACTIONS" />
//                 <table className={`${styles.transactionTable}`}>
//                     <thead>
//                     <tr>
//                         <th>Company</th>
//                         <th>Quantity</th>
//                         <th>Flag</th>
//                     </tr>
//                     </thead>
//                     {this.state.datalist}
//                 </table>
//           </div>)
//       }
// }

function History() {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/history", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      setHistory(response.data.historyData);
    } catch (error) {
      console.error("Error occurred :", error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[url('/images/bear-1.jpg')] bg-cover bg-center lg:bg-top opacity-100">
      <Navbar />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className={`${styles.tableContainer}`}>
        <Heading text="TRANSACTIONS" />
        <table className="backdrop-blur-xl p-4 sm:p-6 mt-24 shadow-lg w-[80%] self-start lg:mx-36 md:mx-24 mx-10 rounded-2xl">
          <thead className="p-5 m-4">
            <tr
              colSpan={3}
              className="w-[100%] border border-[#aabbcc] border-x-0 border-t-0"
            >
              <th
                colSpan={1}
                className="text-md sm:text-lg font-medium w-[30%] text-center text-[#0184ffe5]"
              >
                Company
              </th>
              <th
                colSpan={1}
                className="text-md sm:text-lg font-medium w-[30%] text-center text-[#0184ffe5]"
              >
                Quantity
              </th>
              <th
                colSpan={1}
                className="text-md sm:text-lg font-medium w-[30%] text-center text-[#0184ffe5]"
              >
                Flag
              </th>
            </tr>
          </thead>
          {/* {this.state.datalist} */}
          {history &&
            history.length > 0 &&
            history.map((record, index) => {
              return (
                <tr
                  key={index + 1}
                  className="text-center font-semibold border border-[#3341ff] border-x-0 "
                >
                  <td className="text-md sm:text-lg font-medium w-[30%] text-center text-[#f4f6f7e5]">
                    {record.company}
                  </td>
                  <td className="text-md sm:text-lg font-medium w-[30%] text-center text-[#f4f6f7e5]">
                    {record.noOfStocks}
                  </td>
                  <td className="text-md sm:text-lg font-medium w-[30%] text-center text-[#f4f6f7e5]">
                    {record.flag}
                  </td>
                </tr>
              );
            })}
          {history.length === 0 && (
            <tr className="text-center w-full text-[#bbc5cee5]">
              <td colSpan={3}>No history of transaction was found</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}

export default History;
