import React, { useEffect, useState } from "react";
import "./Styles.css";

export default function App({ requestedTitle, requestedText, style }) {
  const [symbols, setSymbols] = useState(0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setTitle(("" + requestedTitle).substring(0, symbols));
    setText(
      ("" + requestedText).substring(0, symbols - ("" + requestedTitle).length)
    );
  }, [symbols]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSymbols((prevSymbols) => {
        const newSymbols = prevSymbols + 1;
        if (newSymbols >= requestedText.length + requestedTitle.length) {
          clearInterval(intervalId);
        }
        return newSymbols;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="text-container"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: "20px",
        border: "3px dotted var(--text-color)",
        backgroundColor: "var(--main-color)",
        ...style,
      }}
    >
      <h3 className="text-title">{title}</h3>
      {symbols > title.length && <p className="text-text">{text}</p>}
    </div>
  );
}
