import { Input, Tooltip } from '@/components/ui';
import { COLORS } from '@/constants/chart.constant';
import { listData } from '@/constants/fakeData.constant';
import { useState } from 'react';
import { AiOutlineEnter } from 'react-icons/ai';
import { FaCopy, FaPen } from 'react-icons/fa';
import { HiFolder } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { IBoxData } from './GridBoxList';

function GridTableList() {
  return (
    <div className="mt-[30px] mb-10 bg-white rounded-lg shadow-lg">
      {listData.map((data, i) => (
        <ItemsBox key={i} data={data} />
      ))}
    </div>
  );
}

export default GridTableList;

const ItemsBox = ({ data }: { data: IBoxData }) => {
  const [isHoverd, setIsHovered] = useState<boolean>(false);
  const [isTitleHoverd, setIsTitleHovered] = useState<boolean>(false);
  const [isOpenBox, setIsOpenBox] = useState<boolean>(false);
  const navigate = useNavigate();

  const segmentColors = [
    {
      number: 70,
    },
    {
      number: 25,
    },
    {
      number: 10,
    },
    {
      number: 5,
    },
    {
      number: 3.5,
    },
  ];

  return (
    <div
      className="flex justify-between items-center px-5 py-4 border-b-[1px] border-solid border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 w-[30%]">
        <div>
          {data.folder === 'my computer' ? (
            <HiFolder className="text-3xl text-primary" />
          ) : (
            <FaCopy className="text-2xl text-amber-500" />
          )}
        </div>
        <Tooltip
          isOpen={isOpenBox}
          title={data.title}
          placement="top"
          className="text-center text-[12px] px-1"
        >
          <span
            className="text-lg text-gray-700 cursor-pointer relative"
            onMouseEnter={() => setIsTitleHovered(true)}
            onMouseLeave={() => setIsTitleHovered(false)}
            onClick={() => setIsOpenBox(true)}
            onBlur={() => setIsOpenBox(false)}
            onKeyPress={(e) => e.key === 'Enter' && setIsOpenBox(false)}
          >
            {isTitleHoverd && !isOpenBox && (
              <div
                className="absolute top-1 -right-5 text-primary rounded-md cursor-pointer"
                onMouseEnter={() => setIsTitleHovered(true)}
                onMouseLeave={() => setIsTitleHovered(false)}
              >
                <FaPen className="text-lg" />
              </div>
            )}
            {!isOpenBox ? (
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
            )}
          </span>
        </Tooltip>
      </div>
      <div className="text-start">
        <p className="text-lg font-bold text-secondPrimary">60.6%</p>
        <p className="text-[12px] text-primary mt-0 pt-0">Deliverable</p>
      </div>
      <div className="w-[40%]">
        <div
          style={{
            width: '100%',
            height: '15px',
            backgroundColor: '#eee',
            display: 'flex',
          }}
          className="overflow-x-hidden rounded-full cursor-pointer"
        >
          {segmentColors.map((data, index) => (
            <ProgressBar key={index} data={data} index={index} />
          ))}
        </div>
      </div>
      <div
        className="w-9 h-9 rounded-full hover:bg-customViolet flex justify-center items-center cursor-pointer"
        onClick={() => navigate(`/bulk/${data.id}`)}
      >
        <IoIosArrowForward className="text-2xl text-secondPrimary" />
      </div>

      {isHoverd && !isTitleHoverd && (
        <div
          className="absolute right-16 w-12 p-1 text-customVioletSecond hover:text-primary rounded-md cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <IoClose className="text-2xl" />
        </div>
      )}
    </div>
  );
};

const ProgressBar = ({ data, index }: { data: any; index: number }) => {
  const [isLineHovered, setIsLineHovered] = useState<boolean>(false);

  return (
    <div
      className={'h-full relative'}
      style={{
        width: `${data.number}%`,
        backgroundColor: COLORS[index],
        position: 'relative',
      }}
      onMouseEnter={() => setIsLineHovered(true)}
      onMouseLeave={() => setIsLineHovered(false)}
    ></div>
  );
};
