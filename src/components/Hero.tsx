"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
    eyebrow?: string
    title: string
    subtitle: string
    ctaLabel?: string
    ctaHref?: string
}

export function Hero({
    eyebrow = "Trusted Admission Consultants",
    title = "Your Gateway to Success in Education",
    subtitle = "Expert guidance for Medical, Engineering, and Management admissions in top colleges across India and Abroad.",
    ctaLabel = "Get Free Counselling",
    ctaHref = "#",
}: HeroProps) {
    return (
        <section
            id="hero"
            className="relative mx-auto w-full pt-32 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden 
      bg-gradient-to-b from-white via-blue-50/30 to-white
      rounded-b-[3rem]"
        >
            {/* Grid BG */}
            <div
                className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
            />

            {/* Radial Accent */}
            <div
                className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] 
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
        -translate-x-1/2 rounded-[100%] border-[#0071e3] bg-white 
        bg-[radial-gradient(closest-side,#fff_82%,#000000)] 
        opacity-50 blur-3xl animate-in fade-in zoom-in duration-1000"
            />

            {/* Eyebrow */}
            {eyebrow && (
                <a href="#" className="group relative z-10 block mb-6">
                    <span
                        className="text-sm text-gray-600 font-medium mx-auto px-5 py-2 
            bg-white/80 backdrop-blur-md
            border border-gray-200 
            rounded-full w-fit tracking-tight uppercase flex items-center justify-center shadow-sm hover:shadow-md transition-all"
                    >
                        {eyebrow}
                        <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </a>
            )}

            {/* Title */}
            <h1
                className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700 text-balance 
        bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600
        bg-clip-text py-6 text-5xl font-bold leading-tight tracking-tight 
        text-transparent sm:text-6xl md:text-7xl lg:text-8xl 
        mb-6"
            >
                {title}
            </h1>

            {/* Subtitle */}
            <p
                className="relative z-10 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 mb-10 text-balance 
        text-base tracking-normal text-gray-600 
        md:text-xl font-normal max-w-2xl mx-auto leading-relaxed"
            >
                {subtitle}
            </p>

            {/* CTA */}
            {ctaLabel && (
                <div className="relative z-10 flex justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                    <Button
                        asChild
                        className="h-14 px-8 rounded-full text-lg shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 bg-[#0071e3] hover:bg-[#0077ED]"
                    >
                        <a href={ctaHref}>{ctaLabel}</a>
                    </Button>
                </div>
            )}

            {/* Bottom Fade */}
            <div
                className="relative mt-32 opacity-0 [perspective:2000px] 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
            />
        </section>
    )
}
