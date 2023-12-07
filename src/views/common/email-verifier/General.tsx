import { Tooltip } from '@/components/ui';
import { DeliverableTooltip } from '@/constants/common.tooltip.constant';
import { FaCircleCheck } from 'react-icons/fa6';

export const General = () => {
  return (
    <>
      <h4 className="text-secondPrimary text-[16px] pb-2 mb-2 border-b-[1px] border-solid border-customViolet">
        General
      </h4>
      <div>
        <div className="flex items-center py-2">
          <div className="w-2/4">
            <p className="text-customVioletThird">Full Name</p>
          </div>
          <div className="w-2/4">
            <p className="text-md font-[500] text-primary capitalize">
              Toure Claiborne
            </p>
          </div>
        </div>
        <div className="flex items-center py-1">
          <div className="w-2/4">
            <p className="text-customVioletThird">Gender</p>
          </div>
          <div className="w-2/4">
            <p className="text-md font-[500] text-primary capitalize">--</p>
          </div>
        </div>
        <div className="flex items-center py-1">
          <div className="w-2/4">
            <p className="text-customVioletThird">State</p>
          </div>
          <div className="w-2/4">
            <p className="w-full">
              <DeliverableTooltip>
                <div className="flex items-center justify-start gap-2 w-full">
                  <FaCircleCheck
                    size={20}
                    className="text-emerald-400 size={20}"
                  />
                  <p className="text-md font-[500] text-primary capitalize cursor-pointer">
                    Deliverable
                  </p>
                </div>
              </DeliverableTooltip>
            </p>
          </div>
        </div>
        <div className="flex items-center py-1">
          <div className="w-2/4">
            <p className="text-customVioletThird">Reason</p>
          </div>
          <div className="w-2/4">
            <p className="w-full">
              <Tooltip
                className="bg-secondPrimary p-4"
                title={
                  <div className="w-full">
                    <p className="capitalize text-md font-semibold">
                      Accepted Email
                    </p>
                    <p className="font-normal text-[12px] text-customViolet mt-2">
                      Email address exists and is deliverable.
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
                    width: 'fit-content',
                  }}
                  className="rounded-md font-medium cursor-pointer"
                >
                  ACCEPTED EMAIL
                </p>
              </Tooltip>
            </p>
          </div>
        </div>
        <div className="flex items-center py-1">
          <div className="w-2/4">
            <p className="text-customVioletThird">Domain</p>
          </div>
          <div className="w-2/4">
            <p className="underline text-md font-[500] text-primary capitalize cursor-pointer">
              intersport.global
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
