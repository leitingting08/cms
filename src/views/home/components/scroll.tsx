import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import { AnimatedSection } from '../index'

export default function Home() {
  const parallaxRef = useRef<any>(null)
  const { t } = useTranslation()
  const [recordedScrollY, setRecordedScrollY] = useState(0);

  useEffect(() => {
    const parallaxWrap = parallaxRef.current
    const parallaxItems = parallaxRef.current.querySelectorAll('.parallax-item')
    const screenHeight = window.innerHeight
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const wrapTop = parallaxWrap.getBoundingClientRect().top

      parallaxItems.forEach((item: any, index: any) => {
        if (wrapTop === 0 && !recordedScrollY) {
            // 记录 window.scrollY 的值
            setRecordedScrollY(scrollPosition);
        }
        // const newHeight = scrollPosition - recordedScrollY + screenHeight * index
        // const newHeight = screenHeight - (scrollPosition - recordedScrollY) - screenHeight * index;
        // console.log('index=', index, 'scrollPosition=', scrollPosition, 'recordedScrollY=', recordedScrollY)
        // // item.style.height = wrapTop === 0 && scrollPosition > recordedScrollY + screenHeight * index ? `${newHeight}px` : `${screenHeight}px`;
        // if(wrapTop === 0 && scrollPosition > recordedScrollY + screenHeight * index) {
        //     item.style.height = `${newHeight < 20 ? 0: newHeight > screenHeight ? screenHeight : newHeight}px`
        // }  else if(wrapTop > 0){ //
        //     item.style.height = `${screenHeight}px`;
        // } else if(wrapTop < -screenHeight) {
        //     item.style.height = index === parallaxItems.length - 1 ? `${screenHeight}px`: '0px';
        // }

      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [recordedScrollY])

  return (
    <div className="h-[400vh] bg-black relative">
      {/* <div className='sticky top-0'> */}
      <div className="parallax-wrap" ref={parallaxRef}>
        <div className="parallax-item bg-black pr1 z-30">
          <div className="sticky-content">
            <div className="clip">
              <div className="bg" />
              <div className="content container m-auto">
                    <div className="pin">
                    <div className="text-4xl md:text-6xl font-bold mb-8">{t('Myrun Navigation Eye')}</div>
                    <div>
                        {t(
                        'The ship surrounding situation awareness product independently developed by MyRun Intelligent Technology'
                        )}
                    </div>
                    <ul className="pt-40 md:pt-60 flex gap-8">
                        <li className="mb-8 list-disc">
                        {t("Through target recognition, core data processing and background compression, it can adapt to high-definition video transmission under low bandwidth conditions and transmit 1080P high-definition video streams at a minimum bandwidth of 0.2Mbps to ensure that shore personnel can see the real-time status of the ship;")}
                        </li>
                        <li className="list-disc">
                        {t(
                          'A graded early warning mechanism can be adopted to analyze and compare various types of data, helping shore managers to better understand and manage fleet operations, effectively control risks, and ensure that the fleet can operate efficiently under the premise of safety.'
                        )}
                        </li>
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
              <AnimatedSection>
              <div className="content container m-auto">
                <div className="pin">
                <div className="text-4xl md:text-6xl font-bold mb-8">{t('Myrun Navigation Eye')}</div>
                    <div>
                        {t(
                        'The ship surrounding situation awareness product independently developed by MyRun Intelligent Technology'
                        )}
                    </div>
                    <ul className="pt-40 md:pt-60 flex gap-8">
                        <li className="mb-8 list-disc">
                        {t("It can provide an ultra-wide viewing angle of 180°/225°/360° and high-precision target recognition within a range of up to 3-6 nautical miles, fully displaying the relative situation of the ship's surrounding environment and surrounding targets.")}
                        </li>
                        <li className="list-disc">
                        {t(
                            'It integrates AI visual perception, radar, AIS, electronic charts, environmental data and other multi-source data on one screen, comprehensively integrates and displays key information of surrounding targets, and conducts real-time monitoring and early warning of potential high-risk targets.'
                        )}
                        </li>
                        <li>{t('It overcomes the shortcomings of traditional sensing equipment, can identify "small, scattered" targets on the water surface and obstacles such as bridge piers, ensures comprehensive control of potential obstacles within the navigation safety observation range, and lays the foundation for autonomous navigation.')}</li>
                    </ul>
                </div>
              </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <div className="parallax-item pr3 z-10 bg-[#1059D3]">
          <div className="sticky-content">
            <div className="clip">
              <div className="bg" />
              <AnimatedSection>
              <div className="content container m-auto">
                <div className="pin">
                <div className="text-4xl md:text-6xl font-bold mb-8">{t('Myrun Navigation Eye')}</div>
                    <div>
                        {t(
                        'The ship surrounding situation awareness product independently developed by MyRun Intelligent Technology'
                        )}
                    </div>
                    <ul className="pt-40 md:pt-60">
                        <li className="mb-8 list-disc">
                        {t("In poor visibility conditions such as rain, fog, ice, snow or insufficient light, the visual enhancement system improves visibility and helps crew members see the surrounding conditions clearly.")}
                        </li>
                        <li className="list-disc">
                        {t(
                            'Target rendering is performed through AI algorithm to enhance target recognition.'
                        )}
                        </li>
                    </ul>
                </div>
              </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <div className="parallax-item pr4 z-0">
          <div className="sticky-content">
            <div className="clip">
              <div className="bg" />
              <AnimatedSection>
              <div className="content container m-auto">
                <div className="pin">
                <div className="text-4xl md:text-6xl font-bold mb-8">{t('Myrun Navigation Eye')}</div>
                    <div>
                        {t(
                        'The ship surrounding situation awareness product independently developed by MyRun Intelligent Technology'
                        )}
                    </div>
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
                </div>
              </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}
