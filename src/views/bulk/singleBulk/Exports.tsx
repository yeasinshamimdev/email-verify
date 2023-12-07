import { Table, Tooltip } from '@/components/ui';
import TBody from '@/components/ui/Table/TBody';
import THead from '@/components/ui/Table/THead';
import Td from '@/components/ui/Table/Td';
import Th from '@/components/ui/Table/Th';
import Tr from '@/components/ui/Table/Tr';
import { OverviewHead } from './Overview';
import { useNavigate, useParams } from 'react-router-dom';
import { PrimaryButton } from '@/constants/buttons.constant';

function Exports() {
  return (
    <div className="px-2">
      <OverviewHead />
      <Export />
    </div>
  );
}

export default Exports;

const Export = () => {
const navigate = useNavigate();
const {id} = useParams();

  const handleNavigate =()=>{
    navigate(`/bulk/${id}/exports/new`)
  }

  return (
    <div className="rounded-md bg-white mt-5 shadow-md">
      <div className="flex justify-between items-center px-5 py-4">
        <p className="text-xl font-bold text-secondPrimary">Exports</p> 
        <PrimaryButton data={"12px"} onClick={handleNavigate}>New Export</PrimaryButton>
      </div>
      <div>
        <Table>
          <THead className="h-14">
            <Tr className="capitalize bg-secondary">
              <Th
                style={{
                  textTransform: 'capitalize',
                  color: '#25224f',
                  fontSize: '14px',
                  width: '60%',
                }}
              >
                name
              </Th>
              <Th
                style={{
                  textTransform: 'capitalize',
                  color: '#25224f',
                  fontSize: '14px',
                  width: '40%',
                }}
              >
                created
              </Th>
              <Th></Th>
            </Tr>
          </THead>
          <TBody className='hover:bg-secondary'>
            <Tr className="cursor-pointer hover:bg-secondary relative z-2">
              <Td>
                <Tooltip
                  className="lowercase"
                  title={'Justin Lyle - Clutch - Justin Lyle_unknown.csv'}
                >
                  <p className="text-secondPrimary">Maximum Deliverability</p>
                </Tooltip>
              </Td>
              <Td>
                <Tooltip className="uppercase" title={'8:40 pm'}>
                  <p className="text-customVioletThird">11/13/2023</p>
                </Tooltip>
              </Td>
              <Td> 
                <PrimaryButton data={"10px"}>Download</PrimaryButton>
              </Td>
            </Tr>
          </TBody>
        </Table>
      </div>
    </div>
  );
};
