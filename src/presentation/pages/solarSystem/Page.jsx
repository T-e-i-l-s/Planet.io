import React, { useEffect, useRef, useState } from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import Star from "../../views/Star";

export default function Page() {
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
    setStars(arr);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="solar-container">
      {stars.map((item, index) => {
        return (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
            }}
          >
            <Star key={index} star={item} />
          </div>
        );
      })}

      <button onClick={() => navigate("/")} className="solar-go-back-button">
        <img src="/back.svg" width={"35rem"} height={"35rem"} />
      </button>

      <div className="solar-list">
        {planets.map((item, index) => {
          return (
            <div key={index} className="solar-planet-block">
              <div
                className="solar-orbit"
                style={{
                  width: (planets.length - index - 1) * 130 + "px",
                  height: (planets.length - index - 1) * 130 + "px",
                  top: (index + 1) * 65 + "px",
                }}
              />
              <div
                className="solar-planet"
                style={{
                  width: item.size / 3 + "rem",
                  height: item.size / 3 + "rem",
                  top: (index + 1) * 65 + "px",
                }}
                onClick={() => {
                  navigate(item.navpoint);
                }}
              />
              {item.name == "Земля" && (
                <>
                  <div
                    className="solar-planet"
                    style={{
                      width: item.size / 6 + "rem",
                      height: item.size / 6 + "rem",
                      top: (index + 1) * 65 + "px",
                      left: "calc(50% + 20px)",
                      zIndex: 150,
                    }}
                    onClick={() => {
                      navigate("/planet/moon");
                    }}
                  />
                  <div
                    className="solar-orbit"
                    style={{
                      width: "40px",
                      height: "40px",
                      top: (index + 1) * 65 + "px",
                      left: "calc(50%)",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <p
                    className="solar-planet-name show"
                    style={{
                      top: (index + 1) * 65 + "px",
                      left: "calc(50% + 20px)",
                    }}
                  >
                    Луна
                  </p>
                </>
              )}
              <p
                className="solar-planet-name show"
                style={{
                  top: (index + 1) * 65 - item.size / 3 / 2 - 30 + "px",
                }}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const planets = [
  {
    name: "Нептун",
    size: 40,
    orbit: 110,
    color: "white",
    navpoint: "/planet/neptune",
  },
  {
    name: "Уран",
    size: 40,
    orbit: 110,
    color: "white",
    navpoint: "/planet/uranus",
  },
  {
    name: "Сатурн",
    size: 80,
    orbit: 110,
    color: "white",
    navpoint: "/planet/saturn",
  },
  {
    name: "Юпитер",
    size: 100,
    orbit: 110,
    color: "white",
    navpoint: "/planet/jupiter",
  },
  {
    name: "Марс",
    size: 30,
    orbit: 110,
    color: "/mars.svg",
    navpoint: "/planet/mars",
  },
  {
    name: "Земля",
    size: 39,
    orbit: 110,
    color: "/earth.svg",
    navpoint: "/planet/earth",
  },
  {
    name: "Венера",
    size: 35,
    orbit: 110,
    color: "white",
    navpoint: "/planet/venus",
  },
  {
    name: "Меркурий",
    size: 30,
    orbit: 110,
    color: "white",
    navpoint: "/planet/mercury",
  },
  {
    name: "Солнце",
    size: 160,
    orbit: 110,
    color: "/sun.svg",
    navpoint: "/planet/sun",
  },
];
