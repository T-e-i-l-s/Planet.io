import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import "../../../assets/values/Colors.css";
import planets from "../../../../data/planets.json";

export default function Page() {
  const navigate = useNavigate();
  const [request, setRequest] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const arr = {};
    Object.entries(planets).map(([key, value]) => {
      if (value.name.toLowerCase().includes(request.toLowerCase())) {
        arr[key] = value;
      }
    });
    setResults(arr);
  }, [request]);

  return (
    <div className="search-container">
      <button onClick={() => navigate(-1)} className="search-go-back-button">
        Назад
      </button>
      <input
        className="input"
        type="text"
        placeholder={"Найти в космосе"}
        value={request}
        onChange={(e) => setRequest(e.target.value)}
      />
      {Object.entries(results).length > 0 ? (
        <p className="search-results-title">Результаты</p>
      ) : (
        <p className="search-results-title">Ничего не найдено</p>
      )}

      <ul className="search-list">
        {Object.entries(results).map(([key, value]) => {
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
      </ul>
    </div>
  );
}
