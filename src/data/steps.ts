import { UserData } from "../pages/UserData";

export const steps = [
  {
    path: "/user-data",
    title: "Nombre",
    order: 1,
    description: "Ingresa tu nombre completo ",
    component: UserData,
  },
  {
    path: "/email",
    title: "Correo",
    order: 2,
    description: "Ingresa tu correo",
    component: UserData,
  },
  {
    path: "/address",
    title: "Direccion",
    order: 3,
    description: "Ingresa tu dirección",
    component: UserData,
  },
  {
    path: "/floor-number",
    title: "Número del departamento",
    order: 4,
    description: "Selecciona el número de piso del departamento",
    component: UserData,
  },
  {
    path: "/amenities",
    title: "Amenidades",
    order: 5,
    description: "Selecciona las amenidades de tu departamento",
    component: UserData,
  },
  {
    path: "/details",
    title: "Resumen",
    order: 6,
    description: "Resumen",
    component: UserData,
  },
];
