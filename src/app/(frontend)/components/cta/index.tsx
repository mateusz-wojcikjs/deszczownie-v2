export const Cta = () => {
  return (
    <div className="w-full h-full flex items-center relative min-h-[33vh]">
      <div className="absolute top-0 left-0 bg-secondary-500 w-full h-full z-0 opacity-90"></div>
      <div className="container relative flex flex-col lg:flex-row items-center gap-y-12">
        <div className="basis-1/2">
          <div
            className="max-w-none text-2xl lg:text-4xl lg:leading-normal text-gray-100 font-semibold text-center lg:text-left">
            <p><span>
Dlaczego deszczownie od KMK Agro?</span></p></div>
        </div>
        <div className="basis-1/2">
          <div className="flex gap-6 flex-wrap justify-center"><a
            className="text-gray-100 py-3 px-6 text-xl transition-colors flex items-center gap-x-3 uppercase rounded border-2 w-64 justify-center bg-primary-500 border-primary-500 hover:bg-secondary-500"
            href="/kontakt">Kontakt
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"
                 name="arrow-right"><title>ArrowRight</title>
              <path d="M3 10.5H17" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round"
                    strokeWidth="1.2"></path>
              <path d="M12.5 5.5L17.5 10.5L12.5 15.5" stroke="currentColor" strokeLinecap="square"
                    strokeLinejoin="round" strokeWidth="1.2"></path>
            </svg>
          </a></div>
        </div>
      </div>
    </div>
  )
}
