"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const CarouselContext = React.createContext<{
  currentIndex: number
  setCurrentIndex: (index: number) => void
  itemsLength: number
  setItemsLength: (length: number) => void
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
} | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a Carousel")
  }
  return context
}

interface CarouselProps {
  children: React.ReactNode
  className?: string
  opts?: {
    loop?: boolean
  }
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(({ children, className, opts = {} }, ref) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [itemsLength, setItemsLength] = React.useState(0)

  const canScrollPrev = opts.loop ? true : currentIndex > 0
  const canScrollNext = opts.loop ? true : currentIndex < itemsLength - 1

  const scrollPrev = React.useCallback(() => {
    if (opts.loop && currentIndex === 0) {
      setCurrentIndex(itemsLength - 1)
    } else if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }, [currentIndex, itemsLength, opts.loop])

  const scrollNext = React.useCallback(() => {
    if (opts.loop && currentIndex === itemsLength - 1) {
      setCurrentIndex(0)
    } else if (currentIndex < itemsLength - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }, [currentIndex, itemsLength, opts.loop])

  const contextValue = React.useMemo(
    () => ({
      currentIndex,
      setCurrentIndex,
      itemsLength,
      setItemsLength,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
    }),
    [currentIndex, itemsLength, canScrollPrev, canScrollNext, scrollPrev, scrollNext],
  )

  return (
    <CarouselContext.Provider value={contextValue}>
      <div ref={ref} className={cn("relative", className)}>
        {children}
      </div>
    </CarouselContext.Provider>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { currentIndex, setItemsLength } = useCarousel()

    React.useEffect(() => {
      const childrenArray = React.Children.toArray(children)
      setItemsLength(childrenArray.length)
    }, [children, setItemsLength])

    return (
      <div className="overflow-hidden" ref={ref} {...props}>
        <div
          className={cn("flex transition-transform duration-300 ease-in-out", className)}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children}
        </div>
      </div>
    )
  },
)
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("min-w-0 shrink-0 grow-0 basis-full", className)} {...props} />
  },
)
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn("absolute h-8 w-8 rounded-full left-12 top-1/2 -translate-y-1/2", className)}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    )
  },
)
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn("absolute h-8 w-8 rounded-full right-12 top-1/2 -translate-y-1/2", className)}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    )
  },
)
CarouselNext.displayName = "CarouselNext"

export { type CarouselProps, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
