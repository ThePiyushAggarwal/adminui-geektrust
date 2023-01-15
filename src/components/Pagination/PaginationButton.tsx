import { PaginationButtonProps } from "./Pagination.types"

function PaginationButton({
  className,
  children,
  active,
  ...props
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`rounded-full p-4 ${
        active ? "bg-blue-500 text-white" : "bg-white/80"
      } hover:bg-blue-400 hover:text-white disabled:bg-white/80 disabled:text-gray-500 relative ${className}`}
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </button>
  )
}

export default PaginationButton
