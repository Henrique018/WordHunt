import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/test-helper';
import Select from '.';

describe('<Select />', () => {
  it('should be able to select different options', async () => {
    const onSelect = jest.fn();
    renderWithTheme(<Select onSelect={onSelect} />);

    const select = screen.getByRole('combobox');
    const option = screen.getByRole('option', {
      name: /hindi/i
    }) as HTMLOptionElement;

    expect(option.selected).toBe(false);

    userEvent.selectOptions(select, ['hi']);

    expect(option.selected).toBe(true);
  });

  it('should call onSelect when an option is selected', () => {
    const onSelect = jest.fn();
    renderWithTheme(<Select onSelect={onSelect} />);

    const select = screen.getByRole('combobox');

    userEvent.selectOptions(select, ['pt-BR']);

    expect(onSelect).toBeCalled();
  });
});
