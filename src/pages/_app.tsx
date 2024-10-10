import '../styles/globals.css'
import { Fragment, useEffect, useState } from 'react'
import Providers from '../contexts/Providers'
import Head from 'next/head'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import PageLoader from 'components/Loader/PageLoader'
import { useRouter } from 'next/router'
// import Script from 'next/script'

function MyApp(props: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="description" content="" />
        <meta name="theme-color" content="#000" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/font.css" />
        <title>marautec</title>
        {/* description */}
        <meta content="" />
      </Head>
      <Providers>
        <App {...props} />
      </Providers>
    </>
  )
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.Layout || Fragment
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000) // 模拟加载时间
  //   return () => clearTimeout(timer)
  // }, [])
  useEffect(() => {
    const handleStart = () => {
      console.log('Route change started')
      // 在这里可以触发加载动画
      setLoading(true)
    }

    const handleComplete = () => {
      console.log('Route change completed')
      // 在这里可以停止加载动画
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])
  return (
    <>
      <PageLoader loading={loading} />
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  )
}

export default MyApp
