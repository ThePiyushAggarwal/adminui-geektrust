function DeleteButton({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      type="button"
      className={`rounded-full px-4 py-1 bg-red-500 text-white text-xl disabled:bg-red-300 hover:bg-red-400 ${className}`}
      {...props}
    >
      Delete Selected
    </button>
  )
}

export default DeleteButton
