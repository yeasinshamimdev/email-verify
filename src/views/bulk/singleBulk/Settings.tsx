import { Input } from '@/components/ui';
import { PrimaryButton, SecondaryButton } from '@/constants/buttons.constant';

function Settings() {
  return (
    <div className="rounded-md bg-white shadow-md ">
      <div className="flex justify-between items-center px-5 py-4">
        <p className="text-xl font-bold text-secondPrimary">General</p>
      </div>
      <div className="h-[1px] w-full bg-customViolet"></div>
      <div className="px-5 py-4">
        <p className="text-secondPrimary font-medium">Name</p>
        <Input
          defaultValue={'Justin Lyle - Clutch - Justin Lyle_unknown'}
          className="mt-1 focus:bg-secondary"
        />
      </div>
      <div className="h-[1px] w-full bg-customViolet"></div>
      <div className="px-5 py-4 flex justify-between items-center ">
        <SecondaryButton data={'14px'}>Delete</SecondaryButton>
        <PrimaryButton data={'14px'}> Save</PrimaryButton>
      </div>
    </div>
  );
}

export default Settings;
