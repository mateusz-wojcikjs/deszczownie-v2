import Link from 'next/link'
import { FC, JSX } from 'react'

export const Footer: FC = (): JSX.Element => {
  return (
    <footer className="bg-linear-to-bl from-gray-50 to-slate-50">
      <div className="container text-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="basis-4/12">
            <div className="mb-6">
              <Link className="inline-block" href="/"></Link>
              <Link
                href="https://deszczownie.pl/"
                className="custom-logo-link"
                rel="home"
                aria-current="page"
              >
                <img
                  width="1871"
                  height="252"
                  src="https://deszczownie.pl/wp-content/uploads/2024/04/logo.png"
                  className="custom-logo"
                  alt="Deszczownie"
                  decoding="async"
                />
              </Link>
            </div>

            <div className="mb-6">
              <h5 className="text-xl font-semibold text-secondary-500 mb-2">KMK Agro Sp. J. </h5>
              <p className="text-secondary-500">ul. Poznańska 20, Brodowo 63-000 Środa Wlkp. </p>
              <p className="text-secondary-500">NIP 786-15-72-061 </p>
            </div>

            <div className="mb-6">
              <h5 className="text-xl font-semibold text-secondary-500 mb-2">Dane kontaktowe</h5>
              <ul>
                <li>
                  <Link
                    className="text-secondary-500 transition-colors hover:text-primary-500"
                    href="tel:605331418"
                  >
                    605 331 418{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-secondary-500 transition-colors hover:text-primary-500"
                    href="mailto:kontakt@kmkagro.com"
                  >
                    kontakt@kmkagro.com{' '}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="text-xl font-semibold text-secondary-500">Social media</h5>
              <div className="flex gap-x-2 mt-4">
                <a className="group" href="https://www.facebook.com/KMKAgro2" target="_blank">
                  <svg
                    className="fill-secondary transition-colors duration-300 group-hover:fill-primary"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16"></rect>
                    <path
                      fill="white"
                      d="M17.3334 16.9999H19.0001L19.6667 14.3333H17.3334V12.9999C17.3334 12.3137 17.3334 11.6666 18.6667 11.6666H19.6667V9.42665C19.4496 9.39782 18.6287 9.33325 17.762 9.33325C15.9523 9.33325 14.6667 10.4378 14.6667 12.4664V14.3333H12.6667V16.9999H14.6667V22.6666H17.3334V16.9999Z"
                    ></path>
                  </svg>
                </a>
                <a className="group" href="https://www.facebook.com/KMKAgro2" target="_blank">
                  <svg
                    className="fill-secondary transition-colors duration-300 group-hover:fill-primary"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16"></rect>
                    <path
                      d="M16.6854 9.33398C17.4357 9.33522 17.8159 9.33919 18.1444 9.34897L18.2738 9.3532C18.4233 9.35852 18.5707 9.36518 18.7485 9.37352C19.4579 9.40629 19.9419 9.51852 20.3669 9.68352C20.8063 9.85296 21.1774 10.0819 21.5479 10.4524C21.9179 10.823 22.1469 11.1952 22.3169 11.6335C22.4813 12.058 22.5935 12.5424 22.6269 13.2519C22.6348 13.4296 22.6412 13.5771 22.6465 13.7266L22.6507 13.856C22.6604 14.1845 22.6649 14.5647 22.6663 15.315L22.6668 15.8121C22.6669 15.8729 22.6669 15.9355 22.6669 16.0002L22.6668 16.1883L22.6664 16.6854C22.6651 17.4357 22.6612 17.8159 22.6514 18.1444L22.6471 18.2738C22.6419 18.4233 22.6352 18.5707 22.6269 18.7485C22.5941 19.4579 22.4813 19.9419 22.3169 20.3669C22.1474 20.8063 21.9179 21.1774 21.5479 21.5479C21.1774 21.9179 20.8046 22.1469 20.3669 22.3169C19.9419 22.4813 19.4579 22.5935 18.7485 22.6269C18.5707 22.6348 18.4233 22.6412 18.2738 22.6465L18.1444 22.6507C17.8159 22.6604 17.4357 22.6649 16.6854 22.6663L16.1883 22.6668C16.1275 22.6669 16.0649 22.6669 16.0002 22.6669L15.8121 22.6668L15.315 22.6664C14.5647 22.6651 14.1845 22.6612 13.856 22.6514L13.7266 22.6471C13.5771 22.6419 13.4296 22.6352 13.2519 22.6269C12.5424 22.5941 12.0591 22.4813 11.6335 22.3169C11.1946 22.1474 10.823 21.9179 10.4524 21.5479C10.0819 21.1774 9.85352 20.8046 9.68352 20.3669C9.51852 19.9419 9.40685 19.4579 9.37352 18.7485C9.3656 18.5707 9.35914 18.4233 9.3539 18.2738L9.34971 18.1444C9.33996 17.8159 9.33551 17.4357 9.33407 16.6854L9.33398 15.315C9.33522 14.5647 9.33919 14.1845 9.34897 13.856L9.3532 13.7266C9.35852 13.5771 9.36518 13.4296 9.37352 13.2519C9.40629 12.5419 9.51852 12.0585 9.68352 11.6335C9.85296 11.1946 10.0819 10.823 10.4524 10.4524C10.823 10.0819 11.1952 9.85352 11.6335 9.68352C12.0585 9.51852 12.5419 9.40685 13.2519 9.37352C13.4296 9.3656 13.5771 9.35914 13.7266 9.3539L13.856 9.34971C14.1845 9.33996 14.5647 9.33551 15.315 9.33407L16.6854 9.33398ZM16.0002 12.6669C14.1583 12.6669 12.6669 14.1599 12.6669 16.0002C12.6669 17.8421 14.1599 19.3335 16.0002 19.3335C17.8421 19.3335 19.3335 17.8405 19.3335 16.0002C19.3335 14.1583 17.8405 12.6669 16.0002 12.6669ZM16.0002 14.0002C17.1048 14.0002 18.0002 14.8953 18.0002 16.0002C18.0002 17.1048 17.1051 18.0002 16.0002 18.0002C14.8956 18.0002 14.0002 17.1051 14.0002 16.0002C14.0002 14.8956 14.8953 14.0002 16.0002 14.0002ZM19.5002 11.6669C19.0407 11.6669 18.6669 12.0401 18.6669 12.4996C18.6669 12.9591 19.0401 13.333 19.5002 13.333C19.9597 13.333 20.3335 12.9597 20.3335 12.4996C20.3335 12.0401 19.9591 11.6663 19.5002 11.6669Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="basis-1/4 md:pt-24">
            <div className="footer-links">
              <h5 className="text-xl font-semibold text-secondary-500 mb-2">Kim jesteśmy</h5>
              <ul>
                <li>
                  <Link
                    className="text-secondary-500 transition-colors hover:text-primary-500"
                    href="/kim-jestesmy"
                  >
                    Dlaczego Deszczownie od KMK Agro
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <h5 className="text-xl font-semibold text-secondary-500 mb-2">Oferta</h5>
              <ul>
                <li>
                  <a
                    className="text-secondary-500 transition-colors hover:text-primary-500"
                    href="https://deszczownie.pl/oferta/deszczownie-szpulowe/"
                  >
                    Deszczownie szpulowe
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary-500 transition-colors hover:text-primary-500"
                    href="https://deszczownie.pl/oferta/deszczownie-mostowe/"
                  >
                    Deszczownie mostowe
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary-500 transition-colors hover:text-primary-500"
                    href="https://deszczownie.pl/oferta/pompy/"
                  >
                    Pompy
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary-500 transition-colors hover:text-primary-500"
                    href="https://deszczownie.pl/oferta/armatura/"
                  >
                    Armatura
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary-500 transition-colors hover:text-primary-500"
                    href="https://deszczownie.pl/oferta/zraszacze/"
                  >
                    Zraszacze
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-1/4 md:pt-24">
            <div className="footer-links">
              <h5 className="text-xl font-semibold text-secondary-500 mb-2">Deszczownie</h5>
              <ul>
                <li>
                  <a
                    className="text-secondary-500 transition-colors hover:text-primary-500"
                    href="https://deszczownie.pl/oferta/deszczownie-szpulowe/model-gx/"
                  >
                    Model GX
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary-500 transition-colors hover:text-primary-500"
                    href="https://deszczownie.pl/oferta/deszczownie-szpulowe/model-xj/"
                  >
                    Model XJ
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary-500 transition-colors hover:text-primary-500"
                    href="https://deszczownie.pl/oferta/deszczownie-szpulowe/model-xjm/"
                  >
                    Model XJM
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary-500 transition-colors hover:text-primary-500"
                    href="https://deszczownie.pl/oferta/deszczownie-szpulowe/model-speedy-rain/"
                  >
                    Model Speedy Rain
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-1/4 md:pt-24 mb-12 md:mb-0">
            <div className="footer-links">
              <h5 className="text-xl font-semibold text-secondary-500">
                <Link className="transition-colors hover:text-primary-500" href="/nasze-realizacje">
                  Nasze realizacje
                </Link>
              </h5>
              <h5 className="text-xl font-semibold text-secondary-500">
                <Link className="transition-colors hover:text-primary-500" href="/kontakt">
                  Kontakt
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-dark opacity-80"></div>
        <div className="flex flex-col justify-end pb-12 pt-8 text-xxs md:flex-row text-gray-dark">
          <div className="basis-1/2">
            <p>
              COPYRIGHT © {new Date().getFullYear()} KMK Agro Deszczownie. All Rights Reserved.
            </p>
          </div>
          <div className="my-4 basis-1/2 flex flex-col md:justify-end gap-4 sm:flex-row md:my-0">
            <Link
              className="relative after:absolute after:block after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 after:content-[''] after:hover:w-full"
              href="/polityka-prywatnosci"
            >
              Polityka Prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
