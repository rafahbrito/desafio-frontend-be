import { HeaderContainer, HeaderContent, HeaderLogo } from './styles'
import be from '../../assets/be.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo src={be} />
      </HeaderContent>
    </HeaderContainer>
  )
}
