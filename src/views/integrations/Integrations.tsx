import UserCommonBox from '@/components/layouts/UserLayout/UserCommonBox';
import { Avatar, Table } from '@/components/ui';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const { Tr, Th, Td, THead, TBody } = Table;

const Integrations = () => {
  const navigate = useNavigate();

  const show = true;

  return (
    <>
      <Helmet>
        <title>Integrations | Email Validation</title>
      </Helmet>
      <div className="w-[100%]">
        <UserCommonBox
          header={{
            title: 'Integrations',
            el: (
              <PrimaryButton
                onClick={() => navigate('/user/providers/integrations')}
              >
                NEW
              </PrimaryButton>
            ),
          }}
        >
          <div className="p-6"></div>
          <div>
            <Table>
              <THead color="text-gray-900">
                <Tr color="text-gray-900">
                  <Th>Name</Th>
                  <Th>Account Name</Th>
                  <Th>Connected On</Th>
                </Tr>
              </THead>
              <TBody>
                {show ? (
                  <Tr>
                    <Td width={250}></Td>
                    <Td align="center">
                      There are no integrations to display.
                    </Td>
                    <Td></Td>
                  </Tr>
                ) : (
                  <Tr>
                    <Td className="flex items-center">
                      <Avatar className="mr-2 bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100">
                        A
                      </Avatar>{' '}
                      {'inputValue'}
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

export default Integrations;
