import React, { useEffect, useState } from 'react'
import { Tooltip, TooltipProps } from '@mui/material'

const Tips: React.FC<TooltipProps> = ({
  title = 'Comming Soon',
  children,
  placement = 'top',
  className = '',
  ...props
}) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.addEventListener('click', () => setOpen(false))
  }, [])
  return (
    <Tooltip
      title={title}
      placement={placement}
      classes={{
        tooltip: `!bg-[rgba(0,0,0,.9)] !px-5 !py-3 rounded-lg border border-primary !max-w-[24rem] md:!max-w-[30rem] ${className}`,
        arrow: 'text-black'
      }}
      {...props}
      open={open}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
          setOpen(true)
        }}
      >
        {children}
      </div>
    </Tooltip>
  )
}

export default Tips
