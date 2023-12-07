import { NavigationTree } from '@/@types/navigation';
import { NAV_ITEM_TYPE_ITEM } from '@/constants/navigation.constant';
import navigationIcon from '../navigation-icon.config';

const userConfig: NavigationTree[] = [
  {
    key: 'profile',
    path: '/user',
    title: 'Profile',
    translateKey: 'nav.profile',
    icon: navigationIcon.userProfile,
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
  },
  {
    key: 'account',
    path: '/user/account',
    title: 'Account',
    translateKey: 'nav.account',
    icon: navigationIcon.userAccount,
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
  },
  {
    key: 'integration',
    path: '/user/providers',
    title: 'Integration',
    translateKey: 'nav.integration',
    icon: navigationIcon.integration,
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
  },
  {
    key: 'billing',
    path: '/user/account/billing',
    title: 'Billing',
    translateKey: 'nav.billing',
    icon: navigationIcon.billing,
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
  },
  {
    key: 'referrals',
    path: '/user/referrals',
    title: 'Referrals',
    translateKey: 'nav.referrals',
    icon: navigationIcon.referrals,
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
  },
];

export default userConfig;
