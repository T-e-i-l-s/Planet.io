import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./Styles.css";
import "../../../assets/values/Colors.css";
import planets from "../../../../data/planets.json";
import SpaceObject from "../../views/object/View";

export default function Page() {
  const navigate = useNavigate();
  const [screenOpacity, setScreenOpacity] = useState(1);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < window.innerWidth * window.innerHeight * 0.00006; i++) {
      arr.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        side: Math.random() * 4,
      });
    }
    console.log(arr);
    setStars(arr);
  }, []);

  return (
    <div className="main-container" style={{ opacity: screenOpacity }}>
      {stars.map((item, index) => {
        return <Star key={index} star={item} />;
      })}

      {window.innerWidth >= 750 ? (
        <>
          <button
            onClick={() => navigate("/search")}
            className="main-nav-button1"
          >
            Поиск
          </button>
          <SpaceObject
            style={{
              top: "20%",
              left: "40%",
            }}
            name={"Солнечная система"}
            onClick={() => {
              setScreenOpacity(0);
              setTimeout(() => {
                navigate("/solarsystem");
              }, 1500);
            }}
            textPosition={{
              top: "calc(20% + 20px)",
              left: "calc(40% + 45px)",
            }}
          />

          <SpaceObject
            style={{
              top: "50%",
              left: "10%",
            }}
            name={"Вояджер"}
            onClick={() => {
              setScreenOpacity(0);
              setTimeout(() => {
                navigate("/planet/voyager");
              }, 1500);
            }}
            textPosition={{
              top: "calc(50% + 20px)",
              left: "calc(10% + 45px)",
            }}
          />

          <SpaceObject
            style={{
              top: "70%",
              left: "60%",
            }}
            name={"Proxima B"}
            onClick={() => {
              setScreenOpacity(0);
              setTimeout(() => {
                navigate("/planet/proxima");
              }, 1500);
            }}
            textPosition={{
              top: "calc(70% + 20px)",
              left: "calc(60% + 45px)",
            }}
          />

          <img
            src="/bear.svg"
            className="main-stars"
            style={{
              top: "50%",
              left: "20%",
            }}
          />
        </>
      ) : (
        <>
          <button
            onClick={() => navigate("/search")}
            className="main-nav-button2"
          >
            Поиск
          </button>
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

function Star({ star }) {
  console.log(star);
  const style = {
    "--x": `${star.x}px`,
    "--y": `${star.y}px`,
    "--side": `${star.side}px`,
  };

  return <div className="star-container" style={style}></div>;
}
