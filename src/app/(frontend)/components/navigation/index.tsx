'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

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
                <a href="/kim-jestesmy/">Kim jesteśmy</a>
              </li>
              <li className="mobile-submenu level-menu">
                <a href="https://deszczownie.pl/oferta/deszczownie-szpulowe/">
                  Deszczownie szpulowe
                </a>
              </li>
              <li>
                <a href="https://deszczownie.pl/oferta/deszczownie-mostowe/">Deszczownie mostowe</a>
              </li>
              <li>
                <a href="https://deszczownie.pl/nasze-realizacje/">Nasze realizacje</a>
              </li>
              <li>
                <a className="lg:hidden" href="/kontakt">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex gap-x-8 items-center">
            <a
              className={`button button--primary text-base transition-colors duration-300 ${
                isScrolled ? 'text-black border-black' : 'text-white border-white'
              }`}
              href="/kontakt"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
