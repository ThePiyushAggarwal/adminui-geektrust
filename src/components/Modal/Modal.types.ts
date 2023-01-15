export interface ModalProps {
  open: boolean
  toggle: () => void
  children: React.ReactNode
  className?: React.HTMLAttributes<HTMLDivElement>
}
