import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import { Grow, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { watchlist } from "../data/sample";

function WatchListItem(props: any) {
  const { stock } = props;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseLeave = (e: any) => {
    setIsHovered(false);
  };
  const handleMouseEnter = (e: any) => {
    setIsHovered(true);
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
            <span className="price">{stock.price}</span>
        </div>
      </div>
      {isHovered && <WatchListActions uid={stock.name} setOpenModel={props.setOpenModel} selectedStock={stock} setSelectedStock={props.setSelectedStock}  />}
    </li>
  );
}

export default WatchListItem;

const WatchListActions = ({uid, setOpenModel,selectedStock, setSelectedStock}:any) => {
  const WatchListItem = (type: any) => {
    switch (type) {
      case "buy":
        setOpenModel(true);
        setSelectedStock((prev:any)=>{
          return {
            ...prev,
            type: 'buy',
            selectedStock,
          }
        });
        break;
      case "sell":
        break;
      default:
        break;
    }
  }
  return <span className="actions">
    <span style={{paddingRight: '10px',display: 'flex'}}>
        <Tooltip
            title="Buy (B)"
            placement="top"
            arrow
            TransitionComponent={Grow}
        >
            <button className="buy" onClick={() => WatchListItem('buy')}>Buy</button>
        </Tooltip>
        <Tooltip
            title="Sell"
            placement="top"
            arrow
            TransitionComponent={Grow}
        >
            <button className="sell" onClick={() => WatchListItem('sell')}>Sell</button>
        </Tooltip>
        <Tooltip
            title="Analytics"
            placement="top"
            arrow
            TransitionComponent={Grow}
        >
            <button className="action"><BarChartOutlined className="icon"/></button>
        </Tooltip>
        <Tooltip
            title="Analytics"
            placement="top"
            arrow
            TransitionComponent={Grow}
        >
            <button className="action"><MoreHoriz className="icon"/></button>
        </Tooltip>
    </span>
  </span>
};
