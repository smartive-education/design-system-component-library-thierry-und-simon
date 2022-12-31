import React, { FC, ReactNode } from 'react';

export enum UserImageSizeType {
  S = 's',
  M = 'm',
  LG = 'lg',
  XL = 'xl',
}

export type UserImageProps = {
  type: UserImageSizeType;
};

export const UserImage: FC<UserImageProps> = ({ type }) => {
  let size = '';

  switch (type) {
    case UserImageSizeType.S:
      size = 'w-10 h-10';
      break;
    case UserImageSizeType.M:
      size = 'w-16 h-16 border-md border-slate-100';
      break;
    case UserImageSizeType.LG:
      size = 'w-24 h-24 border-md border-slate-100';
      break;
    case UserImageSizeType.XL:
      size = 'w-40 h-40 border-md border-slate-100';
      break;
  }

  return <div className={`rounded-full bg-violet-200 ${size}`}></div>;
};
