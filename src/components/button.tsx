import React, { FC, ReactNode } from "react";

export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
}

export type ButtonProps = {
  type: ButtonType;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ type, children }) => (
  <button
    className={
      type === ButtonType.primary
        ? "bg-purple-500 text-white hover:bg-purple-700 font-bold py-2 px-4 rounded"
        : "bg-purple-200 text-black hover:bg-purple-300 font-bold py-2 px-4 rounded"
    }
  >
    {children}
  </button>
);
