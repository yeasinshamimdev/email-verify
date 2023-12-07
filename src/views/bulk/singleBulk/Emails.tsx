import { Avatar, Dialog, Pagination, Tabs, Tooltip } from '@/components/ui';
import Table from '@/components/ui/Table';
import TabContent from '@/components/ui/Tabs/TabContent';
import TabList from '@/components/ui/Tabs/TabList';
import TabNav from '@/components/ui/Tabs/TabNav';
import {
  DeliverableTooltip,
  RiskyTooltip,
  UndeliverableTooltip,
} from '@/constants/common.tooltip.constant';
import { tableData } from '@/constants/email.constant';
import { Attribute } from '@/views/common/email-verifier/Attribute';
import { General } from '@/views/common/email-verifier/General';
import { MailServer } from '@/views/common/email-verifier/MailServer';
import { ProgressBar } from '@/views/common/email-verifier/ProgressBar';
import { useState } from 'react';
import {
  BsFillExclamationCircleFill,
  BsQuestionCircleFill,
} from 'react-icons/bs';
import { FaCircleCheck } from 'react-icons/fa6';
import { HiOutlineUser } from 'react-icons/hi';
import { IoIosCloseCircle } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { PiChecksFill } from 'react-icons/pi';
import { OverviewHead } from './Overview';

function Emails() {
  return (
    <div className="px-2">
      <OverviewHead />
      <EmailTab />
    </div>
  );
}

export default Emails;

const EmailTab = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');
  const [page, setPage] = useState(60);

  const onPaginationChange = (val: number) => {
    setPage(val);
  };
  return (
    <div className="rounded-md bg-white mt-5 shadow-md">
      <div className="">
        <Tabs
          defaultValue="tab1"
          variant="pill"
          onChange={(e: string) => setActiveTab(e)}
        >
          <div className="flex items-center justify-between px-5 py-4">
            <p className="text-xl font-bold text-secondPrimary">Emails</p>
            <TabList className="flex gap-0">
              <TabNav
                value="tab1"
                className={`text-[12px] uppercase px-2 hover:bg-customViolet ${
                  activeTab === 'tab1'
                    ? 'bg-[#d5d3ed] text-primary font-bold'
                    : 'text-customVioletSecond font-medium'
                }`}
              >
                All
              </TabNav>
              <TabNav
                value="tab2"
                className={`text-[12px] uppercase px-2 hover:bg-customViolet ${
                  activeTab === 'tab2'
                    ? 'bg-[#d5d3ed] text-primary font-bold'
                    : 'text-customVioletSecond font-medium'
                }`}
              >
                DELIVERABLE
              </TabNav>
              <TabNav
                value="tab3"
                className={`text-[12px] uppercase px-2 hover:bg-customViolet ${
                  activeTab === 'tab3'
                    ? 'bg-[#d5d3ed] text-primary font-bold'
                    : 'text-customVioletSecond font-medium'
                }`}
              >
                UNDELIVERABLE
              </TabNav>
              <TabNav
                value="tab4"
                className={`text-[12px] uppercase px-2 hover:bg-customViolet ${
                  activeTab === 'tab4'
                    ? 'bg-[#d5d3ed] text-primary font-bold'
                    : 'text-customVioletSecond font-medium'
                }`}
              >
                RISKY
              </TabNav>
              <TabNav
                value="tab5"
                className={`text-[12px] uppercase px-2 hover:bg-customViolet ${
                  activeTab === 'tab5'
                    ? 'bg-[#d5d3ed] text-primary font-bold'
                    : 'text-customVioletSecond font-medium'
                }`}
              >
                UNKNOWN
              </TabNav>
            </TabList>
          </div>
          <div className="w-full">
            <TabContent value="tab1">
              <CompactTable tab={'all'} />
            </TabContent>
            <TabContent value="tab2">
              <CompactTable tab={'deliverable'} />
            </TabContent>
            <TabContent value="tab3">
              <CompactTable tab={'undeliverable'} />
            </TabContent>
            <TabContent value="tab4">
              <CompactTable tab={'risky'} />
            </TabContent>
            <TabContent value="tab5">
              <CompactTable tab={'unknown'} />
            </TabContent>
          </div>
        </Tabs>
      </div>
      <div className="px-5 py-4 flex justify-center border-t-[1px] border-solid border-gray">
        <Pagination
          total={100}
          currentPage={page}
          style={{
            backgroundColor: '#d5d3ed',
            color: '#463fa6',
          }}
          onChange={onPaginationChange}
        />
      </div>
    </div>
  );
};

const { Tr, Th, Td, THead, TBody } = Table;

const CompactTable = ({ tab }: { tab: string }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="">
      <Table>
        <THead className="">
          <Tr className="capitalize bg-secondary ">
            <Th
              style={{
                textTransform: 'capitalize',
                color: '#25224f',
                fontSize: '14px',
              }}
            >
              Emails
            </Th>
            <Th
              style={{
                textTransform: 'capitalize',
                color: '#25224f',
                fontSize: '14px',
              }}
            >
              Reason
            </Th>
            <Th
              style={{
                textTransform: 'capitalize',
                color: '#25224f',
                fontSize: '14px',
              }}
            >
              Score
            </Th>
            <Th
              style={{
                textTransform: 'capitalize',
                color: '#25224f',
                fontSize: '14px',
              }}
            >
              State
            </Th>
          </Tr>
        </THead>
        <TBody>
          {tab === 'all' &&
            tableData.map((td, i) => (
              <Tr
                key={i}
                className="cursor-pointer hover:bg-secondary relative"
                onClick={() => setOpenModal(true)}
              >
                <Td className="w-[60%] text-sm text-secondPrimary">
                  {td.email}
                </Td>
                <Td>
                  <Tooltip
                    className="bg-secondPrimary p-4"
                    title={
                      <div className="w-full">
                        <p className="capitalize text-md font-semibold">
                          {td.reason}
                        </p>
                        <p className="font-normal text-[12px] text-customViolet mt-2">
                          {td.tooltipDesc}
                        </p>
                      </div>
                    }
                  >
                    <p
                      style={{
                        textTransform: 'uppercase',
                        color: '#25224f',
                        backgroundColor: '#d5d3ed',
                        fontSize: '10px',
                        padding: '5px 8px',
                        width:
                          td.state === 'risky'
                            ? '118px'
                            : td.state === 'unknown' &&
                              td.reason === 'Unexpected Error'
                            ? '120px'
                            : 'fit-content',
                      }}
                      className="rounded-md font-medium"
                    >
                      {td.reason}
                    </p>
                  </Tooltip>
                </Td>
                <Td className="">
                  <p
                    className={`"px-3 py-[2px] text-white rounded-md bg-${
                      td.state === 'deliverable'
                        ? 'emerald'
                        : td.state === 'undeliverable'
                        ? 'red'
                        : td.state === 'unknown'
                        ? 'blue'
                        : 'amber'
                    }-400 w-12 text-center rounded-md shadow"`}
                  >
                    {td.score}
                  </p>
                </Td>
                <Td className="">
                  {td.state === 'deliverable' && (
                    <DeliverableTooltip>
                      <div className="flex items-center justify-start gap-2">
                        <FaCircleCheck
                          size={20}
                          className="text-emerald-400 size={20}"
                        />
                        <p className="text-md text-primary capitalize">
                          {td.state}
                        </p>
                      </div>
                    </DeliverableTooltip>
                  )}
                  {td.state === 'risky' && (
                    <RiskyTooltip>
                      <div className="flex items-center justify-start gap-2">
                        <BsFillExclamationCircleFill
                          size={20}
                          className="text-amber-400"
                        />
                        <p className="text-md text-primary capitalize">
                          {td.state}
                        </p>
                      </div>
                    </RiskyTooltip>
                  )}
                  {td.state === 'undeliverable' && (
                    <UndeliverableTooltip>
                      <div className="flex items-center justify-start gap-2">
                        <IoIosCloseCircle size={24} className="text-red-400" />
                        <p className="text-md text-primary capitalize">
                          {td.state}
                        </p>
                      </div>
                    </UndeliverableTooltip>
                  )}
                  {td.state === 'unknown' && (
                    <UndeliverableTooltip>
                      <div className="flex items-center justify-start gap-2">
                        <BsQuestionCircleFill
                          size={20}
                          className="text-blue-400"
                        />
                        <p className="text-md text-primary capitalize">
                          {td.state}
                        </p>
                      </div>
                    </UndeliverableTooltip>
                  )}
                </Td>
                {td.state === 'risky' && (
                  <div className="absolute top-[30%] left-[55%]">
                    <Tooltip
                      className="bg-secondPrimary p-4"
                      title={
                        <div className="w-full">
                          <p className="capitalize text-md font-semibold">
                            Accept-All
                          </p>
                          <p className="font-normal text-[12px] text-customViolet mt-2">
                            An address that is at a mail server that accepts
                            email for any address, regardless of its existence.
                          </p>
                        </div>
                      }
                    >
                      <PiChecksFill className="text-2xl text-customVioletSecond hover:text-primary " />
                    </Tooltip>
                  </div>
                )}
              </Tr>
            ))}
          {tab === 'deliverable' &&
            tableData
              .filter((d) => d.state === tab)
              .map((td, i) => (
                <Tr
                  key={i}
                  className="cursor-pointer hover:bg-secondary relative"
                >
                  <Td className="w-[60%] text-sm text-secondPrimary">
                    {td.email}
                  </Td>
                  <Td>
                    <Tooltip
                      className="bg-secondPrimary p-4"
                      title={
                        <div className="w-full">
                          <p className="capitalize text-md font-semibold">
                            {td.reason}
                          </p>
                          <p className="font-normal text-[12px] text-customViolet mt-2">
                            {td.tooltipDesc}
                          </p>
                        </div>
                      }
                    >
                      <p
                        style={{
                          textTransform: 'uppercase',
                          color: '#25224f',
                          backgroundColor: '#d5d3ed',
                          fontSize: '10px',
                          padding: '5px 8px',
                          width: td.state === 'risky' ? '118px' : 'fit-content',
                        }}
                        className="rounded-md font-medium"
                      >
                        {td.reason}
                      </p>
                    </Tooltip>
                  </Td>
                  <Td className="">
                    <p
                      className={`"px-3 py-[2px] text-white rounded-md bg-${
                        td.state === 'deliverable'
                          ? 'emerald'
                          : td.state === 'undeliverable'
                          ? 'red'
                          : 'amber'
                      }-400 w-12 text-center rounded-md shadow"`}
                    >
                      {td.score}
                    </p>
                  </Td>
                  <Td className="">
                    {td.state === 'deliverable' && (
                      <DeliverableTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <FaCircleCheck
                            size={20}
                            className="text-emerald-400 size={20}"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </DeliverableTooltip>
                    )}
                    {td.state === 'risky' && (
                      <RiskyTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <BsFillExclamationCircleFill
                            size={20}
                            className="text-amber-400"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </RiskyTooltip>
                    )}
                    {td.state === 'undeliverable' && (
                      <UndeliverableTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <IoIosCloseCircle
                            size={24}
                            className="text-red-400"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </UndeliverableTooltip>
                    )}
                  </Td>
                  {td.state === 'risky' && (
                    <div className="absolute top-[30%] left-[55%]">
                      <Tooltip
                        className="bg-secondPrimary p-4"
                        title={
                          <div className="w-full">
                            <p className="capitalize text-md font-semibold">
                              Accept-All
                            </p>
                            <p className="font-normal text-[12px] text-customViolet mt-2">
                              An address that is at a mail server that accepts
                              email for any address, regardless of its
                              existence.
                            </p>
                          </div>
                        }
                      >
                        <PiChecksFill className="text-2xl text-customVioletSecond hover:text-primary " />
                      </Tooltip>
                    </div>
                  )}
                </Tr>
              ))}
          {tab === 'undeliverable' &&
            tableData
              .filter((d) => d.state === tab)
              .map((td, i) => (
                <Tr
                  key={i}
                  className="cursor-pointer hover:bg-secondary relative"
                >
                  <Td className="w-[60%] text-sm text-secondPrimary">
                    {td.email}
                  </Td>
                  <Td>
                    <Tooltip
                      className="bg-secondPrimary p-4"
                      title={
                        <div className="w-full">
                          <p className="capitalize text-md font-semibold">
                            {td.reason}
                          </p>
                          <p className="font-normal text-[12px] text-customViolet mt-2">
                            {td.tooltipDesc}
                          </p>
                        </div>
                      }
                    >
                      <p
                        style={{
                          textTransform: 'uppercase',
                          color: '#25224f',
                          backgroundColor: '#d5d3ed',
                          fontSize: '10px',
                          padding: '5px 8px',
                          width:
                            td.state === 'risky'
                              ? '118px'
                              : td.state === 'undeliverable'
                              ? '120px'
                              : 'fit-content',
                        }}
                        className="rounded-md font-medium"
                      >
                        {td.reason}
                      </p>
                    </Tooltip>
                  </Td>
                  <Td className="">
                    <p
                      className={`"px-3 py-[2px] text-white rounded-md bg-${
                        td.state === 'deliverable'
                          ? 'emerald'
                          : td.state === 'undeliverable'
                          ? 'red'
                          : 'amber'
                      }-400 w-12 text-center rounded-md shadow"`}
                    >
                      {td.score}
                    </p>
                  </Td>
                  <Td className="">
                    {td.state === 'deliverable' && (
                      <DeliverableTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <FaCircleCheck
                            size={20}
                            className="text-emerald-400 size={20}"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </DeliverableTooltip>
                    )}
                    {td.state === 'risky' && (
                      <RiskyTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <BsFillExclamationCircleFill
                            size={20}
                            className="text-amber-400"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </RiskyTooltip>
                    )}
                    {td.state === 'undeliverable' && (
                      <UndeliverableTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <IoIosCloseCircle
                            size={24}
                            className="text-red-400"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </UndeliverableTooltip>
                    )}
                  </Td>
                  {td.state === 'risky' && (
                    <div className="absolute top-[30%] left-[55%]">
                      <Tooltip
                        className="bg-secondPrimary p-4"
                        title={
                          <div className="w-full">
                            <p className="capitalize text-md font-semibold">
                              Accept-All
                            </p>
                            <p className="font-normal text-[12px] text-customViolet mt-2">
                              An address that is at a mail server that accepts
                              email for any address, regardless of its
                              existence.
                            </p>
                          </div>
                        }
                      >
                        <PiChecksFill className="text-2xl text-customVioletSecond hover:text-primary " />
                      </Tooltip>
                    </div>
                  )}
                </Tr>
              ))}
          {tab === 'risky' &&
            tableData
              .filter((d) => d.state === tab)
              .map((td, i) => (
                <Tr
                  key={i}
                  className="cursor-pointer hover:bg-secondary relative"
                >
                  <Td className="w-[60%] text-sm text-secondPrimary">
                    {td.email}
                  </Td>
                  <Td>
                    <Tooltip
                      className="bg-secondPrimary p-4"
                      title={
                        <div className="w-full">
                          <p className="capitalize text-md font-semibold">
                            {td.reason}
                          </p>
                          <p className="font-normal text-[12px] text-customViolet mt-2">
                            {td.tooltipDesc}
                          </p>
                        </div>
                      }
                    >
                      <p
                        style={{
                          textTransform: 'uppercase',
                          color: '#25224f',
                          backgroundColor: '#d5d3ed',
                          fontSize: '10px',
                          padding: '5px 8px',
                          width: td.state === 'risky' ? '118px' : 'fit-content',
                        }}
                        className="rounded-md font-medium"
                      >
                        {td.reason}
                      </p>
                    </Tooltip>
                  </Td>
                  <Td className="">
                    <p
                      className={`"px-3 py-[2px] text-white rounded-md bg-${
                        td.state === 'deliverable'
                          ? 'emerald'
                          : td.state === 'undeliverable'
                          ? 'red'
                          : 'amber'
                      }-400 w-12 text-center rounded-md shadow"`}
                    >
                      {td.score}
                    </p>
                  </Td>
                  <Td className="">
                    {td.state === 'deliverable' && (
                      <DeliverableTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <FaCircleCheck
                            size={20}
                            className="text-emerald-400 size={20}"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </DeliverableTooltip>
                    )}
                    {td.state === 'risky' && (
                      <RiskyTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <BsFillExclamationCircleFill
                            size={20}
                            className="text-amber-400"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </RiskyTooltip>
                    )}
                    {td.state === 'undeliverable' && (
                      <UndeliverableTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <IoIosCloseCircle
                            size={24}
                            className="text-red-400"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </UndeliverableTooltip>
                    )}
                  </Td>
                  {td.state === 'risky' && (
                    <div className="absolute top-[30%] left-[55%]">
                      <Tooltip
                        className="bg-secondPrimary p-4"
                        title={
                          <div className="w-full">
                            <p className="capitalize text-md font-semibold">
                              Accept-All
                            </p>
                            <p className="font-normal text-[12px] text-customViolet mt-2">
                              An address that is at a mail server that accepts
                              email for any address, regardless of its
                              existence.
                            </p>
                          </div>
                        }
                      >
                        <PiChecksFill className="text-2xl text-customVioletSecond hover:text-primary " />
                      </Tooltip>
                    </div>
                  )}
                </Tr>
              ))}
          {tab === 'unknown' &&
            tableData
              .filter((d) => d.state === tab)
              .map((td, i) => (
                <Tr
                  key={i}
                  className="cursor-pointer hover:bg-secondary relative"
                >
                  <Td className="w-[60%] text-sm text-secondPrimary">
                    {td.email}
                  </Td>
                  <Td>
                    <Tooltip
                      className="bg-secondPrimary p-4"
                      title={
                        <div className="w-full">
                          <p className="capitalize text-md font-semibold">
                            {td.reason}
                          </p>
                          <p className="font-normal text-[12px] text-customViolet mt-2">
                            {td.tooltipDesc}
                          </p>
                        </div>
                      }
                    >
                      <p
                        style={{
                          textTransform: 'uppercase',
                          color: '#25224f',
                          backgroundColor: '#d5d3ed',
                          fontSize: '10px',
                          padding: '5px 8px',
                          width:
                            td.state === 'risky'
                              ? '118px'
                              : td.state === 'unknown' &&
                                td.reason === 'Unexpected Error'
                              ? '120px'
                              : 'fit-content',
                        }}
                        className="rounded-md font-medium"
                      >
                        {td.reason}
                      </p>
                    </Tooltip>
                  </Td>
                  <Td className="">
                    <p
                      className={`"px-3 py-[2px] text-white rounded-md bg-${
                        td.state === 'deliverable'
                          ? 'emerald'
                          : td.state === 'undeliverable'
                          ? 'red'
                          : td.state === 'unknown'
                          ? 'blue'
                          : 'amber'
                      }-400 w-12 text-center rounded-md shadow"`}
                    >
                      {td.score}
                    </p>
                  </Td>
                  <Td className="">
                    {td.state === 'deliverable' && (
                      <DeliverableTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <FaCircleCheck
                            size={20}
                            className="text-emerald-400 size={20}"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </DeliverableTooltip>
                    )}
                    {td.state === 'risky' && (
                      <RiskyTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <BsFillExclamationCircleFill
                            size={20}
                            className="text-amber-400"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </RiskyTooltip>
                    )}
                    {td.state === 'undeliverable' && (
                      <UndeliverableTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <IoIosCloseCircle
                            size={24}
                            className="text-red-400"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </UndeliverableTooltip>
                    )}
                    {td.state === 'unknown' && (
                      <UndeliverableTooltip>
                        <div className="flex items-center justify-start gap-2">
                          <BsQuestionCircleFill
                            size={20}
                            className="text-blue-400"
                          />
                          <p className="text-md text-primary capitalize">
                            {td.state}
                          </p>
                        </div>
                      </UndeliverableTooltip>
                    )}
                  </Td>
                  {td.state === 'risky' && (
                    <div className="absolute top-[30%] left-[55%]">
                      <Tooltip
                        className="bg-secondPrimary p-4"
                        title={
                          <div className="w-full">
                            <p className="capitalize text-md font-semibold">
                              Accept-All
                            </p>
                            <p className="font-normal text-[12px] text-customViolet mt-2">
                              An address that is at a mail server that accepts
                              email for any address, regardless of its
                              existence.
                            </p>
                          </div>
                        }
                      >
                        <PiChecksFill className="text-2xl text-customVioletSecond hover:text-primary " />
                      </Tooltip>
                    </div>
                  )}
                </Tr>
              ))}
        </TBody>
      </Table>
      <Dialog
        width={'40%'}
        isOpen={openModal}
        closable={false}
        bodyOpenClassName="overflow-hidden"
        contentClassName="py-0 px-0"
        style={{
          content: {
            border: 'none',
            padding: '0px',
            paddingBottom: '0px',
          },
          overlay: {
            backdropFilter: 'blur(5px)',
            zIndex: 1000,
            background: 'text-zinc-50',
          },
        }}
      >
        <div className="flex flex-col ">
          <div className="flex justify-between items-center w-full px-6 py-[14px] border-b-[1px] border-solid border-gray-200">
            <div className="flex">
              <Avatar
                shape="circle"
                className="mr-4 bg-primary"
                icon={<HiOutlineUser />}
              />
              <div>
                <h5 className="text-sm text-secondPrimary">Lisa Liang</h5>
                <p className="text-primary text-[12px]">
                  lliang@horizonmedia.com
                </p>
              </div>
            </div>
            <div
              className="w-9 h-9 cursor-pointer flex justify-center items-center rounded-full hover:bg-customViolet transition ease-in-out duration-300"
              onClick={() => setOpenModal(false)}
            >
              <IoClose className="text-xl text-secondPrimary" />
            </div>
          </div>
          <div className="max-h-[600px] overflow-y-auto w-full">
            <ProgressBar />
            <div className="p-6">
              <General />
              <Attribute />
              <MailServer />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
