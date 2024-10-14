import React from 'react'
import Layout from 'components/Layout'
import { useTranslation } from 'contexts/Localization'
import { bg5Src, desc1Src, desc2Src, desc3Src, icon1Src, icon2Src, icon3Src, icon4Src } from 'utils/icon'
import Image from 'next/image'

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className='bg-white text-black text-left'>
        <div className='container m-auto'>
          <div className='text-9xl'>{t('Focus MASS')}</div>
          <div>{t('Maritime Autonomous Surface Ships (MASS) refer to vessels capable of operating independently of human intervention to varying degrees.')}</div>
          <div>
            <div>{t('The MASS Code, developed by the International Maritime Organization (IMO), is a set of regulations aimed at providing a regulatory framework for autonomous navigation. Given the potential benefits of MASS in reducing operating costs and enhancing environmental protection, multiple countries are actively engaged in the development of MASS technology. ')}</div>
            <div>{t('The non-mandatory MASS Code is expected to be finalized and adopted by May 2025. According to the Maritime Safety Committee (MSC) of the IMO, by 2028, the MSC anticipates beginning the development of mandatory MASS regulations based on the existing non-mandatory guidelines.')}</div>
            <div>{t('Currently, many nations are taking proactive measures to advance the development of autonomous vessels, leading to substantial progress in legislation, standardization, and the theories, designs, and practices related to smart shipping.')}</div>
          </div>
        </div>
        <Image src={bg5Src} className='w-[80%] m-auto' alt='' />
        <div className='container m-auto pb-40'>
          <div className='text-4xl mt-20 mb-12 font-bold w-[40rem] leading-20'>{t('In recent years, Marautec has dedicated itself to participating in and promoting the establishment of relevant standards both domestically and internationally.')}</div>
          
           <div className='border-l border-[#0B1018]'>
           <div className='text-xl w-[40rem]'>{t('We have pioneered a comprehensive situational awareness framework for MASS, characterized by "All Around Coverage,All Weather Conditions,All Processes,Sea-Shore Sharing for All Stakeholders"')}</div>
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white text-center">
                  <Image src={icon1Src} alt='' className='m-auto' />
                  <h2 className="text-xl font-semibold">{t('All Around Coverage')}</h2>
                  <p>{t('All-weather, all-process, and all-stakeholder coverage.')}</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white text-center">
                <Image src={icon2Src} alt='' className='m-auto' />
                  <h2 className="text-xl font-semibold">{t('All Weather Conditions')}</h2>
                  <p>{t('Ensuring comprehensive coverage in any condition.')}</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white text-center">
                <Image src={icon3Src} alt='' className='m-auto' />
                  <h2 className="text-xl font-semibold">{t('All Processes')}</h2>
                  <p>{t('Comprehensive support for all processes.')}</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white text-center">
                <Image src={icon4Src} alt='' className='m-auto' />
                  <h2 className="text-xl font-semibold">{t('All Stakeholders')}</h2>
                  <p>{t('Inclusive of every stakeholder.')}</p>
                </div>
              </div>
            </div>

            <div className="flex-between mb-8 gap-8">
              <p className="mt-4">{t('We are actively engaging with relevant standard-setting organizations and institutions to promote the development of associated technologies and regulations. The "Smart Ship Standards" from CCS will come into effect in April 2024, incorporating visual enhancement systems as essential components for auxiliary navigation classification symbols.')}</p>
              <Image src={desc1Src} alt="Image 1" className="w-[50rem]" />
            </div>

            <div className="flex-between mb-8 gap-8">
              <p className="mt-4">{t('As the representative of IMO MASS rule-making communication Liaison Group, we actively participated in following up IMO MASS rule-making related meetings, and cooperated with relevant units in the industry，Publish 《XXXX WHITE PAPER》')}</p>
              <Image src={desc2Src} alt="Image 2" className="w-[50rem]" />
            </div>

            <div className="flex-between mb-8 gap-8">
              <div>
                <p className="mt-4">{t('Promote the establishment of a shipping AI data platform')}</p>
                <p>{t('Shipping AI Data Center is an open, sharing platform promoting the application of AI technologies in shipping industries. It was established in World AI Conference in Shanghai on 6th July 2023, with China Association of National Shipbuilding Industries and China Institute of Navigation as its supervisors, and Shanghai Jiao Tong University, Shanghai Maritime University, Dalian Maritime University, Harbin Engineering University, Wuhan University of Technology, and Jimei University as its council members.')}</p>
              </div>
              <Image src={desc3Src} alt="Image 3" className="w-[50rem]" />
            </div>
           </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
