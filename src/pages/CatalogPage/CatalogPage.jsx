import CarsList from 'components/CarsList/CarsList';
import SearchForm from 'components/SearchForm/SearchForm';
import { Section } from './CatalogPage.styled';
import { ToastContainer } from 'react-toastify';

const CatalogPage = () => {
  return (
    <Section>
      <SearchForm />
      <CarsList />
      <ToastContainer autoClose={2500} />
    </Section>
  );
};

export default CatalogPage;
