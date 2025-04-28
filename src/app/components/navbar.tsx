'use client'

import { useEffect, useState } from 'react'
import { InstagramLogo, LinkedinLogo } from 'phosphor-react'

const Navbar = () => {
  const sections = ['sobre', 'atuacao', 'premiacoes', 'compliance', 'equipe', 'blog', 'contato']

  const sectionTitles: Record<string, string> = {
    sobre: 'SOBRE',
    atuacao: 'ATUAÇÃO',
    premiacoes: 'CONQUISTAS',
    compliance: 'COMPLIANCE',
    equipe: 'EQUIPE',
    blog: 'BLOG',
    contato: 'CONTATO',
  }

  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let current = ''
      sections.forEach((section) => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section
          }
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth',
      })
      setIsMobileMenuOpen(false)
    }
  }

  const renderNavItems = () =>
    sections.map((section) => (
      <button
        key={section}
        onClick={() => scrollToSection(section)}
        className={`cursor-pointer transition-all ${
          activeSection === section ? 'font-bold' : ''
        } hover:opacity-80`}
      >
        {sectionTitles[section]}
      </button>
    ))

  return (
    <header className="bg-off-white top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-center relative">
        <nav className="hidden lg:flex gap-10 text-dark text-[16px] sm:text-[24px] font-tahoma">
          {renderNavItems()}
        </nav>
        <div className="lg:hidden absolute left-4">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-3xl">
            ☰
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="flex-1 bg-off-white relative">
            <div className="absolute top-6 right-6">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-3xl">
                ✕
              </button>
            </div>
            <nav className="flex flex-col justify-end items-start h-full pb-12 pl-6 gap-4 text-dark text-lg font-tahoma">
              {renderNavItems()}
            </nav>
          </div>
          <div className="w-[60px] bg-dark flex flex-col justify-center items-center py-6">
            <div className="flex flex-col items-center gap-6 mb-4">
              <a
                href="https://www.instagram.com/silvapradoadv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-white"
              >
                <InstagramLogo size={32} weight="fill" />
              </a>
              <a
                href="https://www.linkedin.com/company/silva-prado-advogados/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-white"
              >
                <LinkedinLogo size={32} weight="fill" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
