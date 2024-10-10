import React, { useEffect, useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import { languageList } from 'config/localization/languages'
import Image from 'next/image'
import { languageSrc } from 'utils/icon'

export type ButtonProps = {
  className?: string
}

const SelectLanguage: React.FC<ButtonProps> = () => {
  const { setLanguage, currentLanguage } = useTranslation()

  const handleSelectChange = (value: string) => {
    setLanguage(languageList.filter((item) => item.code === value)[0])
  }

  return (
    <div className="flex-start items-center md:flex-center gap-3 mt-4 md:mt-0">
      <Image src={languageSrc} alt="" className="w-8 h-8" />
      <div
        className={`cursor-pointer hover:text-white ${
          currentLanguage?.code !== 'zh-cn' ? 'text-[rgba(255,255,255,.5)]' : 'text-white'
        }`}
        onClick={() => handleSelectChange('zh-cn')}
      >
        中文
      </div>
      <hr className="h-6 w-[1px] bg-[rgba(255,255,255,.5)] border-none" />
      <div
        className={`cursor-pointer hover:text-white ${
          currentLanguage?.code !== 'en' ? 'text-[rgba(255,255,255,.5)]' : 'text-white'
        }`}
        onClick={() => handleSelectChange('en')}
      >
        ENG
      </div>
    </div>
  )
}

export default SelectLanguage
