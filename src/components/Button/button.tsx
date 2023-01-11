import React, { FC, ReactNode } from 'react';
import { Icon, IconType } from '../Icon/Icon';

export enum ButtonSize {
  medium = 'medium',
  large = 'large',
  nolabel = 'nolabel',
}

export enum ButtonColor {
  violet = 'violet',
  slate = 'slate',
  gradiant = 'gradiant',
}

export type ButtonProps = {
  size: ButtonSize;
  color: ButtonColor;
  label: string;
  children?: ReactNode;
};

export const Button: FC<ButtonProps> = ({
  color,
  size,
  label,
  children,
  ...props
}) => {
  let colorClasses = '';
  switch (color) {
    case 'violet':
      colorClasses =
        'bg-violet-600  hover:bg-violet-700 hover:border-violet-100 active:border-violet-200';
      break;
    case 'slate':
      colorClasses =
        'bg-slate-600 hover:bg-slate-700 hover:border-slate-100  active:border-slate-200';
      break;
    case 'gradiant':
      colorClasses =
        'bg-gradient-to-r from-pink-400 to-violet-700 hover:via-violet-700 hover:to-violet-700 hover:border-violet-100 active:border-violet-200';
      break;
  }

  let spacingClasses = '';
  switch (size) {
    case 'large':
      spacingClasses = 'py-s px-m rounded-lg';
      break;
    case 'medium':
      spacingClasses = 'p-xs rounded-lg';
      break;
    case 'nolabel':
      spacingClasses = 'p-s rounded-full';
      break;
  }

  return (
    <button
      type='button'
      className={`${colorClasses} ${spacingClasses} text-sm text-center text-white border-4 border-white  transition flex items-center`}
      {...props}
    >
      {size == 'nolabel' ? (
        <Icon type={IconType.mumble} color='white' />
      ) : (
        <span className='mx-auto'>{label}</span>
      )}
      {children}
    </button>
  );
};
