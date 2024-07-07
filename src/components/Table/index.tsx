import { useMemo } from 'react'
import { Container, ContainerTable, TableStyle } from './styles'

interface TableProps<T> {
  thead?: string[]
  dataTable: Array<Record<keyof T, T[keyof T]>>
  keysToShow?: (keyof T)[]
  keysAsImages?: (keyof T)[]
  loading?: boolean
  labelEmptyTable?: string
  gridTemplateColumns?: string
}

export function Table<T>({
  thead,
  dataTable,
  keysToShow,
  keysAsImages,
  loading = false,
  labelEmptyTable = 'Nenhuma informação localizada com os parâmetros informados.',
  gridTemplateColumns,
}: TableProps<T>) {
  const rowsTable = useMemo(() => {
    if (keysToShow?.length) {
      return keysToShow.length
    }

    if (dataTable.length) {
      return Object.keys(dataTable[0]).length
    }
    return 0
  }, [dataTable, keysToShow])

  function generateTitlesTable() {
    let titles: string[] = []

    if (thead?.length) {
      titles = thead
    } else {
      const keys = keysToShow?.length ? keysToShow : Object.keys(dataTable[0])
      keys.forEach((key, i) => titles.push(`Coluna ${i + 1}`))
    }

    return (
      <tr>
        {titles.map((title, i) => (
          <th key={`title-${i}`}>{title}</th>
        ))}
      </tr>
    )
  }

  function generateBodyRows(data: Array<Record<keyof T, T[keyof T]>>) {
    return data.map((row, indexRow) => {
      const keysShow = keysToShow?.length
        ? keysToShow
        : (Object.keys(row) as (keyof T)[])
      const columnsOfRow = keysShow.map((key) => row[key])

      return (
        <tr key={`row-${indexRow}`}>
          {columnsOfRow.map((value, i) => (
            <td key={`row-${indexRow}-column-${i}`}>
              {keysAsImages?.includes(keysShow[i]) ? (
                <img src={String(value)} alt="" />
              ) : (
                String(value)
              )}
            </td>
          ))}
        </tr>
      )
    })
  }

  return (
    <Container>
      <ContainerTable>
        {!loading ? (
          dataTable.length ? (
            <TableStyle
              $rowsTable={rowsTable}
              $gridTemplateColumns={gridTemplateColumns}
            >
              <thead>{generateTitlesTable()}</thead>
              <tbody>{generateBodyRows(dataTable)}</tbody>
            </TableStyle>
          ) : (
            <div className="emptyTable">
              <h3>Registro não encontrado 😕</h3>
              <p>{labelEmptyTable}</p>
            </div>
          )
        ) : (
          <div>Carregando...</div>
        )}
      </ContainerTable>
    </Container>
  )
}
