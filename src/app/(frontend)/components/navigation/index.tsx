'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ButtonLink } from '../buttonLink/buttonLink.component'
import { ButtonSize, ButtonTheme, IconName } from '@/app/(frontend)/enums'
import { GlobalSetting } from '@/payload-types'

interface NavigationProps {
  globalSettings?: GlobalSetting | null
}

type MenuItem = {
  label: string
  url: string
  isExternal?: boolean | null
  submenu?:
    | {
        label: string
        url: string
        isExternal?: boolean | null
        id?: string | null
      }[]
    | null
  id?: string | null
}

export const Navigation = ({ globalSettings }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname: string = usePathname()
  const isHome: boolean = pathname === '/' || pathname === '/home'

  // Default values if global settings are not available
  const logoUrl =
    globalSettings?.navigation?.logoUrl ||
    'https://deszczownie.pl/wp-content/uploads/2024/04/logo.png'
  const menuItems = globalSettings?.navigation?.menuItems || []
  const contactButtonText = globalSettings?.navigation?.contactButtonText || 'Kontakt'
  const contactButtonUrl = globalSettings?.navigation?.contactButtonUrl || '/kontakt'

  useEffect((): (() => void) => {
    const handleScroll: () => void = (): void => {
      setIsScrolled(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return (): void => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderMenuItem = (item: MenuItem) => {
    const linkProps = {
      href: item.url,
      ...(item.isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
    }

    return (
      <li key={item.label} className={item.submenu?.length ? 'mobile-submenu level-menu' : ''}>
        <Link {...linkProps}>{item.label}</Link>
        {item.submenu && item.submenu.length > 0 && (
          <ul className="submenu">
            {item.submenu.map((subItem) => (
              <li key={subItem.label}>
                <Link
                  href={subItem.url}
                  {...(subItem.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <nav
      className={`flex justify-center w-full border-b border-gray-50/30 py-4 transition-all duration-300 backdrop-blur-lg ${
        isScrolled && isHome ? 'bg-white shadow-md' : 'bg-transparent'
      } ${isHome ? 'fixed top-0 z-30' : 'sticky top-0 z-30 bg-white shadow-md'}`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-48 md:w-96 lg:w-48 xl:w-96 py-3 lg:py-0">
            <Link href="/" className="custom-logo-link" rel="home" aria-current="page">
              <img
                width="1871"
                height="252"
                src={logoUrl}
                className="custom-logo"
                alt="Deszczownie"
                decoding="async"
                fetchPriority="high"
              />
            </Link>
          </div>
          <div className="nav-mobile">
            <ul
              className={`nav-links flex gap-3 transition-colors duration-300 ${
                isScrolled || !isHome ? 'text-secondary-500' : 'text-white'
              }`}
            >
              {menuItems.map(renderMenuItem)}
              <li>
                <Link className="lg:hidden" href={contactButtonUrl}>
                  {contactButtonText}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex gap-x-8 items-center">
            <Link
              className={`button button--primary text-base transition-colors duration-300 ${
                isScrolled ? 'text-black border-black' : 'text-white border-white'
              }`}
              href={contactButtonUrl}
            >
              {contactButtonText}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
