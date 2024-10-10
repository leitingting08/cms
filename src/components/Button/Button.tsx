import React from 'react'
import Image from 'next/image'
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isGray?: boolean
  color?: string
  icon?: string
  width?: string
  disabled?: boolean
  type?: 'button' | 'reset' | 'submit'
  outline?: boolean
  className?: string
  isQuick?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isGray = false,
  type,
  disabled = false,
  icon,
  color = 'primary',
  outline = false,
  isQuick = false,
  className,
  ...props
}) => {
  return (
    <button
      type={type || 'button'}
      disabled={disabled}
      {...props}
      className={`flex items-center justify-center  rounded-lg p-2 px-3 md:px-4 text-center uppercase ${
        disabled ? 'opacity-25 cursor-not-allowed' : ''
      } ${outline ? `bg-transparent border 'hover:border-primary hover:text-primary` : `bg-primary text-white`} ${
        className || ''
      }`}
    >
      {icon && <Image src={icon} className="h-5 mr-3.5" alt="" />}
      {children}
    </button>
  )
}
export default Button
