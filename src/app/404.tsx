import Link from 'next/link'
import { ButtonLink } from './(frontend)/components'

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center px-6 py-12">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse">
            404
          </h1>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Strona nie została znaleziona
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6">
            <svg viewBox="0 0 128 128" className="w-full h-full text-gray-400" fill="currentColor">
              <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 112c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" />
              <path d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" />
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <ButtonLink href="/" className="inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Wróć do strony głównej
          </ButtonLink>

          <Link
            href="/offers"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Zobacz oferty
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Potrzebujesz pomocy? Skontaktuj się z nami:</p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Kontakt
            </Link>
            <Link
              href="/case-studies"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Realizacje
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
