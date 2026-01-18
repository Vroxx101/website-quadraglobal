"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Instagram, Send } from "lucide-react"
export function FooterSection() {
    return (
        <footer className="relative bg-gradient-to-br from-[#0a1929] via-[#0f2744] to-[#0a1929] text-white overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-16">
                {/* Main footer content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-white/20 rounded-xl blur group-hover:blur-md transition-all"></div>
                                <Image
                                    src="/logo-qgn.png"
                                    alt="QGN Logo"
                                    width={56}
                                    height={56}
                                    className="w-14 h-14 object-contain relative"
                                />
                            </div>
                            <div>
                                <span className="font-bold text-xl block group-hover:text-secondary transition-colors">Quadra Global</span>
                                <span className="text-xs text-white/70 tracking-wider">NUSANTARA</span>
                            </div>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Membangun landasan masa depan Indonesia melalui keunggulan teknik dan solusi infrastruktur yang berkelanjutan.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { Icon: Facebook, href: "#" },
                                { Icon: Linkedin, href: "#" },
                                { Icon: Instagram, href: "https://www.instagram.com/quadra.global/" }
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="font-bold text-white text-base mb-6 relative inline-block">
                            Tautan Cepat
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent"></span>
                        </h5>
                        <ul className="space-y-3">
                            {[
                                { name: "Beranda", href: "/#hero" },
                                { name: "Tentang Kami", href: "/#about" },
                                { name: "Layanan", href: "/#services" },
                                { name: "Proyek", href: "/#projects" },
                                { name: "Tim", href: "/#team" },
                                { name: "Kontak", href: "/#contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/70 hover:text-white hover:translate-x-2 inline-flex items-center gap-2 transition-all group"
                                    >
                                        <span className="w-0 h-px bg-secondary group-hover:w-3 transition-all"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h5 className="font-bold text-white text-base mb-6 relative inline-block">
                            Layanan Kami
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent"></span>
                        </h5>
                        <ul className="space-y-3">
                            {[
                                { name: "Pengaspalan", href: "/#services" },
                                { name: "Betonisasi", href: "/#services" },
                                { name: "Instalasi Telekomunikasi", href: "/#services" },
                                { name: "Paving Block", href: "/#services" },
                                { name: "Pasokan Material", href: "/#services" },
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="text-sm text-white/70 hover:text-white hover:translate-x-2 inline-flex items-center gap-2 transition-all group cursor-pointer">
                                        <span className="w-0 h-px bg-secondary group-hover:w-3 transition-all"></span>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h5 className="font-bold text-white text-base mb-6 relative inline-block">
                            Info Proyek
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent"></span>
                        </h5>

                        <p className="text-white/70 text-sm mb-6 leading-relaxed">
                            Dapatkan pembaruan proyek dan informasi resmi dari Quadra Global Nusantara.
                        </p>

                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 rounded-xl
                                    bg-gradient-to-r from-orange-500 to-orange-600
                                    px-6 py-3 text-sm font-semibold text-white
                                    shadow-lg shadow-orange-500/20
                                    transition-all duration-300
                                    hover:from-orange-600 hover:to-orange-700
                                    hover:shadow-orange-500/40
                                    hover:-translate-y-0.5
                                    focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        >
                            Hubungi Kami
                            <svg
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/60 text-sm">
                            © {new Date().getFullYear()} PT. Quadra Global Nusantara. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-white/60">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <span className="w-px h-4 bg-white/20"></span>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
