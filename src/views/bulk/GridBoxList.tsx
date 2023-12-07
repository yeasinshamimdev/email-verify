import { Chart } from '@/components/shared';
import { Tooltip } from '@/components/ui';
import { COLORS } from '@/constants/chart.constant';
import { bulkSlice } from '@/store/slices/bulk';
// import { listData } from '@/constants/fakeData.constant';
import { useState } from 'react';
import { FaCopy, FaPen } from 'react-icons/fa';
import { HiArrowRight, HiFolder } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function GridListBox() {
  const job_id = bulkSlice.getInitialState().job_id;
  const listItems = [job_id];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[30px] mb-10">
      {listItems.map((data, i) => (
        <ItemsBox key={i} data={data} />
      ))}
    </div>
  );
}

export default GridListBox;

export interface IBoxData {
  title: string;
  folder: string;
  job_id: string;
}

const ItemsBox = ({ data }: { data: Partial<IBoxData> }) => {
  const [isHoverd, setIsHovered] = useState<boolean>(false);
  const [isTitleHoverd, setIsTitleHovered] = useState<boolean>(false);
  const [isOpenBox, setIsOpenBox] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div
      className="shadow-lg bg-white px-4 py-12 rounded-lg text-center relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" relative w-full">
        <Tooltip
          isOpen={isOpenBox}
          title={data.title}
          placement="top"
          className="text-center text-[12px] px-1"
        >
          <span
            className="text-lg text-gray-700 mt-2 cursor-pointer w-full"
            onMouseEnter={() => setIsTitleHovered(true)}
            onMouseLeave={() => setIsTitleHovered(false)}
            onClick={() => setIsOpenBox(true)}
            onBlur={() => setIsOpenBox(false)}
            onKeyDown={() => setIsOpenBox(false)}
          >
            {/* {!isOpenBox ? (
              data?.title.length > 37 ? (
                `${data.title.slice(0, 37)}...`
              ) : (
                data.title
              )
            ) : (
              <div className="relative w-full">
                <Input
                  placeholder="Enter your rate"
                  className="w-[300px] text-sm bg-secondary"
                  defaultValue={data.title}
                />
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setIsOpenBox(false)}
                >
                  <div className="bg-white shadow-md w-7 h-7 border-[1px] border-solid border-gray-200 rounded-md flex items-center justify-center">
                    <AiOutlineEnter className="text-lg  h-full" />
                  </div>
                </div>
              </div>
            )} */}
          </span>
        </Tooltip>
        {isTitleHoverd && !isOpenBox && (
          <div
            className="absolute top-2 right-0 text-primary rounded-md cursor-pointer"
            onMouseEnter={() => setIsTitleHovered(true)}
            onMouseLeave={() => setIsTitleHovered(false)}
          >
            <FaPen className="text-lg" />
          </div>
        )}
      </div>
      <div className="flex items-center justify-center gap-2 capitalize mt-1 ">
        {data.folder === 'my computer' ? (
          <HiFolder className="text-lg text-primary" />
        ) : (
          <FaCopy className="text-lg text-amber-500" />
        )}
        <p className="text-primary">{data.folder}</p>
      </div>
      <div className="my-6 relative">
        <Chart
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
          height={300}
          type="donut"
        />
        <div className="text-center absolute top-[40%] bottom-[50%] right-[35%]">
          <p className="text-3xl font-extrabold text-secondPrimary">60.6%</p>
          <p className="text-primary">Deliverable</p>
        </div>
      </div>
      <button
        className="flex items-center justify-center mx-auto gap-3 bg-customViolet hover:bg-primary hover:text-white px-4 w-[80%] py-3 text-base font-semibold rounded-md text-customBlack transition ease-in-out duration-300"
        onClick={() => navigate(`/bulk/${data.job_id}`)}
      >
        View Results <HiArrowRight className="text-lg font-semibold" />
      </button>
      {isHoverd && !isTitleHoverd && (
        <div className="absolute top-3 right-3 hover:bg-secondary p-1 text-customVioletSecond hover:text-primary rounded-md cursor-pointer">
          <IoClose className="text-2xl " />
        </div>
      )}
    </div>
  );
};
