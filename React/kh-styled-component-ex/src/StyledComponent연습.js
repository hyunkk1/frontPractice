import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 500px;
  margin: 10px auto;
`;

const Button = styled.div`
  margin: 2px;
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 10px 16px;
  color: white;
  border-radius: 2px;

  &.green {
    background-color: green;
  }

  &.orange {
    background-color: orange;
  }

  &.purple {
    background-color: purple;
  }
`;

const ColorBox = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid #ccc;
  margin: 10px auto;
  background-color: ${(props) => props.bgColor || "transparent"};

  &:hover {
    background-color: antiquewhite;
  }
`;

const ColorChange = () => {
  const [color, setColor] = useState(null);
  return (
    <>
      <Container>
        <Button className="green" onClick={() => setColor("green")}>
          green
        </Button>
        <Button className="orange" onClick={() => setColor("orange")}>
          orange
        </Button>
        <Button className="purple" onClick={() => setColor("purple")}>
          purple
        </Button>
      </Container>
      <ColorBox bgColor={color}></ColorBox>
    </>
  );
};

export default ColorChange;
