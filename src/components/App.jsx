import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
