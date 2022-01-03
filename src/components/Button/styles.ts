import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from './Button'

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;

    span {
      width: inherit;
    }
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    align-items: center;
    display: inline-flex;
    justify-content: center;
    padding: ${theme.spacings.xxsmall};

    border: none;
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    border-radius: ${theme.border.radius};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 100%);

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 100%);
    }

    > span {
      margin: 0 auto;
    }

    ${!!size && wrapperModifiers[size](theme)};

    ${!!fullWidth && wrapperModifiers.fullWidth()};

    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`
