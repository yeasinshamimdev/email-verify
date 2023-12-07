import useResponsive from '../../utils/hooks/useResponsive';
import HorizontalMenuContent from './HorizontalMenuContent';

const HorizontalNav = () => {
  const { larger } = useResponsive();

  return <>{larger.md && <HorizontalMenuContent />}</>;
};

export default HorizontalNav;
