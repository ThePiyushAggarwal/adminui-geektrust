export interface ModalProps {
  open: boolean
  toggle: () => void
  children: React.ReactNode
  className?: React.HTMLAttributes<HTMLDivElement>["className"]
  /** Uses tailwind class. Start writing after `bg-` */
  bgColor?: string
}
