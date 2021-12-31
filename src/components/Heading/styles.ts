import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from './Heading'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,

  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      left: 0;
      width: 5rem;
      position: absolute;
      bottom: -${theme.spacings.xxsmall};
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    color: ${theme.colors[color!]};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};

    ${lineLeft && wrapperModifiers.lineLeft(theme)};

    ${lineBottom && wrapperModifiers.lineBottom(theme)};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `};
  `}
`
