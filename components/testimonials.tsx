import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Vehicle Owner',
    avatar: '/placeholder.svg?height=40&width=40',
    content: 'WrenchAI diagnosed my car issue in seconds. Saved me a trip to the mechanic and $200 in unnecessary repairs!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Fleet Manager',
    avatar: '/placeholder.svg?height=40&width=40',
    content: 'Managing 50+ vehicles became 10x easier. The predictive maintenance feature alone saves us thousands monthly.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Small Business Owner',
    avatar: '/placeholder.svg?height=40&width=40',
    content: 'As someone with zero car knowledge, WrenchAI makes me feel confident about vehicle decisions. Absolutely game-changing.',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Trusted by thousands
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl leading-relaxed">
            {'See what our users say about WrenchAI\'s impact on their vehicle maintenance'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {`"${testimonial.content}"`}
                  </p>
                  <div className="flex items-center gap-3 pt-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm">{testimonial.name}</span>
                      <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
