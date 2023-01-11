import React, { FC, ReactNode } from 'react';
import { Button, ButtonColor, ButtonSize } from '../Button/button';
import { UserImage, UserImageSizeType } from '../UserImage/userImage';
import { IconLink, IconLinkType } from '../IconLink/iconLink';
import { IconType } from '../Icon/Icon';

export enum SizeType {
  SM = 'sm',
  BASE = 'base',
  LG = 'lg',
  XL = '2xl',
  TILE = 'tile',
}

export type UserProps = {
  type: SizeType;
};

export const User: FC<UserProps> = ({ type, ...props }) => {
  return (
    <>
      {type !== SizeType.TILE ? (
        <div className='flex'>
          {type == SizeType.SM && (
            <div className='mr-xs'>
              <UserImage type={UserImageSizeType.S} />
            </div>
          )}
          <div className='flex flex-col'>
            <p className={`text-${type} mb-xs`}>Display Name</p>
            <div className='flex'>
              <div className=''>
                <IconLink
                  type={IconLinkType.violet}
                  icon={IconType.profile}
                  text='Username'
                  textSize='text-xs'
                />
              </div>

              <div className='ml-s'>
                <IconLink
                  type={IconLinkType.slate}
                  icon={IconType.time}
                  text='Timestamp'
                  textSize='text-xs'
                />
              </div>
              {type == SizeType.XL && (
                <div className='ml-s'>
                  <IconLink
                    type={IconLinkType.slate}
                    icon={IconType.calender}
                    text='Joined'
                    textSize='text-xs'
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className='flex  bg-white rounded-xl p-s'>
          <div className='flex flex-col items-center'>
            <UserImage type={UserImageSizeType.LG} />
            <p className='text-base text-center mt-s mb-xs'>Display Name</p>
            <p className='text-xs text-violet-600 text-center mb-s'>Username</p>
            <div className='flex justify-items-stretch'>
              <Button
                label='Follow'
                color={ButtonColor.violet}
                size={ButtonSize.medium}
              ></Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
