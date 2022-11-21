import styled from "styled-components";

export const Content = styled.article`
  grid-area: content;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerHeroContent = styled(Flex)`
  margin-top: 40px;
  margin-left: 89px;
  max-width: 500px;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  background: linear-gradient(
    66.92deg,
    rgb(99, 1, 204) 35.98%,
    rgb(124, 1, 255) 65.3%,
    rgb(238, 222, 255) 118.76%
  );
  border-radius: 16px;

  height: fit-content;
  max-height: 400px;
  width: auto;
  margin-bottom: 2rem;
`;

export const HeroImage = styled.img`
  width: 350px;
  height: auto;

  @media (min-width: 600px) {
    width: 500px;
  }
`;
