"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { faqs } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown } from "lucide-react";

export function FaqAccordion() {
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 flex justify-center  text-white min-h-screen">
      <div className="w-full max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r  to-green-900/70 backdrop-blur-xl border border-green-500/40 rounded-3xl shadow-xl p-10 md:p-16"
        >
          <div className="text-center mb-14">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-3 text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-green-300 text-lg md:text-xl max-w-2xl mx-auto">
              Find answers to common questions about TECHNASIA&apos;25
            </p>

            <div className="relative max-w-xl mx-auto mt-10">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-green-300 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                className="pl-14 py-3 rounded-full bg-green-900/50 text-green-200 border border-green-700 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-5 max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-green-600 rounded-2xl bg-green-900/30 hover:border-green-400 transition"
                >
                  <AccordionTrigger className="flex justify-between items-center px-7 py-5 text-green-200 font-semibold text-lg hover:text-green-400 select-none">
                    {faq.question}
                    {/* <ChevronDown
                      className="w-6 h-6 text-green-400 transition-transform duration-300 data-[state=open]:rotate-180"
                      aria-hidden="true"
                    /> */}
                  </AccordionTrigger>
                  <AccordionContent className="px-7 pb-6 pt-0 text-green-300 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <div className="text-center py-16 text-green-500 text-lg">
                No FAQs found matching your search. Please try different keywords.
              </div>
            )}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
