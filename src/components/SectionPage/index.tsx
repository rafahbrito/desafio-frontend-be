import {
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SearchInput,
} from './styles'

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
        {hasSearch && <SearchInput type="search" placeholder="Search..." />}
      </SectionHeader>
      {children}
    </SectionContainer>
  )
}
