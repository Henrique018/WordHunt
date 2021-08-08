import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    width: 55%;
    font-size: ${theme.font.sizes.xsmall};
    text-transform: uppercase;
    font-weight: bold;
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkPrimary};
    height: 3rem;
    border: 0;
    border-radius: ${theme.border.radius};
    padding: 0.5rem;
    margin-bottom: ${theme.spacings.small};
  `}
`;
