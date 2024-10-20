import React, { useState } from 'react'
import Layout from 'components/Layout'
import { useTranslation } from 'contexts/Localization'
import { news0Src, news1Src, news2Src, news3Src } from 'utils/icon'
import Image from 'next/image'
import Pagination from './components/pagenation'
import Link from 'next/link'

export const newsItems = [
  {
    date: '2024.07.24',
    title: "Opening The 'Smart Eye' For Smart Navigation",
    image: news1Src,
    id: 0
  },
  {
    date: '2024.02.26',
    title: 'MyRun Intelligent Technology Extends Its International Communication Reach',
    image: news2Src,
    id: 1
  },
  {
    date: '2023.12.28',
    title: 'Participated In ISO/TC8/WG10 And China-Korea Autonomous Ship Seminar',
    image: news3Src,
    id: 2
  },
  {
    date: '2023.12.05',
    title: 'CCS Issues First Situational Awareness Aids To Navigation System Certificate',
    image: news0Src,
    id: 3
  },
  {
    date: '2023.07.20',
    title: 'Smart Ships For MASS: Progress And Consensus',
    image: news0Src,
    id: 4
  },
  {
    date: '2023.06.14',
    title: 'MyRun Intelligent Technology Extends Its International Communication Reach',
    image: news0Src,
    id: 5
  }
]

const Home: React.FC = () => {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 9 // 假设有9页

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // 在这里可以添加逻辑来加载不同页的数据
  }

  return (
    <Layout>
      <div className="bg-white">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-6 animate-slide-in-bottom text-black text-left">News</h1>
          <div className="md:grid grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <Link href={`/detail/${item.id}`} key={index}>
                <div className="bg-white rounded-lg mb-4 overflow-hidden animate-slide-in-bottom">
                  <Image src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">{t(item.date)}</p>
                    <h2 className="text-lg font-semibold">{t(item.title)}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </Layout>
  )
}

export default Home
