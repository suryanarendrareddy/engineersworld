import { forwardRef } from 'react'

export const Input = forwardRef(
  ({ type = 'text', className = '', error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        aria-invalid={!!error}
        className={`w-full px-4 py-3 rounded bg-black/40 border ${
          error ? 'border-red-500' : 'border-white/20'
        } disabled:opacity-50 file:text-white file:bg-black/40 file:border-0 ${className}`}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
