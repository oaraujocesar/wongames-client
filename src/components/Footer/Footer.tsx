import Link from 'next/link'

import { Logo } from 'components/Logo/Logo'
import Heading from 'components/Heading/Heading'

import { Column, Content, Wrapper, Copyright } from './styles'

const Footer = () => (
  <Wrapper>
    <Logo color="black" />
    <Content>
      <Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        <a href="tel:5581982797729">+55 081 98279-7729</a>
      </Column>

      <Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </Column>

      <Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </Column>

      <Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </Column>

      <Copyright>Won Games 2020 © All rights reserved.</Copyright>
    </Content>
  </Wrapper>
)

export default Footer
