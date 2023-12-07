import classNames from 'classnames';
import { MouseEvent } from 'react';

const PrimaryButton = ({
  children,
  className,
  type,
  onClick,
}: {
  children: string | JSX.Element;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button
      type={type}
      className={classNames(
        `bg-primary px-4 py-3 hover:bg-[#5b52d2] rounded-md font-semibold text-sm text-white ${className}`
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
