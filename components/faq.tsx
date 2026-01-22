import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqData = [
  {
    question: 'How accurate is the AI diagnostic system?',
    answer: 'Our AI diagnostic system has a 98% accuracy rate, trained on millions of vehicle issues and continuously improving. For complex cases, we recommend professional verification from our network of certified mechanics.',
  },
  {
    question: 'Do I need technical knowledge to use WrenchAI?',
    answer: 'Not at all! WrenchAI is designed for everyone. Simply describe your vehicle issue in plain language, and our AI will handle the technical analysis. We provide clear explanations without jargon.',
  },
  {
    question: 'How does the fleet management feature work?',
    answer: 'Fleet management allows businesses to track maintenance schedules, monitor vehicle health, and receive predictive alerts across multiple vehicles. You can assign vehicles to drivers, track service history, and optimize maintenance costs.',
  },
  {
    question: 'Are the service providers on your platform verified?',
    answer: 'Yes, all service providers go through a rigorous verification process including license checks, insurance verification, and customer reviews. We only partner with trusted professionals.',
  },
  {
    question: 'What types of vehicles does WrenchAI support?',
    answer: 'WrenchAI supports most passenger vehicles, light trucks, and commercial vehicles. This includes gas, diesel, hybrid, and electric vehicles from major manufacturers.',
  },
  {
    question: 'Is my vehicle data secure?',
    answer: 'Absolutely. We use enterprise-grade encryption and never share your data without permission. Your privacy and security are our top priorities.',
  },
]

const Faq = () => {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl leading-relaxed">
            Everything you need to know about WrenchAI
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq
