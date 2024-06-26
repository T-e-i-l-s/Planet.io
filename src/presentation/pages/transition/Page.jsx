import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import "../../../assets/values/Colors.css";
import starsJson from "../../../../data/starts.json";

export default function Page() {
  const navigate = useNavigate();
  const [stars, setStars] = useState(starsJson);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(0);
      setScale(3);
      setTimeout(() => {
        navigate("/solarsystem");
      }, 3000);
    }, 0);
  }, [navigate]);

  return (
    <div
      className="transition-container"
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
      }}
    >
      {stars.map((startPoint, index) => (
        <Star key={index} startPoint={startPoint} />
      ))}
    </div>
  );
}

function Star({ startPoint }) {
  const style = {
    "--x": `${startPoint.x}px`,
    "--y": `${startPoint.y}px`,
    "--side": `${startPoint.side}px`,
  };

  return <div className="star-container" style={style}></div>;
}

function MainStar() {
  return <div className="main-star-container"></div>;
}
