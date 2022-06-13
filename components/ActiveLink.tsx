import Link from "next/link";
import { useRouter } from 'next/router'

const activeStyle = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink = ({text, href}) => {

  const {asPath} = useRouter();

  return(
    <Link href={href}>
      <a style={asPath === href ? activeStyle : null}>{text}</a>
    </Link>
      
  )
}