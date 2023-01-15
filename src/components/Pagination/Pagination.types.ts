export interface PaginationType {
  currentPage: number
  pageSize: number
  totalDocs: number
  onChange: (page: number) => void
}

export interface PaginationProps {
  pagination: PaginationType
}

type ButtonDefaultProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export interface PaginationButtonProps extends ButtonDefaultProps {
  active?: boolean
}
