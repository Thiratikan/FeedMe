import React from "react";
import { BoxStyle, OverlayStyle } from "./styles/ModelBox-styled";
import Drink from "./Drink";
import choices from "./data";

function ModelBox({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <OverlayStyle>
        <BoxStyle>
          <Drink />
          <button>FEED MORE</button>
          <button onClick={onClose}>Close</button>
          {children}
        </BoxStyle>
      </OverlayStyle>
    </>
  );
}

export default ModelBox;
