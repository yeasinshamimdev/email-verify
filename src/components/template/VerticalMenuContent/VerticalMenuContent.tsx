import { useEffect, useState } from 'react';
import VerticalCollapsedMenuItem from './VerticalCollapsedMenuItem';
import VerticalSingleMenuItem from './VerticalSingleMenuItem';

import { useTranslation } from 'react-i18next';
import { NavigationTree } from '../../../@types/navigation';
import {
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
  NAV_ITEM_TYPE_TITLE,
} from '../../../constants/navigation.constant';
import useMenuActive from '../../../utils/hooks/useMenuActive';
import { Menu } from '../../ui';

export interface VerticalMenuContentProps {
  navMode: string;
  collapsed?: boolean;
  routeKey: string;
  navigationTree?: NavigationTree[];
  userAuthority: string[];
  onMenuItemClick?: () => void;
  direction?: string;
}

const { MenuGroup } = Menu;

const VerticalMenuContent = (props: VerticalMenuContentProps) => {
  const {
    navMode = 'light',
    collapsed,
    routeKey,
    navigationTree = [],
    userAuthority = [],
    onMenuItemClick,
    direction = 'right',
  } = props;

  const { t } = useTranslation();

  const [defaulExpandKey, setDefaulExpandKey] = useState<string[]>([]);

  const { activedRoute } = useMenuActive(navigationTree, routeKey);

  useEffect(() => {
    if (defaulExpandKey.length === 0 && activedRoute?.parentKey) {
      setDefaulExpandKey([activedRoute?.parentKey]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activedRoute?.parentKey]);

  const handleLinkClick = () => {
    onMenuItemClick?.();
  };

  const getNavItem = (nav: NavigationTree) => {
    if (nav.subMenu.length === 0 && nav.type === NAV_ITEM_TYPE_ITEM) {
      return (
        <VerticalSingleMenuItem
          key={nav.key}
          nav={nav}
          sideCollapsed={collapsed}
          userAuthority={userAuthority}
          direction={direction}
          onLinkClick={handleLinkClick}
        />
      );
    }

    if (nav.subMenu.length > 0 && nav.type === NAV_ITEM_TYPE_COLLAPSE) {
      return (
        <VerticalCollapsedMenuItem
          key={nav.key}
          nav={nav}
          sideCollapsed={collapsed}
          userAuthority={userAuthority}
          direction={direction}
          onLinkClick={onMenuItemClick}
        />
      );
    }

    if (nav.type === NAV_ITEM_TYPE_TITLE) {
      if (nav.subMenu.length > 0) {
        return (
          <MenuGroup label={t(nav.translateKey) || nav.title}>
            {nav.subMenu.map((subNav) =>
              subNav.subMenu.length > 0 ? (
                <VerticalCollapsedMenuItem
                  key={subNav.key}
                  nav={subNav}
                  sideCollapsed={collapsed}
                  userAuthority={userAuthority}
                  direction={direction}
                  onLinkClick={onMenuItemClick}
                />
              ) : (
                <VerticalSingleMenuItem
                  key={subNav.key}
                  nav={subNav}
                  sideCollapsed={collapsed}
                  userAuthority={userAuthority}
                  direction={direction}
                  onLinkClick={onMenuItemClick}
                />
              )
            )}
          </MenuGroup>
        );
      } else {
        <MenuGroup label={nav.title} />;
      }
    }
  };

  return (
    <Menu
      className="px-4 pb-4"
      variant={'light'}
      sideCollapsed={collapsed}
      defaultActiveKeys={activedRoute?.key ? [activedRoute.key] : []}
      defaultExpandedKeys={defaulExpandKey}
    >
      {navigationTree.map((nav) => getNavItem(nav))}
    </Menu>
  );
};

export default VerticalMenuContent;
