function PaginationButton({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      type="button"
      {...props}
      className={`rounded-full p-4 bg-white/80 relative ${className}`}
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </button>
  )
}

export default PaginationButton
