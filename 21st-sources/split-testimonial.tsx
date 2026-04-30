// 21st.dev Component: Split Testimonial
// Source query: "testimonial editorial quote"
// Date: 2026-04-29
// What we borrowed: editorial typography hierarchy (small uppercase tracking-[0.2em] company tag with horizontal rule + large light-weight blockquote + thin horizontal rule + author/role) — translated for McCormick's testimonial section. Kept the "w-8 h-px bg-muted-foreground/50" rule + uppercase tag, and the 3xl/4xl serif blockquote treatment.

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "A rare talent who bridges the gap between aesthetics and functionality with remarkable precision.",
    name: "Sarah Chen",
    role: "Design Director",
    company: "Figma",
    image: "https://example.com/avatar.jpg",
  },
]

export function TestimonialsSplit() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <div className="relative grid grid-cols-[1fr_auto] gap-12 items-center cursor-pointer group">
        <div className="space-y-8">
          <motion.div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            <span className="w-8 h-px bg-muted-foreground/50" />
            {active.company}
          </motion.div>

          <motion.blockquote className="text-3xl md:text-4xl font-light leading-[1.3] tracking-tight text-foreground">
            {active.quote}
          </motion.blockquote>

          <motion.div className="flex items-center gap-4">
            <div className="w-10 h-px bg-foreground/20" />
            <div>
              <p className="text-sm font-medium text-foreground">{active.name}</p>
              <p className="text-xs text-muted-foreground">{active.role}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
