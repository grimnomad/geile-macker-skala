import { render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('Input', () => {
  test('should render an Input', () => {
    render(<Input title="test" />);

    expect(screen.getByTitle('test')).toBeDefined();
  });
});
