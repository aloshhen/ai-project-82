import React from 'react'
import { cn } from '../utils'

function Contact() {
  return (
    <section className={cn('py-24')} id="contact">
      <div className={cn('container mx-auto px-4')}>
        <h2 className={cn('text-4xl font-bold text-center mb-16')}>Contact Us</h2>
        <div className={cn('grid md:grid-cols-2 gap-16')}>
          <div className={cn('space-y-8')}>
            <div className={cn('space-y-2')}>
              <h3 className={cn('text-2xl font-bold')}>Our Office</h3>
              <p className={cn('text-gray-300')}>123 Main Street, Suite 100
New York, NY 10001</p>
            </div>
            <div className={cn('space-y-2')}>
              <h3 className={cn('text-2xl font-bold')}>Call Us</h3>
              <p className={cn('text-gray-300')}>+1 (555) 123-4567</p>
            </div>
            <div className={cn('space-y-2')}>
              <h3 className={cn('text-2xl font-bold')}>Email</h3>
              <p className={cn('text-gray-300')}>info@autotransport.com</p>
            </div>
          </div>
          <form className={cn('space-y-8')}>
            <div className={cn('grid md:grid-cols-2 gap-8')}>
              <input type="text" placeholder="Name" className={cn('w-full px-4 py-3 rounded-lg bg-accent')} />
              <input type="email" placeholder="Email" className={cn('w-full px-4 py-3 rounded-lg bg-accent')} />
            </div>
            <textarea placeholder="Message" className={cn('w-full px-4 py-3 rounded-lg bg-accent')} rows={5} />
            <button type="submit" className={cn('w-full bg-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors')}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact