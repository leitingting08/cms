import React, { useState } from 'react'
import Layout from 'components/Layout'
import { useTranslation } from 'contexts/Localization'
import { Tabs, Tab } from '@mui/material'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState(0)

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Layout isWhite={false}>
      <div className="container m-auto px-4 md:px-0">
        <div className="text-left mb-20 animate-slide-in-bottom">
          <h1 className="text-5xl font-bold mt-10">{t('MASS Forum')}</h1>
          <p className="mt-2">{t('After 3 years, here is a wonderful aftertaste')}</p>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="forum tabs"
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{
            className: 'bg-white h-0.5'
          }}
        >
          <Tab
            label={t('Shanghai. 2023')}
            classes={{
              root: 'text-[rgba(255,255,255,.7)] hover:text-white text-base md:text-xl',
              selected: '!text-white font-bold'
            }}
          />
          <Tab
            label={t('Shanghai. 2024')}
            classes={{
              root: 'text-[rgba(255,255,255,.7)] hover:text-white text-base md:text-xl',
              selected: '!text-white font-bold'
            }}
          />
          <Tab
            label={t('2025 Forum Plan')}
            classes={{
              root: 'text-[rgba(255,255,255,.7)] hover:text-white text-base md:text-xl',
              selected: '!text-white font-bold'
            }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Marquee speed={25} gradientWidth={0} className="relative">
            {new Array(4).fill(' ').map((item, index) => {
              return (
                <Image
                  key={index}
                  src={`/images/forum/forum${index + 1}.jpg`}
                  width={300}
                  height={200}
                  className="w-auto h-[8rem] md:h-[16rem] md:my-4 ml-8 mb-3 md:mb-4"
                  alt="forum"
                />
              )
            })}
          </Marquee>
          <Marquee speed={20} gradientWidth={0} className="relative">
            {new Array(4).fill(' ').map((item, index) => {
              return (
                <Image
                  key={index}
                  src={`/images/forum/forum${index + 5}.jpg`}
                  width={300}
                  height={200}
                  className="w-auto h-[8rem] md:h-[16rem] md:my-4 ml-8 mb-3 md:mb-4"
                  alt="forum"
                />
              )
            })}
          </Marquee>
          <Marquee speed={28} gradientWidth={0} className="relative">
            {new Array(4).fill(' ').map((item, index) => {
              return (
                <Image
                  key={index}
                  src={`/images/forum/forum${index + 9}.jpg`}
                  width={300}
                  height={200}
                  className="w-auto h-[8rem] md:h-[16rem] md:my-4 ml-8 mb-3 md:mb-4"
                  alt="forum"
                />
              )
            })}
          </Marquee>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Marquee speed={20} gradientWidth={0} className="relative">
            {new Array(4).fill(' ').map((item, index) => {
              return (
                <Image
                  key={index}
                  src={`/images/forum/forum${index + 1}.jpg`}
                  width={300}
                  height={200}
                  className="w-auto h-[8rem] md:h-[16rem] md:my-4 ml-8 mb-3 md:mb-4"
                  alt="forum"
                />
              )
            })}
          </Marquee>
          <Marquee speed={25} gradientWidth={0} className="relative">
            {new Array(4).fill(' ').map((item, index) => {
              return (
                <Image
                  key={index}
                  src={`/images/forum/forum${index + 5}.jpg`}
                  width={300}
                  height={200}
                  className="w-auto h-[8rem] md:h-[16rem] md:my-4 ml-8 mb-3 md:mb-4"
                  alt="forum"
                />
              )
            })}
          </Marquee>
          <Marquee speed={28} gradientWidth={0} className="relative">
            {new Array(4).fill(' ').map((item, index) => {
              return (
                <Image
                  key={index}
                  src={`/images/forum/forum${index + 9}.jpg`}
                  width={300}
                  height={200}
                  className="w-auto h-[8rem] md:h-[16rem] md:my-4 ml-8 mb-3 md:mb-4"
                  alt="forum"
                />
              )
            })}
          </Marquee>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="text-left py-20">
            <div className="mb-8">
              <p className="text-[#85878B]">{t('Forum Time')}</p>
              <p className="text-xl">2025.10.08</p>
            </div>
            <div className="mb-8">
              <p className="text-[#85878B]">{t('Forum Address')}</p>
              <p className="text-xl">{t('201, Building B, 3033 East Jinxiu Road, Pudong New Area, Shanghai')}</p>
            </div>
            <div className="text-[#85878B]">
              <p>{t('If you are interested in participating in the forum, please contact')}</p>
              <p>
                {t('E-Mail')}
                <a href="market@marautec.com" className="text-underline">
                  market@marautec.com
                </a>
              </p>
            </div>
          </div>
        </TabPanel>
      </div>
    </Layout>
  )
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && <div className="p-4">{children}</div>}
    </div>
  )
}

export default Home
