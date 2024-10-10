import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const LazyImage: React.FC<{
  src: string
  className?: string
  [key: string]: any
}> = ({ src, className, ...others }) => {
  const [imgSrc, setImgSrc] = useState('')
  const { ref: inViewRef, inView, entry } = useInView({})
  const ref = useRef<HTMLImageElement>()

  const setRefs = useCallback(
    (node: HTMLImageElement) => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef]
  )
  useEffect(() => {
    if (inView && !imgSrc && ref.current) {
      setImgSrc(src)
    }
  }, [inView, imgSrc, src])
  // if (!imgSrc) return null
  return (
    <Image
      ref={setRefs}
      src={imgSrc}
      className={`${!imgSrc ? 'opacity-0 ' : 'opacity-100 '} ${className}`}
      {...others}
      alt=""
    />
  )
}

export default LazyImage
