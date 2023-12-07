import { Tooltip } from '@/components/ui/Tooltip';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

export const DeliverableTooltip = ({ children }: { children: any }) => {
  return (
    <Tooltip
      className="bg-secondPrimary w-full p-4"
      title={
        <div className="w-full">
          <p className="capitalize text-md font-semibold">Deliverable</p>
          <p className="font-normal text-[12px] text-customViolet mt-2">
            Email address is associated with a valid account
          </p>
        </div>
      }
    >
      {children}
    </Tooltip>
  );
};
export const UndeliverableTooltip = ({ children }: { children: any }) => {
  return (
    <>
      <Tooltip
        className="bg-secondPrimary w-full p-4"
        title={
          <div className="w-full">
            <p className="capitalize text-md font-semibold">Uneliverable</p>
            <p className="font-normal text-[12px] text-customViolet mt-2">
              Email address is not associated with a valid account or should not
              be emailed
            </p>
          </div>
        }
      >
        {children}
      </Tooltip>
    </>
  );
};
export const RiskyTooltip = ({ children }: { children: any }) => {
  return (
    <>
      <Tooltip
        className="bg-secondPrimary w-full p-4"
        title={
          <div className="w-full">
            <p className="capitalize text-md font-semibold">Risky</p>
            <p className="font-normal text-[12px] text-customViolet mt-2">
              Email address may appear deliverable, but should be used with
              caution due to low quality or deliverability. May include
              Accept-All, Disposable, and Role addresses.
            </p>
          </div>
        }
      >
        {children}
      </Tooltip>
    </>
  );
};

export const UnknownTooltip = ({ children }: { children: any }) => {
  return (
    <>
      <Tooltip
        className="bg-secondPrimary w-full p-4"
        title={
          <div className="w-full">
            <p className="capitalize text-md font-semibold">Unknown</p>
            <p className="font-normal text-[12px] text-customViolet mt-2">
              Email address may appear deliverable, but should be used with
              caution due to low quality or deliverability. May include
              Accept-All, Disposable, and Role addresses.
            </p>
          </div>
        }
      >
        {children}
      </Tooltip>
    </>
  );
};
export const DuplicateTooltip = ({ children }: { children: any }) => {
  return (
    <>
      <Tooltip
        className="bg-secondPrimary w-full p-4"
        title={
          <div className="w-full">
            <p className="capitalize text-md font-semibold">Duplicate</p>
            <p className="font-normal text-[12px] text-customViolet mt-2">
              Email address is on this list multiple times
            </p>
          </div>
        }
      >
        {children}
      </Tooltip>
    </>
  );
};

export const CommonTooltip = ({
  children,
  title,
  desc,
}: {
  children: any;
  title: string;
  desc: string;
}) => {
  return (
    <>
      <Tooltip
        className="bg-secondPrimary w-full p-4 z-[1100]"
        title={
          <div className="w-full">
            <p className="capitalize text-md font-semibold">{title}</p>
            <p className="font-normal text-[12px] text-customViolet mt-2">
              {desc}
            </p>
          </div>
        }
      >
        {children}
      </Tooltip>
    </>
  );
};

export const TaxIDTooltip = () => {
  return (
    <Tooltip title="If you require a TAX ID on your invoices, please set one below.">
      <HiOutlineQuestionMarkCircle className="text-lg text-customVioletThird cursor-pointer ml-1 mt-1" />
    </Tooltip>
  );
};

export const CurrencyTooltip = () => {
  return (
    <Tooltip
      title={`If you need to change your currency, please contact support`}
    >
      <HiOutlineQuestionMarkCircle className="text-lg text-customVioletThird cursor-pointer ml-1 mt-1" />
    </Tooltip>
  );
};
