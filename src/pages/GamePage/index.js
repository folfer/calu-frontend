import React from "react";
import { Container, Main } from "./styles";
import Game from "../../components/Game";

const GamePage = () => {
  return (
    <Main>
      <Container id="foo">
        <Game />
      </Container>
    </Main>
  );
};

export default GamePage;
