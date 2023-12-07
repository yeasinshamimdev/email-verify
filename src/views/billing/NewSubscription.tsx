import UserCommonBox from '@/components/layouts/UserLayout/UserCommonBox';
import { Alert, Avatar, Button, Input, Select } from '@/components/ui';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import { paymentOptions } from '@/constants/list.dropdown';
import { useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SingleValue, components } from 'react-select';
import PaymentTerm from './PaymentTerm';

const { Control } = components;

const NewSubscription = () => {
  const [userInputValue, setUserInputValue] = useState('5000');
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const hideSideBar = params.get('hide_sidebar');
  const getQuantity = params.get('quantity');

  const handleOnChange = (
    e: SingleValue<{
      value: string;
      label: string;
      imgPath: string;
    }>
  ) => {
    const value = e?.value;
    if (value === 'addMethod') {
      console.log('stripe payment method');
    }
  };

  return (
    <div>
      <UserCommonBox header={{ title: 'New Credits Subscription' }}>
        <div className="md:flex">
          <div className="md:w-3/5 ">
            <div className="p-6">
              <div className="md:mb-6 mb-3 flex items-center gap-3">
                <h6 className="bg-customVioletThird text-white h-5 w-5 text-sm font-normal text-center rounded-full">
                  1
                </h6>
                <h6 className="text-[#8f81d4] text-sm">
                  ENTER AMOUNT OF CREDITS
                </h6>
              </div>
              <Input
                defaultValue={5000}
                className="text-gray-800 font-normal"
                placeholder="5,000"
              />
            </div>
            <div
              className="p-6"
              style={{ borderTop: '1px solid rgba(100, 100, 200, 0.15)' }}
            >
              <div className="md:mb-6 mb-3 flex items-center gap-3">
                <h6 className="bg-customVioletThird text-white h-5 w-5 text-sm font-normal text-center rounded-full">
                  2
                </h6>
                <h6 className="text-[#8f81d4] text-sm">
                  SELECT A PAYMENT TERM
                </h6>
              </div>
              <PaymentTerm
                userInputValue={userInputValue}
                setUserInputValue={setUserInputValue}
              />
            </div>
            <div
              className="p-6"
              style={{ borderTop: '1px solid rgba(100, 100, 200, 0.15)' }}
            >
              <div className="md:mb-6 mb-3 flex items-center gap-3">
                <h6 className="bg-customVioletThird text-white h-5 w-5 text-sm font-normal text-center rounded-full">
                  3
                </h6>
                <h6 className="text-[#8f81d4] text-sm">
                  ENTER YOUR BILLING INFORMATION
                </h6>
              </div>
              <Select
                options={paymentOptions}
                components={{
                  Option: CustomSelectOption,
                  Control: CustomControl,
                }}
                defaultValue={paymentOptions[0]}
                onChange={handleOnChange}
              ></Select>
            </div>
          </div>
          <div
            className="md:w-2/5 p-6"
            style={{ borderLeft: '1px solid rgba(100, 100, 200, 0.15)' }}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-[#b4ace2] text-xs">NUMBER OF CREDITS</p>
                <h3 className="text-3xl font-bold">
                  {getQuantity
                    ? parseFloat(getQuantity as string)?.toLocaleString()
                    : '5,000'}
                </h3>
                <p className="mt-8 text-[#b4ace2] text-xs">COST PER CREDIT</p>
                <h6 className="pb-6">$0.0051</h6>
                <Alert showIcon className="mb-4 " type="info">
                  Your credits will be allocated at the start of each billing
                  cycle. Credits never expire. To view our full pricing{' '}
                  <Link to={'#'} className="text-indigo-500 underline">
                    click here
                  </Link>
                  .
                </Alert>
              </div>
              <div>
                <div
                  className="flex justify-between items-center pb-4 text-[#33205e]"
                  style={{
                    borderBottom: '1px solid rgba(100, 100, 200, 0.15)',
                  }}
                >
                  <p>
                    {getQuantity
                      ? parseFloat(getQuantity as string)?.toLocaleString()
                      : '5,000'}{' '}
                    credits
                  </p>
                  <p>$25.50</p>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <h6>Total</h6>
                  <h6>$25.50</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-between items-center px-6 py-4 w-full"
          style={{ borderTop: '1px solid rgba(100, 100, 200, 0.15)' }}
        >
          <Button
            variant="default"
            onClick={() =>
              navigate(
                `${hideSideBar ? '/checkout/credits' : '/user/account/billing'}`
              )
            }
          >
            {hideSideBar ? 'BACK' : 'CANCEL'}
          </Button>
          <PrimaryButton
            onClick={() => {
              console.log('clicked');
            }}
          >
            SUBMIT
          </PrimaryButton>
        </div>
      </UserCommonBox>
    </div>
  );
};

export default NewSubscription;

const CustomSelectOption = ({ innerProps, label, data, isSelected }: any) => {
  return (
    <div
      className={`flex items-center justify-between p-2 ${
        isSelected
          ? 'bg-gray-100 dark:bg-gray-500'
          : 'hover:bg-gray-50 dark:hover:bg-gray-600'
      }`}
      {...innerProps}
    >
      <div className="flex items-center">
        <Avatar shape="circle" size={20} src={data.imgPath} />
        <span className="ml-2 rtl:mr-2">{label}</span>
      </div>
      {isSelected && <HiCheck className="text-emerald-500 text-xl" />}
    </div>
  );
};

export const CustomControl = ({ children, ...props }: any) => {
  const selected = props.getValue()[0];
  return (
    <Control {...props} className="flex px-2">
      {selected && (
        <Avatar
          className="ltr:ml-4 rtl:mr-4"
          shape="circle"
          size={18}
          src={selected.imgPath}
        />
      )}
      {children}
    </Control>
  );
};
