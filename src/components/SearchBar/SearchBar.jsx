import { Container } from '../UI/Conteiner/Conteiner.styled';
import { FormButtomIcon, FormInput, FormInputContrainer } from '../UI/Form/Form.styled';
import { Section } from '../UI/Section/Section.styled';
import { SearchBarBox, SearchBarContainer } from './SearchBar.styled';
import { CiSearch } from 'react-icons/ci';
import toast from 'react-hot-toast';

export const SearchBar = () => {
  const handlSubmit = e => {
    e.preventDefault();

    const query = e.target.query.value;
    if (query.trim() === '') {
      toast.error('Cannot send empty message.');
      return;
    }

    console.log(query);
  };

  return (
    <SearchBarBox>
      <Container>
        <Section>
          <SearchBarContainer>
            <form autoComplete="off" onSubmit={handlSubmit}>
              <FormInputContrainer>
                <FormInput type="text" name="query" placeholder="Search images and photos" />
                <FormButtomIcon type="submit">
                  <CiSearch size={'100%'} />
                </FormButtomIcon>
              </FormInputContrainer>
            </form>
          </SearchBarContainer>
        </Section>
      </Container>
    </SearchBarBox>
  );
};
