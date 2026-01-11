import React from 'react'
import { cn } from '../utils'

function Hero() {
  return (
    <section className={cn('min-h-screen flex items-center justify-center bg-[url(https://source.unsplash.com/1600x900/?truck)] bg-cover bg-center')}>
      <div className={cn('container mx-auto px-4 text-center')}>
        <h1 className={cn('text-6xl font-bold mb-8')}>Modern Logistics Solutions</h1>
        <p className={cn('text-xl mb-12')}>Reliable transportation services with competitive pricing</p>
        <div className={cn('flex gap-4 justify-center')}>
          <button className={cn('bg-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors')}>Get Started</button>
          <button className={cn('border px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors')}>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Hero