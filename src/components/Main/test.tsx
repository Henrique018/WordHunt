import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test-helper';
import Main from '.';

describe('<Main>', () => {
  it('should have a hello world message', () => {
    renderWithTheme(<Main />);

    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument();
  });
});
