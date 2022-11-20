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
    label: "Escribe el número del piso donde se encuentra tu departamento",
    nextPath: "/amenities",
  },
};
