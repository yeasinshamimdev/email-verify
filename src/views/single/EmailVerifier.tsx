import UserCommonBox from '@/components/layouts/UserLayout/UserCommonBox';
import {
  Avatar,
  FormContainer,
  FormItem,
  Input,
  Table,
  Tooltip,
} from '@/components/ui';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import { userCommonBoxStyle } from '@/constants/common.style';
import {
  DeliverableTooltip,
  UndeliverableTooltip,
} from '@/constants/common.tooltip.constant';
import { searchEmail } from '@/constants/validation';
import { useGetSingleJobVerifyQuery } from '@/services/EmailVerifyApi';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoIosCloseCircle } from 'react-icons/io';
import { Attribute } from '../common/email-verifier/Attribute';
import { General } from '../common/email-verifier/General';
import { MailServer } from '../common/email-verifier/MailServer';
import { ProgressBar } from '../common/email-verifier/ProgressBar';

const { Tr, Th, Td, THead, TBody } = Table;

const EmailVerifier = () => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [showEmailDetails, setShowEmailDetails] = useState<boolean>(false);
  const { data, isLoading } = useGetSingleJobVerifyQuery(userEmail);
  const [showRecentVerifications, setShowRecentVerifications] =
    useState<boolean>(false);
  console.log(data);

  const emailList = [
    'yeasinshamim7@gmail.com',
    'yeasinshamim777@gmail.com',
    'alex@growscience.co',
    'ahamedshaker7@gmail.com',
    'takkeo_work@proton.me',
  ];
  const validEmails = emailList.find((email) => email === userEmail);

  const handleSubmit = (values: any, setSubmitting: any) => {
    setIsAnimated(isLoading);
    setUserEmail(values.searchEmail);
    setShowEmailDetails(true);
    setShowRecentVerifications(false);
    setTimeout(() => {
      setIsAnimated(false);
    }, 2000);
  };

  useEffect(() => {
    const indexNum = Math.floor(Math.random() * emailList.length);
    setUserEmail(emailList[indexNum]);
    setShowRecentVerifications(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Email Verifier | Email Validation</title>
      </Helmet>
      <div className="mt-3 w-full xl:w-1/2 mx-auto">
        <UserCommonBox
          header={{
            title: 'Email Verifier',
            tooltip: (
              <Tooltip
                title="The Email Verifier verifies individual emails in real-time. Enter an email and we will verify it."
                placement="right"
              >
                <BsInfoCircleFill
                  className={`text-sky-400 ml-2 cursor-help`}
                  size={16}
                />
              </Tooltip>
            ),
          }}
        >
          <div className="px-6 pt-6 pb-1">
            <Formik
              initialValues={{ searchEmail: '' }}
              validationSchema={searchEmail}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values, setSubmitting);
              }}
            >
              {({ touched, errors }) => (
                <Form>
                  <FormContainer className="flex items-center w-full gap-4">
                    <FormItem
                      invalid={errors.searchEmail && touched.searchEmail}
                      errorMessage={errors.searchEmail}
                      className="w-full"
                    >
                      <Field
                        autoComplete="off"
                        name="searchEmail"
                        type="email"
                        className="text-gray-900"
                        placeholder="Enter an email"
                        component={Input}
                      />
                    </FormItem>
                    <FormItem className="w-[60px]">
                      <PrimaryButton type="submit">
                        <FaSearch
                          size={20}
                          className={`${
                            isAnimated ? 'animate-pulse delay-700' : ''
                          }`}
                        />
                      </PrimaryButton>
                    </FormItem>
                  </FormContainer>
                </Form>
              )}
            </Formik>
          </div>
        </UserCommonBox>
        {showRecentVerifications && (
          <RecentVerifications
            userEmail={userEmail}
            setShowEmailDetails={setShowEmailDetails}
            setShowRecentVerifications={setShowRecentVerifications}
            validEmails={validEmails}
          />
        )}
        {showEmailDetails && (
          <EmailDetails userEmailData={data} validEmails={validEmails} />
        )}
      </div>
    </>
  );
};

export default EmailVerifier;

const EmailDetails = ({
  userEmailData,
  validEmails,
}: {
  userEmailData: any;
  validEmails: any;
}) => {
  return (
    <div style={userCommonBoxStyle} className="mt-3">
      <div>
        <div
          className="flex items-center justify-between py-4 px-6"
          style={{
            borderBottom: '1px solid rgba(100, 100, 200, 0.15)',
          }}
        >
          <div className="flex items-center">
            <Avatar
              shape="circle"
              className="mr-2 bg-primary text-xl capitalize"
            >
              {userEmailData?.email?.charAt(0)}
            </Avatar>
            <h5 className="text-sm text-secondPrimary">
              {userEmailData?.email}
            </h5>
          </div>
          <div className="flex justify-end items-center">
            <span
              className={`"px-3 py-1 text-white rounded-md bg-${
                validEmails ? 'emerald' : !validEmails ? 'red' : 'amber'
              }-400 w-12 text-center rounded-md shadow"`}
            >
              {validEmails && '96'}
              {!validEmails && '0'}
            </span>
          </div>
        </div>
        <div className="w-full">
          <ProgressBar />
          <div className="p-6">
            <General />
            <Attribute />
            <MailServer />
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentVerifications = ({
  userEmail,
  setShowEmailDetails,
  setShowRecentVerifications,
  validEmails,
}: {
  userEmail: string;
  setShowEmailDetails: any;
  setShowRecentVerifications: any;
  validEmails: any;
}) => {
  return (
    <div className="mt-6">
      <UserCommonBox
        header={{
          title: 'Recent Verification',
          tooltip: (
            <Tooltip
              title="This is a list of all email you use the Email Verifier in the last 24 hours."
              placement="right"
            >
              <BsInfoCircleFill
                className={`text-sky-400 ml-2 cursor-help`}
                size={16}
              />
            </Tooltip>
          ),
        }}
      >
        <Table>
          <THead className="hidden">
            <Tr>
              <Th></Th>
              <Th></Th>
            </Tr>
          </THead>
          <TBody>
            <Tr
              className="cursor-pointer hover:bg-secondary relative"
              onClick={() => {
                setShowEmailDetails(true);
                setShowRecentVerifications(false);
              }}
            >
              <Td className="text-sm text-secondPrimary">
                <div className="flex items-center">
                  <Avatar
                    shape="circle"
                    className="mr-2 bg-primary text-xl capitalize"
                  >
                    {userEmail.charAt(0)}
                  </Avatar>
                  <h5 className="text-sm text-secondPrimary">{userEmail}</h5>
                </div>
              </Td>
              <Td className="h-full">
                <div className="flex justify-end items-center gap-5">
                  {validEmails && (
                    <DeliverableTooltip>
                      <div className="flex items-center justify-start gap-2">
                        <FaCircleCheck
                          size={20}
                          className="text-emerald-400 size={20}"
                        />
                        <p className="text-md text-primary capitalize">
                          Deliverable
                        </p>
                      </div>
                    </DeliverableTooltip>
                  )}

                  {!validEmails && (
                    <UndeliverableTooltip>
                      <div className="flex items-center justify-start gap-2">
                        <IoIosCloseCircle size={24} className="text-red-400" />
                        <p className="text-md text-primary capitalize">
                          Undeliverable
                        </p>
                      </div>
                    </UndeliverableTooltip>
                  )}
                  <span
                    className={`"px-3 text-white rounded-md bg-${
                      validEmails ? 'emerald' : !validEmails ? 'red' : 'amber'
                    }-400 w-12 text-center rounded-md shadow"`}
                  >
                    {validEmails && '96'}
                    {!validEmails && '0'}
                  </span>
                </div>
              </Td>
            </Tr>
          </TBody>
        </Table>
      </UserCommonBox>
    </div>
  );
};
