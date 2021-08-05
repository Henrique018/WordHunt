import { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

export const renderWithTheme = (component: ReactElement): RenderResult =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
