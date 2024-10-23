import React from 'react'
import Image from 'next/image'
import { logoSrc } from 'utils/icon'

export interface PageLoaderProps {
  loading?: boolean
}

const PageLoader: React.FC<PageLoaderProps> = ({ loading }) => {
  return (
    <div className="w-full h-full">
      <div className={`${loading ? '' : 'slide-up'} loading-top transition-transform duration-1000`} />
      <div className={`${loading ? '' : 'slide-down'} loading-btm transition-transform duration-1000`} />
      <Image
        src={logoSrc}
        alt=""
        className={`${
          loading ? '' : 'opacity-0'
        } loader h-[3rem] md:h-[4.5rem] w-auto m-auto transition-transform duration-1000`}
      />
    </div>
  )
}

export default PageLoader
