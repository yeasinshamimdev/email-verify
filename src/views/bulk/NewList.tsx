import {
  Dialog,
  Input,
  Notification,
  Spinner,
  Tabs,
  Upload,
} from '@/components/ui';
import TabContent from '@/components/ui/Tabs/TabContent';
import TabList from '@/components/ui/Tabs/TabList';
import TabNav from '@/components/ui/Tabs/TabNav';
import Tooltip from '@/components/ui/Tooltip';
import { brandImages } from '@/constants/brandImage.constant';
import {
  useCreateJobCSVMutation,
  useCreateNewJobMutation,
} from '@/services/EmailVerifyApi';
import { useAppDispatch } from '@/store';
import { setBulk } from '@/store/slices/bulk';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import {
  HiFolder,
  HiMenu,
  HiOutlinePlus,
  HiOutlineSearch,
  HiOutlineViewGrid,
  HiPlus,
} from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { RiUploadCloudFill } from 'react-icons/ri';

function NewList({
  setIsListMode,
  isListMode,
}: {
  isListMode: string;
  setIsListMode: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [dialogIsOpen, setIsdDialogOpen] = useState<boolean>(false);
  const [isActiveTab, setIsActiveTab] = useState<string>('tab1');
  const [validFile, isValidFile] = useState<string | null>(null);
  const [emails, setEmails] = useState<string[] | null>(null);
  const dispatch = useAppDispatch();
  const [createJobWithCSV, { data, isLoading, isError }] =
    useCreateJobCSVMutation();
  const [
    createNewJob,
    {
      data: newJobCreate,
      isLoading: isNewJobLoading,
      isError: isNewJobError,
      isSuccess,
    },
  ] = useCreateNewJobMutation();
  useEffect(() => {
    if (isError || isNewJobError) {
      isValidFile('Error while uploading data');
    }
  }, [isError, isNewJobError]);

  const onFileUpload = async (files: File[]) => {
    const allowedFileType = ['text/csv'];
    if (files) {
      for (const file of files) {
        if (!allowedFileType.includes(file.type)) {
          isValidFile('Please upload a .csv file!');
        }
      }
    }
    if (files[0] && files[0].type.includes('csv')) {
      await createJobWithCSV(files[0]);
      isValidFile(null);
    } else {
      isValidFile('Please upload a .csv file!');
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const emails = event.target.value
      .split(',')
      .map((email: string) => email.trim());
    setEmails(emails);
  };
  const handleImport = async () => {
    if (emails && emails?.length > 0) {
      try {
        await createNewJob({ emails: emails });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (data || newJobCreate) {
      setTimeout(() => {
        dispatch(setBulk(newJobCreate?.job_id));
        setIsdDialogOpen(false);
      }, 1500);
    }
  }, [data, newJobCreate, dispatch]);

  return (
    <div className="flex items-center gap-2 h-10 md:h-12 relative">
      <div
        className="flex h-full items-center justify-center font-medium text-base gap-2 bg-primary md:w-[150px] text-white md:px-4 md:py-3 px-4 rounded-md cursor-pointer hover:bg-secondPrimary transition ease-in-out duration-300"
        onClick={() => setIsdDialogOpen(true)}
      >
        <HiPlus className="font-medium md:text-md" />{' '}
        <p className="hidden md:flex">New List</p>
      </div>

      <Dialog
        width={1000}
        height={500}
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
            zIndex: 100,
            background: 'gray-50',
          },
        }}
        contentClassName="pb-0 pt-0 px-0 overflow-hidden"
        onClose={() => setIsdDialogOpen(false)}
        onRequestClose={() => setIsdDialogOpen(false)}
      >
        <div className="flex justify-between items-center px-6 py-[14px] w-full">
          <h3 className="text-xl text-secondPrimary font-semibold">
            Select a source
          </h3>
          <div
            className="w-9 h-9 cursor-pointer flex justify-center items-center rounded-full hover:bg-customViolet transition ease-in-out duration-300"
            onClick={() => setIsdDialogOpen(false)}
          >
            <IoClose className="text-xl text-secondPrimary" />
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-200"></div>
        <div className="flex flex-col md:flex-row pb-0">
          <div className="p-6 w-full h-full ">
            <Tabs
              defaultValue="tab1"
              variant="pill"
              className="w-full"
              onChange={(e: string) => setIsActiveTab(e)}
            >
              <TabList className="flex justify-center items-center">
                <TabNav
                  value="tab1"
                  icon={<HiFolder />}
                  className={`${
                    isActiveTab === 'tab1'
                      ? 'bg-[#d5d3ed]'
                      : 'bg-gray-300 rounded-md'
                  } rounded-full text-primary flex gap-3 py-2`}
                >
                  My Computer
                </TabNav>
                <TabNav
                  value="tab2"
                  icon={<FaCopy />}
                  className={`${
                    isActiveTab === 'tab2'
                      ? 'bg-[#d5d3ed]'
                      : 'bg-gray-300 rounded-md'
                  } flex gap-3 rounded-full py-2 text-primary ml-2`}
                >
                  Copy & Paste
                </TabNav>
              </TabList>

              <div className="p-0">
                <TabContent value="tab1" className="p-0">
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <TabContantLeft onFileUpload={onFileUpload} />
                  )}
                </TabContent>

                <TabContent value="tab2">
                  <div>
                    <Input
                      textArea
                      placeholder="jacobjohnson@me.com, Jacob Johnson, 28m.mcormic@gmail.com, Michael McCormic, 47"
                      className="bg-secondary mt-7 h-[250px]"
                      onChange={handleInputChange}
                    />
                    <button
                      className="px-6 shadow-lg py-3 mt-7 w-auto ml-auto bg-primary text-white flex justify-center items-end rounded-full text-md"
                      onClick={handleImport}
                    >
                      {isNewJobLoading ? <Spinner /> : 'Import'}
                    </button>
                  </div>
                </TabContent>
              </div>
            </Tabs>
          </div>
          <div className="h-[auto] w-[2px] bg-customViolet"></div>
          <div className="p-6 w-full h-full md:grid grid-cols-5 gap-3 hidden">
            {brandImages.map((image, i) => (
              <Tooltip
                key={i}
                title="Tooltip message"
                placement="top"
                className="text-center text-[12px] px-1"
              >
                <BrandLogoComponent key={i} image={image} />
              </Tooltip>
            ))}
          </div>
        </div>
      </Dialog>

      <Input
        // size="md"
        style={{ height: '48px' }}
        placeholder="type something to search"
        prefix={<HiOutlineSearch className="text-lg ml-3" />}
      />
      <div className="md:flex items-center gap-1 h-full hidden">
        <span
          className={`${
            isListMode === 'list' ? 'bg-customViolet' : undefined
          } cursor-pointer h-[46px] w-[48px] text-primary flex justify-center items-center rounded-md hover:bg-customViolet transition ease-in-out duration-300`}
          onClick={() => setIsListMode('list')}
        >
          <HiMenu size={28} />
        </span>
        <span
          className={`${
            isListMode === 'gridList' ? 'bg-customViolet' : undefined
          } cursor-pointer h-[46px] w-[48px] text-primary flex justify-center items-center rounded-md hover:bg-customViolet transition ease-in-out duration-300`}
          onClick={() => setIsListMode('gridList')}
        >
          <HiOutlineViewGrid size={28} />
        </span>
      </div>
      {validFile && isError && isNewJobError && (
        <Notification
          closable
          style={{
            zIndex: 1200,
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
          type="warning"
          title={validFile}
          onClose={() => isValidFile(null)}
        />
      )}
    </div>
  );
}

export default NewList;

const BrandLogoComponent = ({ image }: { image: any }) => {
  return (
    <div className="w-[85px] h-[80px] border-[1px] border-solid border-customViolet rounded-md p-1 flex justify-center align-center hover:bg-customViolet cursor-pointer trasition ease-in-out duration-300">
      <img src={image.logo} alt="brang-logos" className="p-4" />
    </div>
  );
};

const TabContantLeft = ({
  onFileUpload,
}: {
  onFileUpload: (files: File[]) => void;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="mt-7 h-full relative transition duration-300 ease-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Upload
        draggable
        className="p-0 border-2 border-dashed  border-primary"
        onChange={onFileUpload}
      >
        <div className="my-[105px] text-center p-0">
          <div className="text-6xl mb-4 flex justify-center">
            <RiUploadCloudFill className="text-primary" />
          </div>
          <p className="font-normal text-sm">
            <span className="text-customVioletSecond dark:text-white">
              Drag and drop your image here, or
            </span>
            <span className="text-primary mx-1 underline">click</span>
            <span className="text-customVioletSecond dark:text-white">
              to upload files
            </span>
          </p>
        </div>
      </Upload>
      {isHovered && (
        <div className="w-full h-full bg-customViolet absolute top-0 left-0 right-0 bottom-0 rounded-lg cursor-pointer border-2 border-dashed  border-primary">
          <Upload
            className="cursor-pointer flex items-center justify-center w-full h-full"
            showList={false}
            uploadLimit={1}
            onChange={onFileUpload}
          >
            <div className="bg-primary w-14 h-14 flex items-center justify-center rounded-full">
              <HiOutlinePlus className="text-white text-xl font-bold" />
            </div>
          </Upload>
        </div>
      )}
    </div>
  );
};
