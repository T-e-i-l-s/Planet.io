export default function Star({ star }) {
  const style = {
    "--x": `${star.x}px`,
    "--y": `${star.y}px`,
    "--side": `${star.side}px`,
  };

  return <div className="star-container" style={style}></div>;
}
