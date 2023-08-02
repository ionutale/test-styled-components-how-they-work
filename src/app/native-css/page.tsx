"use client";
import { useState } from "react";
import styles from "./page.module.css";

const colors = [
  "#BF4F74",
  "#F7B801",
  "#3B5998",
  "#0E2A47",
  "#F7B801",
  "#3B5998",
  "#0E2A47",
];

export default function Home() {
  const [fontSize, setFontSize] = useState<string>("0.5");
  const [color, setColor] = useState("#BF4F74");
  const [numberOfTitles, setNumberOfTitles] = useState<number>(1000);
  const [drawnNumberOfTitles, setDrawnNumberOfTitles] = useState<number>(1000);

  const handleFontSize = () => {
    setFontSize((prevFontSize) => {
      return (parseFloat(prevFontSize) + 0.1).toFixed(1);
    });
  };

  const handleColor = () => {
    setColor((prevColor) => {
      const nextColor = colors.findIndex((color) => color === prevColor) + 1;
      if (nextColor >= colors.length) return colors[0];
      return colors[nextColor]
    });
  };

  const generateTitles = (numberOfTitles = 1000) => {
    const titles = [];
    for (let i = 0; i < numberOfTitles; i++) {
      titles.push(
        <h1
          key={i}
          className={styles.title}
          data-font-size={fontSize}
          data-color={color}
        >
          Hello World
        </h1>
      );
    }
    return titles;
  };

  return (
    <main>
      <button onClick={handleFontSize}>increase font size</button>
      <button onClick={handleColor}>change color</button>
      <input type="number" onChange={(e) => setNumberOfTitles(+e.target.value)} />
      <button onClick={() => setDrawnNumberOfTitles(numberOfTitles)}> draw titles </button>
      <h1 className={styles.title} data-font-size={fontSize} data-color={color}>
        Hello World
      </h1>
      <section>{generateTitles(drawnNumberOfTitles)}</section>
    </main>
  );
}
