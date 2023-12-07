import UserCommonBox from '@/components/layouts/UserLayout/UserCommonBox';
import {
  Avatar,
  Badge,
  FormContainer,
  FormItem,
  Input,
  Select,
  Table,
  Tooltip,
} from '@/components/ui';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import TBody from '@/components/ui/Table/TBody';
import THead from '@/components/ui/Table/THead';
import Td from '@/components/ui/Table/Td';
import Th from '@/components/ui/Table/Th';
import Tr from '@/components/ui/Table/Tr';
import { useUser } from '@clerk/clerk-react';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { HiCheck, HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import AccountSection from './AccountSection';

const Account = () => {
  return (
    <>
      <Helmet>
        <title>Account | Email Validation</title>
      </Helmet>
      <div className="w-[100%]">
        {/* Account Section start */}
        <AccountSection />

        {/* Team section  */}
        <div className="mt-6">
          <TeamSection />
        </div>

        {/* Data Retention Section */}
        <div className="mt-6">
          <DataRetention />
        </div>
      </div>
    </>
  );
};

export default Account;

const TeamSection = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const { user } = useUser();

  const isValidEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSendButton = () => {
    if (!inputValue) {
      setIsError(true);
    } else {
      if (!isValidEmail.test(inputValue)) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    }
  };
  return (
    <UserCommonBox header={{ title: 'Team' }}>
      <div className="p-6">
        <div className="font-medium mb-2 text-sm text-gray-950">
          Invite another team member
        </div>
        <div className="flex items-center gap-4">
          <Input
            type="email"
            invalid={isError}
            className="text-gray-900"
            placeholder="Enter an email address"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div>
            <PrimaryButton className="" onClick={handleSendButton}>
              INVITE
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div>
        <Table>
          <THead>
            <Tr className="hidden">
              <Th></Th>
              <Th></Th>
            </Tr>
          </THead>
          <TBody>
            {!user ? (
              <Tr>
                <Td></Td>
                <Td>You did not add anyone yet!</Td>
              </Tr>
            ) : (
              <Tr className="">
                <Td className="flex items-center gap-2">
                  <Avatar
                    className="mr-2 bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 rounded-full dark:text-indigo-100"
                    src={user?.imageUrl}
                  ></Avatar>{' '}
                  <div>
                    <h6>{user?.fullName}</h6>
                    <p className="text-xs mt-1">
                      {user?.primaryEmailAddress?.emailAddress}
                    </p>
                  </div>
                </Td>
                <Td>
                  <div className="flex items-center justify-end">
                    <Badge
                      className="mr-4 border border-green-200 "
                      content={'Owner'}
                      innerClass="bg-green-50 text-green-400"
                    />
                  </div>
                </Td>
              </Tr>
            )}
          </TBody>
        </Table>
      </div>
    </UserCommonBox>
  );
};

const DataRetention = () => {
  const tip = (
    <Tooltip title="This applies to all email data verified using our single verification API endpoints.">
      <HiOutlineQuestionMarkCircle className="text-lg text-customVioletThird cursor-pointer ml-1 mt-2" />
    </Tooltip>
  );
  const tip2 = (
    <Tooltip title="This applies to all email data verified using our batch verification API endpoints.">
      <HiOutlineQuestionMarkCircle className="text-lg text-customVioletThird cursor-pointer ml-1 mt-2" />
    </Tooltip>
  );
  const option1 = [
    { value: '3', label: '3 days' },
    { value: '7', label: '7 days' },
  ];
  const option2 = [
    { value: '7', label: '7 days' },
    { value: '14', label: '14 days' },
    { value: '30', label: '30 days' },
  ];

  return (
    <>
      <UserCommonBox
        header={{
          title: 'Data Retention',
        }}
      >
        <div className="">
          <p className="pt-6 text-[#786EAF] px-6">
            Your accounts data will automatically be deleted from Email
            Validation after the amount of time specified. Changes will not
            impact existing data. Existing data will be deleted according to the
            configuration at the time the data was added.
          </p>
          <Formik
            initialValues={{
              APISingleVerification: '',
              APIBatchVerification: '',
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <FormContainer className="flex justify-between w-full gap-4 pt-6 px-6">
                <FormItem
                  label="API Single Verification"
                  extra={tip}
                  className="w-full text-gray-800"
                >
                  <Select
                    name="APISingleVerification"
                    options={option1}
                    components={{
                      Option: CustomSelectOption,
                    }}
                    defaultValue={option1[0]}
                    className="mb-4"
                  />
                </FormItem>
                <FormItem
                  label="API Batch Verification"
                  extra={tip2}
                  className="w-full text-gray-800"
                >
                  <Select
                    name="APIBatchVerification"
                    options={option2}
                    components={{
                      Option: CustomSelectOption,
                    }}
                    defaultValue={option2[0]}
                    className="mb-4"
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
    </>
  );
};

export const CustomSelectOption = ({
  innerProps,
  label,
  imgPath,
  isSelected,
}: any) => {
  return (
    <div
      className={`flex items-center justify-between p-2 cursor-pointer ${
        isSelected
          ? 'bg-gray-100 dark:bg-gray-500'
          : 'hover:bg-gray-50 dark:hover:bg-gray-600'
      }`}
      {...innerProps}
    >
      <div className="flex items-center">
        {imgPath && <img src={imgPath} className="ml-2 rtl:mr-2" alt="flag" />}
        <p className="ml-2 rtl:mr-2">{label}</p>
      </div>
      {isSelected && <HiCheck className="text-emerald-500 text-xl" />}
    </div>
  );
};
