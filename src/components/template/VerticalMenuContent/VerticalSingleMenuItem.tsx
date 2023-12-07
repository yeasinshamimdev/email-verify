import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CommonProps } from '../../../@types/common';
import { NavigationTree } from '../../../@types/navigation';
import { Menu, Tooltip } from '../../ui';
import VerticalMenuIcon from './VerticalMenuIcon';

const { MenuItem } = Menu;

interface CollapsedItemProps extends CommonProps {
  title: string;
  translateKey: string;
  direction?: string;
}

interface DefaultItemProps {
  nav: NavigationTree;
  onLinkClick?: (link: { key: string; title: string; path: string }) => void;
  sideCollapsed?: boolean;
  userAuthority: string[];
}

interface VerticalMenuItemProps extends CollapsedItemProps, DefaultItemProps {}

const CollapsedItem = ({
  title,
  translateKey,
  children,
  direction,
}: CollapsedItemProps) => {
  const { t } = useTranslation();

  return (
    <Tooltip
      title={t(translateKey) || title}
      placement={direction === 'rtl' ? 'left' : 'right'}
    >
      {children}
    </Tooltip>
  );
};

const DefaultItem = (props: DefaultItemProps) => {
  const { nav, onLinkClick, sideCollapsed, userAuthority } = props;

  return (
    <MenuItem key={nav.key} eventKey={nav.key} className="mb-2">
      <Link
        to={nav.path}
        className="flex items-center h-full w-full"
        target={nav.isExternalLink ? '_blank' : ''}
        onClick={() =>
          onLinkClick?.({
            key: nav.key,
            title: nav.title,
            path: nav.path,
          })
        }
      >
        <VerticalMenuIcon icon={nav.icon} />
        {!sideCollapsed && (
          <span>
            <Trans i18nKey={nav.translateKey} defaults={nav.title} />
          </span>
        )}
      </Link>
    </MenuItem>
  );
};

const VerticalSingleMenuItem = ({
  nav,
  onLinkClick,
  sideCollapsed,
  userAuthority,
  direction,
}: Omit<VerticalMenuItemProps, 'title' | 'translateKey'>) => {
  return (
    <>
      {sideCollapsed ? (
        <CollapsedItem
          title={nav.title}
          translateKey={nav.translateKey}
          direction={direction}
        >
          <DefaultItem
            nav={nav}
            sideCollapsed={sideCollapsed}
            userAuthority={userAuthority}
            onLinkClick={onLinkClick}
          />
        </CollapsedItem>
      ) : (
        <DefaultItem
          nav={nav}
          sideCollapsed={sideCollapsed}
          userAuthority={userAuthority}
          onLinkClick={onLinkClick}
        />
      )}
    </>
  );
};

export default VerticalSingleMenuItem;
