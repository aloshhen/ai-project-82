import React from 'react'
import { cn } from '../utils'
import { Truck, Clock, Shield } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: <Truck className={cn('w-12 h-12 mb-4')} />,
      title: 'Fast Delivery',
      description: 'We ensure timely delivery of your goods across the country'
    },
    {
      icon: <Clock className={cn('w-12 h-12 mb-4')} />,
      title: '24/7 Support',
      description: 'Our team is available round the clock to assist you'
    },
    {
      icon: <Shield className={cn('w-12 h-12 mb-4')} />,
      title: 'Secure Transport',
      description: 'Your cargo is protected with advanced security measures'
    }
  ]

  return (
    <section className={cn('py-24')} id="services">
      <div className={cn('container mx-auto px-4')}>
        <h2 className={cn('text-4xl font-bold text-center mb-16')}>Our Services</h2>
        <div className={cn('grid md:grid-cols-3 gap-8')}>
          {features.map((feature, index) => (
            <div key={index} className={cn('text-center p-8 rounded-2xl bg-accent')}>
              {feature.icon}
              <h3 className={cn('text-2xl font-bold mb-4')}>{feature.title}</h3>
              <p className={cn('text-gray-300')}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features