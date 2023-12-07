import VerticalMenuNavLink from '@/components/layouts/VerticalMenuNavLink';
import bulkNavConfig from '@/configs/bulksidenav.config/bulksidenav';
import { Outlet } from 'react-router-dom';

const SingleBulk = () => {
  return (
    <>
      <div className="mt-5 block md:flex pb-7">
        <div className="w-full hidden md:flex md:w-1/6 h-full sticky top-20">
          <SingleBulkSideNav />
        </div>
        <div className="w-full md:w-5/6 md:px-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SingleBulk;

const SingleBulkSideNav = () => {
  return (
    <span className="flex flex-col gap-1 w-full">
      {bulkNavConfig.map((nav, index) => (
        <VerticalMenuNavLink key={index} path={nav.path}>
          <p className={`text-primary text-3xl`}>{nav.icon}</p>
          <p className="font-semibold">{nav.title}</p>
        </VerticalMenuNavLink>
      ))}
    </span>
  );
};
