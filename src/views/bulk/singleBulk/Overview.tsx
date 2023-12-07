import { Chart } from '@/components/shared';
import { Tooltip } from '@/components/ui';
import { BGCOLOR, COLORS, TEXTCOLORHOVER } from '@/constants/chart.constant';
import { data } from '@/constants/overviewFristChart';
import { IoClose } from 'react-icons/io5';

function Overview() {
  return (
    <div className="px-2">
      <OverviewHead />
      <OverviewFirstChart />
      <OverviewSecondChart />
    </div>
  );
}

export default Overview;

export const OverviewHead = () => {
  return (
    <div className="p-6 w-full bg-white rounded-md shadow-md block md:flex justify-start items-center gap-24">
      <div>
        <p className="uppercase text-customVioletSecond mb-[6px] text-sm">
          Name
        </p>
        <p className="text-2xl text-secondPrimary font-semibold">
          Justin Lyle - Clutch - Justin Lyle_unknown
        </p>
      </div>
      <div>
        <p className="uppercase text-customVioletSecond mb-[6px] text-sm">
          Emails
        </p>
        <Tooltip title={'5,991'}>
          <p className="text-2xl text-secondPrimary font-semibold">5.90K</p>
        </Tooltip>
      </div>
      <div>
        <p className="uppercase text-customVioletSecond mb-[6px] text-sm">
          Uploaded
        </p>
        <Tooltip title={'12:34 AM'}>
          <p className="text-2xl text-secondPrimary font-semibold">
            11/13/2023
          </p>
        </Tooltip>
      </div>
    </div>
  );
};
const OverviewFirstChart = () => {
  return (
    <div className="p-[30px] block md:flex items-center bg-white mt-5 shadow-md rounded-md">
      <div className="py-5 w-full md:w-1/2">
        <div className="my-6 px-4 relative">
          <Chart
            //@ts-ignore
            options={{
              labels: [
                'Deliverable',
                'Risky',
                'Unknown',
                'Undeliverable',
                'Duplicate',
              ],
              colors: COLORS,
              legend: false,
              series: false,
              dataLabels: {
                enabled: false,
              },
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 300,
                      height: 300,
                    },
                    legend: false,
                  },
                },
              ],
            }}
            series={[44, 55, 41, 17, 1.5]}
            height={420}
            type="donut"
          />
          <div className="text-center absolute top-[42%] bottom-[50%] right-[23%] md:right-[32%]">
            <p className="text-5xl font-extrabold text-secondPrimary">60.6%</p>
            <p className="text-primary">Deliverable</p>
          </div>
        </div>
      </div>
      <div className="md:mx-14 w-full md:w-1/2 flex flex-col gap-6">
        {data.map((d, i) => (
          <div key={i} className="flex justify-between w-full">
            <div className="flex items-center gap-5">
              <p
                className={`text-[16px] ${BGCOLOR[i]} text-white px-4 py-1 rounded-full font-semibold w-20 text-center`}
              >
                {d.totalPercantage}%
              </p>
              <Tooltip
                className="bg-secondPrimary w-full p-4"
                title={
                  <div className="w-full">
                    <p className="capitalize text-md font-semibold">
                      {d.label}
                    </p>
                    <p className="font-normal text-[12px] text-customViolet mt-2">
                      {d.subTitle}
                    </p>
                  </div>
                }
              >
                <p
                  className={`text-lg text-start text-secondPrimary font-semibold capitalize cursor-pointer ${TEXTCOLORHOVER[i]}`}
                >
                  {d.label}
                </p>
              </Tooltip>
            </div>
            {d.emails >= 1000 ? (
              <Tooltip
                placement="left-start"
                title={
                  <div className={`p-0`}>
                    <p>{d.emails >= 1000 && d.emails.toLocaleString()}</p>
                  </div>
                }
              >
                <p className="text-lg text-customVioletSecond font-medium">
                  {d.emails >= 1000 ? (d.emails / 1000).toFixed(2) : d.emails}
                  {d.emails >= 1000 ? 'K' : undefined}
                </p>
              </Tooltip>
            ) : (
              <p className="text-lg text-customVioletSecond font-medium">
                {d.emails >= 1000 ? (d.emails / 1000).toFixed(2) : d.emails}
                {d.emails >= 1000 ? 'K' : undefined}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const OverviewSecondChart = () => {
  const ICONS = [{ icon: <IoClose /> }, { icon: '!' }, { icon: '?' }];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-6 ">
      {data.slice(1, 4).map((d, i) => (
        <div key={i} className="p-[30px] bg-white mt-5 shadow-md rounded-md">
          <span className="flex justify-center items-center gap-[10px]">
            <div
              className={`text-2xl ${
                BGCOLOR[i + 1]
              } w-7 h-7 p-1 flex justify-center items-center rounded-full text-white`}
            >
              {ICONS[i].icon}
            </div>
            <p className="capitalize text-xl text-secondPrimary font-medium">
              {d.label}
            </p>
          </span>
          <div className="my-6 px-0 relative">
            <Chart
              //@ts-ignore
              options={{
                labels: [d.label],
                colors: COLORS[i + 1],
                legend: false,
                series: false,
                dataLabels: {
                  enabled: false,
                },
                responsive: [
                  {
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 300,
                        height: 300,
                      },
                      legend: false,
                    },
                  },
                ],
              }}
              series={[d.totalPercantage]}
              height={260}
              type="donut"
            />
            <div className="text-center absolute top-[38%] bottom-[50%] right-[30%]">
              <p className="text-[34px] font-semibold text-secondPrimary">
                {d.totalPercantage}%
              </p>
              <p className="text-primary -mt-1">{['1', '21', '24'][i]}</p>
            </div>
          </div>
          {d.label === 'undeliverable' && <UndeliverableBottom />}
          {d.label === 'risky' && <RiskBottom />}
          {d.label === 'unknown' && <UnknownBottom />}
        </div>
      ))}
    </div>
  );
};

const UndeliverableBottom = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="bg-red-500 w-16 px-3 rounded-full text-center text-white font-semibold">
          0.0%
        </p>
        <Tooltip
          className="bg-secondPrimary w-full p-4"
          title={
            <div className="w-full">
              <p className="capitalize text-md font-semibold">Invalid Email</p>
              <p className="font-normal text-[12px] text-customViolet mt-2">
                Email address does not pass syntax validations.
              </p>
            </div>
          }
        >
          <p className="text-secondPrimary font-medium cursor-pointer">
            Invalid Email
          </p>
        </Tooltip>
        <p className="text-customVioletSecond">0</p>
      </div>
      <div className="flex justify-between">
        <p className="bg-red-400 w-16 px-3 rounded-full text-center text-white font-semibold">
          0.0%
        </p>
        <Tooltip
          className="bg-secondPrimary w-full p-4"
          title={
            <div className="w-full">
              <p className="capitalize text-md font-semibold">Invalid Domain</p>
              <p className="font-normal text-[12px] text-customViolet mt-2">
                Email address domain does not exist, is not valid, or should not
                be emailed.
              </p>
            </div>
          }
        >
          <p className="text-secondPrimary font-medium cursor-pointer">
            Invalid Domain
          </p>
        </Tooltip>
        <p className="text-customVioletSecond">0</p>
      </div>
      <div className="flex justify-between">
        <p className="bg-red-300 w-16 px-1 rounded-full text-center text-white font-semibold">
          100.0%
        </p>
        <Tooltip
          className="bg-secondPrimary w-full p-4"
          title={
            <div className="w-full">
              <p className="capitalize text-md font-semibold">Rejected Email</p>
              <p className="font-normal text-[12px] text-customViolet mt-2">
                Email address was rejected by the mail server because it does
                not exist.
              </p>
            </div>
          }
        >
          <p className="text-secondPrimary font-medium cursor-pointer">
            Rejected Email
          </p>
        </Tooltip>
        <p className="text-customVioletSecond">1</p>
      </div>
      <div className="flex justify-between">
        <p className="bg-red-200 w-16 px-3 rounded-full text-center text-white font-semibold">
          0.0%
        </p>
        <Tooltip
          className="bg-secondPrimary w-full p-4"
          title={
            <div className="w-full">
              <p className="capitalize text-md font-semibold">Invalid SMTP</p>
              <p className="font-normal text-[12px] text-customViolet mt-2">
                Email address was rejected by the mail server because it does
                not exist.Mail server returned an unexpected or invalid
                response.
              </p>
            </div>
          }
        >
          <p className="text-secondPrimary font-medium cursor-pointer">
            Invalid SMTP
          </p>
        </Tooltip>
        <p className="text-customVioletSecond">0</p>
      </div>
    </div>
  );
};
const RiskBottom = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="bg-amber-400 w-16 px-3 rounded-full text-center text-white font-semibold">
          0.0%
        </p>
        <Tooltip
          className="bg-secondPrimary w-full p-4"
          title={
            <div className="w-full">
              <p className="capitalize text-md font-semibold">Low Quality</p>
              <p className="font-normal text-[12px] text-customViolet mt-2">
                Email address has quality issues that may make it a risky or low
                value address.
              </p>
            </div>
          }
        >
          <p className="text-secondPrimary font-medium cursor-pointer">
            Low Quality
          </p>
        </Tooltip>
        <p className="text-customVioletSecond">0</p>
      </div>
      <div className="flex justify-between">
        <p className="bg-amber-200 w-16 px-1 rounded-full text-center text-white font-semibold">
          100.0%
        </p>
        <Tooltip
          className="bg-secondPrimary w-full p-4"
          title={
            <div className="w-full">
              <p className="capitalize text-md font-semibold">
                Low Deliverability
              </p>
              <p className="font-normal text-[12px] text-customViolet mt-2">
                Email address appears to be deliverable, but deliverability
                cannot be guaranteed.
              </p>
            </div>
          }
        >
          <p className="text-secondPrimary font-medium cursor-pointer">
            Low Deliverability
          </p>
        </Tooltip>
        <p className="text-customVioletSecond">21</p>
      </div>
    </div>
  );
};

const UnknownBottom = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="bg-blue-400 w-16 px-3 rounded-full text-center text-white font-semibold">
          0.0%
        </p>
        <Tooltip
          className="bg-secondPrimary w-full p-4"
          title={
            <div className="w-full">
              <p className="capitalize text-lg font-semibold"> No Connect</p>
              <p className="font-normal text-[12px] text-customViolet mt-2">
                Could not connect to mail server.
              </p>
            </div>
          }
        >
          <p className="text-secondPrimary font-medium cursor-pointer">
            No Connect
          </p>
        </Tooltip>
        <p className="text-customVioletSecond">0</p>
      </div>
      <div className="flex justify-between">
        <p className="bg-blue-300 w-16 px-1 rounded-full text-center text-white font-semibold">
          0.0%
        </p>
        <Tooltip
          className="bg-secondPrimary w-full p-4"
          title={
            <div className="w-full">
              <p className="capitalize text-lg font-semibold">Timeout</p>
              <p className="font-normal text-[12px] text-customViolet mt-2">
                Mail server session or DNS query timed out.
              </p>
            </div>
          }
        >
          <p className="text-secondPrimary font-medium cursor-pointer">
            Timeout
          </p>
        </Tooltip>
        <p className="text-customVioletSecond">0</p>
      </div>
      <div className="flex justify-between">
        <p className="bg-blue-200 w-16 px-1 rounded-full text-center text-white font-semibold">
          5.0%
        </p>
        <Tooltip
          className="bg-secondPrimary w-full p-4"
          title={
            <div className="w-full">
              <p className="capitalize text-lg font-semibold">
                Unavailable SMTP
              </p>
              <p className="font-normal text-[12px] text-customViolet mt-2">
                500
              </p>
            </div>
          }
        >
          <p className="text-secondPrimary font-medium cursor-pointer">
            Unavailable SMTP
          </p>
        </Tooltip>
        <p className="text-customVioletSecond">2</p>
      </div>
      <div className="flex justify-between">
        <p className="bg-blue-200 w-16 px-1 rounded-full text-center text-white font-semibold">
          95.0%
        </p>
        <Tooltip
          className="bg-secondPrimary w-full p-4"
          title={
            <div className="w-full">
              <p className="capitalize text-lg font-semibold">
                Unexpected Error
              </p>
              <p className="font-normal text-[12px] text-customViolet mt-2">
                An unexpected error occurred.
              </p>
            </div>
          }
        >
          <p className="text-secondPrimary font-medium cursor-pointer">
            Unexpected Error
          </p>
        </Tooltip>
        <p className="text-customVioletSecond">38</p>
      </div>
    </div>
  );
};
