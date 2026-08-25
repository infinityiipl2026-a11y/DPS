import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Products from './Products';

describe('Products search', () => {
  it('filters products for the submitted search query', () => {
    render(
      <MemoryRouter initialEntries={['/products?q=epson']}>
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Epson Rotary Inkjet Digital Printing Machine/i)).toBeInTheDocument();
    expect(screen.queryByText(/DPM880 Wide-Format Digital Printing Machine/i)).not.toBeInTheDocument();
  });
});
