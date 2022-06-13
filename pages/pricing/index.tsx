import { Layout } from "../../components/layout/Layoout"
import Link from 'next/link'

export default function Pricing() {

  return (
    <>
      <h1 className={'title'}>Pricing</h1>
      <h1>Go to <Link href='/'>Home</Link></h1>
    </>
  )
}

Pricing.getLayout = function getLayout(page) {

  return (
    <Layout>
      {page}
    </Layout>
  )
}