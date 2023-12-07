import { CommonTooltip } from '@/constants/common.tooltip.constant';

export const MailServer = () => {
  return (
    <>
      <h4 className="text-secondPrimary font-semibold pt-5 text-[16px] pb-2 mb-2 border-b-[1px] border-solid border-customViolet">
        Mail Server
      </h4>
      <div className="mt-2">
        <div className="flex items-center">
          <div className="w-2/4">
            <CommonTooltip
              title={'SMTP Provider'}
              desc={'The service provider that is hosting this email.'}
            >
              <p className="text-customVioletThird">SMTP Provider</p>
            </CommonTooltip>
          </div>
          <div className="w-2/4">
            <p className="text-md font-[500] text-secondPrimary capitalize">
              Microsoft
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-2/4">
            <CommonTooltip
              title={'MX Record'}
              desc={
                'The mail exchanger record specifies the mail server responsible for accepting email messages on behalf of a domain name.'
              }
            >
              <p className="text-customVioletThird">MX Record</p>
            </CommonTooltip>
          </div>
          <div className="w-2/4">
            <p className="text-sm font-[500] text-secondPrimary capitalize">
              intersport-global.mail.protection.outlook.com
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-2/4">
            <CommonTooltip
              title={'Implicit MX Record'}
              desc={
                'Domains are technically not required to have an MX Record and can receive email via their A/AAAA record. However, this is nonstandard and may cause deliverability issues.'
              }
            >
              <p className="text-customVioletThird">Implicit MX Record</p>
            </CommonTooltip>
          </div>
          <div className="w-2/4">
            <p className="text-md font-[500] text-secondPrimary capitalize">
              --
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
