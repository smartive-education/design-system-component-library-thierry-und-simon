import React, { FC, useState } from "react";
import { IconType, Icon } from "../Icon/Icon";

export enum InteractionButtonType {
  like = "like",
  comment = "comment",
  share = "share",
}

export type IconLinkProps = {
  type: InteractionButtonType;
  count?: number;
};

type ContentProps = {
  count: number;
  color: string;
};

const LikeContent: FC<ContentProps> = ({ count, color }) => {
  return (
    <>
      <Icon
        type={count === 0 ? IconType.like : IconType.like_dark}
        color={count === 0 ? color : "#EC4899"}
      />
      <p
        className={
          count === 0
            ? "text-slate-600 hover:text-pink-600"
            : "text-pink-900 hover:text-pink-600"
        }
      >
        {count === 0 ? "Like" : `${count} Likes`}
      </p>
    </>
  );
};

const CommentContent: FC<ContentProps> = ({ count, color }) => {
  return (
    <>
      <Icon
        type={count === 0 ? IconType.bubble : IconType.bubble_dark}
        color={count === 0 ? color : "#7C3AED"}
      />
      <p className="text-slate-600 hover:text-violet-600">
        {count === 0 ? "Comment" : `${count} Comments`}
      </p>
    </>
  );
};

const CopyContent: FC<ContentProps> = ({ count, color }) => {
  return (
    <>
      <Icon type={IconType.share} color={color} />
      <p className="text-slate-600">Copy Link</p>
    </>
  );
};

export const InteractionButton: FC<IconLinkProps> = ({ type, count = 0 }) => {
  const [hover, setHover] = useState(false);
  const color =
    !hover || type === InteractionButtonType.share
      ? "#475569"
      : hover && type === InteractionButtonType.like
      ? "#EC4899"
      : hover && type === InteractionButtonType.comment
      ? "#7C3AED"
      : "#475569";

  return (
    <button
      className={`flex items-center gap-x-2 px-3 py-2 rounded-2xl ${
        type === InteractionButtonType.like
          ? "hover:bg-pink-50"
          : type === InteractionButtonType.comment
          ? "hover:bg-violet-50"
          : "hover:bg-slate-100"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {type === InteractionButtonType.like ? (
        <LikeContent count={count} color={color} />
      ) : type === InteractionButtonType.comment ? (
        <CommentContent count={count} color={color} />
      ) : (
        <CopyContent count={count} color={color} />
      )}
    </button>
  );
};
