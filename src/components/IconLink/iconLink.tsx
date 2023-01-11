import React, { FC, useState } from 'react';
import { Icon, IconType } from '../Icon/Icon';

export enum IconLinkType {
  slate = 'slate-400',
  violet = 'violet-600',
}

export type IconLinkProps = {
  type: IconLinkType;
  icon: IconType;
  text: string;
  textSize: string;
};

export const IconLink: FC<IconLinkProps> = ({ type, icon, text, textSize }) => {
  const [hover, setHover] = useState(false);

  const color =
    type === IconLinkType.slate && !hover
      ? '#94A3B8'
      : type === IconLinkType.slate && hover
      ? '#475569'
      : type !== IconLinkType.slate && hover
      ? '#4C1D95'
      : '#7C3AED';
  return (
    <div
      className={`flex items-center gap-x-1 ${
        type === IconLinkType.slate
          ? 'text-slate-400 hover:text-slate-600'
          : 'text-violet-600 hover:text-violet-900'
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon type={icon} color={color} />
      <p className={textSize}>{text}</p>
    </div>
  );
};
