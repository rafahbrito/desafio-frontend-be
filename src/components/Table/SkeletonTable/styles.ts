import styled, { keyframes } from 'styled-components'

interface SkeletonTableProps {
  $columns: number
}

const shimmer = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`

export const SkeletonContainer = styled.div<SkeletonTableProps>`
  display: grid;
  background-color: ${({ theme }) => theme.colors.white};
  gap: 16px;
  width: 100%;
  padding: 14px 32px;
  position: relative;
  min-height: 200px;
`

export const SkeletonItem = styled.div`
  height: 34px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  border-radius: 2px;
  animation: ${shimmer} 1.5s infinite;
`
