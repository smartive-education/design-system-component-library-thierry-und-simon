import React, { FC } from "react";

export type InputProps = {
  type: "text" | "password" | "email";
  children: React.ReactNode;
};

export const Input: FC<InputProps> = ({ children, type }) => {
  return <input type={type} />;
};
