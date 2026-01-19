"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle2 } from "lucide-react"
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { sendEmail } from "@/app/actions/email"
import { toast } from "sonner"

export function ContactSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle')
    const [projectType, setProjectType] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('submitting')

        const formData = new FormData(e.currentTarget)
        const result = await sendEmail(formData)

        if (result.success) {
            setStatus('sent')
            toast.success("Pesan berhasil terkirim!")
            formRef.current?.reset()
            setProjectType("")

            // Reset button after 5 seconds
            setTimeout(() => {
                setStatus('idle')
            }, 5000)
        } else {
            setStatus('idle')
            toast.error(result.error || "Gagal mengirim pesan.")
        }
    }

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger)

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
            })

            tl.fromTo(
                ".contact-header",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                },
            )
                .fromTo(
                    ".contact-card-left",
                    { x: -50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.8",
                )
                .fromTo(
                    ".contact-card-right",
                    { x: 50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.8",
                )
        },
        { scope: containerRef },
    )

    return (
        <section id="contact" ref={containerRef} className="py-24 md:py-32 bg-[#FBFBFB] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="contact-header text-center mb-16 opacity-0">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Hubungi Kami</h2>
                    <h3 className="text-3xl md:text-6xl font-black text-foreground mb-8 tracking-tight leading-tight">Mari Bangun Masa Depan</h3>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                        Siap memulai proyek infrastruktur Anda? Hubungi kami hari ini untuk konsultasi ahli dengan tim profesional kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Left - Contact Info */}
                    <div className="contact-card-left lg:col-span-2 space-y-8 opacity-0">
                        <Card className="p-6 md:p-8 bg-white border-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-2xl">
                            <h4 className="text-2xl font-extrabold text-foreground mb-8 tracking-tight">Informasi Kontak</h4>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="min-w-0">
                                        <h5 className="font-bold text-foreground mb-1 text-sm uppercase tracking-wider">Email</h5>
                                        <p className="text-muted-foreground text-sm break-words">ptquadraglobalnusantara@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110">
                                        <Phone className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-foreground mb-1 text-sm uppercase tracking-wider">Telepon</h5>
                                        <p className="text-muted-foreground text-sm">+62 851 6315 2629</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-foreground mb-1 text-sm uppercase tracking-wider">Kantor Kami</h5>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Kp. Pabuaran, Desa Cicadas, Kec. Gunung Putri, Kab. Bogor, Provinsi Jawa Barat
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-8">
                                    <h5 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Lokasi di Peta</h5>
                                    <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                                        <iframe
                                            src="https://www.google.com/maps?q=-6.4298417,106.9242588&hl=id&z=17&output=embed"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Company Location Map"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="contact-card-right lg:col-span-3 opacity-0">
                        <Card className="p-8 md:p-12 bg-white border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-2xl">
                            <h4 className="text-3xl font-black text-foreground mb-4 tracking-tight">Kirim Pesan</h4>
                            <p className="text-muted-foreground mb-10 leading-relaxed max-w-lg">
                                Siap mewujudkan impian Anda? Beritahu kami ide proyek Anda dan kami akan merespons dalam waktu 24 jam.
                            </p>

                            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                                {/* Honeypot field for anti-spam */}
                                <div className="hidden" aria-hidden="true">
                                    <input type="text" name="_honeypot" tabIndex={-1} autoComplete="off" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-foreground/60 uppercase tracking-widest pl-1">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            disabled={status !== 'idle'}
                                            className="w-full bg-[#f8f9fa] border border-transparent rounded-xl p-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-muted-foreground/40"
                                            placeholder="Masukkan nama Anda"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-foreground/60 uppercase tracking-widest pl-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            disabled={status !== 'idle'}
                                            className="w-full bg-[#f8f9fa] border border-transparent rounded-xl p-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-muted-foreground/40"
                                            placeholder="nama@perusahaan.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-foreground/60 uppercase tracking-widest pl-1">Nomor Telepon</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            disabled={status !== 'idle'}
                                            className="w-full bg-[#f8f9fa] border border-transparent rounded-xl p-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-muted-foreground/40"
                                            placeholder="+62 800 0000 000"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-foreground/60 uppercase tracking-widest pl-1">Jenis Proyek</label>
                                        <input type="hidden" name="projectType" value={projectType} />
                                        <Select
                                            disabled={status !== 'idle'}
                                            value={projectType}
                                            onValueChange={setProjectType}
                                            required
                                        >
                                            <SelectTrigger className="w-full h-[58px] bg-[#f8f9fa] border-none rounded-xl px-4 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium text-foreground text-left">
                                                <SelectValue placeholder="Pilih Jenis Proyek" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-gray-100 shadow-2xl">
                                                <SelectItem value="Survei Topografi">Survei Topografi</SelectItem>
                                                <SelectItem value="Cut and Fill">Cut and Fill</SelectItem>
                                                <SelectItem value="Pengaspalan">Pengaspalan</SelectItem>
                                                <SelectItem value="Betonisasi">Betonisasi</SelectItem>
                                                <SelectItem value="Instalasi Telekomunikasi">Instalasi Telekomunikasi</SelectItem>
                                                <SelectItem value="Konstruksi">Konstruksi</SelectItem>
                                                <SelectItem value="Pengecatan">Pengecatan</SelectItem>
                                                <SelectItem value="Marka Jalan">Marka Jalan</SelectItem>
                                                <SelectItem value="Paving Block">Paving Block</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-foreground/60 uppercase tracking-widest pl-1">Isi Pesan</label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        required
                                        disabled={status !== 'idle'}
                                        className="w-full bg-[#f8f9fa] border border-transparent rounded-xl p-4 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none placeholder:text-muted-foreground/40"
                                        placeholder="Ceritakan detail proyek Anda secara singkat..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    className={cn(
                                        "w-full h-14 text-white text-lg font-black rounded-xl transition-all hover:-translate-y-1 group relative overflow-hidden",
                                        status === 'idle' ? "bg-primary hover:bg-primary/90 shadow-[0_10px_30px_-10px_rgba(var(--primary),0.3)] hover:shadow-[0_15px_35px_-10px_rgba(var(--primary),0.4)]" :
                                            status === 'submitting' ? "bg-primary/70 cursor-wait" :
                                                "bg-green-500 hover:bg-green-600 shadow-lg shadow-green-200"
                                    )}
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        {status === 'idle' && (
                                            <>
                                                Kirim Sekarang <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                            </>
                                        )}
                                        {status === 'submitting' && (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" /> Mengirim...
                                            </>
                                        )}
                                        {status === 'sent' && (
                                            <>
                                                <CheckCircle2 className="w-5 h-5 animate-bounce" /> Berhasil Terkirim!
                                            </>
                                        )}
                                    </div>
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
