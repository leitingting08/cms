import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import { AnimatedSection } from '../index'
import { bg6Src } from 'utils/icon'
import Image from 'next/image'

export default function Home() {
  const { t } = useTranslation()
  const [selectedVideo, setSelectedVideo] = useState('normal')

  const handleSwitch = (videoType: string) => {
    console.log(`Switching to: ${videoType}`)
    setSelectedVideo(videoType)
  }

  return (
    <div className="h-[400vh] bg-black relative">
      <div className="parallax-wrap">
        <div className="parallax-item bg-black pr1 z-30">
          <div className="sticky-content">
            <div className="clip">
              <div className="bg" />
              <div className="content container m-auto px-4 md:px-0">
                <div className="pin">
                  <AnimatedSection>
                    <div className="text-4xl md:text-6xl font-bold mb-8">{t('Marautec i-EYE')}</div>
                  </AnimatedSection>
                  <AnimatedSection>
                    <div>{t('AI-based Visual Detection Technology for Navigation Safety Solution')}</div>
                  </AnimatedSection>
                  <AnimatedSection>
                    <Image src={bg6Src} alt="" className="my-12" />
                  </AnimatedSection>
                  <AnimatedSection>
                    <div className="text-xl font-bold mb-4">{t('Communicatable')}</div>
                  </AnimatedSection>
                  <ul className="md:flex gap-8 pl-4">
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
        <div className="parallax-item pr2 z-20">
          <div className="sticky-content">
            <div className="clip">
              <div className="bg" />
              <div className="content container m-auto px-4 md:px-0 overflow-y-auto">
                <div className="pin">
                  <AnimatedSection>
                    <div className="text-4xl md:text-6xl font-bold">{t('Marautec i-EYE')}</div>
                  </AnimatedSection>
                  <AnimatedSection>
                    <div>{t('AI-based Visual Detection Technology for Navigation Safety Solution')}</div>
                  </AnimatedSection>
                  <AnimatedSection>
                    <div className="relative md:w-[80%] md:ml-[20%] border-2 border-white my-8 rounded-2xl">
                      <div className="mb-2 absolute bottom-4 right-[50%] translate-x-[50%] md:translate-x-0 md:right-6 z-10">
                        <div className="bg-[rgba(0,0,0.4)] flex justify-end space-x-2 rounded-xl text-xs md:text-base">
                          <button
                            onClick={() => handleSwitch('normal')}
                            className={`px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl ${
                              selectedVideo === 'normal' ? 'bg-[#1059D3] text-white' : 'text-[rgba(255,255,255,0.6)])]'
                            }`}
                          >
                            {t('Normal')}
                          </button>
                          <button
                            onClick={() => handleSwitch('discern')}
                            className={`px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl ${
                              selectedVideo === 'discern' ? 'bg-[#1059D3] text-white' : 'text-[rgba(255,255,255,0.6)])]'
                            }`}
                          >
                            {t('Discern')}
                          </button>
                        </div>
                      </div>
                      <div className="border rounded-2xl overflow-hidden">
                        <video
                          key={selectedVideo}
                          className="w-full rounded-2xl md:h-[16.8rem] h-[14rem]"
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
                  </AnimatedSection>
                  <AnimatedSection>
                    <div className="text-xl font-bold  mb-4">{t('Comprehensive')}</div>
                  </AnimatedSection>
                  <ul className="md:flex gap-8 ml-4">
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
                      <li>
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
        <div className="parallax-item pr3 z-10 bg-[#1059D3]">
          <div className="sticky-content">
            <div className="clip">
              <div className="bg" />

              <div className="content container m-auto px-4 md:px-0">
                <div className="pin">
                  <AnimatedSection>
                    <div className="text-4xl md:text-6xl font-bold mb-8">{t('Marautec i-EYE')}</div>
                  </AnimatedSection>
                  <AnimatedSection>
                    <div>{t('AI-based Visual Detection Technology for Navigation Safety Solution')}</div>
                  </AnimatedSection>
                  <AnimatedSection>
                    <div className="flex-end py-12">
                      <video key="4" className="w-auto rounded-2xl h-[25rem]" controls={false} autoPlay muted loop>
                        <source src={'/videos/4.mp4'} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection>
                    <div className="text-xl font-bold  mb-4">{t('Clearer')}</div>
                  </AnimatedSection>
                  <ul className="pl-4">
                    <AnimatedSection>
                      <li className="mb-8 list-disc">
                        {t('360° panoramic view around the ship can be seen, and cover the blind areas.')}
                      </li>
                    </AnimatedSection>
                    <AnimatedSection>
                      <li className="list-disc">
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
        <div className="parallax-item pr4 z-0">
          <div className="sticky-content">
            <div className="clip">
              <div className="bg" />
              <div className="content container m-auto px-4 md:px-0">
                <div className="pin">
                  <AnimatedSection>
                    <div className="text-4xl md:text-6xl font-bold mb-8">{t('Marautec i-EYE')}</div>
                  </AnimatedSection>
                  <AnimatedSection>
                    <div>{t('AI-based Visual Detection Technology for Navigation Safety Solution')}</div>
                  </AnimatedSection>
                  <AnimatedSection>
                    <div className="h-[25rem] invisible" />
                  </AnimatedSection>
                  <AnimatedSection>
                    <div className="text-xl font-bold mb-4">{t('Complete')}</div>
                  </AnimatedSection>
                  <ul className="pl-4">
                    <AnimatedSection>
                      <li className="mb-8 list-disc">
                        {t('360° panoramic view around the ship can be seen, and cover the blind areas.')}
                      </li>
                    </AnimatedSection>
                    <AnimatedSection>
                      <li className="list-disc">
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
      </div>
    </div>
  )
}
