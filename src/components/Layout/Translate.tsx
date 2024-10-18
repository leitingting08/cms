import React, { useEffect, useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import { languageList } from 'config/localization/languages'
import Image from 'next/image'
import { languageSrc, languageBSrc } from 'utils/icon'

export type LanguageProps = {
  className?: string
  isWhite?: boolean
}

const SelectLanguage: React.FC<LanguageProps> = ({ isWhite = true, className = '' }) => {
  const { setLanguage, currentLanguage } = useTranslation()

  const handleSelectChange = (value: string) => {
    setLanguage(languageList.filter((item) => item.code === value)[0])
  }

  return (
    <div className="flex-start items-center md:flex-center gap-3 mt-4 md:mt-0">
      <Image src={isWhite ? languageBSrc : languageSrc} alt="" className="w-8 h-8" />
      <div
        className={`cursor-pointer ${isWhite ? 'hover:text-black' : 'hover:text-white'} ${
          isWhite
            ? `hover:text-black ${currentLanguage?.code === 'en' ? 'text-[rgba(0,0,0,.5)]' : 'text-black'}`
            : `hover:text-white ${currentLanguage?.code === 'en' ? 'text-[rgba(255,255,255,.5)]' : 'text-white'}`
        }`}
        onClick={() => handleSelectChange('zh-cn')}
      >
        中文
      </div>
      <hr className={`h-6 w-[1px] ${isWhite ? 'bg-[rgba(0,0,0,.5)]' : 'bg-[rgba(255,255,255,.5)]'} border-none`} />
      <div
        className={`cursor-pointer ${
          isWhite
            ? `hover:text-black ${currentLanguage?.code !== 'en' ? 'text-[rgba(0,0,0,.5)]' : 'text-black'}`
            : `hover:text-white ${currentLanguage?.code !== 'en' ? 'text-[rgba(255,255,255,.5)]' : 'text-white'}`
        }`}
        onClick={() => handleSelectChange('en')}
      >
        ENG
      </div>
    </div>
  )
}

export default SelectLanguage
