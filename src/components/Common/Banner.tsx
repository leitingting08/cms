import React from 'react'
import Image from 'next/image'

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string
}

const Banner: React.FC<BannerProps> = ({ image, children }) => {
  return (
    <div className="w-full relative">
      <Image src={image} alt="banner" />
      {children}
    </div>
  )
}

export default Banner
