import React, { FC, ReactNode } from 'react';

export enum SizeType {
  SM = 'sm',
  BASE = 'base',
  LG = 'lg',
  XL = '2xl',
  TILE = 'tile',
}

export type UserProps = {
  children: ReactNode;
  type: SizeType;
};

export const User: FC<UserProps> = ({ type, ...props }) => {
  return (
    <div className='flex'>
      {type == SizeType.SM && (
        <div className='rounded-full bg-violet-200 w-16 h-16 mr-xs'></div>
      )}
      <div className='flex flex-col'>
        <p className={`text-${type} mb-xs`}>Display Name</p>
        <p className='text-xs'>
          <span className='text-violet-600 mr-s'>Username</span>
          <span className='text-slate-400'>Timestamp</span>
          {type == SizeType.XL && (
            <span className='text-slate-400 ml-s'>Joined</span>
          )}
        </p>
      </div>
    </div>
  );
};
