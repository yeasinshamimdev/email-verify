export const ProgressBar = () => {
  return (
    <div className=" flex justify-center p-6">
      <div className="w-full flex justify-center mt-12 relative">
        <div className="h-full flex gap-[2px] w-[100%] py-[1px] px-6">
          <div className="w-[5%] h-full py-1 bg-blue-400 rounded-l-full"></div>
          <div className="w-[10%] h-full py-1 bg-red-400"></div>
          <div className="w-[55%] h-full py-1 bg-amber-400"></div>
          <div className="w-[30%] h-full py-1 bg-emerald-400 relative">
            <div className="w-3 h-3 rounded-full -right-[2px] -top-[2.5px] p-1 outline outline-2 outline-white absolute bg-emerald-400"></div>
            <div className="w-10 h-10 -right-4 -top-[54px] rounded-t-full rounded-l-full rotate-45  p-1 absolute bg-emerald-100">
              <p className="-rotate-45 ml-[6px] mt-2 mr-2 text-center font-medium text-emerald-500 ">
                100
              </p>
            </div>
          </div>
        </div>
        <div className="h-full flex gap-[2px] w-[100%] py-[1px] px-6 absolute top-2">
          <p className="text-primary opacity-75 pt-[2px] w-[5%]">?</p>
          <p className="text-primary opacity-75 pt-[2px] w-[10%]">0</p>
          <p className="text-primary opacity-75 pt-[2px] w-[55%]">1</p>
          <p className="text-primary opacity-75 pt-[2px] w-[30%]">80</p>
          <p className="text-primary opacity-75 pt-[2px] ">100</p>
        </div>
      </div>
    </div>
  );
};
