import { NavigationTree } from '../../@types/navigation';
import { NAV_ITEM_TYPE_ITEM } from '../../constants/navigation.constant';
import navigationIcon from '../navigation-icon.config';

const navigationConfig: NavigationTree[] = [
  {
    key: 'bulk',
    path: '/bulk',
    title: 'Bulk',
    translateKey: 'nav.bulk',
    icon: navigationIcon.singleMenu,
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
    color:"primary"
  },
  {
    key: 'single',
    path: '/verifier',
    title: 'Single',
    translateKey: 'nav.single',
    icon: navigationIcon.collapseMenu,
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
    color:"customPink"
  },
  {
    key: 'credits',
    path: '/checkout/credits',
    title: 'Buy Credits',
    translateKey: 'nav.credits',
    icon: navigationIcon.credits,
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
    color:"customGreen"
  },
];

export default navigationConfig;
