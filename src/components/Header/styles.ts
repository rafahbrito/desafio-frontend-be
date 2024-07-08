import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
`
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 480px) {
    max-width: 375px;
  }
`

export const HeaderLogo = styled.img`
  margin: ${({ theme }) =>
    `${theme.spacings['regular-12']} 0 ${theme.spacings['regular-12']} ${theme.spacings['medium-32']}`};

  @media (max-width: 480px) {
    margin: ${({ theme }) =>
      `${theme.spacings['regular-12']} 0 ${theme.spacings['regular-12']} ${theme.spacings['regular-20']}`};
  }
`
