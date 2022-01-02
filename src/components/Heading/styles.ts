import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps, LineColors } from './Heading'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `};
  `,

  lineLeft: (theme: DefaultTheme, color: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[color]};
  `,

  lineBottom: (theme: DefaultTheme, color: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      left: 0;
      width: 5rem;
      position: absolute;
      bottom: -${theme.spacings.xxsmall};
      border-bottom: 0.5rem solid ${theme.colors[color]};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
    color: ${theme.colors[color!]};
    font-weight: ${theme.font.bold};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)};

    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)};

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
