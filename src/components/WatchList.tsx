import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/sample";
import WatchListItem from "./WatchListItem";

const WatchList = () => {
  const [openModel, setOpenModel] = useState(false);
  const [selectedStock, setSelectedStock] = useState<any>(null);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

  console.log("selectedStockselectedStock", selectedStock);

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem
              stock={stock}
              key={index}
              setOpenModel={setOpenModel}
              setSelectedStock={setSelectedStock}
            />
          );
        })}
      </ul>

      {openModel && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setOpenModel(false);
          }}
        >
          <div
            id="model"
            style={{
              backgroundColor: "white",
              width: "50%",
              height: "40%",
              borderRadius: "10px",
              boxShadow: "inherit",
              minHeight: "260px",
              minWidth: "400px",
              position: "relative",
              padding: 12,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <header
              style={{
                paddingBlock: 5,
                fontWeight: "bold",
                fontSize: 20,
                color: selectedStock?.selectedStock?.isDown
                  ? "#DF4949"
                  : "#67C988",
              }}
            >
              {selectedStock?.selectedStock?.name}
            </header>

            <div style={{ marginTop: 10 }}>
              <label
                style={{
                  fontWeight: "400",
                  fontSize: 12,
                  padding: 2,
                }}
              >
                Quantity
              </label>
              <div
                style={{
                  padding: 10,
                  border: "1px solid #E8E8E8",
                  borderRadius: 5,
                }}
              >
                <input
                  type="number"
                  value={qty}
                  onChange={(e) => setQty(+e.target.value)}
                  style={{
                    width: "97%",
                    border: "none",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <label
                style={{
                  fontWeight: "400",
                  fontSize: 12,
                  padding: 2,
                }}
              >
                Price
              </label>
              <div
                style={{
                  padding: 10,
                  border: "1px solid #E8E8E8",
                  borderRadius: 5,
                }}
              >
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(+e.target.value)}
                  style={{
                    width: "97%",
                    border: "none",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 12,
              }}
            >Current Price: <span style={{fontWeight: 'bold'}}>{selectedStock.selectedStock?.price}</span></div>

            <div
              style={{
                display: "flex",
                marginTop: 50,
                justifyContent: "space-between",
                paddingInline: 30,
              }}
            >
              <div
                style={{
                  border: "none",
                  paddingBlock: 16,
                  minWidth: 150,
                  borderRadius: 4,
                  cursor: "pointer",
                  fontWeight: "bold",
                  backgroundColor: "#EEEEEE",
                  fontSize: 12,
                  textAlign: "center",
                  alignContent:'center',
                  textTransform:'capitalize'
                }}
              >
                {selectedStock?.type}
              </div>

              <div
                style={{
                  border: "none",
                  paddingBlock: 16,
                  minWidth: 150,
                  borderRadius: 4,
                  cursor: "pointer",
                  backgroundColor: "#0C6DFE",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  textAlign: "center",
                  alignContent:'center',
                  textTransform:'capitalize'
                }}
                onClick={()=>{setOpenModel(false);setSelectedStock({});setQty(0);setPrice(0);}}
              >
                cancel
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchList;
