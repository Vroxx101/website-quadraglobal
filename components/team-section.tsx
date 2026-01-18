"use client"

import { Card } from "@/components/ui/card"
import { Award, Users, HardHat, Construction, Shield, Building2, Instagram, Mail } from "lucide-react"
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { cn } from "@/lib/utils"
export function TeamSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const [activeMember, setActiveMember] = useState<number | null>(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100
            setScrollProgress(progress)
        }
    }

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger)

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            })

            tl.fromTo(
                ".team-header",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power4.out",
                },
            )
                .fromTo(
                    ".team-card",
                    { y: 60, opacity: 0, scale: 0.95 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power4.out",
                    },
                    "-=0.6",
                )
        },
        { scope: containerRef },
    )

    const teamMembers = [
        {
            name: "Satria Era Putra",
            position: "Komisaris",
            img: "/profile/komisaris.jpeg",
            instagram: "#",
        },
        {
            name: "Wiwid Eko Listianto",
            position: "Direktur Utama",
            img: "/profile/direktur-utama.jpeg",
            instagram: "#",
        },
        {
            name: "Rionaldi Putra",
            position: "Direktur SDM",
            img: "/profile/direktur-sdm.jpeg",
            instagram: "#",
        },
        {
            name: "Muhammad Zikky Yanuar",
            position: "Direktur Operasional",
            img: "/profile/direktur-operasional.jpeg",
            instagram: "#",
        },
        {
            name: "Zikri Imannudin Arsyad",
            position: "Direktur Keuangan",
            img: "/profile/direktur-keuangan.jpeg",
            instagram: "#",
        },
    ]

    return (
        <section id="team" ref={containerRef} className="pt-32 pb-20 md:pb-10 bg-[#FBFBFB] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="team-header text-center mb-20 opacity-0">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Tim Kami</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tight">Struktur Organisasi</h3>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Temui tim profesional kami yang berkomitmen memberikan keunggulan di setiap proyek dengan integritas dan dedikasi tinggi.
                    </p>
                </div>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory pb-12 -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 scrollbar-hide"
                >
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className="team-card group relative overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 opacity-0 border border-white cursor-pointer min-w-[300px] sm:min-w-0 snap-center"
                            onClick={() => setActiveMember(activeMember === i ? null : i)}
                        >
                            {/* Image Container with Hover/Active Effect */}
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className={cn(
                                        "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110",
                                        activeMember === i && "scale-110"
                                    )}
                                    onError={(e) => {
                                        e.currentTarget.src = "/logo-qgn.png"
                                    }}
                                />
                                {/* Overlay with Socials - Glassmorphism */}
                                <div className={cn(
                                    "absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 transition-all duration-500 flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent",
                                    activeMember === i ? "opacity-100" : "lg:group-hover:opacity-100"
                                )}>
                                    <div className="flex gap-3">
                                        <Link
                                            href={member.instagram}
                                            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all duration-300 transform hover:scale-110"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Instagram className="w-5 h-5" />
                                        </Link>
                                    </div>
                                    <span className="text-white/80 text-[10px] uppercase tracking-widest font-medium">Hubungi Kami</span>
                                </div>
                            </div>

                            {/* Minimalist Info */}
                            <div className="p-6 text-center bg-white">
                                <h4 className={cn(
                                    "font-extrabold text-foreground text-base sm:text-lg tracking-tight mb-2 transition-colors duration-300",
                                    activeMember === i ? "text-primary" : "group-hover:text-primary"
                                )}>
                                    {member.name}
                                </h4>
                                <p className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-[0.15em] ">
                                    {member.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Scroll Indicator */}
                <div className="mt-4 flex flex-col items-center sm:hidden">
                    <div className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-300 ease-out"
                            style={{ width: `${Math.max(10, scrollProgress)}%`, marginLeft: `${Math.min(90, scrollProgress * 0.7)}%` }}
                        ></div>
                    </div>
                    <p className="mt-3 text-[10px] text-muted-foreground/60 uppercase tracking-widest font-bold">Slide untuk melihat tim</p>
                </div>
            </div>
        </section>
    )
}
