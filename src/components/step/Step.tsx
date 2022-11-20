import { useLocation } from "react-router-dom";
import { STEPS_JSON } from "./stepsJSON";
import { IPaths } from "./types";

export const Step = () => {
  const { pathname } = useLocation();

  const CURRENT_PATH = STEPS_JSON[pathname as keyof IPaths];
  const PATHS_NUMBER_TOTALS = Object.keys(STEPS_JSON).length;

  return (
    <div>
      Paso {CURRENT_PATH?.order} de {PATHS_NUMBER_TOTALS}: {CURRENT_PATH?.title}{" "}
    </div>
  );
};
