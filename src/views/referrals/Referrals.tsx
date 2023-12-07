import UserCommonBox from '@/components/layouts/UserLayout/UserCommonBox';
import { Avatar, Input } from '@/components/ui';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import Table from '@/components/ui/Table';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const { Tr, Th, Td, THead, TBody } = Table;

const Referrals = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

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
    <>
      <Helmet>
        <title>Referrals | Email Validation</title>
      </Helmet>
      <div className="w-[100%]">
        <UserCommonBox header={{ title: 'Referrals' }}>
          <div className="p-6">
            <div className="font-medium mb-2 text-sm text-gray-950">
              You have 5 invites remaining.
            </div>
            <div className="flex items-center gap-4">
              <Input
                type="email"
                invalid={isError}
                className="text-gray-900"
                placeholder="Enter an email address"
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="md:w-[148px]">
                <PrimaryButton className="" onClick={handleSendButton}>
                  Send Referral
                </PrimaryButton>
              </div>
            </div>
          </div>
          <div>
            <Table>
              <THead>
                <Tr>
                  <Th>Email Address</Th>
                  <Th>Sent</Th>
                  <Th>Status</Th>
                </Tr>
              </THead>
              <TBody>
                {!isValidEmail.test(inputValue) ? (
                  <Tr>
                    <Td></Td>
                    <Td>There are no referrals to display</Td>
                    <Td></Td>
                  </Tr>
                ) : (
                  <Tr>
                    <Td className="flex items-center">
                      <Avatar className="mr-2 bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100">
                        A
                      </Avatar>{' '}
                      {inputValue}
                    </Td>
                    <Td>1 minute ago</Td>
                    <Td>
                      {' '}
                      <span className="badge bg-lime-200 text-indigo-800">
                        PENDING
                      </span>
                    </Td>
                  </Tr>
                )}
              </TBody>
            </Table>
          </div>
        </UserCommonBox>
      </div>
    </>
  );
};

export default Referrals;
