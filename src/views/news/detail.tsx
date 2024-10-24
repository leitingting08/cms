import React, { useState } from 'react'
import Layout from 'components/Layout'
import { useTranslation } from 'contexts/Localization'
import Image from 'next/image'
import { news0Src, prevSrc } from 'utils/icon'

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className="bg-white">
        <div className="container mx-auto p-4 md:px-[15%] text-left text-black">
          <header className="mb-8">
            <h1 className="text-2xl md:text-5xl font-bold mb-2">{t('Opening The "Smart Eye" For Smart Navigation')}</h1>
            <p className="text-gray-500">2024.02.26</p>
          </header>

          {/* Announcement */}
          <div className="p-4 rounded-lg mb-8">
            <p className="font-semibold">
              {t('Mairun Intelligent Technology Announced The Completion Of A 10 Million Yuan A+ Round Of Financing')}
            </p>
            <p className="mt-2">
              {t(`“Faced With Various Challenges In Maritime Navigation, Some Companies Are Trying To Find Solutions Through
              Technical Means Such As Traditional Radar And AIS (Automatic Identification System).”`)}
            </p>
          </div>

          {/* Image */}
          <div className="relative mb-8">
            <Image src={news0Src} alt="Ship" className="w-full rounded-lg shadow-md" />
          </div>

          {/* Content */}
          <div className="text-gray-800 space-y-6">
            <p>
              {t(`In 2021, At The Salon/Roadshow Held By The AI+ Marine Science And Technology Innovation Center, Zhang
              Binghua, Chairman Of Mairun Intelligent Technology (Shanghai) Co., Ltd. (Hereinafter Referred To As
              "Mairun Intelligent Technology"), Relied On The Company's Innovative Technology In The Field Of
              Intelligent Navigation, Successfully Attracted The Attention Of Zhangjiang Science And Technology
              Investment.`)}
            </p>
            <p>
              {t(`In May 2022, Mairun Intelligent Technology Announced The Completion Of A 10 Million Yuan A+ Round Of
              Financing, Led By Zhangjiang Technology Investment. The Success Of This Round Of Financing Is An Important
              Milestone For Myrun Intelligent Technology In The Capital Market, And Also Provides It With Stronger
              Impetus To Promote Innovation In Marine Intelligent Technology.`)}
            </p>
            <p>{t('The Technology Is Mature And Emerges As The Times Require.')}</p>
            <p>
              {t(`Zhang Binghua Studied Shipbuilding Engineering And Automatic Control At Shanghai Jiao Tong University In
              His Early Years, And Then Went To The Norwegian University Of Science And Technology To Study Marine
              Engineering Related Knowledge, And Received A Master's Degree In Business Administration From Manchester
              Business School.`)}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            <div className="flex">
              <Image src={prevSrc} alt="" />
              <button className="text-blue-500 hover:underline ml-2">Previous</button>
            </div>
            <div className="flex">
              <button className="text-blue-500 hover:underline mr-2">Next</button>
              <Image src={prevSrc} alt="" className="rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
