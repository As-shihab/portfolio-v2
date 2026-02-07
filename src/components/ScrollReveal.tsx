'use client'

import { useLayoutEffect } from 'react'

const revealSelector = [
  '.section:not(.hero)',
  '.about-content',
  '.about-photo-inner',
  '.about-card',
  '.timeline-section',
  '.timeline-item',
  '.experience-card',
  '.credential-card',
  '.project-card',
  '.projects-grid',
  '.gallery-item',
  '.skills-grid',
  '.skill-group',
  '.blog-card',
  '.post',
  '.contact-shell',
  '.contact-item',
  '.contact-form',
].join(',')

export function ScrollReveal() {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
    if (!elements.length) return

    elements.forEach((el) => el.classList.add('reveal'))

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target as HTMLElement
          target.classList.add('is-visible')
          observer.unobserve(target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
