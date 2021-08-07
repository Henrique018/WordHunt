import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test-helper';
import Main from '.';

describe('<Main>', () => {
  it('should have a heading', () => {
    renderWithTheme(<Main />);

    expect(
      screen.getByRole('heading', { name: /Word hunt/i })
    ).toBeInTheDocument();
  });
});
