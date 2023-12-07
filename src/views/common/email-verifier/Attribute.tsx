import { CommonTooltip } from '@/constants/common.tooltip.constant';
import { attributesDats } from '@/constants/fake.attributes';

export const Attribute = () => {
  return (
    <>
      <h4 className="text-secondPrimary font-semibold pt-5 text-[16px] pb-2 mb-2 border-b-[1px] border-solid border-customViolet">
        Attributes
      </h4>
      <div>
        {attributesDats.map((aD, i) => (
          <div key={i} className="flex items-center py-1">
            <div className="w-2/4">
              <p className="text-customVioletThird flex items-center gap-2 justify-start capitalize">
                <p
                  className={`"h-fit  mr-2" ${
                    aD.attr === 'free'
                      ? 'w-fit border-[1px] border-solid border-customVioletSecond flex justify-center itmes-center rounded-full '
                      : ''
                  }`}
                >
                  {aD.icon}
                </p>
                <CommonTooltip title={aD.attr} desc={aD.tooltipDesc}>
                  <p className="">{aD.attr}</p>
                </CommonTooltip>
              </p>
            </div>
            <div className="w-2/4">
              <p className="text-md font-[500] text-secondPrimary capitalize">
                {aD.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
