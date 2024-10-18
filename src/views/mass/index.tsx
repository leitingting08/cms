import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import { useTranslation } from 'contexts/Localization'
import { bg5Src, desc1Src, desc2Src, desc3Src, icon1Src, icon2Src, icon3Src, icon4Src } from 'utils/icon'
import Image from 'next/image'
import { AnimatedSection } from '../home'
import { motion, useAnimation } from 'framer-motion'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const controls = useAnimation()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    controls.start({
      opacity: scrollY > 100 ? 1 : 0,
      scale: scrollY > 100 ? 1 : 0.8,
      transition: { duration: 0.5 }
    })
  }, [scrollY, controls])

  return (
    <Layout>
      <div className={`bg-white text-black text-left pb-0`}>
        <div className="container m-auto sticky top-0 px-4 md:px-0">
          <div className="text-5xl md:text-9xl pt-8 animate-slide-in-bottom">{t('Focus MASS')}</div>
          <div className="my-10 w-full md:w-[36rem] font-bold animate-slide-in-bottom">
            {t(
              'Maritime Autonomous Surface Ships (MASS) refer to vessels capable of operating independently of human intervention to varying degrees.'
            )}
          </div>
          <div className="my-10 w-full md:w-[60rem] animate-slide-in-bottom">
            <p>
              {t(
                'The MASS Code, developed by the International Maritime Organization (IMO), is a set of regulations aimed at providing a regulatory framework for autonomous navigation. Given the potential benefits of MASS in reducing operating costs and enhancing environmental protection, multiple countries are actively engaged in the development of MASS technology.'
              )}
            </p>
            <p className="my-4">
              {t(
                'The non-mandatory MASS Code is expected to be finalized and adopted by May 2025. According to the Maritime Safety Committee (MSC) of the IMO, by 2028, the MSC anticipates beginning the development of mandatory MASS regulations based on the existing non-mandatory guidelines.'
              )}
            </p>
            <p>
              {t(
                'Currently, many nations are taking proactive measures to advance the development of autonomous vessels, leading to substantial progress in legislation, standardization, and the theories, designs, and practices related to smart shipping.'
              )}
            </p>
          </div>
        </div>

        <motion.div animate={controls} initial={{ opacity: 0, scale: 0.8 }} className="m-auto">
          <Image src={bg5Src} style={{ width: '80%', transition: 'width 0.5s ease-out' }} alt="" />
        </motion.div>

        <div className="container m-auto px-4 md:px-0">
          <AnimatedSection>
            <div className="text-2xl md:text-4xl mt-20 mb-12 font-bold w-full md:w-[40rem] leading-20">
              {t(
                'In recent years, Marautec has dedicated itself to participating in and promoting the establishment of relevant standards both domestically and internationally.'
              )}
            </div>
          </AnimatedSection>
          <div className="border-l border-[#0B1018] pl-4 pb-10">
            <AnimatedSection>
              <div className="text-base md:text-xl w-full md:w-[40rem] listdisc">
                {t(
                  'Marautec is the first in the world to propose the “All Around Coverage, AllWeather Conditions, All Processes, Sea-Shore Sharing for All Stakeholders" shipsurrounding situational awareness framework system for MASS'
                )}
              </div>
            </AnimatedSection>
            <div className="md:grid grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white text-cente flex items-center md:block">
                  <AnimatedSection>
                    <Image src={icon1Src} alt="" className="md:m-auto w-[5rem] md:w-[12rem]" />
                  </AnimatedSection>
                  <div className="text-left">
                    <AnimatedSection>
                      <h2 className="text-xl font-semibold">{t('All Around Coverage')}</h2>
                    </AnimatedSection>
                    <AnimatedSection>
                      <p>
                        {t(
                          '360°Situation awareness,no blind area Apply all detection technologies to identify all potential risks in lookout area'
                        )}
                      </p>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white md:text-center flex items-center md:block">
                  <AnimatedSection>
                    <Image src={icon2Src} alt="" className="md:m-auto w-[5rem] md:w-[12rem]" />
                  </AnimatedSection>
                  <div className="text-left">
                    <AnimatedSection>
                      <h2 className="text-xl font-semibold">{t('All Weather Conditions')}</h2>
                    </AnimatedSection>
                    <AnimatedSection>
                      <p>{t('With enhanced visibility in night and foggy conditions for navigation day and night')}</p>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white md:text-center flex items-center md:block">
                  <AnimatedSection>
                    <Image src={icon3Src} alt="" className="md:m-auto w-[5rem] md:w-[12rem]" />
                  </AnimatedSection>
                  <div className="text-left">
                    <AnimatedSection>
                      <h2 className="text-xl font-semibold">{t('All Processes')}</h2>
                    </AnimatedSection>
                    <AnimatedSection>
                      <p>
                        {t(
                          'Form berthing to navigation Extended capability on detection,risk identification, route planning,to automatic controlling'
                        )}
                      </p>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white md:text-center w-full flex items-center md:block">
                  <AnimatedSection>
                    <Image src={icon4Src} alt="" className="md:m-auto w-[5rem] md:w-[12rem]" />
                  </AnimatedSection>
                  <div className="text-left">
                    <AnimatedSection>
                      <h2 className="text-xl font-semibold">{t('All Stakeholders')}</h2>
                    </AnimatedSection>
                    <AnimatedSection>
                      <p>
                        {t(
                          'Enabling shipping companies to view vessel’s surrounding environment in real time from anywhere'
                        )}
                      </p>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex-between mb-8 gap-8">
              <div>
                <AnimatedSection>
                  <p className="mt-4 listdisc">
                    {t(
                      'Marautec is actively communicating with relevant standard-setting units and institutions topromote the development of related technologies and regulations. in April 2024, the “intelligentShip Specifications" by CCS came into effect, with visual enhancement systems included asessential components for the auxiliary navigation class notation, making them a required system.'
                    )}
                  </p>
                </AnimatedSection>
                <div>
                  <AnimatedSection>
                    <p>
                      {t(
                        'On December 5, 2023, Marautec obtained the first principle approval certificate for avisual situational awareness auxiliary navigation system in China, issued by CCS.'
                      )}
                    </p>
                  </AnimatedSection>
                  <AnimatedSection>
                    <p>{t('On October 28, 2024, a approval in principle was granted by the Liberian Registry.')}</p>
                  </AnimatedSection>
                </div>
              </div>
              <AnimatedSection>
                <Image src={desc1Src} alt="Image 1" className="w-[50rem]" />
              </AnimatedSection>
            </div>

            <div className="md:flex-between mb-8 gap-8">
              <div>
                <AnimatedSection>
                  <p className="mt-4 listdisc">
                    {t(
                      'As the representative of IMO MASS rule-making communication Liaison Group, Marautec actively participated in following up IMO MASS rule-making related meetings, and cooperated with relevant units in the industry to release the "MASS Technology Implementation Path Analysis White Paper"'
                    )}
                  </p>
                </AnimatedSection>
                <AnimatedSection>
                  <p>
                    {t(
                      'This white paper starts from the principle of safety equivalence, adopts a risk analysis method, and conducts a qualitative analysis of the technical pathways corresponding to the MASS mode. It comprehensively analyzes the key risk points under various operating modes, provides the boundary conditions and application scenarios for achieving crew-less or partially-manned ship conditions under real-world conditions, and establishes a multi-dimensional argumentation element from technical functions, safety redundancy, maintenance, emergency response, and commercial returns. This framework is used to determine the manning standards process and discusses key advancement directions from the perspectives of verification and legislation, aiming to contribute to the safety objectives and rapid development of intelligent navigation technology.'
                    )}
                  </p>
                </AnimatedSection>
                <div>
                  <AnimatedSection>
                    <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full flex items-center">
                      {t('Download')}
                      <span className="ml-2 bg-black text-white rounded-full inline-block w-8 h-8 leading-8">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8"
                        >
                          <path
                            d="M17.0082 18.912L24.6402 11.28C24.8269 11.0933 25.0802 10.9884 25.3442 10.9884C25.6083 10.9884 25.8615 11.0933 26.0482 11.28C26.2349 11.4667 26.3398 11.72 26.3398 11.984C26.3398 12.2481 26.2349 12.5013 26.0482 12.688L16.8162 21.92C16.6015 22.1273 16.3147 22.2431 16.0162 22.2431C15.7178 22.2431 15.431 22.1273 15.2162 21.92L5.9522 12.704C5.85975 12.6116 5.78642 12.5018 5.73638 12.381C5.68635 12.2602 5.6606 12.1308 5.6606 12C5.6606 11.8693 5.68635 11.7398 5.73638 11.619C5.78642 11.4982 5.85975 11.3885 5.9522 11.296C6.04465 11.2036 6.15441 11.1302 6.2752 11.0802C6.39599 11.0302 6.52546 11.0044 6.6562 11.0044C6.78695 11.0044 6.91641 11.0302 7.0372 11.0802C7.158 11.1302 7.26775 11.2036 7.3602 11.296L14.9922 18.928V3.47202C14.9742 3.33009 14.9866 3.18594 15.0287 3.04918C15.0707 2.91242 15.1414 2.78617 15.236 2.67883C15.3305 2.57149 15.4469 2.48552 15.5773 2.42663C15.7077 2.36774 15.8491 2.33728 15.9922 2.33728C16.1353 2.33728 16.2767 2.36774 16.4071 2.42663C16.5375 2.48552 16.6539 2.57149 16.7485 2.67883C16.843 2.78617 16.9137 2.91242 16.9557 3.04918C16.9978 3.18594 17.0102 3.33009 16.9922 3.47202L17.0082 18.912ZM4.8002 28.208C4.55676 28.1772 4.33294 28.0586 4.1707 27.8745C4.00846 27.6904 3.91895 27.4534 3.91895 27.208C3.91895 26.9626 4.00846 26.7257 4.1707 26.5416C4.33294 26.3575 4.55676 26.2389 4.8002 26.208H27.2002C27.4436 26.2389 27.6675 26.3575 27.8297 26.5416C27.9919 26.7257 28.0815 26.9626 28.0815 27.208C28.0815 27.4534 27.9919 27.6904 27.8297 27.8745C27.6675 28.0586 27.4436 28.1772 27.2002 28.208H4.8002Z"
                            fill="white"
                            stroke="white"
                            stroke-width="0.5"
                          />
                        </svg>
                      </span>
                    </button>
                  </AnimatedSection>
                </div>
              </div>
              <AnimatedSection>
                <Image src={desc2Src} alt="Image 2" className="w-[50rem]" />
              </AnimatedSection>
            </div>

            <div className="md:flex-between mb-8 gap-8">
              <div>
                <AnimatedSection>
                  <p className="mt-4 listdisc">{t('Promote the establishment of a shipping AI data platform')}</p>
                </AnimatedSection>
                <AnimatedSection>
                  <p>
                    {t(
                      'Shipping AI Data Center is an open, sharing platform promoting the application of AI technologies in shipping industries. It was established in World AI Conference in Shanghai on 6th July 2023, with China Association of National Shipbuilding Industries and China Institute of Navigation as its supervisors, and Shanghai Jiao Tong University, Shanghai Maritime University, Dalian Maritime University, Harbin Engineering University, Wuhan University of Technology, and Jimei University as its council members.'
                    )}
                  </p>
                </AnimatedSection>
              </div>
              <AnimatedSection>
                <Image src={desc3Src} alt="Image 3" className="w-[50rem]" />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
