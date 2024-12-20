import React, { useEffect } from "react";
// import { holdings } from "./../data/sample";
import { httpGet } from "../connection/server";

const Holdings = () => {
  const [holdings, setHoldings] = React.useState<any>([]);

  const getHoldings = async () => {
    try {
      const response: any = await httpGet({path : "api/getHoldings"});
      console.log(response);
      setHoldings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHoldings();
  },[])

  console.log(holdings)


  return (
    <>
      <h3 className="title">Holdings ({holdings?.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdings?.map((stock: any, index: any) => {
            const currentValue = stock.price * stock.qty;
            const isProfit = currentValue - stock.avg * stock.qty >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currentValue.toFixed(2)}</td>
                <td className={profitClass}>
                  {(currentValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profitClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
