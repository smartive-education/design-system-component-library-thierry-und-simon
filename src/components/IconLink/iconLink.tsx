import React, { FC } from "react";
import { Icon, IconType } from "../Icon/Icon";

export enum IconLinkType {
  slate = "slate-400",
  violet = "violet-600",
}

export type UserImageProps = {
  type: IconLinkType;
  icon: IconType;
};

export const IconLink: FC<UserImageProps> = ({ type, icon }) => {
  const color = type === IconLinkType.slate ? "#94A3B8" : "#7C3AED";
  return (
    <div className="flex items-center gap-x-1">
      <Icon type={icon} color={color} />
      <p className={`text-${type}`}>Username</p>
    </div>
  );
};
