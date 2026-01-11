import React from 'react'
import { cn } from '../utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      company: 'ABC Corp',
      text: 'Excellent service! Our goods were delivered on time and in perfect condition.'
    },
    {
      name: 'Jane Smith',
      company: 'XYZ Inc',
      text: 'Highly professional team. We\'ve been using their services for years and never had any issues.'
    },
    {
      name: 'Michael Johnson',
      company: 'Global Logistics',
      text: 'Reliable and cost-effective transportation solutions. Highly recommended!'
    }
  ]

  return (
    <section className={cn('py-24')}>
      <div className={cn('container mx-auto px-4')}>
        <h2 className={cn('text-4xl font-bold text-center mb-16')}>What Our Clients Say</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={cn('p-8 rounded-2xl bg-accent h-full')}>
                <p className={cn('mb-8')}>{testimonial.text}</p>
                <div className={cn('font-bold')}>{testimonial.name}</div>
                <div className={cn('text-sm text-gray-300')}>{testimonial.company}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials