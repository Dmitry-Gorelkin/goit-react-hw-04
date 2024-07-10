import { SearchBar } from './SearchBar/SearchBar';
import { Container } from './UI/Conteiner/Conteiner.styled';
import { Loader } from './UI/Loader/Loader';
import { Section } from './UI/Section/Section.styled';

export const App = () => {
  return (
    <>
      <SearchBar />
      <Container>
        <Section>
          <div>область отображения картинок</div>
          <div>кнопка загрузок</div>
          <Loader />
        </Section>
      </Container>
    </>
  );
};
