function Checkbox({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      type="checkbox"
      className={`flex cursor-pointer w-5 h-5 ${className}`}
      {...props}
    />
  )
}

export default Checkbox
