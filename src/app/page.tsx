'use client'
import { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1<{ fontSize: number, color: string
}>`
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color};
  text-align: center;
  border: 1px solid #BF4F74;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem;

  &:hover {
    color: #F7B801;
    border-color: #F7B801;
  }

  &:active {
    color: #3B5998;
    border-color: #3B5998;
  }

  &:focus {
    color: #0E2A47;
    border-color: #0E2A47;
  }
`;

const colors = ['#BF4F74', '#F7B801', '#3B5998', '#0E2A47', '#F7B801', '#3B5998', '#0E2A47'];

export default function Home() {
  const [fontSize, setFontSize] = useState(0.5);
  const [color, setColor] = useState('#BF4F74');

  const handleFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 0.1);
  };

  const handleColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <main>
      <button onClick={handleFontSize}>increase font size</button>
      <button onClick={handleColor}>change color</button>
      <Title 
      fontSize={fontSize}
      color={color}
      >Hello World</Title>
    </main>
  );
}
