import React, { FC, ReactNode } from 'react';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

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
  type: ButtonType;
  children: ReactNode;
  size: ButtonSize;
  color: ButtonColor;
  label: string;
};

export const Button: FC<ButtonProps> = ({ color, size, label, ...props }) => {
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
      className={`${colorClasses} ${spacingClasses} text-sm text-white border-4 border-white  transition flex items-center`}
      {...props}
    >
      {size !== 'nolabel' && (
        <span className={`${size == 'medium' ? 'mr-xs' : 'mr-s'}`}>
          {label}
        </span>
      )}
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_426_259)'>
          <path
            d='M9.79291 10H6.20709C5.76166 10 5.53857 10.5386 5.85357 10.8535L7.64642 12.6464C7.84173 12.8417 8.15826 12.8417 8.35357 12.6464L10.1464 10.8535C10.4614 10.5386 10.2383 10 9.79291 10Z'
            fill='white'
          />
          <path
            d='M14.8074 5.37115C15.5281 4.82697 16 3.97394 16 3C16 1.34314 14.6569 4.79794e-06 13 4.79794e-06C12.2129 4.79794e-06 11.504 0.309085 10.9712 0.806405C9.10669 -0.270475 6.89553 -0.271705 5.02875 0.806465C4.49603 0.309145 3.78705 4.79794e-06 3 4.79794e-06C1.34314 4.79794e-06 0 1.34314 0 3C0 3.97394 0.47186 4.82697 1.19263 5.37115C0.0154001 7.86726 -0.6396 11.0175 0.93457 13.2979C2.17285 15.0908 4.5498 16 8 16C11.4502 16 13.8271 15.0908 15.0654 13.2979C16.6397 11.0174 15.9845 7.86707 14.8074 5.37115ZM13.4199 12.1611C12.5772 13.3809 10.7539 14 8 14C5.24609 14 3.42285 13.3809 2.58008 12.1611C1.5293 10.6387 2.16309 8.3252 2.63477 7.08203C3.08594 5.88965 4.80762 2 8 2C11.1924 2 12.9141 5.88965 13.3652 7.08203C13.8369 8.3252 14.4707 10.6387 13.4199 12.1611Z'
            fill='white'
          />
          <path
            d='M6.66949 6.61743C6.55627 6.17469 6.28967 5.56726 5.5061 5.56726C4.42505 5.56726 3.51904 7.16309 3.50872 7.87347C3.49841 8.58392 3.98235 9.35607 4.57946 9.35607C5.17663 9.35607 5.70171 8.82067 6.23711 8.05884C6.77246 7.29695 6.78278 7.06012 6.66949 6.61743Z'
            fill='white'
          />
          <path
            d='M10.4939 5.56726C9.71033 5.56726 9.44373 6.17469 9.33051 6.61743C9.21723 7.06012 9.22754 7.29693 9.76288 8.05884C10.2983 8.82068 10.8234 9.35608 11.4205 9.35608C12.0176 9.35608 12.5016 8.58392 12.4913 7.87348C12.481 7.16309 11.575 5.56726 10.4939 5.56726Z'
            fill='white'
          />
        </g>
        <defs>
          <clipPath id='clip0_426_259'>
            <rect width='16' height='16' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};
