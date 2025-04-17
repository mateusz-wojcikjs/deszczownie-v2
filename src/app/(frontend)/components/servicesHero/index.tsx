export const ServicesHero = ()  => {
  return (
    <section className="relative w-full bg-gray-100 py-16 px-6 md:px-12 lg:px-24 text-center bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-600 mb-4">
          <a href="/" className="hover:underline">Home</a> / <span className="text-gray-900">Services</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Professional Services
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Explore the range of services we offer to help you achieve your goals.
        </p>
      </div>
    </section>
  );
}
