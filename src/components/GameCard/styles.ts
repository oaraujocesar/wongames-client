import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
  `}
`

export const ImageBox = styled.div`
  width: 100%;
  height: 14rem;

  background: #f6f7f8;
  background-size: 80rem 14rem;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    height: 100%;
    position: relative;
    margin: ${theme.spacings.xsmall};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    right: 0;
    top: -0.5rem;
    position: absolute;

    cursor: pointer;
    color: ${theme.colors.primary};

    svg {
      width: 2.5rem;
    }
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};

    display: flex;
    align-items: center;
    justify-content: flex-end;
  `}
`

type PriceProps = {
  isPromotional?: boolean
}

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xxsmall};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
  `
}

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    height: 3rem;
    display: inline-flex;
    align-items: center;

    font-weight: ${theme.font.bold};

    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`
