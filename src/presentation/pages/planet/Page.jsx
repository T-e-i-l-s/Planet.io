import React, { useEffect, useState } from "react";
import "./Styles.css";
import Model from "../../views/planet/View";
import TextBlock from "../../views/textBlock/View";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import planets from "../../../../data/planets.json";

export default function Page() {
  const navigate = useNavigate();
  const location = useLocation();
  const planetName = useParams().name;
  const planetInfo = planets[planetName];

  const [isVisible, setIsVisible] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  const toggleVisibility = () => {
    setHasOpened(!hasOpened);
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 0);
  };

  const closeInfoBlock = () => {
    setIsVisible(false);
    setTimeout(() => {
      setHasOpened(false);
    }, 1000);
  };

  return (
    <div className="earth-container">
      <button onClick={() => navigate(-1)} className="planet-go-back-button">
        Назад
      </button>
      <h1 className="earth-title">{planetInfo.name}</h1>
      <Model
        modelPath={planetInfo.path}
        scale={planetInfo.scale}
        light={planetInfo.light}
      />

      <button onClick={toggleVisibility} className="planet-open-modal-button">
        Информация об объекте
      </button>

      {hasOpened && (
        <div className={`planet-info-block ${isVisible ? "visible" : ""}`}>
          <button
            onClick={closeInfoBlock}
            className="planet-close-modal-button"
          >
            Закрыть
          </button>
          <ul className="planet-info-list">
            {planetInfo.about.map((item, index) => (
              <TextBlock
                key={index}
                title={item.name}
                text={item.text}
                style={{
                  zIndex: 100,
                  width: 200,
                }}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
