import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: string
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export function TextField({
  icon,
  label,
  name,
  initialValue = '',
  disabled = false,
  onInputChange,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
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
