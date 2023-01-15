import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs"
import { PaginationProps } from "./Pagination.types"
import Button from "./PaginationButton"

function Pagination({ pagination }: PaginationProps) {
  const { currentPage, onChange, pageSize, totalDocs } = pagination

  const totalPages = Math.ceil(totalDocs / pageSize)

  return (
    <div className="flex flex-wrap gap-x-4 justify-center">
      {/* Go to first page */}
      <Button onClick={() => onChange(1)} disabled={currentPage <= 1}>
        <BsChevronDoubleLeft />
      </Button>

      {/* Go to previous page */}
      <Button
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <BsChevronLeft />
      </Button>

      {/* Go to numbered page */}
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          onClick={() => onChange(index + 1)}
          className="text-sm"
        >
          {index + 1}
        </Button>
      ))}

      {/* Go to next page */}
      <Button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <BsChevronRight />
      </Button>

      {/* Go to last page */}
      <Button
        onClick={() => onChange(totalPages)}
        disabled={currentPage >= totalPages}
      >
        <BsChevronDoubleRight />
      </Button>
    </div>
  )
}

export default Pagination
