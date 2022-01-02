import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type MenuFullProps = {
  isOpen: boolean
}

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: center;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
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

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: absolute;
    flex-direction: column;
    justify-content: space-between;

    opacity: ${isOpen ? 1 : 0};
    background: ${theme.colors.white};
    transition: opacity 0.2s ease-in-out;
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      top: 0;
      right: 0;
      width: 2.4rem;
      height: 2.4rem;
      cursor: pointer;
      position: absolute;
      margin: ${theme.spacings.xsmall};
    }

    ${MenuNav} {
      flex: 1;
      display: inherit;
      align-items: center;
      flex-direction: inherit;
      justify-content: center;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transition: transform 0.2s ease-in-out;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(5rem)'};
    }

    ${RegisterBox} {
      transition: transform 0.2s ease-in-out;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(5rem)'};
    }
  `}
`

export const MenuNav = styled.div``

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    text-align: center;
    text-decoration: none;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;

    &:hover {
      &::after {
        content: '';
        display: block;
        height: 0.3rem;
        position: absolute;
        animation: hoverAnimation 0.2s forwards;
        background-color: ${theme.colors.primary};
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
