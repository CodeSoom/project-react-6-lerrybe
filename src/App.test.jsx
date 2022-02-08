/**
 * @jest-environment jsdom
 */

import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('path 가 / 일 때', () => {
    it('MainPage 를 렌더링한다.', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('MIFILM');
    });
  });

  context('path 가 /boxoffice 일 때', () => {
    it('BoxOfficePage 를 렌더링 한다.', () => {
      const { container } = renderApp({ path: '/boxoffice' });

      expect(container).toHaveTextContent('Box Office');
    });
  });

  context('path 가 /search 일 때', () => {
    it('SearchFilmPage 를 렌더링 한다.', () => {
      const { container } = renderApp({ path: '/search' });

      expect(container).toHaveTextContent('영화 찾기');
    });
  });

  context('path 가 /myost 일 때', () => {
    it('MyOstPage 를 렌더링 한다.', () => {
      const { container } = renderApp({ path: '/myost' });

      expect(container).toHaveTextContent('MY OST');
    });
  });

  context('path 가 /show 일 때', () => {
    it('ShowDetailFilmPage 를 렌더링 한다.', () => {
      const { container } = renderApp({ path: '/show' });

      expect(container).toHaveTextContent('영화 정보');
    });
  });

  context('path 가 /* 일 때', () => {
    it('NotFoundPage 를 렌더링 한다.', () => {
      const { container } = renderApp({ path: '/*' });

      expect(container).toHaveTextContent('돌아가');
    });
  });
});
