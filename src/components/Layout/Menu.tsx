import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'contexts/Localization'
import LINKS from 'utils/links'
import useToast from 'hooks/useToast'

import Image from 'next/image'
export interface MenuProps {
  title: string
  link: string
  icon?: string
  hoverIcon?: string
  desc?: string
  children?: MenuProps[]
  subOpen?: boolean
}

export const LinkWrapper = ({ link, children, className = '' }: any) => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <>
      {link === pathname || !link ? (
        <div className={`${className} cursor-pointer`}>{children}</div>
      ) : link.indexOf('http') !== -1 ? (
        <a target="_blank" rel="noopener noreferrer" href={link} className={className}>
          {children}
        </a>
      ) : (
        <div
          onClick={(e) => {
            router.push(link)
          }}
          className={`${className} cursor-pointer`}
        >
          {children}
        </div>
      )}
    </>
  )
}

const Menu = () => {
  const pathname = usePathname()
  const { t } = useTranslation()
  const { toastError } = useToast()
  const LINK_MAP: MenuProps[] = [
    { title: 'HOME', link: '/' },
    { title: 'PRODUCT', link: '/product' },
    { title: 'CASE', link: '/case' },
    { title: 'FOCUS MASS', link: '/focus' },
    { title: 'MASS FORUM', link: '/forum' },
    { title: 'NEWS', link: '/news' },
    { title: 'CONTACT US', link: LINKS.contact }
  ]
  const [lists, setLists] = useState<MenuProps[]>(LINK_MAP)

  const close = () => {
    LINK_MAP.forEach((item) => (item.subOpen = false))
    setLists(LINK_MAP)
  }

  const handleClick = (e: any, index: number, show: boolean, link: string, children: any) => {
    if (!link && !children) {
      toastError(t('Coming Soon'))
      return
    }
    LINK_MAP.forEach((item, subindex) => {
      if (subindex === index) {
        item.subOpen = show
      }
    })
    setLists(LINK_MAP)
  }

  const [sub, setSubIndex] = useState(-1)

  useEffect(() => {
    setSubIndex(-1)
  }, [])

  const renderMenu = (menus: MenuProps[]) => {
    return (
      <>
        {menus.map(({ link, title, children, subOpen }, index) => (
          <LinkWrapper link={link} key={index} className="relative group">
            <div
              onMouseOver={(e) => handleClick(e, index, true, '1', children)}
              onClick={(e) => handleClick(e, index, !subOpen, link, children)}
              className={`font-primary group-hover:text-white line-h-[6.25rem] md:text-[1.15rem] lg:text-[1.25rem] font-berlin flex-start md:flex-between px-2 md:px-6 py-3 md:p-4 md:h-[6.25rem] inline-block md:flex-center text-left ${
                pathname === link ? 'text-white ' : 'text-[rgba(255,255,255,.5)]'
              }`}
            >
              {t(title)}
            </div>
            {children && children.length && subOpen && (
              <div
                className={`w-full md:px-6 md:absolute top-0 md:top-[5.2rem] left-0 md:rounded-xl md:w-[12rem] z-10`}
              >
                {children.map((subitem, subindex) => {
                  return (
                    <LinkWrapper key={subindex} link={subitem.link} className="w-full md:block hover:md:text-red py-2">
                      <div
                        className={`w-full flex-center md:flex-start md:items-center pl-6 pr-2 md:px-0 py-2 text-left text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] align-middle`}
                        onClick={() => close()}
                        onMouseEnter={() => setSubIndex(subindex)}
                        onMouseLeave={() => setSubIndex(-1)}
                      >
                        {subitem.title ? (
                          <Image src={subitem.hoverIcon || ''} alt="" width={24} height={24} className="mr-2" />
                        ) : null}
                        <span className={`relative ${subindex === sub ? 'text-white' : ''}`}>{t(subitem.title)}</span>
                      </div>
                    </LinkWrapper>
                  )
                })}
              </div>
            )}
          </LinkWrapper>
        ))}
      </>
    )
  }
  return renderMenu(lists)
}

export default Menu
