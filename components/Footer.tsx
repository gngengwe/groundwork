export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-base border-t border-ash/8">
      <div className="wrap py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <p
              className="font-serif text-ash mb-2"
              style={{ fontSize: '1.35rem', letterSpacing: '-0.01em' }}
            >
              Groundwork
            </p>
            <p className="text-ash/30 font-sans text-sm">Clarity is the first step.</p>
          </div>

          <nav className="flex flex-wrap gap-6 text-ash/35 font-sans text-sm" aria-label="Footer links">
            {/* TODO: Replace # with real social/contact URLs */}
            <a href="#" className="hover:text-ash/65 transition-colors duration-200">Instagram</a>
            <a href="#" className="hover:text-ash/65 transition-colors duration-200">X / Twitter</a>
            <a href="mailto:hello@ngengwe.com" className="hover:text-ash/65 transition-colors duration-200">Contact</a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-ash/8">
          <p className="text-ash/18 font-sans text-xs">
            © {year} Groundwork. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
