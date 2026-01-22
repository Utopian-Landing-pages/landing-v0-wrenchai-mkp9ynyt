import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Network, Shield, Zap, Users, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Diagnostics',
    description: 'Advanced machine learning algorithms analyze vehicle symptoms to provide accurate diagnoses in seconds.',
  },
  {
    icon: Network,
    title: 'Provider Network',
    description: 'Connect instantly with verified mechanics and service centers near you. Compare ratings and prices.',
  },
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'All service providers are verified and rated. Your data is protected with enterprise-grade security.',
  },
  {
    icon: Zap,
    title: 'Instant Solutions',
    description: 'Get immediate troubleshooting assistance and step-by-step guidance for common issues.',
  },
  {
    icon: Users,
    title: 'Fleet Management',
    description: 'Comprehensive tools for businesses managing multiple vehicles. Track maintenance and optimize schedules.',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Track your vehicle health over time. Predict maintenance needs before they become problems.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Everything you need for vehicle care
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl leading-relaxed">
            Powerful features designed to make vehicle maintenance simple, efficient, and intelligent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-border/50 hover:border-border transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
