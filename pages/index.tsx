
import Link from 'next/link'
import { DarkLayout } from '../components/layout/DarkLayout'
import { Layout } from '../components/layout/Layoout'

export default function Home() {
  //comment test
  return (
    <h1 className={'title'}>Go to <Link href='/about'>About</Link></h1>
  )
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </Layout>
  )
}
