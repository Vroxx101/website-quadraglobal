"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Construction, Building2, HardHat, Truck, ArrowRight, Map, Move, Pipette, Ruler, LayoutGrid } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export function ServicesSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [showAll, setShowAll] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)

    const services = [
        {
            icon: <Map className="w-12 h-12" />,
            title: "Survei Topografi",
            desc: "Pengukuran akurat kondisi lahan (elevasi, kontur, batas area) sebagai dasar perencanaan teknis yang aman dan efisien.",
        },
        {
            icon: <Move className="w-12 h-12" />,
            title: "Cut and Fill",
            desc: "Proses pemotongan dan penimbunan tanah untuk mencapai elevasi rencana dan menciptakan lahan yang stabil dan siap bangun.",
        },
        {
            icon: <Construction className="w-12 h-12" />,
            title: "Pengaspalan",
            desc: "Pelapisan aspal berkualitas untuk permukaan jalan yang kuat, rata, tahan lama, dan aman bagi seluruh pengguna jalan.",
        },
        {
            icon: <HardHat className="w-12 h-12" />,
            title: "Betonisasi",
            desc: "Pengecoran beton struktural untuk jalan dan bangunan guna meningkatkan daya dukung dan umur pakai struktur bangunan.",
        },
        {
            icon: <Pipette className="w-12 h-12" />,
            title: "Instalasi Telekomunikasi",
            desc: "Pembangunan infrastruktur jaringan komunikasi yang optimal, andal, dan memenuhi standar keamanan yang ketat.",
        },
        {
            icon: <Building2 className="w-12 h-12" />,
            title: "Konstruksi",
            desc: "Pelaksanaan dan pengawasan lapangan sesuai standar teknis untuk menghasilkan bangunan yang aman, fungsional, and berkualitas.",
        },
        {
            icon: <Pipette className="w-12 h-12" />,
            title: "Pengecatan",
            desc: "Penandaan area kerja dan zona operasional sesuai standar K3 untuk mendukung keselamatan di lingkungan kerja yang dinamis.",
        },
        {
            icon: <Ruler className="w-12 h-12" />,
            title: "Marka Jalan",
            desc: "Pengecatan tanda permukaan jalan untuk mengatur lalu lintas dan meningkatkan keselamatan navigasi visual bagi pengendara.",
        },
        {
            icon: <LayoutGrid className="w-12 h-12" />,
            title: "Paving Block",
            desc: "Pemasangan material paving yang kuat dan rapi untuk area parkir, jalan lingkungan, serta jalur khusus pejalan kaki.",
        },
    ]

    const displayedServices = showAll ? services : services.slice(0, 6)

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger)

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                onComplete: () => setHasAnimated(true)
            })

            tl.fromTo(
                ".services-header",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power3.out",
                },
            ).fromTo(
                ".service-card",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                },
                "-=0.4",
            )
        },
        { scope: containerRef },
    )

    // Animate new cards when showAll changes
    useEffect(() => {
        if (showAll && hasAnimated) {
            gsap.fromTo(
                ".service-card:nth-child(n+7)",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                }
            )
        }
    }, [showAll, hasAnimated])

    return (
        <section id="services" ref={containerRef} className="py-20 md:py-32 bg-gradient-to-b from-background to-accent overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="services-header text-center mb-16 opacity-0">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Layanan Kami</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6">Layanan Konstruksi Terpadu</h3>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        PT Quadra Global Nusantara menyediakan layanan konstruksi terpadu yang mencakup perencanaan, pelaksanaan, hingga pengelolaan proyek secara profesional, efisien, dan berorientasi pada kualitas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedServices.map((service, i) => (
                        <Card
                            key={i}
                            className="service-card p-8 bg-white hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-primary hover:-translate-y-2 cursor-pointer opacity-0"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:animate-pulse-glow transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">{service.desc}</p>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-4 transition-all"
                            >
                                Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => setShowAll(!showAll)}
                        className="h-14 px-8 text-lg font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-full group shadow-lg shadow-primary/10"
                    >
                        {showAll ? (
                            <>
                                Sembunyikan Layanan <ChevronUp className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            </>
                        ) : (
                            <>
                                Lihat Semua Layanan <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </section>
    )
}
