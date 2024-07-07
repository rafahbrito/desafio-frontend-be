import React from 'react'
import { useSearch } from '../../contexts/SearchContext'
import * as S from './styles'

export type TextFieldProps = {
  label?: string
  icon?: string
  disabled?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export function TextField({
  icon,
  label,
  name,
  disabled = false,
  ...props
}: TextFieldProps) {
  const { searchTerm, setSearchTerm } = useSearch()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setSearchTerm(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          type="text"
          onChange={onChange}
          value={searchTerm}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
        {!!icon && <S.Icon src={icon} />}
      </S.InputWrapper>
    </S.Wrapper>
  )
}
