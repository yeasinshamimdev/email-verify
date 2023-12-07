import UserCommonBox from '@/components/layouts/UserLayout/UserCommonBox';
import { Button, Select } from '@/components/ui';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import { paymentOptions } from '@/constants/list.dropdown';
import { useLocation, useNavigate } from 'react-router-dom';
import { SingleValue } from 'react-select';
import { CustomSelectOption } from '../account/Account';
import { CustomControl } from '../billing/NewSubscription';

const ReviewOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
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
    <div className="mt-3">
      <UserCommonBox header={{ title: 'Review your order' }}>
        <div className="md:flex">
          <div className="md:w-3/5 ">
            <div className="p-6">
              <h2>PayPal integration is under construction</h2>
            </div>
            <div
              className="p-6"
              style={{ borderTop: '1px solid rgba(100, 100, 200, 0.15)' }}
            >
              <div className="flex items-center w-full justify-evenly">
                <div className="h-[1px] bg-slate-200 w-[90%] mr-2"></div>
                <h6 className="text-customVioletThird text-sm text-center w-full">
                  OR PAY WITH
                </h6>
                <div className="h-[1px] bg-slate-200 w-[90%] ml-2"></div>
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
          <Button variant="default" onClick={() => navigate(-1)}>
            BACK
          </Button>
          <PrimaryButton
            onClick={() => {
              console.log('clicked');
            }}
          >
            PURCHASE
          </PrimaryButton>
        </div>
      </UserCommonBox>
    </div>
  );
};

export default ReviewOrder;
