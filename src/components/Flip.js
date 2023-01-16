import React from "react";

export default function Flip({ resetAll }) {
  return (
    <div className="btns">
      <button className="btn" onClick={resetAll}>
        Reset All
      </button>
    </div>
  );
}
