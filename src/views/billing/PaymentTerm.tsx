import Segment from '@/components/ui/Segment';
import { buyCredits, segmentSelections } from '@/constants/fakeData.constant';
import classNames from 'classnames';
import { HiCheckCircle } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

const PaymentTerm = ({
  userInputValue,
  setUserInputValue,
}: {
  userInputValue: string;
  setUserInputValue: any;
}) => {
  const location = useLocation();
  const inputValue = parseInt(userInputValue) < 5000 ? '5000' : userInputValue;

  const creditPage = location.pathname === '/checkout/credits';
  const mapData = creditPage ? buyCredits : segmentSelections;

  return (
    <Segment
      value={[inputValue]}
      className={`${
        creditPage
          ? 'grid grid-cols-4 gap-4 w-full'
          : 'gap-2 grid md:grid-cols-3 grid-cols-1 w-full'
      }`}
    >
      {mapData.map((item) => (
        <Segment.Item
          key={item.value}
          value={item.value}
          disabled={item.disabled}
        >
          {({ active, value, onSegmentItemClick, disabled }) => {
            return (
              <div
                className={classNames(
                  'relative',
                  'ring-1',
                  'justify-center',
                  'border',
                  'rounded-md ',
                  'border-gray-300',
                  'py-5 px-4',
                  'cursor-pointer',
                  'select-none',
                  'w-100',
                  'flex',
                  'items-center',
                  `${creditPage ? 'h-32' : ''}`,
                  active
                    ? 'ring-customVioletThird border-customVioletThird bg-secondary'
                    : 'ring-transparent opacity-60',
                  disabled
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:ring-customVioletThird hover:border-customVioletThird'
                )}
                onClick={() => {
                  onSegmentItemClick();
                  setUserInputValue(value);
                }}
              >
                <div className="text-center">
                  <h5 className="text-xl font-bold">{item.title}</h5>
                  <p className="mt-1">{item.subTitle}</p>
                  {item?.desc && (
                    <p className="text-center mt-2 text-green-500">
                      {item.desc}
                    </p>
                  )}
                </div>
                {active && (
                  <HiCheckCircle
                    size={24}
                    className="text-green-500 text-xl absolute top-2 right-2"
                  />
                )}
              </div>
            );
          }}
        </Segment.Item>
      ))}
    </Segment>
  );
};

export default PaymentTerm;
