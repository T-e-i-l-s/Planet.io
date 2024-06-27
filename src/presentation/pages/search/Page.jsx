import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import "../../../assets/values/Colors.css";
import planets from "../../../../data/planets.json";
import constellations from "../../../../data/constellations.json";
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
  const [request, setRequest] = useState("");
  const [results, setResults] = useState({
    planets: [],
    constellations: [],
  });

  useEffect(() => {
    const arr1 = {};
    Object.entries(planets).map(([key, value]) => {
      if (value.name.toLowerCase().includes(request.toLowerCase())) {
        arr1[key] = value;
      }
    });
    const arr2 = {};
    Object.entries(constellations).map(([key, value]) => {
      if (value.name.toLowerCase().includes(request.toLowerCase())) {
        arr2[key] = value;
      }
    });
    setResults({
      planets: arr1,
      constellations: arr2,
    });
  }, [request]);

  return (
    <div className="search-container">
      {stars.map((item, index) => {
        return (
          <div
            key={index}
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

      <div className="search-header">
        <button onClick={() => navigate(-1)} className="search-go-back-button">
          <img src="/back.svg" width={"35rem"} height={"35rem"} />
        </button>
      </div>

      <input
        className="input"
        type="text"
        placeholder={"Найти в космосе"}
        value={request}
        onChange={(e) => setRequest(e.target.value)}
      />
      {Object.entries(results.planets).length +
        Object.entries(results.constellations).length ==
        0 && <p className="search-results-title">Ничего не найдено</p>}

      <ul className="search-list">
        {Object.entries(results.planets).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => navigate(`/planet/${key}`)}
              className="search-object-block"
            >
              {value.name}
            </button>
          );
        })}
        {Object.entries(results.constellations).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => navigate(`/constellation/${key}`)}
              className="search-object-block"
            >
              {value.name}
            </button>
          );
        })}
      </ul>
    </div>
  );
}
