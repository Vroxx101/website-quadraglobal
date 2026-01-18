"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)
    const buttonsRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            const tl = gsap.timeline()

            // Initial fade in and slide up
            tl.from(containerRef.current, {
                opacity: 0,
                duration: 0.5,
            })
                .from("h1", {
                    y: 80,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power4.out",
                })
                .from(
                    "p",
                    {
                        y: 40,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.8",
                )
                .from(
                    buttonsRef.current,
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.6",
                )
                .from(
                    ".badge",
                    {
                        y: -20,
                        opacity: 0,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                    },
                    "-=1",
                )

            // Parallax effect on background shapes
            gsap.to(".bg-shape-1", {
                y: -100,
                rotation: 45,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            })

            gsap.to(".bg-shape-2", {
                y: 150,
                rotation: -45,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                },
            })
        },
        { scope: containerRef },
    )

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src="/bg-hero.avif"
                    alt="Proyek Konstruksi Jalan dan Infrastruktur PT. QUADRA GLOBAL NUSANTARA"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            {/* Floating Shapes (Subtle) */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                <div className="bg-shape-1 absolute top-32 right-20 w-32 h-32 border-4 border-primary/20 rounded-3xl animate-float opacity-30" />
                <div
                    className="bg-shape-2 absolute bottom-40 left-20 w-48 h-48 border-4 border-secondary/20 rounded-full animate-float opacity-30"
                    style={{ animationDelay: "2s" }}
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center py-20">
                <div className="badge inline-flex items-center gap-2 px-5 py-2.5 bg-white shadow-lg shadow-primary/5 border border-primary/10 text-primary text-sm font-bold rounded-full mb-10 hover:scale-105 transition-transform cursor-default">
                    <Shield className="w-4 h-4 fill-primary/20" />
                    <span className="tracking-wide uppercase text-xs">Excellence in Infrastructure</span>
                </div>

                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight"
                >
                    Membangun Infrastruktur <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#4F46E5] to-secondary relative">
                        Masa Depan Indonesia
                        <svg
                            className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-40 -z-10"
                            viewBox="0 0 100 10"
                            preserveAspectRatio="none"
                        >
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>
                </h1>

                <p
                    ref={textRef}
                    className="text-lg md:text-2xl text-white max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    Spesialis dalam hotmix aspal, beton, paving, jembatan, dan proyek infrastruktur dengan standar kualitas terbaik.
                </p>

                <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <Link href="#projects">
                        <Button
                            size="lg"
                            className="h-16 px-10 text-lg font-bold bg-gradient-to-r from-primary to-[#4F46E5] hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-1 rounded-full w-full sm:w-auto"
                        >
                            Jelajahi Proyek
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="#services">
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-16 px-10 text-lg font-bold border-2 border-gray-200 hover:border-primary text-foreground hover:text-primary transition-all bg-white/50 backdrop-blur-sm hover:bg-white hover:-translate-y-1 rounded-full w-full sm:w-auto"
                        >
                            Layanan Kami
                        </Button>
                    </Link>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in-up delay-1000">
                    <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    )
}
