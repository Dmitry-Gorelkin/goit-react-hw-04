import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="100"
      width="100"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{}}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#F4F4F9"
      color="#2196F3"
    />
  );
};
