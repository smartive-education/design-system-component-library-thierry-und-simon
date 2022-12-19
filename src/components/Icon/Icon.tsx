import React, { FC, ReactNode } from "react";
import SvgMumble from "../../Icons/Mumble";

export enum IconType {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
}

export type IconProps = {
  type: IconType;
  children: ReactNode;
};

export const Icon: FC<IconProps> = ({ type }) => (
  <>
    <SvgMumble />
  </>
);
