import { screen, render } from '@testing-library/react';
import Main from '.';

describe('<Main>', () => {
  it('should have a hello world message', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument();
  });
});
