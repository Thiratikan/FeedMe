import React from "react";
import { BoxStyle, OverlayStyle } from "./styles/ModelBox-styled";
import Drink from "./RandomItem";

function ModelBox({ open, children, onClose, itemType }) {
  if (!open) return null;

  return (
    <>
      <OverlayStyle>
        <BoxStyle>
          <Drink itemType={itemType} />
          <button>FEED MORE</button>
          <button onClick={onClose}>Close</button>
          {children}
        </BoxStyle>
      </OverlayStyle>
    </>
  );
}

export default ModelBox;
