import React from 'react'
import { backSrc, backbSrc, logoSrc, qrcodeSrc } from 'utils/icon'
import Image from 'next/image'
import { useTranslation } from 'contexts/Localization'

interface PageFooterProps {
  isWhite?: boolean
}

const PageFooter: React.FC<PageFooterProps> = ({ isWhite = true }) => {
  const { t } = useTranslation()
  return (
    <div className="relative bottom-0 left-0 w-full px-6 md:px-0">
      <Image
        src={isWhite ? backbSrc : backSrc}
        alt="back to the top"
        className="cursor-pointer absolute right-10 -top-16 w-10 h-10 md:w-12 md:h-12"
        onClick={() => {
          console.log(window)
          window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
          })
        }}
      />
      <div className="container m-auto">
        <div className="md:flex-between py-12">
          <div className="text-[#999] text-left py-4 md:py-0">
            <Image src={logoSrc} alt="logo" className="md:w-56 mb-4" />
            <div>{t('201, Building B, No. 3033, Jinxiu East Road, Pudong New Area, Shanghai')}</div>
            <div className="flex">
              <div className="mr-2">{t('E-Mail')}</div>
              <a href="mailto:market@marautec.com" className="underline underline-offset-1">
                market@marautec.com
              </a>
            </div>
            <div>{t('Phone Head Office 021-38870448')}</div>
          </div>
          <Image src={qrcodeSrc} alt="logo" className="w-36 h-36 m-auto md:m-0" />
        </div>
        <div className="md:flex-between border-t border-[#6B6B6B] py-6 text-left">
          <div className="md:flex gap-4 text-[#A1A1A1] mb-4">
            <div>{t('Privacy policy')}</div>
            <div>{t('Audio-visual information processing equipment operation and management policy')}</div>
          </div>
          <div className="text-[#999]">
            {t('Copyright © 2024  Mairun Intelligent Technology (Shanghai) Co., Ltd. All Rights Reserved.')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageFooter
