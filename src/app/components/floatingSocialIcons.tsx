'use client'

import { useEffect, useState } from 'react'
import { InstagramLogo, LinkedinLogo } from 'phosphor-react'

export default function FloatingSocialIcons() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const getSectionAtMiddle = () => {
      const middle = window.scrollY + window.innerHeight / 2
      const sections = [
        { id: 'sobre', color: 'white' },
        { id: 'atuacao', color: 'black' },
        { id: 'premiacoes', color: 'white' },
        { id: 'compliance', color: 'black' },
        { id: 'team', color: 'white' },
        { id: 'blog', color: 'black' },
        { id: 'contato', color: 'white' },
      ]

      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (!el) continue

        const top = el.offsetTop
        const bottom = top + el.offsetHeight

        if (middle >= top && middle < bottom) {
          return section.color
        }
      }

      return 'white' 
    }

    const handleScroll = () => {
      const color = getSectionAtMiddle()
      setIsDark(color === 'white')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const iconColor = isDark ? '#ffffff' : '#000000'

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 hidden md:flex flex-col gap-4 z-50 transition-colors duration-300">
      <a
        href="https://www.instagram.com/silvapradoadv/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramLogo size={49} weight="fill" color={iconColor} />
      </a>
      <a
        href="https://www.linkedin.com/company/silva-prado-advogados/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinLogo size={49} weight="fill" color={iconColor} />
      </a>
    </div>
  )
}
