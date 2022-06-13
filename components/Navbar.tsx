import Link from 'next/link'
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {

  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map( (item, index) => <ActiveLink key={index} href={item.href} text={item.text} />)
      }
    </nav>
  )
}