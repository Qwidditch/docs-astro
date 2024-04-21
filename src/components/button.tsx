import { component$, Slot, type PropsOf } from '@builder.io/qwik'
import { cn } from '../utils/cn'

type ButtonProps = PropsOf<'button'>

export const Button = component$<ButtonProps>(({ ...props }) => {
  return (
    <button {...props} class={cn('btn', props.class)}>
      <Slot />
    </button>
  )
})
