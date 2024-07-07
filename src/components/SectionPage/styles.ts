import styled from 'styled-components'

export const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['gray-00']};
  margin: ${({ theme }) => theme.spacings['medium-32']};
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacings['medium-32']};
`

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes['regular-24']};
  color: ${({ theme }) => theme.colors.black};
`
