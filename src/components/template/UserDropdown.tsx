import { SignOutButton, useUser } from '@clerk/clerk-react';
import classNames from 'classnames';
import { HiOutlineLogout, HiOutlineUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { CommonProps } from '../../@types/common';
import { DropdownList } from '../../@types/navigation';
import listDropdown from '../../constants/list.dropdown';
import withHeaderItem from '../../utils/hoc/withHeaderItem';
import { Dropdown } from '../ui';
import Avatar from '../ui/Avatar/Avatar';

const dropdownItemList: DropdownList[] = listDropdown;

const _UserDropdown = ({ className }: CommonProps) => {
  const { user } = useUser();

  const UserAvatar = (
    <div className={classNames(className, 'flex items-center gap-2')}>
      {user?.imageUrl ? (
        <img
          src={user?.imageUrl}
          alt="user photo"
          className="w-10 h-10 rounded-full"
        />
      ) : (
        <Avatar size={32} shape="circle" icon={<HiOutlineUser />} />
      )}
      {/* <h6 className="hidden lg:block">{user?.fullName}</h6> */}
    </div>
  );

  return (
    <div>
      <Dropdown
        menuStyle={{ minWidth: 240, marginLeft:"-176px" }}
        renderTitle={UserAvatar}
        // placement="bottom-start" 
      >
        <Dropdown.Item variant="header">
          <div>
            <div className="py-2 px-4 flex items-center gap-2">
              {user?.imageUrl ? (
                <img
                  src={user?.imageUrl}
                  alt="user photo"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <Avatar shape="circle" icon={<HiOutlineUser />} />
              )}
              <div>
                <div className="font-bold text-gray-900 dark:text-gray-100">
                  {user?.fullName ? user?.fullName : 'Hi'}
                </div>
              </div>
            </div>
            <div style={{ padding: '15px' }}>
              <p
                style={{
                  fontSize: '10.5px',
                  fontWeight: 400,
                  color: 'rgb(120, 110, 175)',
                  marginBottom: '5px',
                }}
              >
                CREDIT BALANCE
              </p>
              <h3 style={{ fontSize: '28px' }}>1,673</h3>
            </div>
          </div>
          <div className="h-[1px] bg-slate-200 mt-0 mb-2"></div>
        </Dropdown.Item>

        {dropdownItemList.map((item) => (
          <Dropdown.Item
            key={item.label}
            eventKey={item.label}
            className="mb-1 px-0"
          >
            <Link className="flex h-full w-full px-2" to={item.path}>
              <span className="flex gap-2 items-center w-full">
                <span
                  className="text-xl opacity-90"
                  style={{ color: 'rgb(126, 97, 255)' }}
                >
                  {item.icon}
                </span>
                <span style={{ color: 'rgb(69, 62, 150)', fontWeight: 500 }}>
                  {item.label}
                </span>
              </span>
            </Link>
          </Dropdown.Item>
        ))}
        <Dropdown.Item variant="divider" />
        <Dropdown.Item eventKey="Sign Out" className="gap-2">
          <span
            className="text-sm opacity-90"
            style={{ color: 'rgb(126, 97, 255)' }}
          >
            <HiOutlineLogout size={18} />
          </span>
          <span
            className="text-sm "
            style={{ color: 'rgb(69, 62, 150)', fontWeight: 500 }}
          >
            <SignOutButton />
          </span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

const UserDropdown = withHeaderItem(_UserDropdown);

export default UserDropdown;
