import { AlertColor } from '@mui/material'
import React, { createContext, useState } from 'react'
import Toast from 'components/Toast'

type ToastSignature = (title: string, description?: string) => void
export interface ToastContextApi {
  toastError: ToastSignature
  toastSuccess: ToastSignature
  toastInfo: ToastSignature
}

export const ToastsContext = createContext<ToastContextApi | undefined>(undefined)

export const ToastsProvider: React.FC<any> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<AlertColor>('success')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState<string>('')
  const toastSuccess = (title: string, description?: string) => {
    setTitle(title)
    setDescription(description ?? '')
    setOpen(true)
    setType('success')
  }
  const toastError = (title: string, description?: string) => {
    setTitle(title)
    setDescription(description ?? '')
    setType('error')
    setOpen(true)
  }
  const toastInfo = (title: string, description?: string) => {
    setTitle(title)
    setDescription(description ?? '')
    setType('info')
    setOpen(true)
  }
  return (
    <ToastsContext.Provider value={{ toastSuccess, toastError, toastInfo }}>
      <>
        {children}
        <Toast open={open} onClose={() => setOpen(false)} type={type} title={title} />
      </>
    </ToastsContext.Provider>
  )
}
