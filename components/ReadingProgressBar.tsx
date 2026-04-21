'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 'var(--header-h, 64px)',
        left: 0,
        zIndex: 99,
        height: 3,
        width: `${progress}%`,
        background: 'linear-gradient(to right, #1C3B2A, #C8A951)',
        transition: 'width 0.08s linear',
        pointerEvents: 'none',
      }}
    />
  )
}
