import CarsList from 'components/CarsList/CarsList';
import SearchForm from 'components/SearchForm/SearchForm';
import { CatalogSection } from './CatalogPage.styled';

const CatalogPage = () => {
  return (
    <CatalogSection>
      <SearchForm />
      <CarsList />
    </CatalogSection>
  );
};

export default CatalogPage;
