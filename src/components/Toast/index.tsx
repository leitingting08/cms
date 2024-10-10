import React, { useState } from 'react'
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Snackbar from '@mui/material/Snackbar'
import Slide, { SlideProps } from '@mui/material/Slide'
import { closeSrc } from 'utils/icon'
import Image from 'next/image'
import { useTranslation } from 'contexts/Localization'

type TransitionProps = Omit<SlideProps, 'direction'>
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={3} ref={ref} variant="filled" {...props} />
})
function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="down" />
}

export type ToastProps = {
  open: boolean
  onClose: () => void
  type?: AlertColor
  title?: string
}

const Toast: React.FC<ToastProps> = ({ open, onClose, type, title }) => {
  // const [open, setOpen] = useState(true)
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    onClose()
  }
  const { t } = useTranslation()
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      TransitionComponent={TransitionRight}
      classes={{
        root: 'w-full top-0 !left-0 !right-0 translate-x-0 h-60'
      }}
      style={{ transform: 'none', top: 0 }}
    >
      <Alert severity={type} sx={{ width: 'auto' }} variant="standard" color={type} className="relative">
        <AlertTitle sx={{ marginTop: 0 }}>{title}</AlertTitle>
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          className="w-5 h-5 absolute -top-2.5 -right-2.5 bg-white rounded-full p-1 cursor-pointer fill-[#FE5300]"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleClose}
        >
          <path d="M35.8615 31.6987L12.7893 8.62654C11.5213 7.35847 9.78529 7.01618 8.31477 8.4867C6.84425 9.95722 7.18654 11.6932 8.45461 12.9613L31.5268 36.0335C32.7949 37.3015 34.5309 37.6438 36.0014 36.1733C37.4722 34.6961 37.1296 32.9668 35.8615 31.6987Z" />
          <path d="M8.45472 31.6987L31.5269 8.62654C32.795 7.35847 34.531 7.01618 36.0015 8.4867C37.472 9.95722 37.1297 11.6932 35.8616 12.9613L12.7894 36.0335C11.5214 37.3015 9.7854 37.6438 8.31487 36.1733C6.84401 34.6961 7.18662 32.9668 8.45472 31.6987Z" />
        </svg>
      </Alert>
    </Snackbar>
  )
}

export default Toast
