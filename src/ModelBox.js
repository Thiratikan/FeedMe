import React from "react";
import { BoxStyle, OverlayStyle } from "./styles/ModelBox-styled";
import RandomItem from "./RandomItem";

function ModelBox({ open, children, onClose, itemType }) {
  if (!open) return null;

  return (
    <>
      <OverlayStyle>
        <BoxStyle>
          <RandomItem itemType={itemType} />
          <button onClick={RandomItem}>FEED MORE&#10084;</button>
          <button onClick={onClose}>Close</button>
          {children}
        </BoxStyle>
      </OverlayStyle>
    </>
  );
}

export default ModelBox;
