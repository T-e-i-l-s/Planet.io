import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./Styles.css";
import "../../../assets/values/Colors.css";
import planets from "../../../../data/planets.json";
import constellations from "../../../../data/constellations.json";
import SpaceObject from "../../views/object/View";
import Star from "../../views/Star";

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
            <img src="/search.svg" width={"20rem"} height={"20rem"} />
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
              top: "15%",
              left: "25%",
            }}
            name={"Voyadger 1"}
            onClick={() => {
              setScreenOpacity(0);
              setTimeout(() => {
                navigate("/planet/voyager1");
              }, 1500);
            }}
            textPosition={{
              top: "calc(15% + 20px)",
              left: "calc(25% + 45px)",
            }}
          />

          <SpaceObject
            style={{
              top: "30%",
              left: "30%",
            }}
            name={"Voyadger 2"}
            onClick={() => {
              setScreenOpacity(0);
              setTimeout(() => {
                navigate("/planet/voyager2");
              }, 1500);
            }}
            textPosition={{
              top: "calc(30% + 20px)",
              left: "calc(30% + 45px)",
            }}
          />

          <SpaceObject
            style={{
              top: "40%",
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
              top: "calc(40% + 20px)",
              left: "calc(60% + 45px)",
            }}
          />

          <SpaceObject
            style={{
              top: "60%",
              left: "40%",
            }}
            name={"Cancri E"}
            onClick={() => {
              setScreenOpacity(0);
              setTimeout(() => {
                navigate("/planet/cancri");
              }, 1500);
            }}
            textPosition={{
              top: "calc(60% + 20px)",
              left: "calc(40% + 45px)",
            }}
          />

          <SpaceObject
            style={{
              top: "80%",
              left: "10%",
            }}
            name={"Vesta"}
            onClick={() => {
              setScreenOpacity(0);
              setTimeout(() => {
                navigate("/planet/vesta");
              }, 1500);
            }}
            textPosition={{
              top: "calc(80% + 20px)",
              left: "calc(10% + 45px)",
            }}
          />

          <SpaceObject
            style={{
              top: "70%",
              left: "75%",
            }}
            name={"WASP-12 b"}
            onClick={() => {
              setScreenOpacity(0);
              setTimeout(() => {
                navigate("/planet/wasp");
              }, 1500);
            }}
            textPosition={{
              top: "calc(70% + 20px)",
              left: "calc(75% + 45px)",
            }}
          />

          <img
            src="/bear.svg"
            className="main-stars"
            style={{
              top: "70%",
              left: "30%",
              width: "400px",
              height: "120px",
            }}
            onClick={() => {
              navigate("/constellation/bear");
            }}
          />

          <img
            src="/dragon.svg"
            className="main-stars"
            style={{
              top: "10%",
              left: "3%",
              width: "500px",
              height: "300px",
            }}
            onClick={() => {
              navigate("/constellation/dragon");
            }}
          />

          <img
            src="/cassiopeia.svg"
            className="main-stars"
            style={{
              top: "20%",
              left: "80%",
              width: "100px",
              height: "200px",
            }}
            onClick={() => {
              navigate("/constellation/cassiopeia");
            }}
          />
        </>
      ) : (
        <>
          <button
            onClick={() => navigate("/search")}
            className="main-nav-button2"
          >
            <img src="/search.svg" width={"20rem"} height={"20rem"} />
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
          {Object.entries(constellations).map(([key, value]) => {
            return (
              <button
                key={key}
                onClick={() => navigate(`/constellation/${key}`)}
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
