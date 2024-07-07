import styled from 'styled-components'

interface ContainerProps {
  $rowsTable: number
  $gridTemplateColumns?: string
}

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 0.8rem 0.8rem 0 0;
  padding-bottom: 1rem;
  box-sizing: border-box;
`

export const TableStyle = styled.table<ContainerProps>`
  width: 100%;
  min-width: 89rem;
  border-spacing: 0;
  box-sizing: border-box;

  tr {
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: ${({ $gridTemplateColumns, $rowsTable }) =>
      !$gridTemplateColumns
        ? `repeat(${$rowsTable}, 1fr)`
        : $gridTemplateColumns};
  }

  th,
  td {
    box-sizing: border-box;
    text-align: left;
  }

  th img,
  td img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    margin: auto;
  }

  thead {
    background: ${({ theme }) => theme.gradients.primary};
    th {
      color: ${({ theme }) => theme.colors.white};
      text-transform: uppercase;
      padding: 14px 32px;
    }
  }

  tbody {
    td {
      padding: 8px 32px;
      border-top: 1px solid ${({ theme }) => theme.colors['gray-00']};
      background-color: ${({ theme }) => theme.colors.white};
      display: flex;
      align-items: center;
    }
  }
`

export const ContainerTable = styled.div`
  display: flex;
  flex-direction: column;

  .emptyTable {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 0.8rem 0.8rem 0 0;
    padding: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
