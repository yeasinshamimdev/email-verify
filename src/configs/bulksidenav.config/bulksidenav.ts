import { NavigationTree } from '../../@types/navigation';
import { NAV_ITEM_TYPE_ITEM } from '../../constants/navigation.constant';
import navigationIcon from '../navigation-icon.config';

const bulkNavConfig: NavigationTree[] = [
  {
    key: 'overview',
    path: '/bulk/:id',
    title: 'Overview',
    translateKey: 'nav.overview',
    icon: navigationIcon.overview,
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [], 
  },
  {
    key: 'emails',
    path: '/bulk/:id/emails',
    title: 'Emails',
    translateKey: 'nav.emials',
    icon: navigationIcon.emails,
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [], 
  },
  {
    key: 'exports',
    path: '/bulk/:id/exports',
    title: 'Exports',
    translateKey: 'nav.exports',
    icon: navigationIcon.exports,
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [], 
  },
  {
    key: 'settings',
    path: '/bulk/:id/settings',
    title: 'Settings',
    translateKey: 'nav.settings',
    icon: navigationIcon.settings,
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [], 
  },
];

export default bulkNavConfig;
