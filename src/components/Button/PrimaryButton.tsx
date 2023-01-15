function PrimaryButton({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      className={`rounded-full px-4 py-1 bg-blue-500 text-white text-xl disabled:bg-blue-300 hover:bg-blue-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
