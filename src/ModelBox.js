import React from "react";
import { BoxStyle, OverlayStyle } from "./styles/ModelBox-styled";
import RandomItem from "./RandomItem";

function ModelBox({ open, onClose, itemType }) {
  if (!open) return null;

  return (
    <>
      <OverlayStyle>
        <BoxStyle>
          <RandomItem itemType={itemType} />
          {/* <button onClick={RandomItem}>FEED MORE&</button> */}
          <button onClick={onClose}>Close</button>
        </BoxStyle>
      </OverlayStyle>
    </>
  );
}

export default ModelBox;
