import React, { useEffect, useState } from "react";
import "./Styles.css";
import Model from "../../views/planet/View";
import TextBlock from "../../views/textBlock/View";
import {
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import planets from "../../../../data/planets.json";

export default function Page() {
  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  const planetName = useParams().name;
  const planetInfo = planets[planetName];

  const [isVisible, setIsVisible] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setHasOpened(true);
  };

  return (
    <div className="earth-container">
      <button onClick={() => navigate(-1)} className="planet-go-back-button">
        Назад
      </button>
      <h1 className="earth-title">{planetInfo.name}</h1>
      <Model modelPath={planetInfo.path} />

      <button onClick={toggleVisibility} className="planet-open-modal-button">
        Информация о планете
      </button>

      <div className={`planet-info-block ${isVisible ? "visible" : ""}`}>
        {hasOpened && (
          <>
            <button
              onClick={toggleVisibility}
              className="planet-close-modal-button"
            >
              Закрыть
            </button>
            <ul className="planet-info-list">
              {planetInfo.about.map((item, index) => {
                return (
                  <TextBlock
                    key={index}
                    requestedTitle={item.name}
                    requestedText={item.text}
                    style={{
                      zIndex: 100,
                      width: 200,
                    }}
                  />
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
