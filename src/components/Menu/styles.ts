import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: center;
    padding: ${theme.spacings.small} 0;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    color: ${theme.colors.white};
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
    display: inherit;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
