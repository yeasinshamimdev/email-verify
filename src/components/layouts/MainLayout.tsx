import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../template/Header';
import HeaderLogo from '../template/HeaderLogo';
import HorizontalNav from '../template/HorizontalNav';
import MobileNav from '../template/MobileNav';
import UserDropdown from '../template/UserDropdown';

const HeaderActionsStart = () => {
  return (
    <>
      <HeaderLogo />
      <MobileNav />
    </>
  );
};

const HeaderActionsEnd = () => {
  return <UserDropdown hoverable={false} />;
};

const HeaderAuthAction = () => {
  return (
    <div className="flex align-center gap-2">
      <button className="py-2 px-4 rounded-md font-medium text-base border-[1px] border-solid border-primary text-customBlack">
        <Link to={'/sign-in'}>Log in</Link>
      </button>
      <button className="py-2 px-4 rounded-md bg-primary text-white font-medium text-base ">
        <Link to={'/sign-up'}>Get started</Link> 
      </button>
    </div>
  );
};

const MainLayout = () => {
  return (
    <div>
      <Header
        container
        className="shadow dark:shadow-2xl"
        headerStart={<HeaderActionsStart />}
        headerMiddle={<HorizontalNav />} 
        headerEnd={
          <>
            <SignedOut>
              <HeaderAuthAction />
            </SignedOut>
            <SignedIn>
              <HeaderActionsEnd />
            </SignedIn>
          </>
        } 
      />
      <div className="py-[10px] px-4 max-w-[1280px] w-full h-full mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
