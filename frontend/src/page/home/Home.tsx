import React from "react";
import {
  Container,
  ContainerHead,
  Welcome,
  ContainerBody,
  ContainerUp,
  Title,
  Parrafo,
  ContainerDown,
  Button,
} from "./styled-Home";
import styled from "styled-components";

export const HomeComponent: React.FC = () => {
  return (
    <Container>
      <ContainerHead>
        <Welcome>Somos Flamachat ! 🙌</Welcome>
      </ContainerHead>
      <ContainerBody>
        <ContainerUp>
          <Title>Bienvenido</Title>

          <Parrafo>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            similique, fuga incidunt consectetur dignissimos accusantium id,
            alias corporis distinctio ipsum officia error nostrum tempore dolore
            eius cumque itaque illum velit.
          </Parrafo>
        </ContainerUp>
        <ContainerDown>
          <Button>Iniciar concersacion</Button>
        </ContainerDown>
        <Hola></Hola>
      </ContainerBody>
    </Container>
  );
};
const Hola = styled.div``;


