import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.white};
    border-radius: 0.8rem;
    padding: 0 ${theme.spacings['regular-16']};
    border: 0.1rem solid;
    border-color: ${theme.colors['gray-10']};
    margin-right: 0.3rem;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes['regular-16']};
    padding: ${theme.spacings['regular-12']} 0;
    border: 0;
    outline: none;
    width: 23rem;
  `}

  @media (max-width: 480px) {
    width: 27.5rem;
  }
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes['regular-16']};
    color: ${theme.colors['gray-20']};
  `}
`

export const Icon = styled.img`
  ${({ theme }) => css`
    color: ${theme.colors['gray-10']};
  `}
`

export const Wrapper = styled.div``
