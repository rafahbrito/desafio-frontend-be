import React from 'react'
import { SectionContainer, SectionHeader, SectionTitle } from './styles'
import { TextField } from '../TextField'
import searchicon from '../../assets/searchicon.svg'

interface SectionPageProps {
  title?: string
  hasSearch?: boolean
  children: React.ReactNode
}

export function SectionPage({ title, hasSearch, children }: SectionPageProps) {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {hasSearch && (
          <TextField placeholder="Pesquisar" icon={searchicon} name="search" />
        )}
      </SectionHeader>
      {children}
    </SectionContainer>
  )
}
