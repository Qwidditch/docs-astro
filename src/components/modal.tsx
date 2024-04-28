import {
  component$,
  Slot,
  useSignal,
  type PropsOf,
  useTask$,
  type Signal,
} from '@builder.io/qwik'
import { cn } from '../utils/cn'

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
        {...props}
        ref={modalRef}
        onClose$={() => (open.value = false)}
        class={cn('modal', props.class)}
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
          <Slot name="actions" />
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close modal</button>
        </form>
      </dialog>
    )
  }
)

type ModalActionsProps = PropsOf<'div'>

export const ModalActions = component$<ModalActionsProps>((props) => {
  return (
    <div
      {...props}
      class={cn('flex justify-end gap-2 items-end', props.class)}
      q:slot="actions"
    >
      <Slot />
    </div>
  )
})
