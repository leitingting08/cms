import React from 'react'
import Layout from 'components/Layout'
import { useTranslation } from 'contexts/Localization'
import { mapSrc } from 'utils/icon'
import Image from 'next/image'

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className="bg-white text-black py-20">
        <div className="container mx-auto px-4 md:px-16">
          <div className="text-left text-4xl md:text-[130px] md:leading-[130px] font-bold animate-slide-in-bottom py-4 md:py-20">
            {t('Contact Us')}
          </div>
          <div className="md:flex gap-40 animate-slide-in-bottom">
            <Image src={mapSrc} alt="" className="my-8 md:my-0" />
            <div className="text-left pt-12">
              <div className="text-2xl md:text-4xl font-bold">{t('Shanghai, Chaina')}</div>
              <div className="text-lg md:text-2xl my-4 md:my-8">
                {t('201, Building B, 3033 East Jinxiu Road, Pudong New Area, Shanghai')}
              </div>
              <div className="text-base md:text-xl">+86 21 3887 0448</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
