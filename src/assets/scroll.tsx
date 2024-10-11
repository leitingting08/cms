import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Home() {
  const parallaxRef = useRef<any>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const parallaxItems = parallaxRef.current.querySelectorAll('.parallax-item')

      parallaxItems.forEach(
        (
          item: {
            style: { transform: string }
            querySelector: (arg0: string) => { (): any; new (): any; style: { (): any; new (): any; opacity: number } }
          },
          index: number
        ) => {
          const speed = index === 0 ? 0.5 : 0.2 // Different speed for different items
          item.style.transform = `translateY(${scrollY * speed}px)`
          const opacity = 1 - scrollY / 500
          item.querySelector('.txt-wrap').style.opacity = opacity > 0 ? opacity : 0
        }
      )
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="h-[200vh] bg-black">
      <div className="sticky top-0 h-screen" ref={parallaxRef}>
        <div className="parallax-wrap w-full">
          <div className="parallax-item pr1 z-20 relative">
            <div className="clip">
              <div className="bg">
                <div className="img-wrap">
                  <Image src="/images/bg2.png" alt="Decarbonization" />
                </div>
              </div>
              <div className="content">
                <div className="pin">
                  <div className="txt-wrap opacity-100 transition-opacity duration-500">
                    <div className="tit text-white">Decarbonization</div>
                    <p className="desc text-white">
                      We create a positive influence on the planet by developing eco-friendly vessels and reducing
                      carbon emissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax-item pr2 z-10 relative">
            <div className="clip">
              <div className="bg">
                <div className="img-wrap">
                  <Image src="/images/bg3.png" alt="Decarbonization" />
                </div>
              </div>
              <div className="content">
                <div className="pin">
                  <div className="txt-wrap opacity-100 transition-opacity duration-500">
                    <div className="tit text-white">Digitalization</div>
                    <p className="desc text-white">
                      We are pursuing digital innovation to provide optimal operations for the future and develop safe
                      and efficient smart yards.
                    </p>
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
