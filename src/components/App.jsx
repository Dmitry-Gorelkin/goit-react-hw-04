import { useEffect, useMemo, useState } from 'react';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { Button } from './UI/Button/Buttonstyled';
import { ConteinerSection } from './UI/ConteinerSection/ConteinerSection.styled';
import { Loader } from './UI/Loader/Loader';
import toast from 'react-hot-toast';
import { fetchImage } from '../api';
import { BackToTop } from './UI/BackToTop/BackToTop';
import { NoImage } from './NoImage/NoImage';

const PER_PAGE = 12;

const STATUS_PAGE = {
  ideal: 'ideal',
  load: 'load',
  error: 'error',
  noimage: 'noImage',
  loadMore: 'loadMore',
};

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [imageList, setImageList] = useState([]);
  const [status, setStatus] = useState(STATUS_PAGE.ideal);

  const totalImage = imageList.length; // особенность даного API отображает только максимум 500 изображений в бесплатной версии для учёбы

  const nextPage = () => {
    totalImage <= 500 ? setPage(page + 1) : setStatus(STATUS_PAGE.ideal); // особеностью этого API максимальное число бесплатных катинок 500 в бесплатной версии для учёбы
  };

  const handlQuery = q => {
    setQuery(q);
    setPage(1);
    setImageList([]);
  };

  useEffect(() => {
    if (query === '') return;

    const searchQyery = async (q, p) => {
      setStatus(STATUS_PAGE.load);

      try {
        const data = await fetchImage(q, p, PER_PAGE);

        if (data.total === 0) {
          setStatus(STATUS_PAGE.noimage);
          return;
        }

        const totalPage = Math.ceil(data.total / PER_PAGE);

        setImageList(prev => [...prev, ...data.hits]);

        page < totalPage ? setStatus(STATUS_PAGE.loadMore) : setStatus(STATUS_PAGE.ideal);
      } catch (error) {
        setStatus(STATUS_PAGE.error);
        toast.error(error);
      }
    };

    searchQyery(query, page);
  }, [query, page]);

  return (
    <>
      <SearchBar onQuery={handlQuery} value={query} />
      <ConteinerSection>
        {imageList.length > 0 && <ImageGallery arrImage={imageList} />}
        {status === STATUS_PAGE.noimage && <NoImage />}
        {status === STATUS_PAGE.error && <ErrorMessage />}
        {status === STATUS_PAGE.loadMore && (
          <Button type="button" onClick={nextPage}>
            Load more
          </Button>
        )}
        {status === STATUS_PAGE.load && <Loader />}
      </ConteinerSection>
      <BackToTop />
    </>
  );
};
