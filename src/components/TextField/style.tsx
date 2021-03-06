import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.xsmall};
    text-transform: uppercase;
    font-weight: bold;
    color: ${theme.colors.gray};
    background-color: ${theme.colors.darkPrimary};
    height: 3rem;
    border: 0;
    border-radius: ${theme.border.radius};
    padding: 0.5rem;
    margin-bottom: ${theme.spacings.small};

    &::placeholder {
      color: ${theme.colors.gray};
    }

    ${media.greaterThan('medium')`
      width: 54.5%;
    `}
  `}
`;
