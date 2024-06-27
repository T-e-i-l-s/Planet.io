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
        return <Star key={index} star={item} />;
      })}

      <button onClick={() => navigate("/")} className="solar-go-back-button">
        Назад
      </button>

      <div className="solar-list">
        {planets.map((item, index) => {
          return (
            <div
              key={index}
              className="solar-planet-block"
              onClick={() => navigate(item.navpoint)}
            >
              <img
                src={item.color}
                className="solar-planet"
                style={{
                  width: item.size + "rem",
                  height: item.size + "rem",
                  marginTop: 25,
                  marginBottom: 25,
                  marginLeft: 100 - item.size / 2,
                  backgroundColor: "transparent",
                }}
              />
              <p className="solar-planet-name">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const planets = [
  // {
  //   name: "Нептун",
  //   size: 40,
  //   color: "white",
  //   navpoint: "/earth",
  // },
  // {
  //   name: "Уран",
  //   size: 40,
  //   color: "white",
  //   navpoint: "/earth",
  // },
  // {
  //   name: "Сатурн",
  //   size: 80,
  //   color: "white",
  //   navpoint: "/earth",
  // },
  // {
  //   name: "Юпитер",
  //   size: 100,
  //   color: "white",
  //   navpoint: "/earth",
  // },
  {
    name: "Марс",
    size: 30,
    color: "/mars.svg",
    navpoint: "/planet/mars",
  },
  {
    name: "Земля",
    size: 35,
    color: "/earth.svg",
    navpoint: "/planet/earth",
  },
  // {
  //   name: "Венера",
  //   size: 35,
  //   color: "white",
  //   navpoint: "/earth",
  // },
  // {
  //   name: "Меркурий",
  //   size: 20,
  //   color: "white",
  //   navpoint: "/earth",
  // },
  {
    name: "Солнце",
    size: 200,
    color: "/sun.svg",
    navpoint: "/planet/sun",
  },
];
