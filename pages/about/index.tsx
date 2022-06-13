
import Link from 'next/link'
import { Layout } from '../../components/layout/Layoout'

export default function About() {

  return (
    <Layout>
      <h1 className={'title'}>Go to <Link href='/'>Home</Link></h1>
    </Layout>
  )
}