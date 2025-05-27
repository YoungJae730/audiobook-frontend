"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BookCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "/placeholder.svg?height=600&width=1200",
      alt: "Featured Audiobook 1",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=600&width=1200",
      alt: "Featured Audiobook 2",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=600&width=1200",
      alt: "Featured Audiobook 3",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=600&width=1200",
      alt: "Featured Audiobook 4",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <Image src={slide.image || "/placeholder.svg"} alt={slide.alt} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 rounded-full"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 rounded-full"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
