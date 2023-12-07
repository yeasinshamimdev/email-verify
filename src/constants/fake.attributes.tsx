import { BsFillExclamationOctagonFill, BsFillTagFill } from 'react-icons/bs';
import { FaUserGroup } from 'react-icons/fa6';
import { HiFaceSmile } from 'react-icons/hi2';
import { MdOutlineMailLock, MdOutlineMoneyOffCsred } from 'react-icons/md';
import { PiChecksFill } from 'react-icons/pi';
import { TbNumbers } from 'react-icons/tb';
import { TfiAlarmClock } from 'react-icons/tfi';

export const attributesDats = [
  {
    attr: 'free',
    icon: (
      <MdOutlineMoneyOffCsred size={16} className="text-customVioletThird" />
    ),
    status: 'no',
    tooltipDesc: 'An address from a free provider, like gmail.com.',
  },
  {
    attr: 'role',
    icon: <FaUserGroup size={18} className="text-customVioletThird" />,
    status: 'no',
    tooltipDesc:
      'An address that represents a role, like support@emailable.com.',
  },
  {
    attr: 'disposable',
    icon: <TfiAlarmClock size={18} className="text-customVioletThird" />,
    status: 'no',
    tooltipDesc:
      'An address that is one-time use, or at a temporary email provider.',
  },
  {
    attr: 'accept-all',
    icon: <PiChecksFill size={18} className="text-customVioletThird" />,
    status: 'no',
    tooltipDesc:
      'An address that is at a mail server that accepts email for any address, regardless of its existence.',
  },
  {
    attr: 'tag',
    icon: <BsFillTagFill size={18} className="text-customVioletThird" />,
    status: 'no',
    tooltipDesc:
      'An address that has a tag appended, like johndoe+tag@gmail.com.',
  },
  {
    attr: 'Numerical Characters',
    icon: <TbNumbers size={18} className="text-customVioletThird" />,
    status: '0',
    tooltipDesc:
      'The number of numerals in the email. Values greater than 0 indicate a higher chance of a bad address.',
  },
  {
    attr: 'Alphabetical Characters',
    icon: <div className="text-customVioletThird text-[12px] px-0">AB</div>,
    status: '10',
    tooltipDesc:
      'The number of alphabetical characters in the email. Values closer to 0 indicate a higher chance of a bad address.',
  },
  {
    attr: 'Unicode Symbols',
    icon: <HiFaceSmile size={18} className="text-customVioletThird" />,
    status: '0',
    tooltipDesc:
      'The number of international or uncommon Unicode symbols in the email. A value higher than 0 could indicate an international or less deliverable address.',
  },
  {
    attr: 'Mailbox Full',
    icon: (
      <BsFillExclamationOctagonFill
        size={16}
        className="text-customVioletThird"
      />
    ),
    status: 'No',
    tooltipDesc:
      'The mailbox is currently full and emails may not be delivered.',
  },
  {
    attr: 'No Reply',
    icon: <MdOutlineMailLock size={18} className="text-customVioletThird" />,
    status: 'no',
    tooltipDesc: 'An address that indicates it should not be replied to.',
  },
];
