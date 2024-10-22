import React, { useCallback, useEffect, useRef, useState } from 'react'
import Layout from 'components/Layout'
import { useTranslation } from 'contexts/Localization'
import Image from 'next/image'
import {
  arrowbgSrc,
  bg2Src,
  bg2mSrc,
  startsaySrc,
  endsaySrc,
  bgvSrc,
  case1Src,
  case2Src,
  case3Src,
  case4Src,
  case5Src
} from 'utils/icon'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import { Autoplay, Scrollbar, Pagination } from 'swiper/modules'
import Marquee from 'react-fast-marquee'
import useInView from 'hooks/useInView'
import MyScroll from './components/scroll'
import Link from 'next/link'

export const AnimatedSection = ({ children, delay, effect = 'animate-slide-in-bottom', className = '' }: any) => {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref as any}
      className={`transition-opacity duration-1000 ${
        inView ? `opacity-100 ${effect} animation-delay-[${delay}ms]` : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

const Home: React.FC = () => {
  const { t } = useTranslation()
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [videoPlay, setVideoPlay] = useState(false)
  const [progress, setProgress] = useState([0, 0, 0])
  const videoRef = useRef<HTMLVideoElement>(null)
  // const videos = ['/videos/5.mp4', '/videos/2.mp4', '/videos/3.mp4']
  const source = [
    {
      video: '/videos/5.mp4',
      title: t('Complete，Clearer, Comprehensive and Communicatable'),
      subtitle: t('AI Visual Perception and Multi-source Data Fusion Technology')
    },
    {
      video: '/videos/2.mp4',
      title: t('All Around Coverage All Processes All Weather Conditions All Stakeholders'),
      subtitle: t('Autonomous Navigation Solutions')
    },
    {
      video: '/videos/3.mp4',
      title: t('Intuitive, Easy-to-use， Durable'),
      subtitle: t('Alerts on High-risk Marine Targets and Assisted Ship Navigation')
    }
  ]

  const handleVideoEnd = () => {
    setProgress((prev) => {
      const newProgress = [...prev]
      newProgress[currentVideoIndex] = 100 // Set progress to 100% when video ends
      return newProgress
    })

    setCurrentVideoIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % source.length
      if (nextIndex === 0) {
        // Reset progress when looping back to the first video
        setProgress([0, 0, 0])
      }
      return nextIndex
    })
  }

  const handleProgress = useCallback(() => {
    if (videoRef?.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress((prev) => {
        const newProgress = [...prev]
        newProgress[currentVideoIndex] = currentProgress
        return newProgress
      })
    }
  }, [currentVideoIndex])

  useEffect(() => {
    const videoElement = videoRef.current
    videoElement?.addEventListener('timeupdate', handleProgress)
    videoElement?.play()

    return () => {
      videoElement?.removeEventListener('timeupdate', handleProgress)
    }
  }, [handleProgress, currentVideoIndex])

  const cardsItems = [
    {
      title: t('COSCO Shipping Lvshui 01'),
      subtitle: '',
      // subtitle: t(
      //   'In specific scenarios such as berthing, unberthing, entering and leaving the port, the relative status of the ship and its surroundings, such as distance, speed, angle, etc., is measured and displayed in real time.'
      // ),
      image: case1Src
    },
    {
      title: t('SHANGDOND NEW ERA” National Energy Group bulk carrier'),
      image: case2Src
    },
    {
      title: t('COSCO Shipping Mudanyuan'),
      image: case3Src
    },
    {
      title: t('SHENCHENG ZHIGUA'),
      image: case4Src
    },
    {
      title: t('COSCO Shipping Yuanjing'),
      image: case5Src
    }
  ]

  const newsItems = [
    {
      title: t('Opening the "smart eye" for smart navigation'),
      date: '2024.07.24',
      image: '/images/news/news1.png',
      id: 0
    },
    {
      title: t('MyRun Intelligent Technology Extends Its International Communication Reach'),
      date: '2024.02.26',
      image: '/images/news/news2.png',
      id: 1
    },
    {
      title: t('Participated In ISO/TC8/WG10 And China-Korea Autonomous Ship Seminar'),
      date: '2023.12.28',
      image: '/images/news/news3.png',
      id: 2
    },
    {
      title: t('CCS Issues First Situational Awareness Aids To Navigation System Certificate'),
      date: '2023.12.05',
      image: '/images/news/news4.png',
      id: 3
    },
    {
      title: t('Smart Ships For MASS Consensus'),
      date: '2023.07.20',
      image: '/images/news/news4.png',
      id: 4
    }
  ]

  return (
    <Layout isWhite={false}>
      <div className="relative w-ful -mt-20 md:-mt-32 h-[calc(100vh-3rem)]">
        <video
          ref={videoRef}
          src={source[currentVideoIndex].video}
          onEnded={handleVideoEnd}
          preload="true"
          loop={false}
          autoPlay={true}
          playsInline={true}
          controls={false}
          muted={true}
          className="relative top-0 left-0 w-full h-[100vh] object-cover"
        />
        <div className="flex space-x-2 mt-4 w-[16rem] absolute bottom-10 left-[50%] -translate-x-[50%] z-10">
          {progress.map((prog, index) => (
            <div key={index} className="flex-1 bg-[rgba(0,0,0,.4)] h-1 rounded-sm">
              <div className="bg-white h-1 rounded" style={{ width: `${prog}%` }}></div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={arrowbgSrc}
            className="absolute bottom-8 md:bottom-16 right-8 md:right-16 arrowScroll w-8"
            alt=""
          />
          <div className="container m-auto text-left pt-80 md:pt-[60vh] px-4 md:px-0">
            <AnimatedSection>
              <div className="text-4xl md:text-7xl overflow-hidden md:w-[50rem]">
                <div>{source[currentVideoIndex].title}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={1000}>
              <div className="text-xl md:text-2xl overflow-hidden mt-4">
                <div>{source[currentVideoIndex].subtitle}</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className="bg-[rgba(12,35,136,0.7)] h-[3.125rem] md:flex-center -mt-[3.125rem] relative z-10">
          <div className="bg-[#1059D3] h-full px-4 flex-center">{t('NEWS')}</div>
          <div className="w-full px-4 md:h-[3.125rem] overflow-hidden bg-[rgba(12,35,136,0.7)] flex-1">
            <Swiper
              className="mx-4 h-[6rem] md:h-[3.125rem] overflow-hidden"
              direction="vertical"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false
              }}
              loop={true}
              modules={[Autoplay]}
            >
              <SwiperSlide className="w-full text-left md:leading-[3.125rem] md:whitespace-nowrap md:text-ellipsis text-[#BCD5FF] py-3 md:py-0">
                {t(
                  '2024/12/18    Won the first and only visual situational awareness assisted navigation system principle approval certificate issued by CCS in China'
                )}
              </SwiperSlide>
              <SwiperSlide className="w-full text-left md:leading-[3.125rem] md:whitespace-nowrap md:text-ellipsis text-[#BCD5FF] py-3 md:py-0">
                {t(
                  '2023/12/18    Won the first and only visual situational awareness assisted navigation system principle approval certificate issued by CCS in China'
                )}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="w-full bg-white pt-32 pb-20 md:pt-44 md:pb-48">
        <div className="container m-auto relative md:flex-between px-6 md:px-0 py-12 md:py-0">
          <Image src={bg2Src} className="w-auto h-[20rem] md:h-72 absolute top-16 left-0 hidden md:block" alt="bg" />
          <Image
            src={bg2mSrc}
            className="h-auto w-60 absolute top-16 left-[50%] -translate-x-[50%] md:hidden"
            alt="bg"
          />
          <div className="text-[#1059D3]">
            <AnimatedSection>
              <div className="text-5xl md:text-9xl uppercase font-bold text-left">{t('About us')}</div>
              <div className="text-xl font-bold text-left my-4">
                {t('Mairun Intelligent Technology (Shanghai) Co., Ltd. ')}
              </div>
            </AnimatedSection>
          </div>
          <div className="text-[#000] md:w-[40rem] text-left mt-8 md:mt-0 hidden md:block">
            <AnimatedSection>
              <p>
                {t(
                  'Specialised in AI enabled visual detection and data fusion technology for maritime industries, Marautec is a leading provider in situational awareness for navigation safety and Maritime Autonomous Surface Ships (MASS).'
                )}
              </p>
              <p className="py-10">
                {t(
                  `Based on integrated data from AI visual detection technology, Radar, AIS, E-chart, and other sensors, Marautec's navigation assistant system, Marautec i-EYE, presents an intuitive, easy-to-use interface to provide a clear, complete and comprehensive view on surrounding situation in all processes for all types of ships in all weather conditions, not only effectively improving navigation safety, but also becoming an essential part for MASS.`
                )}
              </p>
              <p>
                {t(
                  `Marautec i-EYE has now covered functions from berthing to navigation, from enhanced visibilities to sea shore realtime visual communication on most ship types, and has received favorable feedback from leading clients.`
                )}
              </p>
            </AnimatedSection>
          </div>
          <div className="text-[#000] md:w-[40rem] text-left mt-8 md:mt-0 md:hidden">
            <AnimatedSection>
              <p>
                {t(
                  'Specialised in AI enabled visual detection and data fusion technology for maritime industries, Marautec is a leading provider in situational awareness for navigation safety and Maritime Autonomous Surface Ships (MASS).'
                )}
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <p className="py-10">
                {t(
                  `Based on integrated data from AI visual detection technology, Radar, AIS, E-chart, and other sensors, Marautec's navigation assistant system, Marautec i-EYE, presents an intuitive, easy-to-use interface to provide a clear, complete and comprehensive view on surrounding situation in all processes for all types of ships in all weather conditions, not only effectively improving navigation safety, but also becoming an essential part for MASS.`
                )}
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <p>
                {t(
                  `Marautec i-EYE has now covered functions from berthing to navigation, from enhanced visibilities to sea shore realtime visual communication on most ship types, and has received favorable feedback from leading clients.`
                )}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <div id="product">
        <MyScroll />
      </div>
      <div className="w-full bg-white text-black">
        <div className="container m-auto relative md:flex-between text-left px-4 md:px-0 pb-12 min-h-[100vh]">
          <AnimatedSection>
            <div className="text-5xl pr-28 md:pr-0 md:text-8xl md:w-[40rem] mb-8 pt-6 font-bold">
              {t('Marautec i-EYE')}
            </div>
            <div className="hidden md:block">
              <div className="md:w-[44rem] mb-4">
                {t(
                  `From inception to commercialization, Marautec i-EYE has been closely related to the safety of ship driving. Today, many captains use Marautec i-EYE daily , let's listen to their stories.`
                )}
              </div>
              {!videoPlay ? (
                <Image src={bgvSrc} alt="video" className="cursor-pointer" onClick={() => setVideoPlay(true)} />
              ) : (
                <video
                  className="w-full h-[25.5rem] my-8"
                  preload="true"
                  autoPlay={true}
                  controls={true}
                  src="/videos/3.mp4"
                />
              )}
            </div>
          </AnimatedSection>
          <div className="md:w-[48rem] py-10 md:ml-10">
            <div className="relative p-8 bg-[#FAFAFA] rounded-2xl w-full mb-4">
              <Image src={startsaySrc} alt="start" className="absolute top-4 left-6 w-10 md:w-12" />
              <Image src={endsaySrc} alt="end" className="absolute bottom-4 right-6 w-10 md:w-12" />
              <AnimatedSection>
                <div className="text-[#1059D3] text-4xl md:text-6xl font-bold ml-6 uppercase">{t('Intuitive')}</div>
                <div>
                  {t(
                    'In inland and coastal areas, due to complex environments and target interference, radar and AIS often face insufficient identification rates. Marautec i-EYE, with its excellent visual perception capabilities, can significantly improve the accuracy of target identification, thereby enhancing the safety of navigation'
                  )}
                </div>
              </AnimatedSection>
            </div>
            <div className="relative p-8 bg-[#FAFAFA] rounded-2xl w-full mb-4">
              <Image src={startsaySrc} alt="start" className="absolute top-4 left-6 w-10 md:w-12" />
              <Image src={endsaySrc} alt="end" className="absolute bottom-4 right-6 w-10 md:w-12" />
              <AnimatedSection>
                <div className="text-[#1059D3] text-4xl md:text-6xl font-bold ml-6 uppercase">{t('Easy-to-use')}</div>
                <div>
                  {t(
                    'Providing intuitive and real-time imagery, with low-latency system response speeds for real-time images, offering clear and intuitive decision support for crew members and reducing their labor intensity.'
                  )}
                </div>
              </AnimatedSection>
            </div>
            <div className="relative p-8 bg-[#FAFAFA] rounded-2xl w-full mb-4">
              <Image src={startsaySrc} alt="start" className="absolute top-4 left-6 w-10 md:w-12" />
              <Image src={endsaySrc} alt="end" className="absolute bottom-4 right-6 w-10 md:w-12" />
              <AnimatedSection>
                <div className="text-[#1059D3] text-4xl md:text-6xl font-bold ml-6 uppercase">{t('Durable')}</div>
                <div>
                  {t(
                    'Marautec i-EYE can maintain high performance and stability under various harsh conditions, ensuring long-term reliability and low maintenance requirements, which is crucial for maritime equipment operating under extreme conditions.'
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
          <div className="md:hidden">
            <div className="md:w-[44rem]">
              {t(
                `From inception to commercialization, Marautec i-EYE has been closely related to the safety of ship driving. Today, many captains use Marautec i-EYE daily , let's listen to their stories.`
              )}
            </div>
            <video
              className="w-full h-[20rem] my-8"
              preload="true"
              autoPlay={true}
              controls={true}
              src="/video/3.mp4"
            />
          </div>
        </div>
      </div>
      <div id="case">
        <div className="relative md:hidden h-[100vh]">
          <Swiper
            className="overflow-hidden h-full"
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true, el: '.swiper-pagination-mobile' }}
          >
            {cardsItems.map((item, index) => (
              <SwiperSlide key={index} className="relative duration-700 ease-in-out  h-[100vh] transition-all">
                <Image
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                  width={590}
                  height={540}
                />
                <div className="absolute bottom-0 left-0 p-4 text-white text-left pb-10">
                  <p className="text-3xl md:text-5xl">{item.title}</p>
                  <p className="text-base md:text-lg mt-8">{item.subtitle}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="md:hidden swiper-pagination-mobile !absolute !bottom-8 !left-[50%] !-translate-x-[50%] !flex !justify-center !space-x-2 !z-10"></div>
          <style jsx global>
            {`
              .swiper-pagination-mobile .swiper-pagination-bullet {
                width: 20px !important;
                height: 4px !important;
                background-color: #fff !important;
                opacity: 0.4 !important;
                margin: 0 5px !important;
                border-radius: 2px !important;
              }

              .swiper-pagination-mobile .swiper-pagination-bullet-active {
                background-color: #fff !important; /* white */
                opacity: 1 !important;
              }
            `}
          </style>
        </div>
        <div className="relative hidden md:block h-[100vh]">
          <div className="flex overflow-hidden h-full">
            {cardsItems.map((item, index) => (
              <div key={index} className="bg-item relative">
                <Image src={item.image} alt={`Image ${index + 1}`} className="w-full h-[100vh] object-cover" />
                <div className="absolute bottom-0 left-0 p-4 text-white text-left pb-10">
                  <p className="text-3xl md:text-5xl">{item.title}</p>
                  <p className="text-base md:text-lg mt-8">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="swiper-pagination flex justify-center space-x-2 mt-4"></div> */}
      <div className="bg-[#00296C] text-white py-40 bg bg4 bg-cover h-[calc(100vh-10rem)]">
        <div className="container mx-auto px-4 text-center h-full overflow-y-auto flex-col flex-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-20">{t('Why Choose Us')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-20">
            <AnimatedSection>
              <h3 className="text-4xl font-bold">20+</h3>
              <p className="mt-2">
                {t(
                  'We have been deeply engaged in the industry for more than 20 years, providing customers with a variety of application scenario solutions.'
                )}
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <h3 className="text-4xl font-bold">100%</h3>
              <p className="mt-2">{t('All captains endorse berthing and navigation systems on safety improvement')}</p>
            </AnimatedSection>
            <AnimatedSection>
              <h3 className="text-4xl font-bold">{t('No.1')}</h3>
              <p className="mt-2">
                {t('A large number of surface navigation data and application scenarios have been accumulated')}
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <h3 className="text-4xl font-bold">{t('7 DAYS')}</h3>
              <p className="mt-2">
                {t(
                  'The products are modular, with a flexible and fast installation period, and on average, installation and commissioning can be completed in 7 days.'
                )}
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <h3 className="text-4xl font-bold">7 * 24</h3>
              <p className="mt-2">
                {t('A professional service team with rapid response throughout the entire project lifecycle.')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <div className="bg-white py-8">
        <Marquee speed={10} gradientWidth={0} className="relative">
          {new Array(10).fill(' ').map((item, index) => {
            return (
              <Image
                key={index}
                src={`/images/logos/logo${index + 1}.png`}
                width={300}
                height={200}
                className="w-auto h-[4rem] md:my-4 ml-16"
                alt="logo"
              />
            )
          })}
        </Marquee>
      </div>
      <div className="bg-white w-full">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-5xl mb-4 md:mb-8 text-black text-left">News &rarr;</h2>
          <Swiper
            modules={[Scrollbar]}
            slidesPerView={4.2}
            scrollbar={{
              hide: false
            }}
          >
            {newsItems.map((item, index) => (
              <SwiperSlide className="bg-white overflow-hidden mr-4" key={index}>
                <Link href={`/detail/${item.id}`} className="cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={160}
                    width={320}
                    className="w-full h-40 md:h-52 object-cover"
                  />
                  <div className="p-4 text-left">
                    <h3 className="text-lg font-semibold text-black mb-4">{item.title}</h3>
                    <p className="text-sm text-gray-500 pb-20">{item.date}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="md:flex w-full mx-auto">
        <div className="flex-1 bg-white text-black p-8 py-20 hover:text-white group hover:bg8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-9xl font-bold text-[#EBEBEB] uppercase group-hover:text-white">
              {t('MISSION')}
            </h2>
            <p className="mt-4 text-lg md:text-4xl">{t('SmartShipping, DigitalOcean')}</p>
          </AnimatedSection>
        </div>
        <div className="flex-1 bg-white text-black p-8 py-20 hover:text-white group hover:bg8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-9xl font-bold text-[#EBEBEB] uppercase group-hover:text-white">
              {t('Aspiration')}
            </h2>
            <p className="mt-4 text-lg md:text-4xl">
              {t('Aspires to be a global leader in navigation safety and autonomous shipping')}
            </p>
          </AnimatedSection>
        </div>
      </div>
      <div className="w-full relative">
        <div className="md:flex container mx-auto my-8">
          <div className="flex-1 bg-black text-white p-8">
            <AnimatedSection>
              <h2 className="text-4xl md:text-8xl font-bold text-left w-[30rem]">{t('JOIN US NOW!')}</h2>
              <Link href="/contact">
                <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full flex items-center">
                  {t('Contact Us')}
                  <span className="ml-2 bg-black text-white rounded-full inline-block w-8 h-8 leading-8">→</span>
                </button>
              </Link>
            </AnimatedSection>
          </div>
          <div className="flex-1 bg-black text-gray-400 p-8 overflow-y-auto max-h-[30rem] text-left relative mask-gradient py-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-300">2018</h3>
                <p>{t('Marautec was established.')}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-300">2019</h3>
                <p>
                  {t(
                    'Released the first generation of products :360° panoramic Berthing Assistant System, Navigation Safety Assistant system.'
                  )}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-300">2020</h3>
                <p>
                  {t('The first commercial ship on the Huangpu River, "SHENCHENGZHIGUA", was officially put into use.')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-300">2021</h3>
                <p>{t('Marautec i-EYE was officially released.')}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-300">2023</h3>
                <p>
                  {t(
                    'Received the first Principle of Approval for Visual Situation Awareness Assisted Navigation System issued by CCS.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
