"use client"

import { Card } from "@/components/ui/card"
import { Zap, Building2 } from "lucide-react"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
export function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            // Ensure ScrollTrigger is registered
            gsap.registerPlugin(ScrollTrigger)

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            })

            // Use fromTo for more deterministic behavior
            tl.fromTo(
                ".about-header",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power3.out",
                },
            ).fromTo(
                ".about-card",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.2,
                    ease: "power3.out",
                },
                "-=0.6",
            )
        },
        { scope: containerRef },
    )

    return (
        <section id="about" ref={containerRef} className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="about-header text-center mb-16 opacity-0">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Tentang Kami</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-foreground mb-10">PT. QUADRA GLOBAL NUSANTARA</h3>
                    <div className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-6 text-justify">
                        <p>
                            PT Quadra Global Nusantara adalah perusahaan kontraktor yang bergerak di bidang pembangunan dan konstruksi. Perusahaan ini berkomitmen menghadirkan hasil kerja yang berkualitas dan dapat dipercaya.
                        </p>
                        <p>
                            Dengan dukungan tim yang kompeten serta sistem kerja yang terencana, setiap proyek dikerjakan dengan mengutamakan ketepatan waktu, keselamatan kerja, dan standar mutu yang konsisten.
                        </p>
                        <p>
                            Kepercayaan menjadi dasar utama dalam setiap pekerjaan. Oleh karena itu, PT Quadra Global Nusantara membangun hubungan jangka panjang melalui proses kerja yang profesional, transparan, dan bertanggung jawab.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-16">
                    <Card className="about-card p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-xl transition-all group opacity-0">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-foreground mb-4">Visi Kami</h4>
                        <p className="text-muted-foreground leading-relaxed">
                            Menjadi perusahaan kontraktor yang adaptif dan terpercaya dalam membangun ruang dan infrastruktur yang berkualitas, berkelanjutan, dan sesuai dengan kebutuhan masa depan.
                        </p>
                    </Card>

                    <Card className="about-card p-10 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:shadow-xl transition-all group opacity-0">
                        <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-foreground mb-6">Misi Kami</h4>
                        <ul className="space-y-4">
                            {[
                                "Menyediakan hasil pembangunan yang berkualitas melalui proses kerja yang profesional, aman, dan tepat waktu.",
                                "Menjadi mitra yang terpercaya dengan solusi konstruksi yang relevan terhadap kebutuhan saat ini dan mendatang.",
                                "Menjalankan pembangunan berkelanjutan dengan menjunjung integritas, pengembangan sumber daya manusia, dan tanggung jawab lingkungan.",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4 group/item">
                                    <div className="mt-1.5 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-secondary transition-colors duration-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary group-hover/item:bg-white transition-colors duration-300" />
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </section>
    )
}
