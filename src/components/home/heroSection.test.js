// HeroSection.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSecton from './heroSecton';
import '@testing-library/jest-dom';

jest.mock('./../../assets/pa.jpg', () => 'pa.jpg');
jest.mock('./../../assets/zf.jpg', () => 'zf.jpg');
jest.mock('./../../assets/zi.jpg', () => 'zi.jpg');
jest.mock('./../../assets/zz.jpg', () => 'zz.jpg');

test('renders all info cards', () => {
  render(<HeroSecton />);

  const infoTexts = [
    /Radiate confidence/i,
    /Pamper yourself/i,
    /Glow from within/i,
    /Relax, unwind/i
  ];

  infoTexts.forEach((text) => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
