import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/test-helper';
import TextField from '.';

describe('<TextField />', () => {
  it('should call onInputChange when input chenges ', async () => {
    const onInputChange = jest.fn();
    renderWithTheme(<TextField onInputChange={onInputChange} />);

    const input = screen.getByPlaceholderText('search for a word');
    const text = 'A simple test';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(onInputChange).toHaveBeenCalledTimes(text.length);
    });
  });
});
