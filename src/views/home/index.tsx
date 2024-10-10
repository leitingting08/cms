import React, { useEffect, useRef, useState } from 'react'
import Layout from 'components/Layout'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import Image from 'next/image'
import { arrowbgSrc, bg2Src, bg3Src, startsaySrc, endsaySrc, backSrc } from 'utils/icon'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Autoplay, Scrollbar } from 'swiper/modules'
import Marquee from 'react-fast-marquee'
import useInView from 'hooks/useInView'

function AnimatedSection({ children, delay }: any) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref as any}
      className={`transition-opacity duration-1000 ${
        inView ? `opacity-100 animate-slide-in-bottom animation-delay-[${delay}ms]` : 'opacity-0'
      }`}
    >
      {children}
    </div>
  )
}

const Home: React.FC = () => {
  const { t } = useTranslation()
  const { toastInfo } = useToast()

  const newsItems = [
    {
      title: 'Opening The "Smart Eye" For Smart Navigation',
      date: '2024.07.24',
      image: '/images/news1.png'
    },
    {
      title: 'MyRun Intelligent Technology Extends Its International Communication Reach',
      date: '2024.02.26',
      image: '/images/news1.png'
    },
    {
      title: 'Participated In ISO/TC8/WG10 And China-Korea Autonomous Ship Seminar',
      date: '2023.12.28',
      image: '/images/news1.png'
    },
    {
      title: 'CCS Issues First Situational Awareness Aids To Navigation System Certificate',
      date: '2023.12.05',
      image: '/images/news1.png'
    },
    {
      title: 'Smart Ships For MASS Consensus',
      date: '2023.07.20',
      image: '/images/news1.png'
    }
  ]

  return (
    <Layout>
      <div className="relative w-ful -mt-20 md:-mt-32 h-[calc(100vh-3rem)]">
        <Image src="/bg1.png" alt="" className="relative top-0 left-0 w-full h-full" width={1920} height={1080} />
        <div className="absolute top-0 left-0 w-full h-full flex-center">
          <Image
            src={arrowbgSrc}
            className="absolute bottom-8 md:bottom-16 right-8 md:right-16 arrowScroll w-8"
            alt=""
          />
          <div className="w-[86%] md:w-auto">
            <div className="text-4xl md:text-7xl h-[90px] overflow-hidden">
              <div className="-translate-y-[100%] animate-slide-in-bottom animation-delay-2000">
                {t('Comprehensive, entire process, all shared')}
              </div>
            </div>
            <hr className="h-[1px] my-4 animate-width bg-white" />
            <div className="text-xl md:text-2xl h-[90px] overflow-hidden">
              <div className="-translate-y-[100%] animate-slide-in-top animation-delay-2000">
                {t('Intelligent navigation solutions for MASS')}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(12,35,136,0.7)] h-[3.125rem] flex items-center">
          <div className="bg-[#1059D3] h-full px-4 flex-center">{t('NEWS')}</div>
          <div className="w-full px-4 h-[3.125rem] overflow-hidden bg-[rgba(12,35,136,0.7)]">
            <Swiper
              className="mx-4 h-[3.125rem] overflow-hidden"
              direction="vertical"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false
              }}
              loop={true}
              modules={[Autoplay]}
            >
              <SwiperSlide className="md:w-full text-left leading-[3.125rem] whitespace-nowrap text-ellipsis w-[60%] text-[#BCD5FF]">
                {t(
                  '2024/12/18    Won the first and only visual situational awareness assisted navigation system principle approval certificate issued by CCS in China'
                )}
              </SwiperSlide>
              <SwiperSlide className="md:w-full text-left leading-[3.125rem] whitespace-nowrap text-ellipsis w-[60%]text-[#BCD5FF]">
                {t(
                  '2023/12/18    Won the first and only visual situational awareness assisted navigation system principle approval certificate issued by CCS in China'
                )}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="w-full bg-white pt-32 pb-20 md:pb-40">
        <div className="container m-auto relative md:flex-between px-6 md:px-0">
          <Image src={bg2Src} className="h-72 absolute top-16 left-0" alt="bg" />
          <div className="text-[#1059D3]">
            <AnimatedSection>
              <div className="text-5xl md:text-9xl">{t('About us')}</div>
              <div>{t('Mairun Intelligent Technology (Shanghai) Co., Ltd. ')}</div>
            </AnimatedSection>
          </div>
          <div className="text-[#000] md:w-[40rem] text-left mt-20 md:mt-0">
            <AnimatedSection>
              <p>
                {t(
                  'Was established in 2018. It is the first high-tech and specialized enterprise in China that focuses on the application of artificial intelligence visual perception in the field of intelligent navigation. It provides situational awareness and ship-shore communication solutions for ship intelligent navigation.'
                )}
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <p className="py-10">
                {t(
                  'The company has developed algorithms for many different application scenarios to provide users with safe, efficient and innovative visual intelligent products and full-process solutions. The core technology R&D team accounts for more than 65%, with strong R&D innovation and application capabilities.'
                )}
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <p>
                {t(
                  `Mairun Intelligent Technology's product "Mairun Navigation Eye" effectively solves the perception pain points in the shipping and maritime fields through artificial intelligence technology, and fills the perception defects of existing ship intelligent navigation. It can not only provide ships with situational awareness "visible, clear, full, and visible" system functions, provide ships with assisted driving and safety warning functions, but also meet the "full view, all-weather, full process, and full sharing" requirements for future autonomous driving.`
                )}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <div className="relative">
        <Swiper
          className="h-[40rem] md:h-[50rem] w-full overflow-hidden"
          modules={[Scrollbar]}
          slidesPerView={1}
          direction="vertical"
          scrollbar={{
            hide: false
          }}
        >
          <SwiperSlide className="block relative h-[40rem] bg3 bg bg-contain w-full">
            <Image src={bg3Src} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="md:w-[40rem] relative z-10 p-8 text-left py-20">
              <AnimatedSection>
                <div className="text-4xl md:text-6xl font-bold mb-8">{t('Myrun Navigation Eye')}</div>
                <div>
                  {t(
                    'The ship surrounding situation awareness product independently developed by MyRun Intelligent Technology'
                  )}
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <ul className="pt-40 md:pt-60">
                  <li className="mb-8 list-disc">
                    {t("360° panoramic image of the ship's surroundings, full coverage of blind spots")}
                  </li>
                  <li className="list-disc">
                    {t(
                      'In specific scenarios such as berthing, unberthing, entering and leaving the port, the relative status of the ship and its surroundings, such as distance, speed, angle, etc., is measured and displayed in real time.'
                    )}
                  </li>
                </ul>
              </AnimatedSection>
            </div>
          </SwiperSlide>
          <SwiperSlide className="block relative h-[40rem] bg3 bg bg-contain w-full">
            <Image src={bg2Src} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="md:w-[40rem] relative z-10 p-8 text-left py-20">
              <AnimatedSection>
                <div className="text-4xl md:text-6xl font-bold mb-8">{t('Myrun Navigation Eye')}</div>
                <div>
                  {t(
                    'The ship surrounding situation awareness product independently developed by MyRun Intelligent Technology'
                  )}
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <ul className="pt-40 md:pt-60">
                  <li className="mb-8 list-disc">
                    {t("360° panoramic image of the ship's surroundings, full coverage of blind spots")}
                  </li>
                  <li className="list-disc">
                    {t(
                      'In specific scenarios such as berthing, unberthing, entering and leaving the port, the relative status of the ship and its surroundings, such as distance, speed, angle, etc., is measured and displayed in real time.'
                    )}
                  </li>
                </ul>
              </AnimatedSection>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full bg-white text-black">
        <div className="container m-auto relative md:flex-between text-left px-6 md:px-0">
          <AnimatedSection>
            <div className="text-4xl md:text-8xl md:w-[40rem] mb-8 pt-6">{t('Myrun Navigation Eye')}</div>
            <div className="md:w-[44rem]">
              {t(
                `From its birth to commercialization, the products of MyRun Intelligent Technology are closely linked to the safety of ship driving. Today, many captains use "MyRun Navigation Eye" every day. Let's listen to their stories.`
              )}
            </div>
          </AnimatedSection>
          <div className="md:w-[48rem] py-10 md:ml-10">
            <div className="relative p-8 bg-[#FAFAFA] rounded-2xl w-full mb-4">
              <Image src={startsaySrc} alt="start" className="absolute top-4 left-6 w-10 md:w-12" />
              <Image src={endsaySrc} alt="end" className="absolute bottom-4 right-6 w-10 md:w-12" />
              <AnimatedSection>
                <div className="text-[#1059D3] text-4xl md:text-6xl font-bold ml-6 uppercase">{t('Useful')}</div>
                <div>
                  {t(
                    'In inland coastal areas, radar and AIS systems often face the problem of insufficient recognition rate due to complex environment and target interference. MyRun Navigation Smart Eye can significantly improve the accuracy of target recognition through its excellent visual perception ability, thereby enhancing the safety of navigation.'
                  )}
                </div>
              </AnimatedSection>
            </div>
            <div className="relative p-8 bg-[#FAFAFA] rounded-2xl w-full mb-4">
              <Image src={startsaySrc} alt="start" className="absolute top-4 left-6 w-10 md:w-12" />
              <Image src={endsaySrc} alt="end" className="absolute bottom-4 right-6 w-10 md:w-12" />
              <AnimatedSection>
                <div className="text-[#1059D3] text-4xl md:text-6xl font-bold ml-6 uppercase">{t('EASY')}</div>
                <div>
                  {t(
                    'Provide intuitive and concise real-time images, low-latency system response speed real-time images, provide clear and intuitive decision-making support for crew members, and reduce the labor intensity of crew members'
                  )}
                </div>
              </AnimatedSection>
            </div>
            <div className="relative p-8 bg-[#FAFAFA] rounded-2xl w-full mb-4">
              <Image src={startsaySrc} alt="start" className="absolute top-4 left-6 w-10 md:w-12" />
              <Image src={endsaySrc} alt="end" className="absolute bottom-4 right-6 w-10 md:w-12" />
              <AnimatedSection>
                <div className="text-[#1059D3] text-4xl md:text-6xl font-bold ml-6 uppercase">{t('durable')}</div>
                <div>
                  {t(
                    'Provide intuitive and concise real-time images, low-latency system response speed real-time images, provide clear and intuitive decision-making support for crew members, and reduce the labor intensity of crew members'
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden">
        {['/images/image.png', '/images/image.png', '/images/image.png', '/images/image.png', '/images/image.png'].map(
          (src, index) => (
            <div
              key={index}
              className="relative flex-1 transition-all duration-500 hover:flex-[4] hover:z-10 h-[40rem]"
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
                width={590}
                height={540}
              />
              <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50">
                <p>Description {index + 1}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="bg-[#00296C] text-white py-40 bg bg4 bg-cover">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-20">{t('Why Choose Us')}</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-20">
              <div>
                <h3 className="text-4xl font-bold">20+</h3>
                <p className="mt-2">{t('Research & Development For More Than 20 Years')}</p>
                <p className="text-sm mt-1">
                  {t('We have provided customers with a variety of application scenario solutions.')}
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">100%</h3>
                <p className="mt-2">{t('Improvement In Docking & Navigation Safety')}</p>
                <p className="text-sm mt-1">{t(`Captains' comments on MyRun Marine Eye.`)}</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">{t('No.1')}</h3>
                <p className="mt-2">{t('No.1 In The Industry In Navigation Data')}</p>
                <p className="text-sm mt-1">
                  {t('Accumulated a large amount of surface navigation data and application scenarios.')}
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">{t('7 DAYS')}</h3>
                <p className="mt-2">{t('Installation & Commissioning Time')}</p>
                <p className="text-sm mt-1">
                  {t('Product modularization, flexible and fast installation and commissioning cycle.')}
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">7 * 24</h3>
                <p className="mt-2">{t('Professional Team Service Around The Clock')}</p>
                <p className="text-sm mt-1">{t('Professional team responds quickly throughout the project cycle.')}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <div className="bg-white py-6">
        <Marquee speed={20} gradientWidth={0} className="relative">
          {new Array(100).fill(' ').map((item, index) => {
            return (
              <Image
                key={index}
                src="/images/logo1.png"
                width={300}
                height={200}
                className="w-[10rem] ml-8"
                alt="logo"
              />
            )
          })}
        </Marquee>
      </div>
      <div className="bg-white w-full">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">News &rarr;</h2>
          <Swiper
            modules={[Scrollbar]}
            slidesPerView={4.2}
            scrollbar={{
              hide: false
            }}
          >
            {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"> */}
            {newsItems.map((item, index) => (
              <SwiperSlide key={index} className="bg-white overflow-hidden mr-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={160}
                  width={320}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                  <p className="text-sm text-gray-500 pb-20">{item.date}</p>
                </div>
              </SwiperSlide>
            ))}
            {/* </div> */}
          </Swiper>
        </div>
      </div>
      <div className="md:flex w-full mx-auto">
        <div className="flex-1 bg-[#1059D3] text-white p-8 py-20">
          <AnimatedSection>
            <h2 className="text-4xl font-bold">{t('MISSION')}</h2>
            <p className="mt-4 text-lg">{t('Leading smart shipping & Ensuring shipping safety')}</p>
          </AnimatedSection>
        </div>
        <div className="flex-1 bg-white text-black p-8 py-20">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-gray-300">{t('VISION')}</h2>
            <p className="mt-4 text-lg">{t('Become a global leader in intelligent ship navigation')}</p>
          </AnimatedSection>
        </div>
      </div>
      <div className="w-full relative">
        <div className="md:flex container mx-auto my-8">
          <div className="flex-1 bg-black text-white p-8">
            <AnimatedSection>
              <h2 className="text-4xl md:text-8xl font-bold text-left w-[30rem]">{t('JOIN US NOW!')}</h2>
              <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full flex items-center">
                {t('Contact Us')}
                <span className="ml-2 bg-black text-white rounded-full inline-block w-8 h-8 leading-8">→</span>
              </button>
            </AnimatedSection>
          </div>
          <div className="flex-1 bg-black text-gray-400 p-8 overflow-y-auto max-h-96 text-left relative mask-gradient">
            {/* <div
              className="w-full h-full fixed top-0 left-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #ACACAC 48.5%, rgba(115, 115, 115, 0) 100%);'
              }}
            /> */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-300">2019</h3>
                <p>
                  {t(
                    'Released the first generation of products: 360° panoramic berthing and unberthing assistance system, navigation safety assistance system.'
                  )}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-300">2020</h3>
                <p>
                  {t(
                    'The first commercial ship Huangpu River "Shencheng Light" was officially put into use. Won the first prize in the smart transportation special competition of the third "Zhanhua Cup" 5G application collection competition.'
                  )}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-300">2021</h3>
                <p>
                  {t(
                    `"Meirun Navigation Eye" is officially released. Awarded as Shanghai High-tech Enterprise and won the Excellence Award in the 3rd Central Enterprise Yixing Innovation and Creativity Competition.`
                  )}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-300">2022</h3>
                <p>
                  {t(
                    'Won the title of Shanghai Specialized, Refined and New Enterprise. Selected as one of the "Autonomous Driving and Pilot Projects" application projects of the Ministry of Transport.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={backSrc}
          alt="back to the top"
          className="cursor-pointer absolute right-10 bottom-0 w-10 h-10 md:w-16 md:h-16"
          onClick={() => {
            window.scrollTo({
              left: 0,
              top: 0,
              behavior: 'smooth'
            })
          }}
        />
      </div>
    </Layout>
  )
}

export default Home
