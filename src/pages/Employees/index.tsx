import { useEffect, useState } from 'react'
import { SectionPage } from '../../components/SectionPage'
import { Table } from '../../components/Table'
import { useSearch } from '../../contexts/SearchContext'

interface Employee {
  id: number
  name: string
  job: string
  admission_date: string
  phone: string
  image: string
}

export function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | undefined>(undefined)
  const { searchTerm } = useSearch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/employees')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data: Employee[] = await response.json()
        const formattedEmployees = data.map((employee) => ({
          ...employee,
          phone: formatPhoneNumber(employee.phone),
          admission_date: new Date(employee.admission_date).toLocaleDateString(
            'pt-BR',
          ),
        }))

        // Simula delay de 2s
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setEmployees(formattedEmployees)
        setFilteredEmployees(formattedEmployees)
        setIsLoading(false)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
        setEmployees([])
        setFilteredEmployees([])
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    // Atualiza a lista filtrada sempre que o searchTerm muda
    const normalizedSearch = searchTerm.toLowerCase().trim()
    const filtered = employees.filter((employee) => {
      const { name, job, phone } = employee
      return (
        name.toLowerCase().includes(normalizedSearch) ||
        job.toLowerCase().includes(normalizedSearch) ||
        phone.toLowerCase().includes(normalizedSearch)
      )
    })
    setFilteredEmployees(filtered)
  }, [searchTerm, employees])

  const formatPhoneNumber = (phone: string): string => {
    const cleaned = ('' + phone).replace(/\D/g, '')
    const match = cleaned.match(/^(?:\+|)(\d{2})(\d{2})(\d{5})(\d{4})$/)
    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`
    }
    return phone
  }

  return (
    <SectionPage title="Funcionários" hasSearch={true}>
      <Table
        dataTable={filteredEmployees}
        gridTemplateColumns="1fr 2.5fr 1.75fr 2.5fr 2.5fr"
        thead={['Foto', 'Nome', 'Cargo', 'Data de admissão', 'Telefone']}
        keysToShow={['image', 'name', 'job', 'admission_date', 'phone']}
        keysAsImages={['image']}
        loading={isLoading}
        labelEmptyTable={error}
      />
    </SectionPage>
  )
}
