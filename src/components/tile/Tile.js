import React from "react";

export const Tile = ({ data }) => {
  return (
    <div className="tile-container">
      <li>
      {Object.values(data).map((value, idx) =>  {
        const className = `tile${idx === 0 ? "-title" : ""}`;
        return <p key={idx} className={className}>{value}</p>
      })}
      </li>
    </div>
  );
};
