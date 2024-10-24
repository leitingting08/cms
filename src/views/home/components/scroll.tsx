import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import { AnimatedSection } from '../index'
import { bg6Src, daySrc, nightSrc, sliderSrc } from 'utils/icon'
import Image from 'next/image'
import { styled, Slider } from '@mui/material'

export default function Home() {
  const { t } = useTranslation()
  const [selectedVideo, setSelectedVideo] = useState('normal')
  const [recordedScrollY, setRecordedScrollY] = useState(0)
  const parallaxRef = useRef<any>(null)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('01')
  const [len, setLen] = useState('01')
  const videoRef = useRef<any>(null)
  const [sliderValue, setSliderValue] = useState(100)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 3 // 初始时停留在3秒
    }
    const handleTimeUpdate = () => {
      if (videoRef.current.currentTime > 7) {
        videoRef.current.pause()
        videoRef.current.currentTime = 3
      }
    }

    const video = videoRef.current
    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  const handleSliderChange = (_event: any, newValue: any) => {
    const reversedValue = 100 - newValue // 反转值
    setSliderValue(newValue)

    if (videoRef.current) {
      const newTime = 3 + (reversedValue / 100) * 3 // 3.5秒到7.5秒
      videoRef.current.currentTime = newTime
    }
  }

  const PrettoSlider = styled(Slider)({
    color: '#1E72FF',
    '& .MuiSlider-track': {
      border: 'none',
      backgroundColor: 'rgba(255,255,255,.4)'
    },
    '& .MuiSlider-thumb': {
      height: 16,
      width: 16,
      backgroundColor: '#1E72FF',
      border: '2px solid #fff',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit'
      },
      '&::before': {
        display: 'none'
      }
    },
    '& .MuiSlider-rail': {
      backgroundColor: '#fff'
    }
  })

  const handleSwitch = (videoType: string) => {
    setSelectedVideo(videoType)
  }

  useEffect(() => {
    const parallaxWrap = parallaxRef.current
    const parallaxItems = parallaxRef.current.querySelectorAll('.parallax-item')
    const screenHeight = window.innerHeight
    const leng = parallaxItems.length
    setLen(leng < 10 ? `0${leng}` : `${leng}`)
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const wrapTop = parallaxWrap.getBoundingClientRect().top
      let currentSection = 1

      parallaxItems.forEach((item: any, index: any) => {
        if (wrapTop === 0 && !recordedScrollY) {
          setRecordedScrollY(scrollPosition)
        }
        if (recordedScrollY && scrollPosition > recordedScrollY) {
          const scrolled = (scrollPosition - recordedScrollY) / (leng * screenHeight)
          setProgress(scrolled)
          currentSection = Math.floor(scrolled * leng) + 1
          if (wrapTop === 0 && currentSection === index + 1) {
            item.style.height = `${screenHeight - (scrollPosition - recordedScrollY - screenHeight * index)}px`
          }
        }
      })

      setActiveSection(currentSection < 10 ? `0${currentSection}` : `${currentSection}`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [recordedScrollY])

  return (
    <div className="h-[400vh] bg-black relative">
      <div className="sticky top-0 h-[100vh] w-full">
        <div className="absolute left-[5rem] top-1/2 transform -translate-y-1/2 h-48 md:flex flex-col items-center z-50 hidden">
          <div>{activeSection}</div>
          <div className="w-[2px] bg-[rgba(255,255,255,.6)] h-full relative">
            <div
              className="absolute left-0 top-0 w-[2px] bg-white transition-all duration-300"
              style={{ height: `${progress * 100}%` }}
            ></div>
          </div>
          <div>{len}</div>
        </div>
        <div className="parallax-wrap" ref={parallaxRef}>
          <div className="parallax-item pr4 z-30">
            <div className="sticky top-0">
              <div className="clip">
                <div className="bg" />
                <div className="content container m-auto px-4 md:px-16">
                  <div className="pin">
                    <AnimatedSection>
                      <div className="text-4xl md:text-6xl font-bold my-4 md:my-8">{t('Marautec i-EYE')}</div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="md:w-[34rem] text-sm md:text-xl">
                        {t('AI-based Visual Detection Technology for Navigation Safety Solution')}
                      </div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="text-xl font-bold mb-4 absolute top-[13rem] md:top-[14rem] left-0 md:left-10">
                        {t('Complete')}
                      </div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="h-[15rem] md:h-[36rem] invisible" />
                    </AnimatedSection>

                    <ul className="pl-4 text-sm md:text-base">
                      <AnimatedSection>
                        <li className="mb-8 list-disc">
                          {t('360° panoramic view around the ship can be seen, and cover the blind areas.')}
                        </li>
                      </AnimatedSection>
                      <AnimatedSection>
                        <li className="list-disc md:max-w-[36rem]">
                          {t(
                            'In specific scenarios such as docking and undocking, entering and leaving the port, it provides real-time measurement and display of the relative status between the vessel and the shore, such as distance, speed, and angle.'
                          )}
                        </li>
                      </AnimatedSection>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax-item pr3 z-20 bg-[#1059D3]">
            <div className="sticky top-0">
              <div className="clip">
                <div className="bg" />

                <div className="content container m-auto px-4 md:px-16">
                  <div className="pin">
                    <AnimatedSection>
                      <div className="text-4xl md:text-6xl font-bold my-4 md:my-8">{t('Marautec i-EYE')}</div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="md:w-[34rem] text-sm md:text-xl">
                        {t('AI-based Visual Detection Technology for Navigation Safety Solution')}
                      </div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="text-xl font-bold mb-4 absolute top-[13rem] md:top-[14rem] left-0 md:left-10">
                        {t('Clearer')}
                      </div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="flex-end py-12 relative h-[15rem] md:h-[36rem]">
                        <video
                          ref={videoRef}
                          key="4"
                          className="w-auto rounded-2xl h-[12rem] md:h-[30rem]"
                          controls={false}
                          autoPlay={false}
                          muted
                          loop
                        >
                          <source src={'/videos/4.mp4'} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="flex flex-col items-center h-36 justify-between absolute top-1/2 right-1 -translate-y-1/2">
                          <Image src={daySrc} alt="day" />
                          <PrettoSlider
                            orientation="vertical"
                            value={sliderValue}
                            onChange={handleSliderChange}
                            className="my-1"
                            aria-labelledby="vertical-slider"
                            min={0}
                            max={100}
                          />
                          <Image src={nightSrc} alt="night" />
                        </div>
                      </div>
                    </AnimatedSection>

                    <ul className="pl-4 text-sm md:text-base">
                      <AnimatedSection>
                        <li className="mb-8 list-disc">
                          {t('360° panoramic view around the ship can be seen, and cover the blind areas.')}
                        </li>
                      </AnimatedSection>
                      <AnimatedSection>
                        <li className="list-disc md:max-w-[36rem]">
                          {t(
                            'In specific scenarios such as docking and undocking, entering and leaving the port, it provides real-time measurement and display of the relative status between the vessel and the shore, such as distance, speed, and angle.'
                          )}
                        </li>
                      </AnimatedSection>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax-item pr2 z-10">
            <div className="sticky top-0">
              <div className="clip">
                <div className="bg" />
                <div className="content container m-auto px-4 md:px-16">
                  <div className="pin">
                    <AnimatedSection>
                      <div className="text-4xl md:text-6xl font-bold">{t('Marautec i-EYE')}</div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="md:w-[34rem] text-sm md:text-xl">
                        {t('AI-based Visual Detection Technology for Navigation Safety Solution')}
                      </div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="text-xl font-bold mb-4 absolute top-[13rem] md:top-[14rem] left-0 md:left-10">
                        {t('Comprehensive')}
                      </div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="h-[15rem] md:h-[36rem] flex items-center">
                        <div className="relative md:w-[80%] md:ml-[20%] border-2 border-white rounded-2xl">
                          <div className="mb-2 absolute bottom-4 right-[50%] translate-x-[50%] md:translate-x-0 md:right-6 z-10">
                            <div className="bg-[rgba(0,0,0.4)] flex justify-end space-x-2 rounded-xl text-xs md:text-base">
                              <button
                                onClick={() => handleSwitch('normal')}
                                className={`px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl ${
                                  selectedVideo === 'normal'
                                    ? 'bg-[#1059D3] text-white'
                                    : 'text-[rgba(255,255,255,0.6)]'
                                }`}
                              >
                                {t('Normal')}
                              </button>
                              <button
                                onClick={() => handleSwitch('discern')}
                                className={`px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl ${
                                  selectedVideo === 'discern'
                                    ? 'bg-[#1059D3] text-white'
                                    : 'text-[rgba(255,255,255,0.6)]'
                                }`}
                              >
                                {t('Discern')}
                              </button>
                            </div>
                          </div>
                          <div className="border rounded-2xl overflow-hidden">
                            <video
                              key={selectedVideo}
                              className="w-full rounded-2xl h-[14rem] md:h-[28rem] object-cover"
                              controls={false}
                              autoPlay
                              muted
                              loop
                            >
                              <source
                                src={selectedVideo === 'normal' ? '/videos/7.mp4' : '/videos/6.mp4'}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                    <ul className="md:flex gap-8 ml-4 text-sm md:text-base">
                      <AnimatedSection>
                        <li className="mb-8 list-disc">
                          {t(
                            "The product offers an ultra-wide field of view of 180°/225°/360° and high-precision target identification within a range of 3-6 nautical miles, fully displaying the relative situation of the ship's surroundings and nearby targets, such as distance, speed, and angle."
                          )}
                        </li>
                      </AnimatedSection>
                      <AnimatedSection>
                        <li className="list-disc">
                          {t(
                            'Integrated AI visual detection, radar, AIS, E-chart and environmental data from multiple sources onto one screen, comprehensively fusing and displaying key information about surrounding targets, and providing real-time monitoring and early warning for potential high-risk targets.'
                          )}
                        </li>
                      </AnimatedSection>
                      <AnimatedSection>
                        <li className="list-disc">
                          {t(
                            'Overcoming the shortcomings of traditional sensing equipment, Marautec i-EYE has the ability to detect small objects on the water surface and navigational hazards such as bridge piers. This ensures comprehensive control over potential hazards within the navigational safety lookout range, thereby laying the foundation for autonomous navigation.'
                          )}
                        </li>
                      </AnimatedSection>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax-item bg-black pr1 z-0">
            <div className="sticky top-0">
              <div className="clip">
                <div className="bg" />
                <div className="content container m-auto px-4 md:px-16">
                  <div className="pin">
                    <AnimatedSection>
                      <div className="text-4xl md:text-6xl font-bold my-4 md:my-8">{t('Marautec i-EYE')}</div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="md:w-[34rem] text-sm md:text-xl">
                        {t('AI-based Visual Detection Technology for Navigation Safety Solution')}
                      </div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="text-xl font-bold mb-4 absolute top-[13rem] md:top-[14rem] left-0 md:left-10">
                        {t('Communicatable')}
                      </div>
                    </AnimatedSection>
                    <AnimatedSection className="w-full flex-end h-[15rem] md:h-[36rem]">
                      <video
                        key="v4"
                        className="w-auto h-auto md:h-[34rem] rounded-2xl object-cover"
                        controls={false}
                        autoPlay
                        muted
                        loop
                      >
                        <source src="/videos/1.mp4" type="video/mp4" />
                        <Image src={bg6Src} alt="" className="py-12 h-full rounded-2xl" />
                      </video>
                    </AnimatedSection>

                    <ul className="md:grid md:grid-cols-3 gap-8 pl-4 text-sm md:text-base">
                      <AnimatedSection>
                        <li className="mb-8 list-disc">
                          {t(
                            'Through data processing and compression, it can adapt to the video transmission under the condition of low communication quality, and can transmit 1080P high-definition video streams with a minimum bandwidth of 0.2Mbps;'
                          )}
                        </li>
                      </AnimatedSection>
                      <AnimatedSection>
                        <li className="list-disc">
                          {t(
                            'It can adapt to high-definition video transmission under low bandwidth conditions, capable of transmitting 1080P high-definition video streams at a minimum bandwidth of 0.2Mbps, ensuring that shore-side personnel can see the real-time status of the vessel.'
                          )}
                        </li>
                      </AnimatedSection>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
