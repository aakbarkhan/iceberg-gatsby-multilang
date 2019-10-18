import React, { useState } from "react"
import useTranslations from "../useTranslations"
import Navigation from "../Navigation"
import Languages from "../Languages"
import ButtonMenu from "../ButtonMenu"
import Logo from "../Logo"

import * as S from './styled'

const Header = () => {
  const { home } = useTranslations()
  const [toggleMenu, setToggleMenu] = useState( false )

  return (
    <S.HeaderWrapper>
      <S.Container>        
      
        <S.LogoLink to="/" title={home} aria-label={home}>
          <Logo />
        </S.LogoLink>

        <S.NavLanguages>
          <Languages />
        </S.NavLanguages>  

        <ButtonMenu handleClick={() => setToggleMenu( !toggleMenu )} isActive={toggleMenu} />
        <S.NavMenu>
          <Navigation isActive={toggleMenu} />
        </S.NavMenu>       

      </S.Container>   
    </S.HeaderWrapper>
  )
}

export default Header
