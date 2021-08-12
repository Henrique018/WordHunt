import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.darkPrimary};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Header = styled.div`
  display: flex;
  width: 75%;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};

    &::before {
      content: '';
      border-left: 0.5rem solid ${theme.colors.highlight};
      border-radius: 0.8rem;
      margin-right: 0.5rem;
    }
  `}
`;

export const PartofSpeech = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-left: 1rem;
  `}
`;

export const Pronunciation = styled.div`
  display: flex;
  align-items: center;
`;

export const SoundButton = styled.button`
  ${({ theme }) => css`
    border: 0;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.highlight};
    padding: 0.3rem;
  `}
`;

export const Phonetics = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    margin-left: ${theme.spacings.xsmall};
  `}
`;

export const Separator = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} auto;
    border-color: rgba(0, 0, 0, 0.2);
  `}
`;

export const Definitions = styled.div`
  width: 78%;
  margin: 0 auto;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    text-align: left;
    line-height: 2.5rem;
    font-size: ${theme.font.sizes.small};
  `}
`;
