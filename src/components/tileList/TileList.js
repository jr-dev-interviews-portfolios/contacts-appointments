import React from "react";

import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
  return (
    <div>
      <ol>
        {list.map((obj, idx) => {
          return <Tile key={idx} data={obj} />
        })}
      </ol>
    </div>
  );
};
