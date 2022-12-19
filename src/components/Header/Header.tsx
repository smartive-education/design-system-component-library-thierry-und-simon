import React, { FC, ReactNode } from "react";

export enum HeaderType {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
}

export type HeaderProps = {
  type: HeaderType;
  children: ReactNode;
};

export const Header: FC<HeaderProps> = ({ type, children }) => (
  <>
    {type === HeaderType.h1 ? (
      <h1>{children}</h1>
    ) : type === HeaderType.h2 ? (
      <h2>{children}</h2>
    ) : type === HeaderType.h3 ? (
      <h3>{children}</h3>
    ) : type === HeaderType.h4 ? (
      <h4>{children}</h4>
    ) : null}
  </>
);
