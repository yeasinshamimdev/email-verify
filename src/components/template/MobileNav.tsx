import classNames from 'classnames';
import { Suspense, lazy, useState } from 'react';
import withHeaderItem, {
  WithHeaderItemProps,
} from '../../utils/hoc/withHeaderItem';
import useResponsive from '../../utils/hooks/useResponsive';
import { NavToggle } from '../shared';
import { Drawer } from '../ui';

const VerticalMenuContent = lazy(
  () => import('./VerticalMenuContent/VerticalMenuContent')
);

type MobileNavToggleProps = {
  toggled?: boolean;
};

const MobileNavToggle = withHeaderItem<
  MobileNavToggleProps & WithHeaderItemProps
>(NavToggle);

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const onDrawerClose = () => {
    setIsOpen(false);
  };

  const { smaller } = useResponsive();

  return (
    <>
      {smaller.md && (
        <>
          <div className="text-2xl" onClick={openDrawer}>
            <MobileNavToggle toggled={isOpen} />
          </div>
          <Drawer
            title="Navigation"
            isOpen={isOpen}
            bodyClass={classNames('#fff', 'p-0')}
            width={330}
            placement={'right'}
            onClose={onDrawerClose}
            onRequestClose={onDrawerClose}
          >
            <Suspense fallback={<></>}>
              {/* {isOpen && (
                // <VerticalMenuContent
                //   navMode={'light'}
                //   collapsed={sideNavCollapse}
                //   navigationTree={navigationConfig}
                //   routeKey={currentRouteKey}
                //   userAuthority={userAuthority as string[]}
                //   direction={direction}
                //   onMenuItemClick={onDrawerClose}
                // />
              )} */}
            </Suspense>
          </Drawer>
        </>
      )}
    </>
  );
};

export default MobileNav;
