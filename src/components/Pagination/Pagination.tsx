export interface PaginationType {
  currentPage: number
  pageSize: number
  totalDocs: number
  onChange: (page: number) => void
}

interface Props {
  pagination: PaginationType
}

function Pagination({ pagination }: Props) {
  const { currentPage, onChange, pageSize, totalDocs } = pagination

  const totalPages = Math.ceil(totalDocs / pageSize)

  return (
    <div>
      {[...Array(totalPages)].map((_, index) => (
        <button
          type="button"
          key={index}
          onClick={() => onChange(index + 1)}
          className="border"
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

export default Pagination
