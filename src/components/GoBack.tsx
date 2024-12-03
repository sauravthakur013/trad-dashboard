import React from "react";
import { NEWTAB } from "../connection/server";

function GoBack() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: "200px",
      }}
    >
      <div
  style={{
    backgroundColor: '#1F509A',
    height: '50px',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    transform: 'scale(1)', // Default scale
  }}
  onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
    (e.target as HTMLElement).style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.3)';
    (e.target as HTMLElement).style.transform = 'scale(1.05)';
  }}
  onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
    (e.target as HTMLElement).style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    (e.target as HTMLElement).style.transform = 'scale(1)';
  }}
  onClick={() => {
    localStorage.clear();
    const newTab = window.open(
        `${NEWTAB}home`,
        "_blank"
      );
  }}
>
  You Are Logged Out, Please Login Again
</div>

    </div>
  );
}

export default GoBack;
