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
  MenuFull
} from './styles'
import { Logo } from 'components/Logo/Logo'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <IconWrapper>
        <MenuIcon aria-label="Abrir menu" onClick={() => setIsOpen(true)} />
      </IconWrapper>

      <LogoWrapper>
        <Logo hideOnMobile />
      </LogoWrapper>

      <MenuGroup>
        <IconWrapper>
          <SearchIcon aria-label="Buscar" />
        </IconWrapper>
        <IconWrapper>
          <ShoppingCartIcon aria-label="Ir para o Carrinho de Compras" />
        </IconWrapper>
      </MenuGroup>

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Fechar menu" onClick={() => setIsOpen(false)} />
      </MenuFull>
    </Wrapper>
  )
}

export default Menu
