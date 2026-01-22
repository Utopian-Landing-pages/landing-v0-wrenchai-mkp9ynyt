import React from 'react'
import { MessageSquare, Search, Wrench } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Describe Your Issue',
    description: 'Tell our AI about your vehicle problem using simple, everyday language.',
  },
  {
    icon: Search,
    title: 'Get AI Diagnosis',
    description: 'Our advanced AI analyzes symptoms and provides instant diagnostic insights.',
  },
  {
    icon: Wrench,
    title: 'Connect with Experts',
    description: 'Match with verified service providers or get DIY guidance for simple fixes.',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            How WrenchAI Works
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl leading-relaxed">
            Get from problem to solution in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
