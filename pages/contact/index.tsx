import { Layout } from "../../components/layout/Layoout"
import Link from 'next/link'


export default function Contact () {

  return(
    <Layout>
      <h1 className={'title'}>Go to <Link href='/'>Home</Link></h1>
    </Layout>
  )
}