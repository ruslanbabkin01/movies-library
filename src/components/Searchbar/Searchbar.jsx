import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {
  Container,
  SearchForm,
  BtnSubmit,
  InputForm,
  ButtonIcon,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = event =>
    setQuery(event.currentTarget.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    const normalizedQuery = query.trim();
    if (normalizedQuery === '') {
      return toast.info('Insert correct request', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
    }

    onSubmit(normalizedQuery);
    setQuery('');
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <BtnSubmit type="submit">
          <ButtonIcon />
        </BtnSubmit>

        <InputForm
          type="text"
          name="query"
          autoComplete="off"
          value={query}
          autoFocus
          placeholder="Search movies"
          onChange={handleQueryChange}
        />
      </SearchForm>
    </Container>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
