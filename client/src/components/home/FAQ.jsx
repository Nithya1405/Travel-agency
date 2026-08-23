import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { MOCK_FAQS } from '../../data/faqs';
import { SectionHeading } from '../common/SectionHeading';
import { Container } from '../common/Container';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-offwhite-main border-b border-gray-200">
      <Container size="md">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our chauffeur services, booking policies, and outstation pricing."
        />

        <div className="space-y-4">
          {MOCK_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-text-primary hover:text-gold-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary transition-colors"
                  >
                    <span className="flex items-center gap-3.5 text-sm sm:text-base">
                      <HelpCircle className="w-5 h-5 text-gold-primary shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-gold-primary' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-gray-100 animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
