import React, { FC, ReactNode } from "react";
import SvgMumble from "../../Icons/Mumble";
import SvgProfile from "../../Icons/Profile";

export enum IconType {
  mumble = "SvgMumble",
  profile = "SvgProfile",
}

export type IconProps = {
  type: IconType;
};

export const Icon: FC<IconProps> = ({ type }) =>
  type === IconType.mumble ? (
    <SvgMumble />
  ) : type === IconType.profile ? (
    <SvgProfile />
  ) : null;
