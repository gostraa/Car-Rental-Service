import CarsList from 'components/CarsList/CarsList';
import SearchForm from 'components/SearchForm/SearchForm';

const CatalogPage = () => {
  return (
    <>
      <section>
        <SearchForm />
      </section>

      <section>
        <CarsList />
      </section>
    </>
  );
};

export default CatalogPage;
