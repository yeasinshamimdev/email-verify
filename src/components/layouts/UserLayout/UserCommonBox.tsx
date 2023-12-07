import { IUserCommonBox, userCommonBoxStyle } from '@/constants/common.style';

const UserCommonBox = ({ header, children }: IUserCommonBox) => {
  return (
    <div style={userCommonBoxStyle}>
      <header
        className="flex items-center justify-between py-4 px-6"
        style={{
          borderBottom: '1px solid rgba(100, 100, 200, 0.15)',
        }}
      >
        <h4 className="font-semibold text-xl flex items-center">
          {header?.title} {header?.tooltip && header?.tooltip}{' '}
        </h4>
        <div
          className={`${header?.el || 'hidden'} ${
            header?.el && 'flex items-center'
          }`}
        >
          {header?.el}
        </div>
      </header>
      {children}
    </div>
  );
};

export default UserCommonBox;
