"use client";
import { useState } from "react";
import styled from "styled-components";

const Title = styled.h1<{ fontSize: number; color: string }>`
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color};
  text-align: center;
  border: 1px solid #bf4f74;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem auto;
  transition: all 0.2s ease-in-out;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  cursor: pointer;
  text-transform: uppercase;
  width: calc(100% - 4rem);
  max-width: 450px;
  display: block;

  &:hover {
    color: #f7b801;
    border-color: #f7b801;
  }

  &:active {
    color: #3b5998;
    border-color: #3b5998;
  }

  &:focus {
    color: #0e2a47;
    border-color: #0e2a47;
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.fontSize - 0.2}rem;
  }
`;

const colors = [
  "#BF4F74",
  "#F7B801",
  "#3B5998",
  "#0E2A47",
];

export default function Home() {
  const [fontSize, setFontSize] = useState(0.5);
  const [color, setColor] = useState("#BF4F74");
  const [numberOfTitles, setNumberOfTitles] = useState<number>(1000);
  const [drawnNumberOfTitles, setDrawnNumberOfTitles] = useState<number>(1000);

  const handleFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 0.1);
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
        <Title key={i} fontSize={fontSize} color={color}>
          Hello World
        </Title>
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
      <Title fontSize={fontSize} color={color}>
        Hello World
      </Title>
      <section>{generateTitles(drawnNumberOfTitles)}</section>
    </main>
  );
}
