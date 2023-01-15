import { PaginationProps } from "./Pagination.types"

function Pagination({ pagination }: PaginationProps) {
  const { currentPage, onChange, pageSize, totalDocs } = pagination

  const totalPages = Math.ceil(totalDocs / pageSize)

  return (
    <div>
      {/* Go to first page */}
      <button
        type="button"
        onClick={() => onChange(1)}
        disabled={currentPage <= 1}
        className="border"
      >
        {`<<`}
      </button>
      {/* Go to previous page */}
      <button
        type="button"
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="border"
      >
        {`<`}
      </button>
      {/* Go to numbered page */}
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
      {/* Go to next page */}
      <button
        type="button"
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="border"
      >
        {`>`}
      </button>
      {/* Go to last page */}
      <button
        type="button"
        onClick={() => onChange(totalPages)}
        disabled={currentPage >= totalPages}
        className="border"
      >
        {`>>`}
      </button>
    </div>
  )
}

export default Pagination
