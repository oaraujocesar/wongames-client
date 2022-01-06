import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from './Highlight'

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'align'>

const wrapperModifiers = {
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.4fr;

    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `,
  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.4fr 2fr;

    ${Content} {
      text-align: right;
    }
  `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, align }) => css`
    width: 100%;
    height: 23rem;
    display: grid;
    position: relative;

    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;

      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${!!align && wrapperModifiers[align]()}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    align-self: end;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.xlarge};
    `}
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`
export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
