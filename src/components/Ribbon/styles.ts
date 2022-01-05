import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from './Ribbon'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  large: (theme: DefaultTheme) => css`
    padding: 0 ${theme.spacings.medium};
    font-size: ${theme.font.sizes.large};
    height: 4rem;
    right: -2.5rem;

    &::before {
      top: 4rem;
      border-top-width: 1.3rem;
      border-right-width: 2.5rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    padding: 0 ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    height: 3.3rem;
    right: -2rem;

    &::before {
      top: 3.3rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    padding: 0 ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xsmall};
    height: 2.4rem;
    right: -1.5rem;

    &::before {
      top: 2.4rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0;
    top: ${theme.spacings.xsmall};

    line-height: 27rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-family: ${theme.font.family};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!color && wrapperModifiers.color(theme, color)};
    ${!!size && wrapperModifiers[size](theme)};
  `}
`
