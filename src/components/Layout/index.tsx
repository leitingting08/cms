import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
import { useState } from 'react'
import { backSrc } from 'utils/icon'
import router from 'next/router'
import Image from 'next/image'
interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  backTitle?: string
  hideHeader?: boolean
  isWhite?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, backTitle, hideHeader = false, isWhite = true }) => {
  const [open, setOpen] = useState(false)
  const handleChange = (state: boolean) => {
    setOpen(state)
  }
  return (
    <div className={`text-center relative min-h-full h-auto w-full overflow-x-hidden`}>
      {!hideHeader ? <PageHeader onChange={handleChange} isWhite={isWhite} /> : null}

      {backTitle ? (
        <div className="flex items-center pl-4 pt-6">
          <Image src={backSrc} alt="back" className="cursor-pointer" onClick={() => router.push('/')} />
          <div className="text-xl ml-2 font-bold">{backTitle}</div>
        </div>
      ) : null}
      <div className={`pb-12 ${isWhite ? 'bg-white' : 'bg-black'}`}>{children}</div>
      <PageFooter isWhite={isWhite} />
    </div>
  )
}

export default Layout
