import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./Styles.css";
import "../../../assets/values/Colors.css";
import starsJson from "../../../../data/starts.json";
import planets from "../../../../data/planets.json";

export default function Page() {
  const navigate = useNavigate();
  const [stars, setStars] = useState(starsJson);
  const [starScale, setStarScale] = useState(1);
  const [background, setBackground] = useState("transparent");
  const [screenOpacity, setScreenOpacity] = useState(1);

  return (
    <div className="main-container" style={{ opacity: screenOpacity }}>
      {stars.map((startPoint, index) => (
        <Star key={index} startPoint={startPoint} />
      ))}

      {window.innerWidth >= 750 ? (
        <>
          <div
            className="main-planet"
            style={{
              top: "20%",
              left: "40%",
              transform: `scale(${starScale})`,
              backgroundColor: background,
            }}
            onClick={() => {
              setStarScale(300);
              setScreenOpacity(0);
              setBackground("var(--text-color)");
              setTimeout(() => {
                navigate("/solarsystem");
              }, 1500);
            }}
          />
          <div
            className="hover-text"
            style={{
              top: "calc(20% + 20px)",
              left: "calc(40% + 45px)",
            }}
          >
            Солнечная система
          </div>

          <img
            src="../../../../public/bear.svg"
            className="main-stars"
            style={{
              top: "50%",
              left: "20%",
            }}
          />
        </>
      ) : (
        <>
          <p className="main-info-text">
            Мы рекомендуем использовать устройства с большей диагональю. Это
            поможет вам получить более полный опыт использования нашего сервиса.
          </p>
          {Object.entries(planets).map(([key, value]) => {
            return (
              <button
                key={key}
                onClick={() => navigate(`/planet/${key}`)}
                className="main-object-block"
                style={{
                  top: "calc(20% + 20px)",
                  left: "calc(40% + 45px)",
                }}
              >
                {value.name}
              </button>
            );
          })}
        </>
      )}
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
