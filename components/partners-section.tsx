"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const partners = [
    { name: "PT. Novell Pharma Ceutical Laboratories", logo: "mitra/NPL.png" },
    { name: "PT. Air Liquide Indonesia", logo: "mitra/air-liquide.png" },
    { name: "PT. Sri Astra", logo: "mitra/sri_astra_logo.png" },
    { name: "Pertamina", logo: "mitra/panasonic.png" },
    { name: "Waskita Karya", logo: "mitra/SK.png" },
    { name: "Wijaya Karya", logo: "mitra/sri_astra_logo.png" },
]

export function PartnersSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger)

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            })

            tl.to(".partner-card", {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            })
        },
        { scope: containerRef },
    )

    return (
        <section
            ref={containerRef}
            className="py-20 bg-gray-50/50 border-y border-gray-100 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Mitra Strategis</h2>
                <h3 className="text-3xl md:text-4xl font-black text-foreground">Dipercaya Oleh Perusahaan Terkemuka</h3>
                <div className="w-20 h-1.5 bg-primary/20 mx-auto mt-6 rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            tabIndex={0}
                            className="partner-card opacity-0 translate-y-10 bg-white p-10 md:p-14 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 focus-within:shadow-2xl focus-within:-translate-y-2 transition-all duration-500 flex flex-col items-center justify-center gap-6 group outline-none"
                        >
                            <div className="relative w-full h-24 md:h-32 flex items-center justify-center pointer-events-none">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-full max-w-[180px] md:max-w-[240px] object-contain filter grayscale opacity-60 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-focus-within:grayscale-0 group-focus-within:opacity-100 group-focus-within:scale-110 transition-all duration-500 ease-out"
                                />
                            </div>
                            <span className="text-[11px] md:text-sm uppercase tracking-[0.2em] font-black text-gray-300 group-hover:text-primary group-focus-within:text-primary transition-colors duration-500">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
