import { component$, useSignal } from '@builder.io/qwik'
import { Button } from './button'
import { Modal } from './modal'

export const ModalExample = component$(() => {
  const isModalVisible = useSignal(false)

  return (
    <>
      <Button onClick$={() => (isModalVisible.value = !isModalVisible.value)}>
        Open Modal
      </Button>
      <Modal open={isModalVisible} withCloseButton>
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click outside to close</p>
      </Modal>
    </>
  )
})
