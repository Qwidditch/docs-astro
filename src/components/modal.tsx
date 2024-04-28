import {
  component$,
  Slot,
  useSignal,
  type PropsOf,
  useTask$,
  type Signal,
} from '@builder.io/qwik'

type ModalProps = Omit<PropsOf<'dialog'>, 'open'> & {
  open: Signal<boolean>
  withCloseButton?: boolean
}

export const Modal = component$<ModalProps>(
  ({ open, withCloseButton, ...props }) => {
    const modalRef = useSignal<HTMLDialogElement>()

    useTask$(({ track }) => {
      track(() => modalRef.value)
      track(() => open.value)

      if (modalRef.value == null) return
      if (open.value) {
        modalRef.value.showModal()
      }
      if (!open.value) {
        modalRef.value.close()
      }
    })
    return (
      <dialog
        ref={modalRef}
        onClose$={() => (open.value = false)}
        class="modal"
        {...props}
      >
        <div class="modal-box">
          {withCloseButton && (
            <form method="dialog">
              <button
                aria-label="Close Modal"
                class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
          )}
          <Slot />
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close modal</button>
        </form>
      </dialog>
    )
  }
)
