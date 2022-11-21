import {
  ContainerHeroContent,
  Flex,
  HeroImage,
  WelcomeContainer,
} from "./styles";
import Image from "../../images/header_image.webp";
import { Typography } from "../../UI-components";
import { Button } from "../../UI-components/button";

import { useNavigate } from "react-router-dom";

export const WelcomeComponent = () => {
  const navigate = useNavigate();
  return (
    <Flex>
      <WelcomeContainer>
        <ContainerHeroContent>
          <Typography fontSize="10px" color="white" margin="0 0 20px">
            LLEGASTE AL LUGAR QUE ESTABAS BUSCANDO
          </Typography>

          <Typography fontSize="48px" color="white" margin="0 0 20px">
            <Typography fontSize="48px" color="white" fontWeight="bold">
              Compramos{" "}
            </Typography>
            tu vivienda en 10 días*
          </Typography>

          <Typography fontSize="16px" color="white" margin="0 0 16px">
            <Typography fontSize="16px" color="white" fontWeight="bold">
              Solicita una oferta gratis{" "}
            </Typography>
            ingresando la dirección del inmueble y tus datos de contacto. Uno de
            nuestros expertos te hará una oferta.
          </Typography>
        </ContainerHeroContent>
        <HeroImage src={Image} alt="Hero image" />
      </WelcomeContainer>
      <Button onClick={() => navigate("/fullname")} text="Solicitar oferta" />
    </Flex>
  );
};
