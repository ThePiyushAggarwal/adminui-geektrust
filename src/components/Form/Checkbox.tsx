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
      className={`cursor-pointer w-5 h-5 m-0 ${className}`}
      {...props}
    />
  )
}

export default Checkbox
