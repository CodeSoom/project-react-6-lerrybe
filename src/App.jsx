import {
  Routes,
  Route,
} from 'react-router-dom';

// styles
import { Reset } from 'styled-reset';
import Container from './styles/Container';
import './styles/css/reset.css';

// Components
import BoxOfficePage from './pages/BoxOfficePage';
import MainPage from './pages/MainPage';
import MyOstPage from './pages/MyOstPage';
import SearchFilmPage from './pages/SearchFilmPage';
import ShowDetailFilmPage from './pages/ShowDetailFilmPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <Reset />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/boxoffice" element={<BoxOfficePage />} />
          <Route path="/search" element={<SearchFilmPage />} />
          <Route path="/myost" element={<MyOstPage />} />
          <Route path="/show" element={<ShowDetailFilmPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}
