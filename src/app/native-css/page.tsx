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

  const handleFontSize = () => {
    setFontSize((prevFontSize) => {
      return (parseFloat(prevFontSize) + 0.1).toFixed(1);
    });
  };

  const handleColor = () => {
    const nextColor = colors.findIndex((color) => color === color) + 1;
    if (nextColor === colors.length) return setColor(colors[0]);
    setColor(colors[nextColor]);
  };

  const generateTitles = () => {
    const titles = [];
    for (let i = 0; i < 10000; i++) {
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
      <h1 className={styles.title} data-font-size={fontSize} data-color={color}>
        Hello World
      </h1>
      <section>{generateTitles()}</section>
    </main>
  );
}
