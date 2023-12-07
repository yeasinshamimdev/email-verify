import UserCommonBox from '@/components/layouts/UserLayout/UserCommonBox';
import { Badge, Input, Switcher } from '@/components/ui';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import PaymentTerm from '../billing/PaymentTerm';

const Credits = () => {
  const [isSubscriptionChecked, setIsSubscriptionChecked] =
    useState<boolean>(false);
  const [userInputValue, setUserInputValue] = useState('5000');
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Buy Credits | Email Validation</title>
      </Helmet>
      <div className="mt-3">
        <UserCommonBox header={{ title: 'Buy Credits' }}>
          <div className="md:flex">
            <div className="md:w-3/5 ">
              <div className="p-6">
                <h6 className="text-customVioletThird text-sm md:mb-6 mb-3 text-center">
                  CHOOSE A PACKAGE
                </h6>
                <PaymentTerm
                  userInputValue={userInputValue}
                  setUserInputValue={setUserInputValue}
                />
              </div>
              <div className="flex items-center w-full justify-evenly">
                <div className="h-[1px] bg-slate-200 w-[90%] mr-2"></div>
                <h6 className="text-customVioletThird text-sm text-center w-full">
                  OR ENTER AN AMOUNT OF CREDITS
                </h6>
                <div className="h-[1px] bg-slate-200 w-[90%] ml-2"></div>
              </div>
              <div className="flex items-center justify-center p-6 xl:w-1/2 mx-auto">
                <Input
                  type="text"
                  name="userInputValue"
                  value={userInputValue}
                  className="text-customBlack text-center text-xl"
                  onChange={(e) => setUserInputValue(e.target.value)}
                />
              </div>
            </div>
            <div
              className="md:w-2/5 p-6"
              style={{ borderLeft: '1px solid rgba(100, 100, 200, 0.15)' }}
            >
              <div className="flex flex-col justify-between h-full">
                <div className="md:w-3/4 mx-auto">
                  <div className="flex items-center justify-center gap-3 p-6">
                    <h6
                      className="text-primary cursor-pointer select-none"
                      onClick={() =>
                        setIsSubscriptionChecked(!isSubscriptionChecked)
                      }
                    >
                      Pay-As-You-Go
                    </h6>
                    <Switcher
                      checked={isSubscriptionChecked}
                      onChange={() =>
                        setIsSubscriptionChecked(!isSubscriptionChecked)
                      }
                    />
                    <h6
                      className="text-primary cursor-pointer select-none"
                      onClick={() =>
                        setIsSubscriptionChecked(!isSubscriptionChecked)
                      }
                    >
                      Subscription
                    </h6>
                  </div>
                  <div>
                    {!isSubscriptionChecked && (
                      <div className="flex justify-center items-center mt-7">
                        <span className="text-4xl mt-[-10px] text-customBlack">
                          $
                        </span>
                        <h1 className="text-customBlack text-center text-5xl font-semibold">
                          30
                        </h1>
                      </div>
                    )}
                    {isSubscriptionChecked && (
                      <div>
                        <div className="flex justify-center items-center gap-6 mb-2">
                          <div className="flex justify-center items-center">
                            <span className="text-sm mt-[-1px] text-customVioletThird">
                              $
                            </span>
                            <h1 className="text-customVioletThird text-center text-xl font-semibold line-through">
                              30
                            </h1>
                          </div>
                          <Badge
                            className="mr-4 border border-green-200 "
                            content={'SAVE $4.50'}
                            innerClass="bg-green-100 text-green-400"
                          />
                        </div>
                        <div className="flex justify-center items-center">
                          <span className="text-4xl mt-[-10px] text-customBlack">
                            $
                          </span>
                          <h1 className="text-customBlack text-center text-5xl font-semibold">
                            25.50
                            <span className="text-xl text-customVioletSecond font-normal">
                              /Month
                            </span>
                          </h1>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <p className="mt-2 text-customVioletThird text-xs">
                    COST PER CREDIT
                  </p>
                  <h6 className="pb-6">$0.0051</h6>
                </div>
                <div>
                  <div
                    className="flex justify-between items-center pb-4 text-[#33205e]"
                    style={{
                      borderBottom: '1px solid rgba(100, 100, 200, 0.15)',
                    }}
                  >
                    <p>5,000 credits</p>
                    <p>{isSubscriptionChecked ? '$25.50' : '$30.00'}</p>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <h6>Total</h6>
                    <h6>{isSubscriptionChecked ? '$25.50' : '$30.00'}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-end items-center px-6 py-4 w-full"
            style={{ borderTop: '1px solid rgba(100, 100, 200, 0.15)' }}
          >
            <PrimaryButton
              onClick={() => {
                isSubscriptionChecked
                  ? navigate(
                      `/user/subscriptions/new?quantity=${userInputValue}&hide_sidebar=true`
                    )
                  : navigate(`/checkout/summary?quantity=${userInputValue}`);
              }}
            >
              NEXT
            </PrimaryButton>
          </div>
        </UserCommonBox>
      </div>
    </>
  );
};

export default Credits;
