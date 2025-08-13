'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ButtonLink } from '../buttonLink/buttonLink.component'
import { ButtonSize, ButtonTheme, IconName } from '@/app/(frontend)/enums'
import { GlobalSetting } from '@/payload-types'
import Image from 'next/image'
import { Icon } from '../icon/icon.component'

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname: string = usePathname()
  const isHome: boolean = pathname === '/' || pathname === '/home'
  const logoUrl: string =
    typeof globalSettings?.navigation?.logo === 'number'
      ? globalSettings?.navigation?.logo?.toString() || ''
      : globalSettings?.navigation?.logo?.url || ''
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

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleDropdownToggle = (itemLabel: string) => {
    setOpenDropdown(openDropdown === itemLabel ? null : itemLabel)
  }

  const handleDropdownClose = () => {
    setOpenDropdown(null)
  }

  const renderMenuItem = (item: MenuItem) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0
    const isDropdownOpen = openDropdown === item.label
    const linkProps = {
      href: item.url,
      ...(item.isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
    }

    return (
      <li
        key={item.label}
        className={`relative group ${hasSubmenu ? 'dropdown-menu' : ''}`}
        onMouseEnter={() => hasSubmenu && setOpenDropdown(item.label)}
        onMouseLeave={() => hasSubmenu && setOpenDropdown(null)}
      >
        <div className="flex items-center gap-1">
          <Link
            {...linkProps}
            className={`transition-colors ${
              isHome && !isScrolled ? 'hover:text-emerald-600' : 'hover:text-primary-500'
            }`}
          >
            {item.label}
          </Link>
          {hasSubmenu && (
            <Icon
              iconName={IconName.Chevron}
              size={12}
              color={isScrolled || !isHome ? '#6B7280' : 'white'}
              className={`transition-transform duration-200 ${isDropdownOpen ? '-rotate-90' : 'rotate-90'}`}
            />
          )}
        </div>
        {hasSubmenu && item.submenu && (
          <ul
            className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50 transition-all duration-200 ${
              isDropdownOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-2'
            }`}
          >
            {item.submenu.map((subItem) => (
              <li key={subItem.label}>
                <Link
                  href={subItem.url}
                  {...(subItem.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={handleDropdownClose}
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

  const renderMobileMenuItem = (item: MenuItem) => {
    const linkProps = {
      href: item.url,
      ...(item.isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
    }

    return (
      <li key={item.label} className="border-b border-gray-200 last:border-b-0">
        <Link
          {...linkProps}
          className="block py-4 px-6 text-lg font-medium hover:text-blue-600 transition-colors"
        >
          {item.label}
        </Link>
        {item.submenu && item.submenu.length > 0 && (
          <ul className="bg-gray-50">
            {item.submenu.map((subItem) => (
              <li key={subItem.label}>
                <Link
                  href={subItem.url}
                  {...(subItem.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="block py-3 px-8 text-base text-gray-600 hover:text-blue-600 transition-colors"
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
    <>
      <nav
        className={`flex justify-center w-full border-b border-gray-50/30 py-4 transition-all duration-300 backdrop-blur-lg ${
          isScrolled && isHome ? 'bg-white shadow-md' : 'bg-transparent'
        } ${isHome ? 'fixed top-0 z-30' : 'sticky top-0 z-30 bg-white shadow-md'}`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="py-3 lg:py-0">
              <Link href="/" rel="home" aria-current="page">
                <Image
                  width="1871"
                  height="252"
                  src={logoUrl}
                  alt="Deszczownie"
                  decoding="async"
                  fetchPriority="high"
                  className="max-w-64 w-full"
                />
              </Link>
            </div>
            <div className="nav-mobile">
              <ul
                className={`nav-links flex gap-4 transition-colors duration-300 hidden lg:flex ${
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

            <div className="hidden lg:flex gap-x-8 items-center">
              <ButtonLink href={contactButtonUrl} theme={ButtonTheme.Secondary}>
                {contactButtonText}
              </ButtonLink>
            </div>

            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 w-80 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto">
              <ul className="py-4">{menuItems.map(renderMobileMenuItem)}</ul>
            </nav>

            <div className="p-6 border-t border-gray-200">
              <ButtonLink
                href={contactButtonUrl}
                theme={ButtonTheme.Secondary}
                className="w-full justify-center"
              >
                {contactButtonText}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
