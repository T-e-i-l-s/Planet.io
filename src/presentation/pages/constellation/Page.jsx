import React, { useEffect, useState } from "react";
import "./Styles.css";
import TextBlock from "../../views/textBlock/View";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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

      <button
        onClick={() => navigate(-1)}
        className="constellation-go-back-button"
      >
        <img src="/back.svg" width={"35rem"} height={"35rem"} />
      </button>
      <h1
        className="constellation-title"
        style={{
          top: window.innerWidth < 750 ? "60px" : "20px",
        }}
      >
        {constellationInfo.name}
      </h1>

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
            <img src="/close.svg" width={"30rem"} height={"30rem"} />
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
