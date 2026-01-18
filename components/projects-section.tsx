"use client"

import { useRef, useState, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, Filter, Construction, Zap, Truck, Move, LayoutGrid, X, Calendar, MapPin, Briefcase, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

const CATEGORIES = [
    "Semua",
    "FTTH / Telekomunikasi",
    "Pekerjaan Elektrikal",
    "Pekerjaan Aspal",
    "Pekerjaan Pemadatan",
    "Pengerjaan Paving Block"
]

const PROJECTS = [
    {
        id: 1,
        title: "Pengaspalan",
        category: "Pekerjaan Aspal",
        location: "Jawa Barat, Indonesia",
        client: "Dinas Pekerjaan Umum",
        date: "2024",
        description: "Pekerjaan pengaspalan jalan lingkungan dengan standar kualitas tinggi untuk meningkatkan konektivitas dan kenyamanan warga.",
        images: [
            "pengaspalan/aspal.jpeg",
            "pengaspalan/aspal2.png",
            "pengaspalan/aspal3.png",
        ],
        icon: <Construction className="w-5 h-5" />,
        isLandscape: false
    },
    {
        id: 2,
        title: "FTTH / Telekomunikasi",
        category: "FTTH / Telekomunikasi",
        location: "Jawa Tengah, Indonesia",
        client: "Provider Telekomunikasi Nasional",
        date: "2024",
        description: "Pembangunan infrastruktur jaringan fiber optic (FTTH) untuk memperluas jangkauan layanan internet broadband berkecepatan tinggi.",
        images: [
            "ftth/ftth.png",
            "ftth/ftth2.png",
            "ftth/ftth3.png",
        ],
        icon: <Truck className="w-5 h-5" />,
        isLandscape: false
    },
    {
        id: 3,
        title: "Pemadatan",
        category: "Pekerjaan Pemadatan",
        location: "Jawa Barat, Indonesia",
        client: "Kawasan Industri Terpadu",
        date: "2024",
        description: "Proses pemadatan lahan skala besar untuk persiapan pembangunan gudang logistik dan fasilitas industri.",
        images: [
            "pemadatan/pemadatan.png",
            "pemadatan/pemadatan2.png",
            "pemadatan/pemadatan3.png",
            "pemadatan/pemadatan4.png"
        ],
        icon: <Move className="w-5 h-5" />,
        isLandscape: true
    },
    {
        id: 4,
        title: "Paving Block",
        category: "Pengerjaan Paving Block",
        location: "Jawa Barat, Indonesia",
        client: "Developer Perumahan Elit",
        date: "2024",
        description: "Pemasangan paving block dengan motif estetik dan daya tahan tinggi untuk area pedestrian dan parkir cluster perumahan.",
        images: [
            "paving-block/paving.png",
            "paving-block/paving2.png",
            "paving-block/paving3.png",
        ],
        icon: <LayoutGrid className="w-5 h-5" />,
        isLandscape: true
    },
    {
        id: 5,
        title: "Elektrikal",
        category: "Pekerjaan Elektrikal",
        location: "Jawa Barat, Indonesia",
        client: "Gedung Perkantoran Pusat",
        date: "2024",
        description: "Instalasi dan commissioning sistem panel listrik utama serta pembagian jalur daya untuk gedung bertingkat.",
        images: [
            "elektrikal/elektrikal.webp",
            "elektrikal/elektrikal2.webp",
            "elektrikal/elektrikal3.webp",
        ],
        icon: <Zap className="w-5 h-5" />,
        isLandscape: false
    },
]

export function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeFilter, setActiveFilter] = useState("Semua")
    const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null)
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    const filteredProjects = activeFilter === "Semua"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeFilter)

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
                ".projects-header",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power3.out",
                },
            ).fromTo(
                ".filter-btn",
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: "power3.out",
                },
                "-=0.3"
            ).fromTo(
                ".project-card",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                },
                "-=0.3",
            )
        },
        { scope: containerRef },
    )

    useEffect(() => {
        // Run animation whenever activeFilter changes to ensure newly shown items are visible
        gsap.fromTo(".project-card",
            { scale: 0.95, opacity: 0, y: 20 },
            { scale: 1, opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power3.out" }
        )
    }, [activeFilter])

    useEffect(() => {
        // Cleanup function to restore body overflow when component unmounts
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    const openProject = (project: typeof PROJECTS[0]) => {
        setSelectedProject(project)
        setActiveImageIndex(0)
        document.body.style.overflow = "hidden"
    }

    const closeProject = () => {
        setSelectedProject(null)
        document.body.style.overflow = "auto"
    }

    const scrollToContact = () => {
        closeProject()
        const contactSection = document.getElementById("contact")
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="projects" ref={containerRef} className="py-20 md:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="projects-header text-center mb-16 opacity-0">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Proyek Kami</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-foreground mb-12">Landmark Teknik & Dokumentasi</h3>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={cn(
                                    "filter-btn px-4 md:px-6 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 border-2 uppercase tracking-widest",
                                    activeFilter === cat
                                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/25 translate-y-[-2px]"
                                        : "bg-white border-gray-100 text-muted-foreground hover:border-primary/30 hover:text-primary"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, i) => (
                            <div
                                key={`${project.id}-${i}`}
                                onClick={() => openProject(project)}
                                className="project-card group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0"
                            >
                                <div className="absolute inset-0">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>
                                <div className="absolute inset-x-4 top-4 z-10">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full inline-flex items-center gap-2 text-white text-[10px] font-bold">
                                        <Maximize2 className="w-3 h-3" />
                                        {project.images.length} Foto
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex flex-col gap-2 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        <div className="flex items-center gap-2 text-secondary font-black text-[10px] uppercase tracking-[0.2em]">
                                            {project.icon}
                                            {project.category}
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-bold text-white line-clamp-2 leading-tight">
                                            {project.title}
                                        </h4>
                                    </div>

                                    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                                        <p className="text-gray-300 text-xs font-medium uppercase tracking-wider">{project.location}</p>
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center translate-x-4 group-hover:translate-x-0 transition-all duration-500 shadow-xl">
                                            <ArrowUpRight className="w-5 h-5 text-black" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-white shadow-inner rounded-full flex items-center justify-center mx-auto mb-6">
                                <Filter className="w-8 h-8 text-gray-300" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Proyek Belum Tersedia</h3>
                            <p className="text-muted-foreground">Kami sedang memperbarui galeri proyek untuk kategori ini.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal Gallery */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeProject}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className={cn(
                                "relative w-full max-w-6xl bg-white overflow-hidden shadow-2xl flex flex-col lg:flex-row",
                                "h-full md:h-auto max-h-none md:max-h-[90vh] rounded-none md:rounded-[3rem]"
                            )}
                        >
                            <button
                                onClick={closeProject}
                                className="absolute top-6 right-6 z-50 w-12 h-12 bg-black/50 hover:bg-black backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all active:scale-95"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Gallery Section */}
                            <div className={cn(
                                "flex-grow relative bg-gray-900 overflow-hidden group/gallery lg:min-h-0",
                                selectedProject.isLandscape ? "aspect-video md:aspect-auto" : "min-h-[40vh]"
                            )}>
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeImageIndex}
                                        src={selectedProject.images[activeImageIndex]}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                        className={cn(
                                            "w-full h-full",
                                            selectedProject.isLandscape ? "object-cover md:object-contain" : "object-contain"
                                        )}
                                    />
                                </AnimatePresence>

                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : selectedProject.images.length - 1))
                                            }}
                                            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all md:opacity-0 md:group-hover/gallery:opacity-100"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setActiveImageIndex((prev) => (prev < selectedProject.images.length - 1 ? prev + 1 : 0))
                                            }}
                                            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all md:opacity-0 md:group-hover/gallery:opacity-100"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </>
                                )}

                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                    {selectedProject.images.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={cn(
                                                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                                activeImageIndex === idx ? "w-8 bg-white" : "bg-white/30"
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="w-full lg:w-[450px] p-8 md:p-12 overflow-y-auto bg-white">
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.2em] mb-4">
                                        {selectedProject.icon}
                                        {selectedProject.category}
                                    </div>
                                    <h2 className="text-3xl font-black text-foreground mb-6 leading-tight uppercase tracking-tight">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="space-y-6 pt-8 border-t border-gray-100">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                                            <Briefcase className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <div>
                                            <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Jenis Proyek</h5>
                                            <p className="font-bold text-foreground text-sm">{selectedProject.category}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <div>
                                            <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Lokasi</h5>
                                            <p className="font-bold text-foreground text-sm">{selectedProject.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                                            <Calendar className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <div>
                                            <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Tahun</h5>
                                            <p className="font-bold text-foreground text-sm">{selectedProject.date}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <button
                                        onClick={scrollToContact}
                                        className="w-full h-14 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] uppercase tracking-widest text-xs"
                                    >
                                        Konsultasi Proyek Ini
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
