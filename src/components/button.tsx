import { component$, Slot, type PropsOf } from '@builder.io/qwik'

type ButtonProps = PropsOf<'button'>

export const Button = component$<ButtonProps>(({ ...props }) => {
  return (
    <button {...props} class="btn">
      <Slot />
    </button>
  )
})
