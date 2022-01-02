import { useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'

import {
  Wrapper,
  IconWrapper,
  LogoWrapper,
  MenuGroup,
  MenuFull,
  MenuNav,
  MenuLink,
  RegisterBox,
  CreateAccount
} from './styles'

import { Logo } from 'components/Logo/Logo'
import Button from 'components/Button/Button'
import { MediaMatch } from 'components/MediaMatch/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <MediaMatch lessThan="medium">
        <IconWrapper>
          <MenuIcon aria-label="Abrir menu" onClick={() => setIsOpen(true)} />
        </IconWrapper>
      </MediaMatch>

      <LogoWrapper>
        <Logo hideOnMobile />
      </LogoWrapper>

      <MediaMatch greaterThan="medium">
        <MenuNav>
          <MenuLink href="#">Início</MenuLink>
          <MenuLink href="#">Explorar</MenuLink>
        </MenuNav>
      </MediaMatch>

      <MenuGroup>
        <IconWrapper>
          <SearchIcon aria-label="Buscar" />
        </IconWrapper>
        <IconWrapper>
          <ShoppingCartIcon aria-label="Ir para o Carrinho de Compras" />
        </IconWrapper>
      </MenuGroup>

      {!username && (
        <MediaMatch greaterThan="medium">
          <Button>Entrar</Button>
        </MediaMatch>
      )}

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Fechar menu" onClick={() => setIsOpen(false)} />
        <MenuNav>
          <MenuLink href="#">Início</MenuLink>
          <MenuLink href="#">Explorar</MenuLink>
          {!!username && (
            <>
              <MenuLink href="#">Minha conta</MenuLink>
              <MenuLink href="#">Lista de desejos</MenuLink>
            </>
          )}
        </MenuNav>

        {!username && (
          <RegisterBox>
            <Button fullWidth size="large">
              Entrar
            </Button>
            <span>ou</span>
            <CreateAccount href="#" title="Crie sua conta">
              Crie sua conta
            </CreateAccount>
          </RegisterBox>
        )}
      </MenuFull>
    </Wrapper>
  )
}

export default Menu
