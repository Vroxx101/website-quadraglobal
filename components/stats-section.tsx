"use client"

import { Award, CheckCircle2, Truck, Users } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export function StatsSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            gsap.from(".stat-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
            })
        },
        { scope: containerRef }
    )

    return (
        <section
            ref={containerRef}
            className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 relative z-20"
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {[
                    { label: "Tahun Pengalaman", value: 5, suffix: "+", icon: <Award className="w-8 h-8" /> },
                    { label: "Proyek Selesai", value: 50, suffix: "+", icon: <CheckCircle2 className="w-8 h-8" /> },
                    { label: "Tenaga Kerja Profesional", value: 25, suffix: "+", icon: <Users className="w-8 h-8" /> },
                    { label: "Kepuasan Klien", value: 100, suffix: "%", icon: <CheckCircle2 className="w-8 h-8" /> },
                ].map((stat, i) => (
                    <div key={i} className="stat-item text-center group">
                        <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                        </div>
                        <div className="text-4xl md:text-5xl font-black text-primary mb-2 flex justify-center">
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
