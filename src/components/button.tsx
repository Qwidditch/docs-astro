import { component$, Slot, type PropsOf } from '@builder.io/qwik'
import { cn } from '../utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva('btn', {
  variants: {
    color: {
      default: '',
      neutral: 'btn-neutral',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      accent: 'btn-accent',
      ghost: 'btn-ghost',
      link: 'btn-link',
    },
    size: {
      xs: 'btn-xs',
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
    },
    variant: {
      outline: 'btn-outline',
      filled: '',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
})

type ButtonProps = PropsOf<'button'> & VariantProps<typeof buttonVariants>

export const Button = component$<ButtonProps>(
  ({ color, size, variant, ...props }) => {
    return (
      <button
        {...props}
        class={cn(buttonVariants({ color, size, variant }), props.class)}
      >
        <Slot />
      </button>
    )
  }
)
