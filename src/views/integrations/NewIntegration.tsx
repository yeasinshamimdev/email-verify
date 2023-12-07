import UserCommonBox from '@/components/layouts/UserLayout/UserCommonBox';
import { Button, Dialog, Input, Tooltip } from '@/components/ui';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import { BrandType, brandImages } from '@/constants/brandImage.constant';
import { Dispatch, SetStateAction, useState } from 'react';
import { IoClose } from 'react-icons/io5';

const NewIntegration = () => {
  const [dialogIsOpen, setIsdDialogOpen] = useState<boolean>(false);

  return (
    <div>
      <UserCommonBox header={{ title: 'Connect an integration' }}>
        <div className="p-6 ">
          <div className=" w-full h-full grid grid-cols-4 gap-3">
            {brandImages.map((elem: BrandType, i) => (
              <Tooltip
                key={i}
                title={elem.title}
                placement="top"
                className="text-center text-[12px] px-1"
              >
                <BrandLogoComponent
                  key={i}
                  elem={elem}
                  setIsdDialogOpen={setIsdDialogOpen}
                />
              </Tooltip>
            ))}
          </div>
          <Dialog
            width={550}
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={false}
            isOpen={dialogIsOpen}
            closable={false}
            bodyOpenClassName="overflow-hidden"
            style={{
              content: {
                marginTop: 120,
                border: 'none',
                padding: '0px',
                paddingBottom: '0px',
              },
              overlay: {
                backdropFilter: 'blur(5px)',
                zIndex: 1000,
                background: 'gray-50',
              },
            }}
            contentClassName="pb-0 pt-0 px-0 overflow-hidden"
            onClose={() => setIsdDialogOpen(false)}
            onRequestClose={() => setIsdDialogOpen(false)}
          >
            <div
              className="flex justify-between items-center px-6 py-4 w-full"
              style={{
                borderBottom: '1px solid rgba(100, 100, 200, 0.15)',
              }}
            >
              <h3 className="text-xl text-secondPrimary font-semibold">
                Brevo API Key
              </h3>
              <div
                className="w-9 h-9 cursor-pointer flex justify-center items-center rounded-full hover:bg-customViolet transition ease-in-out duration-300"
                onClick={() => setIsdDialogOpen(false)}
              >
                <IoClose className="text-xl text-secondPrimary" />
              </div>
            </div>
            <div className="p-6 w-full">
              <p>
                Enter your Brevo API Key. This can be found by going to the SMTP
                & API page. You will want to create or choose an existing v3 API
                Key.
              </p>
              <h6 className="text-sm font-medium mb-2 pt-5">API Key</h6>
              <Input placeholder="enter your API kay" />
            </div>
            <div
              className="flex justify-between items-center px-6 py-4 w-full"
              style={{ borderTop: '1px solid rgba(100, 100, 200, 0.15)' }}
            >
              <Button variant="default" onClick={() => setIsdDialogOpen(false)}>
                CANCEL
              </Button>
              <PrimaryButton
                onClick={() => {
                  console.log('clicked');
                }}
              >
                CONNECT
              </PrimaryButton>
            </div>
          </Dialog>
        </div>
      </UserCommonBox>
    </div>
  );
};

export default NewIntegration;

const BrandLogoComponent = ({
  elem,
  setIsdDialogOpen,
}: {
  elem: BrandType;
  setIsdDialogOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="h-[60px] w-full border-[1px] border-solid border-customViolet rounded-md p-1 flex items-center hover:bg-customViolet cursor-pointer transition ease-in-out duration-300"
      onClick={() => setIsdDialogOpen(true)}
    >
      <img src={elem.logo} alt="brand-logos" className="p-4 w-[50px]" />
      <h6>{elem.title}</h6>
    </div>
  );
};
