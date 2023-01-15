function Input({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input className={`border-2 border-gray-400 ${className}`} {...props} />
  )
}

export default Input
