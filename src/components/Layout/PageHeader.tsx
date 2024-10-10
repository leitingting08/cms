import { menudSrc, closeSrc, logoSrc } from 'utils/icon'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'contexts/Localization'
import Menu from './Menu'
import Translate from './Translate'
import { useState } from 'react'

interface PageHeaderProps {
  onChange?: Function
}

export const PageHeader = ({ onChange }: PageHeaderProps) => {
  const router = useRouter()
  const { t } = useTranslation()
  const [showPanples, setShowPanples] = useState(false)

  return (
    <div className="relative h-20 md:h-32 hover:bg-black z-50">
      <div className="container m-auto relative">
        <div className="text-2xl flex-between h-20 md:h-32 px-4 relative">
          <Image
            src={menudSrc}
            alt="logo"
            className="w-6 h-6 md:hidden"
            onClick={() => {
              setShowPanples(true)
            }}
          />
          <Image
            src={logoSrc}
            alt="logo"
            onClick={() => router.push('/')}
            className="cursor-pointer w-40 md:w-48 h-10 md:h-auto"
          />
          <div className="hidden md:flex-between">
            <Menu />
          </div>
          <div className="hidden md:block">
            <Translate />
          </div>
        </div>
      </div>
      <div
        className={`fixed w-full h-full top-0 left-0 bg-[rgba(0,0,0,.6)] -translate-x-[100%] overflow-hidden z-10 ${
          showPanples ? 'showLeft' : 'hideLeft'
        }`}
      >
        <div
          className="fixed w-[80%] h-full bg-[#13132B] left-0 backdrop-blur-md overflow-x-hidden rouned-lg overflow-y-auto"
          onClick={(e) => {
            e.preventDefault()
            setShowPanples(false)
            onChange && onChange(false)
          }}
        >
          <div className="w-full h-full absolute top-0 left-0 overflow-y-auto">
            <div className="bg-wallet bg-cover flex-between px-4 py-6">
              <Image
                src={logoSrc}
                alt="logo"
                onClick={() => router.push('/')}
                className="cursor-pointer w-40 md:w-48 h-10 md:h-auto"
              />
              <Image src={closeSrc} alt="" className="w-6 h-6" />
            </div>
            <div className="relative z-10 px-4 text-left">
              <div className="text-left ml-2">
                <Menu />
                <Translate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
