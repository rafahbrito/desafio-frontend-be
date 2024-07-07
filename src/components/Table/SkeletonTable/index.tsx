import { SkeletonContainer, SkeletonItem } from './styles'
const SkeletonTable: React.FC<{ columns: number }> = ({ columns }) => {
  return (
    <SkeletonContainer $columns={columns}>
      {[...Array(columns)].map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </SkeletonContainer>
  )
}

export default SkeletonTable
