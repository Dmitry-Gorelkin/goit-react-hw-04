import { useEffect, useState } from 'react';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { Button } from './UI/Button/Buttonstyled';
import { Container } from './UI/Conteiner/Conteiner.styled';
import { Loader } from './UI/Loader/Loader';
import { Section } from './UI/Section/Section.styled';
import toast from 'react-hot-toast';
import { fetchImage } from '../api';

const PER_PAGE = 12;

const STATUS_PAGE = {
  ideal: 'ideal',
  load: 'load',
  error: 'error',
  loadMore: 'loadMore',
};

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [imageList, setImageList] = useState([]);
  const [status, setStatus] = useState();

  useEffect(() => {
    const searchQyery = async (q, p) => {
      setStatus(STATUS_PAGE.load);

      try {
        const data = await fetchImage(q, p, PER_PAGE);
        console.log(data);
        setImageList(prev => [...prev, ...data.hits]);

        setStatus(STATUS_PAGE.loadMore);
      } catch (error) {
        setStatus(STATUS_PAGE.error);
        toast.error(error);
      }
    };

    if (query === '') return;

    searchQyery(query, page);
  }, [query, page]);

  return (
    <>
      <SearchBar onQuery={setQuery} />
      <Container>
        <Section>
          {imageList.length > 0 && <ImageGallery />}
          {status === STATUS_PAGE.error && <ErrorMessage />}
          {status === STATUS_PAGE.loadMore && <Button type="button">Load more</Button>}
          {status === STATUS_PAGE.load && <Loader />}
        </Section>
      </Container>
    </>
  );
};
