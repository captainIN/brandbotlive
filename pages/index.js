import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import MessageControl from '@components/MessageControl'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>BrandBot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <MessageControl/>
      </main>

    </div>
  )
}
