import React, { useEffect, useState } from "react";
import "./Styles.css";

export default function App({ style, onClick, name, textPosition }) {
  const [starScale, setStarScale] = useState(1);
  return (
    <>
      <div
        className="main-planet"
        style={{
          ...style,
          transform: `scale(${starScale})`,
        }}
        onClick={() => {
          setStarScale(300);
          onClick();
        }}
      />
      <div
        className="hover-text"
        style={{ ...textPosition }}
        onClick={() => {
          setStarScale(300);
          onClick();
        }}
      >
        {name}
      </div>
    </>
  );
}
