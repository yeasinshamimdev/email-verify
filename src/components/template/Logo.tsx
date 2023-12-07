import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { CommonProps } from '../../@types/common';
import { APP_NAME } from '../../constants/app.constant';

interface LogoProps extends CommonProps {
  type?: 'full' | 'streamline';
  mode?: 'light' | 'dark';
  imgClass?: string;
  logoWidth?: number | string;
}

const LOGO_SRC_PATH = '/img/logo/';

const Logo = (props: LogoProps) => {
  const navigate = useNavigate();
  const {
    type = 'full',
    mode = 'light',
    className,
    imgClass,
    style,
    logoWidth = '180px',
  } = props;

  return (
    <div
      className={classNames('logo', className)}
      style={{
        ...style,
        ...{ width: logoWidth },
        cursor: 'pointer',
      }}
      onClick={() => navigate('/')}
    >
      <img
        className={imgClass}
        src={`${LOGO_SRC_PATH}logo-${mode}-${type}.png`}
        alt={`${APP_NAME} logo`}
      />
    </div>
  );
};

export default Logo;
