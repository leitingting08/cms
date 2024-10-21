import { menudSrc, menudbSrc, closeBSrc, logoSrc, logoCSrc } from 'utils/icon'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'contexts/Localization'
import Menu from './Menu'
import Translate from './Translate'
import { useState } from 'react'

interface PageHeaderProps {
  onChange?: Function
  isWhite?: boolean
}

export const PageHeader = ({ onChange, isWhite = true }: PageHeaderProps) => {
  const router = useRouter()
  const { t } = useTranslation()
  const [showPanples, setShowPanples] = useState(false)
  const [whiteBg, setWhiteBg] = useState(isWhite)

  return (
    <div
      className={`relative h-20 md:h-32 z-50 ${whiteBg ? 'bg-white text-black' : 'hover:bg-white'}`}
      onMouseEnter={() => !isWhite && setWhiteBg(true)}
      onMouseLeave={() => !isWhite && setWhiteBg(false)}
    >
      <div className="container m-auto relative">
        <div className="text-2xl flex-between h-20 md:h-32 px-4 relative">
          <Image
            src={whiteBg ? logoCSrc : logoSrc}
            alt="logo"
            onClick={() => router.push('/')}
            className="cursor-pointer w-40 md:w-48 h-10 md:h-auto"
          />
          <div className="hidden md:flex-between">
            <Menu isWhite={whiteBg} />
          </div>
          <div className="hidden md:block">
            <Translate isWhite={whiteBg} />
          </div>
          <Image
            src={whiteBg ? menudbSrc : menudSrc}
            alt="logo"
            className="w-6 h-6 md:hidden"
            onClick={() => {
              setShowPanples(true)
            }}
          />
        </div>
      </div>
      <div
        className={`fixed w-full h-full top-0 left-0 bg-[rgba(0,0,0,.6)] -translate-x-[100%] overflow-hidden z-10 ${
          showPanples ? 'showLeft' : 'hideLeft'
        }`}
      >
        <div
          className="fixed w-full h-full bg-white !text-black left-0 backdrop-blur-md overflow-x-hidden rouned-lg overflow-y-auto"
          onClick={(e) => {
            e.preventDefault()
            setShowPanples(false)
            onChange && onChange(false)
          }}
        >
          <div className="w-full h-full absolute top-0 left-0 overflow-y-auto">
            <div className="bg-wallet bg-cover flex-between px-4 py-6">
              <Translate isWhite={true} />
              <Image src={closeBSrc} alt="" className="w-6 h-6" />
            </div>
            <div className="relative z-10 px-4 text-left">
              <div className="text-left ml-2">
                <Menu isWhite={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
