import React, { useEffect } from "react";
import { httpGet } from "../connection/server";

const Positions = () => {

  const [positions, setPositions] = React.useState<any>([]);

  const getPositions = async () => {
    try {
      const response: any = await httpGet({path : "api/getPositions"});
      setPositions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getPositions();
  },[positions])

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock:any, index:any) => {
            const currentValue = stock.price * stock.qty;
            const isProfit = currentValue - stock.avg * stock.qty >= 0.0 ;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return(
              <tr key={index}>
              <td>{stock.product}</td>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>

              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td className={profitClass}>{(currentValue - stock.avg * stock.qty ).toFixed(2)}</td>
              <td className={dayClass}>{stock.day}</td>
            </tr>
            )
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
