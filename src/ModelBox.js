import React from "react";
import { BoxStyle, OverlayStyle } from "./styles/ModelBox-styled";

function ModelBox({ open, children, onClose }) {
  if (!open) return null;
  return (
    <>
      <OverlayStyle>
        <BoxStyle>
          <button>FEED MORE</button>
          <button onClick={onClose}>Close</button>
          {children}
        </BoxStyle>
      </OverlayStyle>
    </>
  );
}

export default ModelBox;
