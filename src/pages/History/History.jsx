import React, { useState, useEffect } from "react";
// import { apiGetHistory } from '../../auth/auth';
import Heading from "../../components/Heading/Heading";
import styles from "./History.module.css";
import axios from "axios";

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
      console.log(response);
      setHistory(response.data.historyData);
    } catch (error) {
      console.error("Error occurred :", error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-red-300 to-blue-500">
      <div className={`${styles.tableContainer}`}>
        <Heading text="TRANSACTIONS" />
        <table className={`${styles.transactionTable}`}>
          <thead className="p-5 m-4">
            <tr colSpan={3} className="w-[100%]">
              <th colSpan={1} className="w-[30%]">
                Company
              </th>
              <th colSpan={1} className="lg:w-[30%]">
                Quantity
              </th>
              <th colSpan={1} className="lg:w-[30%]">
                Flag
              </th>
            </tr>
          </thead>
          {/* {this.state.datalist} */}
          {history &&
            history.length > 0 &&
            history.map((record, index) => {
              return (
                <tr key={index + 1} className="text-center font-semibold">
                  <td>{record.company}</td>
                  <td>{record.noOfStocks}</td>
                  <td>{record.flag}</td>
                </tr>
              );
            })}
          {history.length === 0 && (
            <tr className="text-center w-full">
              <td colSpan={3}>No history of transaction was found</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}

export default History;
