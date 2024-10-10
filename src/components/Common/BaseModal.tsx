import React from 'react'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  bottom?: boolean
  close?: boolean
  onClose: Function
}

const Modal: React.FC<ModalProps> = ({ title, children, onClose, close = true, bottom = false }) => {
  return (
    <div className="fixed top-0 left-0 bg-[rgba(6,13,38,.9)] w-full h-full flex justify-center items-center z-30">
      <div
        className={`relative w-[90%] md:w-[40rem] rounded-2xl p-3 md:relative pl-5 pr-5 text-white bg-form-2 border border-[#6854E8] overflow-hidden ${
          bottom ? '!w-full md:!w-96 bottom-0 absolute rounded-b-none md:rounded-2xl' : ''
        }`}
      >
        <div className="relative z-30">
          <div className="flex justify-between items-center pb-2 font-berlin text-lg">
            <div className="text-2xl">{title}</div>
            {close && (
              // @ts-ignore
              <div className="text-[#fff] text-4xl cursor-pointer font-[300]" onClick={onClose}>
                ×
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
