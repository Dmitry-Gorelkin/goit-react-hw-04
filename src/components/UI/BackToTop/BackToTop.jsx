import ScrollToTop from 'react-scroll-to-top';
import { CiHome } from 'react-icons/ci';

export const BackToTop = () => {
  return (
    <ScrollToTop
      smooth
      top="400"
      color="#FFB74D"
      style={{
        width: '45px',
        height: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        boxShadow: '0 0 8px #2B3A67',
        zIndex: 2,
      }}
      component={<CiHome color="#2196F3" size={30} />}
    />
  );
};
