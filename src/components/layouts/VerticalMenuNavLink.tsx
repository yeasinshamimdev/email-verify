import classNames from 'classnames';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { HorizontalMenuNavLinkProps } from '../template/HorizontalMenuContent/HorizontalMenuNavLink';

const VerticalMenuNavLink = ({
  path,
  children,
  className,
}: HorizontalMenuNavLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const integrationPath = '/user/providers/integrations';
  const billingNewPath = '/user/subscriptions/new';

  const match =
    location.pathname ===
    (id
      ? path.replace(':id', id)
      : location.pathname === integrationPath
      ? path.replace('/user/providers', integrationPath)
      : location.pathname === billingNewPath
      ? path.replace('/user/account/billing', billingNewPath)
      : path);

  const handleClick = () => {
    const fullPath = id ? path.replace(':id', id) : path;
    navigate(fullPath);
  };

  return (
    <div
      className={classNames(
        `h-full flex items-center py-2 px-4 rounded-md cursor-pointer hover:bg-customViolet font-medium ml-2text-base ${
          match ? 'bg-customViolet text-customVioletThird' : undefined
        }`,
        className
      )}
      onClick={handleClick}
    >
      <div className="w-full flex items-center gap-3">{children}</div>
    </div>
  );
};

export default VerticalMenuNavLink;
