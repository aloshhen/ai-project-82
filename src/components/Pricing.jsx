import React from 'react'
import { cn } from '../utils'

function Pricing() {
  const pricingPlans = [
    {
      title: 'Basic',
      price: '$299',
      features: ['Local Delivery', 'Standard Insurance', '24/7 Support'],
      popular: false
    },
    {
      title: 'Pro',
      price: '$499',
      features: ['National Delivery', 'Enhanced Insurance', 'Priority Support'],
      popular: true
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      features: ['International Delivery', 'Full Insurance', 'Dedicated Manager'],
      popular: false
    }
  ]

  return (
    <section className={cn('py-24 bg-accent')} id="pricing">
      <div className={cn('container mx-auto px-4')}>
        <h2 className={cn('text-4xl font-bold text-center mb-16')}>Pricing Plans</h2>
        <div className={cn('grid md:grid-cols-3 gap-8')}>
          {pricingPlans.map((plan, index) => (
            <div key={index} className={cn('p-8 rounded-2xl bg-background', {
              'border-2 border-primary': plan.popular
            })}>
              <h3 className={cn('text-2xl font-bold mb-4')}>{plan.title}</h3>
              <div className={cn('text-4xl font-bold mb-8')}>{plan.price}</div>
              <ul className={cn('mb-8')}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={cn('mb-2')}>{feature}</li>
                ))}
              </ul>
              <button className={cn('w-full bg-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors')}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing