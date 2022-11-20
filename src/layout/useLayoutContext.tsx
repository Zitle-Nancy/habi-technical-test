import { createContext, ReactNode, useState } from "react";
import { IUserInformation } from "./types";

export const Context = createContext({});

export const USER_INFORMATION: IUserInformation = {
  fullName: "",
  email: "",
  address: "",
  floorNumber: "",
  amenities: [{ id: "", name: "", isThere: false }],
};

export const LayoutContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userInformation, setUserInformation] =
    useState<IUserInformation>(USER_INFORMATION);
  return (
    <Context.Provider value={{ userInformation, setUserInformation }}>
      {children}
    </Context.Provider>
  );
};
