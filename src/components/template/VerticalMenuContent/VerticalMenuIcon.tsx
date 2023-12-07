import type { ComponentPropsWithRef, ElementType } from 'react';
import navigationIcon from '../../../configs/navigation-icon.config';

type VerticalMenuIconProps = {
  icon: any;
  gutter: string;
};

export const Icon = <T extends ElementType>({
  component,
  ...props
}: {
  header: T;
} & ComponentPropsWithRef<T>) => {
  const Component = component;
  return <Component {...props} />;
};

const VerticalMenuIcon = ({ icon, gutter }: VerticalMenuIconProps) => {
  if (typeof icon !== 'string' && !icon) {
    return <></>;
  }

  return (
    <span className={`text-2xl ${gutter ? 'ltr:mr-2 rtl:ml-2' : ''}`}>
      {navigationIcon[icon]}
    </span>
  );
};

VerticalMenuIcon.defaultProps = {
  gutter: true,
};

export default VerticalMenuIcon;
