import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CommonProps } from '../../../@types/common';
import { NavigationTree } from '../../../@types/navigation';
import { Dropdown, Menu } from '../../ui';
import VerticalMenuIcon from './VerticalMenuIcon';

interface DefaultItemProps extends CommonProps {
  nav: NavigationTree;
  onLinkClick?: (link: { key: string; title: string; path: string }) => void;
  userAuthority: string[];
}

interface CollapsedItemProps extends DefaultItemProps {
  direction: string;
}

interface VerticalCollapsedMenuItemProps extends CollapsedItemProps {
  sideCollapsed?: boolean;
}

const { MenuItem, MenuCollapse } = Menu;

const DefaultItem = ({ nav, onLinkClick, userAuthority }: DefaultItemProps) => {
  return (
    <>
      <MenuCollapse
        key={nav.key}
        label={
          <>
            <VerticalMenuIcon
              //@ts-ignore
              icon={nav.icon}
            />
            <span>
              <Trans i18nKey={nav.translateKey} defaults={nav.title} />
            </span>
          </>
        }
        eventKey={nav.key}
        expanded={false}
        className="mb-2"
      >
        {nav.subMenu.map((subNav) => (
          <MenuItem key={subNav.key} eventKey={subNav.key}>
            {subNav.path ? (
              <Link
                className="h-full w-full flex items-center"
                to={subNav.path}
                target={subNav.isExternalLink ? '_blank' : ''}
                onClick={() =>
                  onLinkClick?.({
                    key: subNav.key,
                    title: subNav.title,
                    path: subNav.path,
                  })
                }
              >
                <span>
                  <Trans
                    i18nKey={subNav.translateKey}
                    defaults={subNav.title}
                  />
                </span>
              </Link>
            ) : (
              <span>
                <Trans i18nKey={subNav.translateKey} defaults={subNav.title} />
              </span>
            )}
          </MenuItem>
        ))}
      </MenuCollapse>
    </>
  );
};

const CollapsedItem = ({
  nav,
  onLinkClick,
  userAuthority,
  direction,
}: CollapsedItemProps) => {
  const menuItem = (
    <MenuItem key={nav.key} eventKey={nav.key} className="mb-2">
      <VerticalMenuIcon
        //@ts-ignore
        icon={nav.icon}
      />
    </MenuItem>
  );

  return (
    <Dropdown
      trigger="hover"
      renderTitle={menuItem}
      placement={direction === 'rtl' ? 'middle-end-top' : 'middle-start-top'}
    >
      {nav.subMenu.map((subNav) => (
        <Dropdown.Item key={subNav.key} eventKey={subNav.key}>
          {subNav.path ? (
            <Link
              className="h-full w-full flex items-center"
              to={subNav.path}
              target={subNav.isExternalLink ? '_blank' : ''}
              onClick={() =>
                onLinkClick?.({
                  key: subNav.key,
                  title: subNav.title,
                  path: subNav.path,
                })
              }
            >
              <span>
                <Trans i18nKey={subNav.translateKey} defaults={subNav.title} />
              </span>
            </Link>
          ) : (
            <span>
              <Trans i18nKey={subNav.translateKey} defaults={subNav.title} />
            </span>
          )}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

const VerticalCollapsedMenuItem = ({
  sideCollapsed,
  ...rest
}: VerticalCollapsedMenuItemProps) => {
  return sideCollapsed ? (
    <CollapsedItem {...rest} />
  ) : (
    <DefaultItem {...rest} />
  );
};

export default VerticalCollapsedMenuItem;
