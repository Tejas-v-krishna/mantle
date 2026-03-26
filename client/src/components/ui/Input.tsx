import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  state?: 'default' | 'error' | 'success'
}

const INPUT_STATES = {
  default: 'border-[var(--border-default)] focus:border-[var(--ember-default)] focus:shadow-[0_0_0_3px_var(--ember-subtle)]',
  error: 'border-[rgba(220,38,38,0.50)] focus:shadow-[0_0_0_3px_var(--error-bg)]',
  success: 'border-[rgba(58,155,74,0.40)]',
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, state = 'default', className, ...props }, ref) => {
    const inputState = error ? 'error' : state

    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5 font-[var(--ff-body)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-[var(--bg-sunken)] rounded-[var(--r-md)]',
            'px-3.5 py-2.5 text-sm font-[var(--ff-body)]',
            'text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]',
            'border transition-all duration-[var(--dur-base)] outline-none',
            INPUT_STATES[inputState],
            className
          )}
          {...props}
        />
        {(hint || error) && (
          <p className={cn(
            'text-[11px] mt-1.5 font-[var(--ff-body)]',
            error ? 'text-[var(--error-text)]' : 'text-[var(--text-tertiary)]'
          )}>
            {error || hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
