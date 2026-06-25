import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import './i18n';

test('renders Juliano portfolio landing page', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  expect(await screen.findByRole('heading', { name: 'Juliano Dawid Barboza' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Biomedical device prototype projects' })).toBeInTheDocument();
});
