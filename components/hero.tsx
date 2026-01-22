import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
            <Sparkles className="h-4 w-4" />
            <span className="text-muted-foreground">AI-Powered Diagnostics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Revolutionizing Vehicle Care with AI
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl leading-relaxed">
            {'Connect with trusted service providers and get instant AI-powered troubleshooting. From individual owners to fleet managers, we\'ve got you covered.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">10K+</span>
              <span>Vehicles Diagnosed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">500+</span>
              <span>Service Providers</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">98%</span>
              <span>Accuracy Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
