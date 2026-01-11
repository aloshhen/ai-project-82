import React from 'react'
import { cn } from '../utils'

function Navigation() {
  return (
    <nav className={cn('fixed top-0 w-full backdrop-blur z-50')}>
      <div className={cn('container mx-auto px-4 py-6 flex justify-between items-center')}>
        <div className={cn('text-2xl font-bold')}>AutoTransport</div>
        <div className={cn('flex gap-8')}>
          <a href="#services" className={cn('hover:text-primary transition-colors')}>Services</a>
          <a href="#pricing" className={cn('hover:text-primary transition-colors')}>Pricing</a>
          <a href="#contact" className={cn('hover:text-primary transition-colors')}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation