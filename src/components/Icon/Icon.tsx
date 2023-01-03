import React, { FC, ReactNode } from "react";
import SvgMumble from "../../Icons/Mumble";
import SvgProfile from "../../Icons/Profile";
import SvgArrowDown from "../../Icons/ArrowDown";
import SvgArrowLeft from "../../Icons/ArrowLeft";
import SvgArrowRight from "../../Icons/ArrowRight";
import SvgArrowUp from "../../Icons/ArrowUp";
import SvgBubble from "../../Icons/Bubble";
import SvgBubbleDark from "../../Icons/BubbleDark";
import SvgCalender from "../../Icons/Calender";
import SvgCancel from "../../Icons/Cancel";
import SvgConfirm from "../../Icons/Confirm";
import SvgEdit from "../../Icons/Edit";
import SvgExpand from "../../Icons/Expand";
import SvgLike from "../../Icons/Like";
import SvgLikeDark from "../../Icons/LikeDark";
import SvgLogout from "../../Icons/Logout";
import SvgPin from "../../Icons/Pin";
import SvgReturn from "../../Icons/Return";
import SvgSend from "../../Icons/Send";
import SvgShare from "../../Icons/Share";
import SvgTime from "../../Icons/Time";
import SvgUpload from "../../Icons/Upload";
import SvgViews from "../../Icons/Views";

export enum IconType {
  mumble = "SvgMumble",
  profile = "SvgProfile",
  arrow_down = "SvgArrowDown",
  arrow_up = "SvgArrowUp",
  arrow_left = "SvgArrowLeft",
  arrow_right = "SvgArrowRight",
  bubble = "SvgBubble",
  bubble_dark = "SvgBubbleDark",
  calender = "SvgCalender",
  cancel = "SvgCancel",
  confirm = "SvgConfirm",
  edit = "SvgEdit",
  views = "SvgViews",
  like_dark = "SvgLikeDark",
  like = "SvgLike",
  logout = "SvgLogout",
  pin = "SvgPin",
  return = "SvgReturn",
  send = "SvgSend",
  expand = "SvgExpand",
  share = "SvgShare",
  upload = "SvgUpload",
  time = "SvgTime",
}

export type IconProps = {
  type: IconType;
  color?: string;
};

export const Icon: FC<IconProps> = ({ type, color = "#475569" }) =>
  type === IconType.mumble ? (
    <SvgMumble color={color} />
  ) : type === IconType.profile ? (
    <SvgProfile color={color} />
  ) : type === IconType.arrow_down ? (
    <SvgArrowDown color={color} />
  ) : type === IconType.arrow_left ? (
    <SvgArrowLeft color={color} />
  ) : type === IconType.arrow_right ? (
    <SvgArrowRight color={color} />
  ) : type === IconType.arrow_up ? (
    <SvgArrowUp color={color} />
  ) : type === IconType.bubble ? (
    <SvgBubble color={color} />
  ) : type === IconType.bubble_dark ? (
    <SvgBubbleDark color={color} />
  ) : type === IconType.calender ? (
    <SvgCalender color={color} />
  ) : type === IconType.cancel ? (
    <SvgCancel color={color} />
  ) : type === IconType.confirm ? (
    <SvgConfirm color={color} />
  ) : type === IconType.edit ? (
    <SvgEdit color={color} />
  ) : type === IconType.expand ? (
    <SvgExpand color={color} />
  ) : type === IconType.like ? (
    <SvgLike color={color} />
  ) : type === IconType.like_dark ? (
    <SvgLikeDark color={color} />
  ) : type === IconType.logout ? (
    <SvgLogout color={color} />
  ) : type === IconType.pin ? (
    <SvgPin color={color} />
  ) : type === IconType.return ? (
    <SvgReturn color={color} />
  ) : type === IconType.send ? (
    <SvgSend color={color} />
  ) : type === IconType.share ? (
    <SvgShare color={color} />
  ) : type === IconType.time ? (
    <SvgTime color={color} />
  ) : type === IconType.upload ? (
    <SvgUpload color={color} />
  ) : type === IconType.views ? (
    <SvgViews color={color} />
  ) : null;
