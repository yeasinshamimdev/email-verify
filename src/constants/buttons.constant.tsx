import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  data: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  data,
  ...props
}) => {
  return (
    <button
      className={`uppercase shadow px-5 py-3 bg-primary text-white rounded-md text-[${data}] font-semibold`}
      {...props}
    >
      {children}
    </button>
  );
};

export const SecondaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  data,
  ...props
}) => {
  return (
    <button
      className={`uppercase shadow border-[1px] border-solid border-customVioletSecond px-5 py-3 bg-secondary text-primary rounded-md text-[${data}] font-semibold`}
      {...props}
    >
      {children}
    </button>
  );
};
