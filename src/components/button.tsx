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
    state: {
      info: 'btn-info',
      success: 'btn-success',
      warning: 'btn-warning',
      error: 'btn-error',
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
    shape: {
      circle: 'btn-circle',
      square: 'btn-square',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
})

type ButtonProps = PropsOf<'button'> &
  VariantProps<typeof buttonVariants> & {
    loading: boolean
  }

export const Button = component$<ButtonProps>(
  ({ color, size, variant, loading, state, shape, ...props }) => {
    return (
      <button
        class={cn(
          buttonVariants({ color, size, variant, state, shape }),
          props.class
        )}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? <span class="loading loading-spinner"></span> : <Slot />}
      </button>
    )
  }
)
