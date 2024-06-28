import React, { useEffect, useState } from "react";
import "./Styles.css";
import Model from "../../views/planet/View";
import TextBlock from "../../views/textBlock/View";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import planets from "../../../../data/planets.json";
import Star from "../../views/Star";
import { RGB_PVRTC_2BPPV1_Format } from "three";

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

      <button onClick={() => navigate(-1)} className="planet-go-back-button">
        <img src="/back.svg" width={"35rem"} height={"35rem"} />
      </button>

      {/* <ul className="planet-info-list2">
        {planetInfo.about.slice(0, 3).map((item, index) => (
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

      <ul className="planet-info-list1">
        {planetInfo.about.slice(3, 5).map((item, index) => (
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
      </ul> */}

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
            <img src="/close.svg" width={"30rem"} height={"30rem"} />
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
