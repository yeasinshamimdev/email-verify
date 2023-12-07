import BulkIcon from '@/assets/svg/BulkIcon';
import SingleIcon from '@/assets/svg/SingleIcon';
import Account from '@/components/icons/Account';
import CreditCard from '@/components/icons/CreditCard';
import ProfileUser from '@/components/icons/ProfileUser';
import PuzzlePiece from '@/components/icons/PuzzlePiece';
import Referrals from '@/components/icons/Referrals';
import { FaCircleCheck, FaThumbsDown } from 'react-icons/fa6';
import { GiCreditsCurrency } from 'react-icons/gi';
import {
  HiOutlineColorSwatch,
  HiOutlineDesktopComputer,
  HiOutlineHome,
} from 'react-icons/hi';
import { IoSettingsSharp } from 'react-icons/io5';
import { LuCircleDotDashed } from 'react-icons/lu';
import { MdEmail, MdOutlineSettingsSuggest } from 'react-icons/md';
import { PiExportBold } from 'react-icons/pi';

export type NavigationIcons = Record<string, JSX.Element>;

const navigationIcon: NavigationIcons = {
  home: <HiOutlineHome />,
  singleMenu: <BulkIcon size={17} />,
  bulk: <BulkIcon size={24} />,
  collapseMenu: <SingleIcon size={16} />,
  credits: <GiCreditsCurrency size={16} />,
  overview: <LuCircleDotDashed size={20} />,
  emails: <MdEmail size={20} />,
  exports: <PiExportBold size={20} />,
  settings: <IoSettingsSharp size={20} />,
  groupSingleMenu: <HiOutlineDesktopComputer />,
  groupCollapseMenu: <HiOutlineColorSwatch />,
  userProfile: <ProfileUser size={20} />,
  userAccount: <Account size={20} />,
  integration: <PuzzlePiece size={20} />,
  billing: <CreditCard size={20} />,
  referrals: <Referrals size={20} />,
  checkIcon:<FaCircleCheck/>,
  thumbDown:<FaThumbsDown size={25}/>,
  settingsTwo: <MdOutlineSettingsSuggest size={30}/>
};

export default navigationIcon;
