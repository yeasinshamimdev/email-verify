import { Select, Switcher, Tabs } from '@/components/ui';
import { PrimaryButton } from '@/constants/buttons.constant';
import { PlaneBadge } from '@/constants/common.badges';
import { newExportsData } from '@/constants/export.constant';
import { useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { FaCircleCheck } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function NewExports() {
  const navigate = useNavigate();
  return (
    <div className="rounded-md bg-white mt-4 mb-24 shadow-md">
      <div className="px-5 py-4">
        <p className="text-xl font-semibold text-secondPrimary">Exports</p>
      </div>
      <div className="h-[1px] w-full bg-gray-200"></div>
      <NewExportTab />
      <div className="h-[1px] w-full bg-gray-200"></div>
      <div className="flex justify-between items-center px-6 py-4">
        <PrimaryButton data={'14px'} onClick={() => navigate(-1)}>
          Back
        </PrimaryButton>
        <PrimaryButton data={'14px'}>Download as CSV</PrimaryButton>
      </div>
    </div>
  );
}

export default NewExports;

const { TabNav, TabList, TabContent } = Tabs;

const NewExportTab = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  return (
    <div className="">
      <div className="flex items-center gap-4 px-6 pt-6">
        <p className=" w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-full text-white text-lg bg-primary">
          1
        </p>
        <p className="text-secondPrimary text-lg font-semibold">
          Select the emails you would like to download
        </p>
      </div>
      <div className="">
        <Tabs
          defaultValue="tab1"
          variant="pill"
          onChange={(e) => setActiveTab(e)}
        >
          <TabList className="gap-3 p-6">
            {newExportsData.map((data, i) => (
              <TabNabBox data={data} key={i} i={i} activeTab={activeTab} />
            ))}
          </TabList>
          <div className="h-[1px] w-full bg-gray-200"></div>
          <div className="">
            <TabContent value="tab1" className="mx-20">
              <FirstTab />
            </TabContent>

            <TabContent value="tab2" className="mx-20">
              <SecondTab />
            </TabContent>

            <TabContent value="tab3" className="mx-20">
              <ThirdTab />
            </TabContent>
            <TabContent value="tab4">
              <FourthTab />
            </TabContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

const TabNabBox = ({
  data,
  activeTab,
  i,
}: {
  data: any;
  activeTab: string;
  i: number;
}) => {
  const [onHover, setOnHover] = useState<boolean>(false);
  return (
    <TabNav
      style={{
        padding: '20px',
        border:
          activeTab === `tab${i + 1}` || onHover
            ? '2px solid #463fa6'
            : '1px solid #a8a4e0',
        width: '25%',
        display: 'block',
        backgroundColor: activeTab === `tab${i + 1}` ? '#f6f5ff' : 'white',
      }}
      value={`tab${i + 1}`}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="flex items-center gap-3 hover:text-primary">
        <div
          className={`text-2xl ${
            activeTab === `tab${i + 1}` || onHover
              ? 'text-primary'
              : 'text-customVioletSecond'
          }`}
        >
          {data.icon}
        </div>
        <h6
          className={`${
            activeTab === `tab${i + 1}` || onHover
              ? 'text-primary'
              : 'text-gray-400'
          }`}
        >
          {data.title}
        </h6>
      </div>
      <p
        className={`${
          activeTab === `tab${i + 1}` || onHover
            ? 'text-primary'
            : 'text-gray-400'
        } text-sm font-normal mt-1`}
      >
        {data.subTitle}
      </p>
    </TabNav>
  );
};

const FirstTab = () => {
  return (
    <div className="p-6">
      <p className="flex items-center justify-center gap-0 text-base text-customVioletThird">
        <PlaneBadge
          title={'DELIVERABLE'}
          firstColor={'emerald-500'}
          secondColor={'emerald-100'}
        />
        <span className="ml-1"></span>
        emails have been selected, including those that are
        <span className="ml-1"></span>
        <PlaneBadge
          title={'free'}
          firstColor={'primary'}
          secondColor={'customViolet'}
        />
        .
      </p>
      <p className="text-base text-center text-customVioletThird">
        This export will contain <span className="font-bold mr-1">2,415</span>
        emails.
      </p>
    </div>
  );
};
const SecondTab = () => {
  return (
    <div className="p-6">
      <p className="flex items-center justify-center gap-0 text-base text-customVioletThird">
        <PlaneBadge
          title={'DELIVERABLE'}
          firstColor={'emerald-500'}
          secondColor={'emerald-100'}
        />
        , <span className="ml-1"></span>
        <PlaneBadge
          title={'Risky'}
          firstColor={'amber-500'}
          secondColor={'amber-100'}
        />
        ,<span className="ml-1"></span>
        and
        <span className="ml-1"></span>
        <PlaneBadge
          title={'UNKNOWN'}
          firstColor={'blue-500'}
          secondColor={'blue-100'}
        />
        ,<span className="ml-1"></span>
        emails have been selected, including those that are
        <span className="ml-1"></span>
        <PlaneBadge
          title={'free'}
          firstColor={'primary'}
          secondColor={'customViolet'}
        />
        ,<span className="ml-1"></span>
        <PlaneBadge
          title={'role'}
          firstColor={'primary'}
          secondColor={'customViolet'}
        />
        ,<span className="ml-1"></span>
        <PlaneBadge
          title={'accept all'}
          firstColor={'primary'}
          secondColor={'customViolet'}
        />
        .
      </p>
      <p className="text-base text-center text-customVioletThird">
        This export will contain <span className="font-bold mr-1">5,147</span>
        emails.
      </p>
    </div>
  );
};
const ThirdTab = () => {
  return (
    <div className="p-6">
      <p className="flex items-center justify-center gap-0 text-base text-customVioletThird">
        <PlaneBadge
          title={'UNDELIVERABLE'}
          firstColor={'red-500'}
          secondColor={'red-100'}
        />
        <span className="ml-1"></span>
        emails have been selected, including those that are
        <span className="ml-1"></span>
        <PlaneBadge
          title={'free'}
          firstColor={'primary'}
          secondColor={'customViolet'}
        />
        ,<span className="ml-1"></span>
        <PlaneBadge
          title={'role'}
          firstColor={'primary'}
          secondColor={'customViolet'}
        />
        ,<span className="ml-1"></span>
        <PlaneBadge
          title={'accept all'}
          firstColor={'primary'}
          secondColor={'customViolet'}
        />
        <span className="ml-1"></span>
        and
        <span className="ml-1"></span>
        <PlaneBadge
          title={'DISPOSABLE'}
          firstColor={'primary'}
          secondColor={'customViolet'}
        />
      </p>
      <p className="text-base text-center text-customVioletThird">
        This export will contain <span className="font-bold mr-1">415</span>
        emails.
      </p>
    </div>
  );
};

interface StateItem {
  title: string;
  subToggler: string[];
  tooltip: string;
}

const states: StateItem[] = [
  {
    title: 'Deliverable',
    subToggler: ['Accepted Email'],
    tooltip: 'Some data for tooltip',
  },
  {
    title: 'Undeliverable',
    subToggler: [
      'Invalid Email',
      'Invalid Domain',
      'Rejected Email',
      'Invalid SMTP',
    ],
    tooltip: 'Some data for tooltip',
  },
  {
    title: 'Risky',
    subToggler: ['Low Quality', 'Low Deliverability'],
    tooltip: 'Some data for tooltip',
  },
  {
    title: 'Unknown',
    subToggler: [
      'No Contact',
      'Timeout',
      'Unabailable SMTP',
      'Unexpected Error',
    ],
    tooltip: 'Some data for tooltip',
  },
];
const colors = ['emerald-400', 'red-400', 'amber-400', 'blue-400'];
const attributes = ['free', 'role', 'accept-all', 'disposable'];
const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },

  { value: 'blue', label: 'Blue', color: '#0052CC' },

  { value: 'purple', label: 'Purple', color: '#5243AA' },

  { value: 'red', label: 'Red', color: '#FF5630' },

  { value: 'orange', label: 'Orange', color: '#FF8B00' },

  { value: 'yellow', label: 'Yellow', color: '#FFC400' },

  { value: 'green', label: 'Green', color: '#36B37E' },

  { value: 'forest', label: 'Forest', color: '#00875A' },

  { value: 'slate', label: 'Slate', color: '#253858' },

  { value: 'silver', label: 'Silver', color: '#666666' },
];

// const FourthTab = () => {
//   const [checkedValue, setCheckedValue] = useState<string | null>(null);

//   return (
//     <div className="flex gap-4">
//       {states.map((state, i) => (
//         <div
//           key={i}
//           className="border-[1px] border-solid border-gray-200 rounded-md w-full"
//         >
//           <div className="p-4 flex items-center gap-2">
//             <Switcher
//             checked={checkedValue === state.title}
//               color={`${colors[i]}`}
//               onChange={() => setCheckedValue(state.title)}
//             />
//             <p className={`text-sm font-medium text-${colors[i]}`}>
//               {state.title}
//             </p>
//           </div>
//           <div className="h-[1px] w-full bg-gray-200"></div>
//           <div className="p-4">
//             <div className="flex flex-col items-center gap-2">
//               {state.subToggler.map((toggler, index) => (
//                 <SwiterData
//                   key={index}
//                   checkedValue={checkedValue}
//                   title={state.title}
//                   i={i}
//                   toggler={toggler}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const SwiterData = ({
//   i,
//   toggler,
//   checkedValue,
//   title
// }: {
//   i: number;
//   toggler: string;
//   checkedValue: string | null;
//   title:string
// }) => {
//   return (
//     <div className="flex justify-start items-center w-full gap-2">
//       <Switcher checked={checkedValue === title} color={`${colors[i]}`} />
//       <p className={`text-sm font-medium text-primary`}>{toggler}</p>
//     </div>
//   );
// };
const FourthTab = () => {
  const [checkedStates, setCheckedStates] = useState(
    states.reduce((acc, state) => {
      acc[state.title] = false;
      return acc;
    }, {} as { [key: string]: boolean })
  );

  const handleMainTogglerChange = (title: string) => {
    setCheckedStates((prev) => {
      const newState = { ...prev, [title]: !prev[title] };
      return newState;
    });
  };

  return (
    <div>
      <div className="flex gap-4 p-6">
        {states.map((state, i) => (
          <div
            key={i}
            className="border-[1px] border-solid border-gray-200 rounded-md w-full"
          >
            <div className="p-4 flex items-center gap-2">
              <Switcher
                color={`${colors[i]}`}
                onChange={() => handleMainTogglerChange(state.title)}
                checked={checkedStates[state.title]}
              />
              <p className={`text-sm font-medium text-${colors[i]}`}>
                {state.title}
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="p-4">
              <div className="flex flex-col items-center gap-2">
                {state.subToggler.map((toggler, index) => (
                  <SwiterData
                    key={index}
                    checkedValue={checkedStates[state.title]}
                    title={state.title}
                    i={i}
                    toggler={toggler}
                    handleMainTogglerChange={handleMainTogglerChange}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[1px] w-full bg-gray-200"></div>
      <div className="flex items-center gap-4 p-6">
        <p className=" w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-full text-white text-lg bg-primary">
          2
        </p>
        <p className="text-secondPrimary text-lg font-semibold">
          Select the emails you would like to download
        </p>
      </div>
      <div className="h-[1px] w-full bg-gray-200"></div>
      <div className="flex gap-4 p-6">
        {attributes.map((attr, i) => (
          <div
            key={i}
            className="flex justify-start items-center w-full gap-2 border-[1px] border-solid border-gray-200 rounded-md p-4"
          >
            <Switcher color={`${colors[0]}`} />
            <p className={`text-sm capitalize font-medium text-primary`}>
              {attr}
            </p>
            <AiFillQuestionCircle className="text-primary text-lg" />
          </div>
        ))}
      </div>
      <div className="h-[1px] w-full bg-gray-200"></div>
      <div className="flex items-center gap-4 p-6">
        <p className=" w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-full text-white text-lg bg-primary">
          3
        </p>
        <p className="text-secondPrimary text-lg font-semibold">
          Select providers or domains to include
        </p>
      </div>
      <div className='flex gap-4 px-6 pb-6'>
      <div className='w-full'>
        <p className='text-sm font-medium text-secondPrimary mb-2'>Providers</p>
        <Select
         maxMenuHeight={300}
          isMulti
          placeholder="Type a provider" 
          options={colourOptions} 
        />
      </div>
      <div className='w-full'>
        <p className='text-sm font-medium text-secondPrimary mb-2'>Domains</p>
        <Select
        maxMenuHeight={300}
          isMulti
          placeholder="Type a domains" 
          options={colourOptions} 
        />
      </div>
      </div> 
      <div className="h-[1px] w-full bg-gray-200"></div>
      <div>
          <p className='text-center p-8 text-base text-customVioletThird'>You must select at least one state or reason.</p>
      </div> 
    </div>
  );
};

const SwiterData = ({
  i,
  toggler,
  checkedValue,
  title,
  handleMainTogglerChange,
}: {
  i: number;
  toggler: string;
  checkedValue: boolean;
  title: string;
  handleMainTogglerChange: (title: string) => void;
}) => {
  return (
    <div className="flex justify-start items-center w-full gap-2">
      <Switcher
        checked={checkedValue}
        color={`${colors[i]}`}
        onChange={() => handleMainTogglerChange(toggler)}
      />
      <p className={`text-sm font-medium text-primary`}>{toggler}</p>
      <AiFillQuestionCircle className="text-primary text-lg" />
    </div>
  );
};
