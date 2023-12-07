import UserCommonBox from '@/components/layouts/UserLayout/UserCommonBox';
import {
  FormContainer,
  FormItem,
  Input,
  Switcher,
  Tooltip,
} from '@/components/ui';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Billing = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);

  const onSwitcherToggle = (val: boolean) => {
    setChecked(!val);
  };

  const tip = (
    <Tooltip title="The amount of credits to refill your credit balance with.">
      <HiOutlineQuestionMarkCircle className="text-lg text-customVioletThird cursor-pointer ml-1 mt-2" />
    </Tooltip>
  );
  const tip2 = (
    <Tooltip title="The amount of credits your credit balance needs to fall below to trigger an automatic refill.">
      <HiOutlineQuestionMarkCircle className="text-lg text-customVioletThird cursor-pointer ml-1 mt-2" />
    </Tooltip>
  );

  return (
    <>
      <Helmet>
        <title>Billing | Email Validation</title>
      </Helmet>
      <div className="w-[100%]">
        <UserCommonBox header={{ title: 'Subscriptions' }}>
          <div className="p-6">
            <h2 className="text-2xl">Credits</h2>
            <p className="pt-4 text-[#786EAF]">
              Purchase credits on a recurring basis to save money and have
              consistent billing. You can use these credits with our Bulk,
              Single, API, and Form products
            </p>
            <PrimaryButton
              className="mt-5"
              onClick={() => navigate('/user/subscriptions/new')}
            >
              GET STARTED
            </PrimaryButton>
          </div>
        </UserCommonBox>
        <div className="mt-6">
          <UserCommonBox
            header={{
              title: 'Auto-Refill',
              el: <Switcher checked={checked} onChange={onSwitcherToggle} />,
            }}
          >
            <div className="">
              <Formik
                initialValues={{
                  AutomaticallyPurchase: '',
                  balanceDrops: '',
                }}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                <Form>
                  <FormContainer className="flex justify-between w-full gap-4 pt-6 px-6">
                    <FormItem
                      label="Automatically purchase"
                      extra={tip}
                      className="w-full text-gray-800"
                    >
                      <Input
                        type="text"
                        name="AutomaticallyPurchase"
                        placeholder="10,000"
                        disabled={!checked}
                        defaultValue={checked ? '10000' : ''}
                      />
                    </FormItem>
                    <FormItem
                      label="When balance drops below"
                      extra={tip2}
                      className="w-full text-gray-800"
                    >
                      <Input
                        type="text"
                        name="balanceDrops"
                        defaultValue={checked ? '1500' : ''}
                        disabled={!checked}
                        placeholder="1,500"
                      />
                    </FormItem>
                  </FormContainer>
                  <div
                    className="flex justify-end items-center px-6 py-4 w-full"
                    style={{ borderTop: '1px solid rgba(100, 100, 200, 0.15)' }}
                  >
                    <PrimaryButton type="submit">SAVE</PrimaryButton>
                  </div>
                </Form>
              </Formik>
            </div>
          </UserCommonBox>
        </div>
      </div>
    </>
  );
};

export default Billing;
