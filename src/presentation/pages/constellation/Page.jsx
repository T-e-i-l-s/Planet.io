import React, { useEffect, useState } from "react";
import "./Styles.css";
import TextBlock from "../../views/textBlock/View";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import constellations from "../../../../data/constellations.json";

export default function Page() {
  const navigate = useNavigate();
  const location = useLocation();
  const constellationNmae = useParams().name;
  const constellationInfo = constellations[constellationNmae];

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
    <div className="constellation-container">
      <button
        onClick={() => navigate(-1)}
        className="constellation-go-back-button"
      >
        Назад
      </button>
      <h1 className="constellation-title">{constellationInfo.name}</h1>

      <img className="constellation-image" src={constellationInfo.path} />

      <button
        onClick={toggleVisibility}
        className="constellation-open-modal-button"
      >
        Информация об объекте
      </button>

      {hasOpened && (
        <div
          className={`constellation-info-block ${isVisible ? "visible" : ""}`}
        >
          <button
            onClick={closeInfoBlock}
            className="constellation-close-modal-button"
          >
            Закрыть
          </button>
          <ul className="constellation-info-list">
            {constellationInfo.about.map((item, index) => (
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
