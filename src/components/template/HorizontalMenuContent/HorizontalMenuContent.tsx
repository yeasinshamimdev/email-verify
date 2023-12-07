import navigationConfig from '../../../configs/navigation.config';
import HorizontalMenuNavLink from './HorizontalMenuNavLink';

const HorizontalMenuContent = () => {
  return (
    <span className="flex w-full items-center">
      {navigationConfig.map((nav, index) => (
        <HorizontalMenuNavLink key={index} path={nav.path}>
          <p
            className={`bg-${nav.color} rounded-full md:w-[30px] md:h-[30px] p-[5px] flex justify-center items-center  text-white`}
          >
            {nav.icon}
          </p>
          <p>{nav.title}</p>
        </HorizontalMenuNavLink>
      ))}
    </span>
  );
};

export default HorizontalMenuContent;
