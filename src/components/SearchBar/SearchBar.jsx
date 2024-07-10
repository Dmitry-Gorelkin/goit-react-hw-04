import { FormButtomIcon, FormInput, FormInputContrainer } from '../UI/Form/Form.styled';
import { SearchBarContainer } from './SearchBar.styled';
import { CiSearch } from 'react-icons/ci';
import toast from 'react-hot-toast';

export const SearchBar = ({ onQuery, value }) => {
  const handlSubmit = e => {
    e.preventDefault();

    const query = e.target.query.value;

    if (query.trim() === '') {
      toast.error('Cannot send empty message.');
      return;
    }

    if (value === query) {
      toast.error('You are trying to find this word again, perhaps you could try another one?');
      return;
    }

    onQuery(query);
  };

  return (
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
  );
};
