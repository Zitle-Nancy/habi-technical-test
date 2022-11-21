import { useLocation } from "react-router-dom";

import { Typography } from "../../UI-components";
import { STEPS_JSON } from "./stepsJSON";
import { Wrapper } from "./styles";
import { IPaths } from "./types";

export const Step = () => {
  const { pathname } = useLocation();

  const CURRENT_PATH = STEPS_JSON[pathname as keyof IPaths];
  const PATHS_NUMBER_TOTALS = Object.keys(STEPS_JSON).length;

  return (
    <>
      {pathname === "/" ? (
        <Typography fontSize="24px">
          Hola, estas a punto de comenzar tu proceso con nosotros.
        </Typography>
      ) : (
        <Wrapper>
          <Typography color="#6301cc" fontSize="32px" fontWeight="600">
            Paso {CURRENT_PATH?.order} de {PATHS_NUMBER_TOTALS}:{" "}
            {CURRENT_PATH?.title}{" "}
          </Typography>
          <Typography
            color="#6d6970"
            fontSize="16px"
            display="block"
            margin="18px 0 0 0"
          >
            {CURRENT_PATH?.description}
          </Typography>
        </Wrapper>
      )}
    </>
  );
};
