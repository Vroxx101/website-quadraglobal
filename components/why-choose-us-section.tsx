"use client"

import { Shield, Award, Users, CheckCircle2, Clock, Globe } from "lucide-react"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
export function WhyChooseUsSection() {
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

            tl.fromTo(
                ".why-header",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                },
            ).fromTo(
                ".why-card",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                },
                "-=0.6",
            )
        },
        { scope: containerRef },
    )

    return (
        <section ref={containerRef} className="py-20 md:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="why-header text-center mb-8 md:mb-20">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Mengapa Memilih Kami</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-foreground leading-tight tracking-tight mb-4">
                        Komitmen Kami untuk Excellence
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Standar kontrol kualitas yang ketat di setiap tahap proyek.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Shield className="w-8 h-8" />,
                            title: "Jaminan Kualitas",
                            desc: "Standar kontrol kualitas yang ketat di setiap tahap proyek.",
                        },
                        {
                            icon: <Award className="w-8 h-8" />,
                            title: "Pengalaman Bertahun-tahun",
                            desc: "Lebih dari satu dekade keahlian dalam konstruksi infrastruktur.",
                        },
                        {
                            icon: <Users className="w-8 h-8" />,
                            title: "Keselamatan Pertama",
                            desc: "Protokol keselamatan komprehensif dan sertifikasi.",
                        },
                        {
                            icon: <CheckCircle2 className="w-8 h-8" />,
                            title: "Teknologi Inovatif",
                            desc: "Memanfaatkan peralatan dan metode konstruksi modern.",
                        },
                        {
                            icon: <Clock className="w-8 h-8" />,
                            title: "Pengiriman Tepat Waktu",
                            desc: "Rekam jejak terbukti menyelesaikan proyek tepat jadwal.",
                        },
                        {
                            icon: <Globe className="w-8 h-8" />,
                            title: "Dukungan 24/7",
                            desc: "Tim dukungan pelanggan yang responsif.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="why-card p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                                <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
