export interface PaginationType {
  currentPage: number
  pageSize: number
  totalDocs: number
  onChange: (page: number) => void
}

export interface PaginationProps {
  pagination: PaginationType
}
