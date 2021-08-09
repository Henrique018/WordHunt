import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Select = styled.select`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    width: 100%;
    font-size: ${theme.font.sizes.xsmall};
    text-transform: uppercase;
    font-weight: bold;
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkPrimary};
    height: 3rem;
    border: 0;
    border-radius: ${theme.border.radius};
    margin-bottom: ${theme.spacings.xxsmall};
    padding: 0.5rem;

    ${media.greaterThan('medium')`
    width: 42.5%;
    margin-bottom: ${theme.spacings.xsmall};
    `}
  `}
`;
