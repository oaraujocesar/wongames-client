import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'

import { Wrapper, IconWrapper, LogoWrapper, MenuGroup } from './styles'
import { Logo } from 'components/Logo/Logo'

const Menu = () => (
  <Wrapper>
    <IconWrapper>
      <MenuIcon aria-label="Abrir menu" />
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
  </Wrapper>
)

export default Menu
