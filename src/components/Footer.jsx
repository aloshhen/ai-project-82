import React from 'react'
import { cn } from '../utils'

function Footer() {
  return (
    <footer className={cn('py-12 bg-accent')}>
      <div className={cn('container mx-auto px-4')}>
        <div className={cn('grid md:grid-cols-3 gap-8 mb-8')}>
          <div>
            <div className={cn('text-2xl font-bold mb-4')}>AutoTransport</div>
            <p className={cn('text-gray-300')}>Modern logistics solutions for your business</p>
          </div>
          <div>
            <h3 className={cn('text-xl font-bold mb-4')}>Quick Links</h3>
            <ul className={cn('space-y-2')}>
              <li><a href="#services" className={cn('hover:text-primary transition-colors')}>Services</a></li>
              <li><a href="#pricing" className={cn('hover:text-primary transition-colors')}>Pricing</a></li>
              <li><a href="#contact" className={cn('hover:text-primary transition-colors')}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className={cn('text-xl font-bold mb-4')}>Contact Info</h3>
            <p className={cn('text-gray-300')}>123 Main Street, Suite 100</p>
            <p className={cn('text-gray-300')}>New York, NY 10001</p>
            <p className={cn('text-gray-300')}>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className={cn('text-center text-gray-300')}>© 2024 AutoTransport. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer