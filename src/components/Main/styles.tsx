import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.darkBackground};

    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    margin: ${theme.spacings.small} 0;
    font-weight: ${theme.font.regular};
  `}
`;

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};

    a {
      color: ${theme.colors.gray};
      text-decoration: none;

      &:hover {
        color: ${theme.colors.highlight};
        text-decoration: underline;
      }
    }
  `}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${media.greaterThan('medium')`
    flex-direction: row;
    justify-content: space-around;
  `}
`;

export const Content = styled.div`
  width: 100%;

  ${media.greaterThan('medium')`
    max-width: 56%;
  `}
`;
