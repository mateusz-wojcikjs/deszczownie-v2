'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LinkBuilder } from '../../../../utils/linkBuilder/linkBuilder.util'

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname: string = usePathname()
  const isHome: boolean = pathname === '/' || pathname === '/home'

  useEffect((): (() => void) => {
    const handleScroll: () => void = (): void => {
      setIsScrolled(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return (): void => window.removeEventListener('scroll', handleScroll)
  }, [])

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
                src="https://deszczownie.pl/wp-content/uploads/2024/04/logo.png"
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
              <li>
                <Link href="/kim-jestesmy/">Kim jesteśmy</Link>
              </li>
              <li className="mobile-submenu level-menu">
                <Link href={LinkBuilder.offers.category('deszczownie-szpulowe')}>
                  Deszczownie szpulowe
                </Link>
              </li>
              <li>
                <a href={LinkBuilder.offers.category('deszczownie-mostowe')}>Deszczownie mostowe</a>
              </li>
              <li>
                <Link href={LinkBuilder.caseStudies.base()}>Nasze realizacje</Link>
              </li>
              <li>
                <Link className="lg:hidden" href="/kontakt">
                  Kontakt
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
              href="/kontakt"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
