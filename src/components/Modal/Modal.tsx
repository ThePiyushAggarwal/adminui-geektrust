import { BsXLg } from "react-icons/bs"
import { ModalProps } from "./Modal.types"

function Modal({ open, toggle, children, className }: ModalProps) {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const onClickX = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    toggle()
  }

  return (
    <>
      {open && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-white/50 z-10"
          onClick={toggle}
        >
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 drop-shadow-lg whitespace-pre-wrap ${className}`}
            onClick={stopPropagation}
          >
            <button
              className="absolute -top-8 -right-6 bg-white rounded-full p-2"
              onClick={onClickX}
            >
              <BsXLg />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
