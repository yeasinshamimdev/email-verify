import emiratiDirham from '@/assets/img/countries/ar.png';
import usaFlag from '@/assets/img/countries/us.png';
import visaImag from '@/assets/img/thumbs/Visa-Card.png';
import addMethod from '@/assets/img/thumbs/id-card-back.png';
import Account from '@/components/icons/Account';
import CreditCard from '@/components/icons/CreditCard';
import ProfileUser from '@/components/icons/ProfileUser';
import PuzzlePiece from '@/components/icons/PuzzlePiece';
import QuestionMark from '@/components/icons/QuestionMark';
import Referrals from '@/components/icons/Referrals';
import SendGrid from '@/components/icons/SendGrid';
import { DropdownList } from '../@types/navigation';

export const paymentOptions = [
  {
    value: 'visa',
    label: 'Visa ****2584',
    imgPath: visaImag,
  },
  {
    value: 'addMethod',
    label: 'Add Payment Method',
    imgPath: addMethod,
  },
];

export const currencyOptions = [
  {
    value: 'USD',
    label: 'United States Dollar',
    imgPath: usaFlag,
  },
  {
    value: 'EmiratiDirham',
    label: 'United Arab Emirates Dirham',
    imgPath: emiratiDirham,
  },
];

const listDropdown: DropdownList[] = [
  {
    label: 'Profile',
    key: 'profile',
    path: '/user',
    icon: <ProfileUser size={18} />,
  },
  {
    label: 'Account',
    key: 'account',
    path: '/user/account',
    icon: <Account size={18} />,
  },
  {
    label: 'Integrations',
    key: 'providers',
    path: '/user/providers',
    icon: <PuzzlePiece size={18} />,
  },
  {
    label: 'Billing',
    key: 'billing',
    path: '/user/account/billing',
    icon: <CreditCard size={18} />,
  },
  {
    label: 'Referrals',
    key: 'referrals',
    path: '/user/referrals',
    icon: <Referrals size={18} />,
  },
  {
    label: 'Help',
    key: 'help',
    path: '/#',
    icon: <QuestionMark size={18} />,
  },
];

export default listDropdown;

export const connectBrandImages = {
  sendGrid: <SendGrid size={20} />,
};
