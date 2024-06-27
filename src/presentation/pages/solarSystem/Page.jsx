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
        Назад
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
    navpoint: "/earth",
  },
  {
    name: "Уран",
    size: 40,
    orbit: 110,
    color: "white",
    navpoint: "/earth",
  },
  {
    name: "Сатурн",
    size: 80,
    orbit: 110,
    color: "white",
    navpoint: "/earth",
  },
  {
    name: "Юпитер",
    size: 100,
    orbit: 110,
    color: "white",
    navpoint: "/earth",
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
    size: 35,
    orbit: 110,
    color: "/earth.svg",
    navpoint: "/planet/earth",
  },
  {
    name: "Венера",
    size: 35,
    orbit: 110,
    color: "white",
    navpoint: "/earth",
  },
  {
    name: "Меркурий",
    size: 30,
    orbit: 110,
    color: "white",
    navpoint: "/earth",
  },
  {
    name: "Солнце",
    size: 160,
    orbit: 110,
    color: "/sun.svg",
    navpoint: "/planet/sun",
  },
];
