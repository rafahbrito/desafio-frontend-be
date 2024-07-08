import styled from 'styled-components'

export const SectionContainer = styled.div`
  margin: ${({ theme }) => theme.spacings['medium-32']};

  @media (max-width: 480px) {
    margin: ${({ theme }) => theme.spacings['regular-20']};
  }
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacings['medium-32']};

  @media (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacings['regular-28']};
    margin-bottom: ${({ theme }) => theme.spacings['regular-20']};
  }
`

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes['regular-24']};
  color: ${({ theme }) => theme.colors.black};
`
