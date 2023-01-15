import { ModalProps } from "./Modal.types"

function Modal({ open, toggle, children }: ModalProps) {
  return (
    <>
      {open && (
        <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-1/2 h-1/2 overflow-y-auto drop-shadow-md">
          {children}
        </div>
      )}
    </>
  )
}

export default Modal
