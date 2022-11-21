import { IInputValues } from "./types";

export const INPUT_VALUES: IInputValues = {
  "/fullname": {
    name: "fullName",
    placeholder: "Nombre completo",
    label: "Nombre completo",
    nextPath: "/email",
  },
  "/email": {
    name: "email",
    placeholder: "Correo electrónico",
    label: "Escribe tu correo electrónico",
    nextPath: "/address",
    type: "email",
  },
  "/address": {
    name: "address",
    placeholder: "Dirección",
    label: "Escribe tu dirección",
    nextPath: "/floor-number",
  },
  "/floor-number": {
    name: "floorNumber",
    placeholder: "Número de piso",
    label: "Escribe el Nº de piso donde se encuentra el departamento",
    nextPath: "/amenities",
    type: "number",
  },
};
