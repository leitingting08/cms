import React, { useEffect, useRef } from 'react'

export default function Home() {
  const parallaxRef = useRef<any>(null)

  useEffect(() => {
    const parallaxItems = parallaxRef.current.querySelectorAll('.parallax-item')
    const screenHeight = window.innerHeight
    const scrollY = window.scrollY
    const handleScroll = () => {
      parallaxItems.forEach((item: any, index: any) => {
        const box = item.getBoundingClientRect()
        const offsetTop = box.top

        console.log(`Item ${index}: offsetTop = ${offsetTop}, screenHeight = ${screenHeight}`, scrollY)

        // 确保元素在视口中时应用 transform
        if (index === 0 && offsetTop > -screenHeight && offsetTop < 0) {
          item.style.height = `${screenHeight + offsetTop}px`
        } else {
          item.style.height = `${screenHeight}px`
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="h-[200vh] bg-black relative">
      <div className="parallax-wrap" ref={parallaxRef}>
        <div className="parallax-item pr1 z-20">
          <div className="sticky-content">
            <div className="clip">
              <div className="bg" />
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
        </div>
        <div className="parallax-item pr2 z-10">
          <div className="sticky-content">
            <div className="clip">
              <div className="bg" />
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
