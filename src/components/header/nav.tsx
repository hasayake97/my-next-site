import Text from '@/components/text'
import LinkExt from '@/components/link-ext'

import type { NavListType } from '@/types'

const NavList: NavListType = [
  { label: 'Blog', href: 'https://blog.unot.net/' },
  { label: 'Music', href: '/music' },
]
const Nav = () => {
  return (
    <nav className="sm:mt-0 mt-1">
      <ul className="flex sm:flex-row sm:items-center flex-col items-start">
        {NavList.map((navItem) => (
          <li key={navItem.label} className="list-none sm:mr-8 list-inside last:mr-0 mb-0 mt-2 sm:mt-0">
            <Text className="py-0 sm:text-base text-sm">
              <LinkExt href={navItem.href}>{navItem.label}</LinkExt>
            </Text>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
