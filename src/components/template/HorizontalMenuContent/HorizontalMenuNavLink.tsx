import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';

export type HorizontalMenuNavLinkProps = PropsWithChildren<{
  path: string;
  isExternalLink?: boolean;
  className?: string;
}>;

const HorizontalMenuNavLink = ({
  path,
  children,
  isExternalLink,
  className,
}: HorizontalMenuNavLinkProps) => {
  const location = useLocation();
  const match = location.pathname === path || location.pathname.includes(path);

  return (
    <Link
      className={classNames(
        `h-full flex items-center py-2 px-4 rounded-md cursor-pointer hover:bg-secondary ml-2 text-customBlack font-medium text-base ${
          match ? 'bg-customViolet text-primary' : undefined
        }`,
        className
      )}
      to={path}
      target={isExternalLink ? '_blank' : ''}
    >
      <div className="w-full flex items-center gap-2">{children}</div>
    </Link>
  );
};

export default HorizontalMenuNavLink;
