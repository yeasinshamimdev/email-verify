import userConfig from '@/configs/userRoute.config';
import { Outlet, useLocation } from 'react-router-dom';
import VerticalMenuNavLink from '../VerticalMenuNavLink';

const UserLayout = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const hideSideBar = params.get('hide_sidebar');

  return (
    <div className="mt-3 block md:flex pb-7">
      <div
        className={`w-full hidden md:${
          hideSideBar ? 'hidden' : 'flex'
        } md:w-1/6 h-full sticky top-20`}
      >
        <SideMenu />
      </div>
      <div
        className={`w-full md:w-5/6 md:px-4 ${hideSideBar ? 'mx-auto' : ''}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;

function SideMenu() {
  return (
    <div className="flex flex-col gap-1 w-full">
      {userConfig.map((nav, index) => (
        <VerticalMenuNavLink key={index} path={nav.path}>
          <p className={`text-3xl`}>{nav.icon}</p>
          <p className="font-semibold text-sm">{nav.title}</p>
        </VerticalMenuNavLink>
      ))}
    </div>
  );
}
