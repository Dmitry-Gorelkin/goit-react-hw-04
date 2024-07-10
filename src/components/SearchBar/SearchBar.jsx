import { FormButtomIcon, FormInput, FormInputContrainer } from '../UI/Form/Form.styled';
import { SearchBarContainer } from './SearchBar.styled';
import { CiSearch } from 'react-icons/ci';
import toast from 'react-hot-toast';

export const SearchBar = ({ onQuery }) => {
  const handlSubmit = e => {
    e.preventDefault();

    const query = e.target.query.value;

    if (query.trim() === '') {
      toast.error('Cannot send empty message.');
      return;
    }

    console.log(query);

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
