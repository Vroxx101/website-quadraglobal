"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    {
      name: "Tentang",
      href: "#about",
      subLinks: [
        { name: "Layanan", href: "#services" },
        { name: "Proyek", href: "#projects" },
      ]
    },
    { name: "Tim", href: "#team" },
    { name: "Kontak", href: "#contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md border-b border-border/10 supports-[backdrop-filter]:bg-white/60"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-qgn.png"
            alt="QGN Logo"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <div>
            <span className={cn(
              "block font-bold text-sm sm:text-xl tracking-tight leading-tight transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}>Quadra Global</span>
            <span className={cn(
              "block text-[12px] sm:text-xs tracking-wider leading-tight transition-colors duration-300",
              isScrolled ? "text-muted-foreground" : "text-white/80"
            )}>NUSANTARA</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.subLinks ? (
                <>
                  <button
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors duration-300",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-xl shadow-xl border border-border p-2 min-w-[160px]">
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      >
                        {link.name} Kami
                      </Link>
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium hover:text-primary transition-colors duration-300",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary/90 hover:shadow-lg transition-all"
          >
            Dapatkan Penawaran
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            className={cn(
              "transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/50 backdrop-blur-md border-b border-border shadow-lg p-6 md:hidden animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <div className="flex flex-col">
                    <button
                      className="flex items-center justify-between w-full py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                    >
                      {link.name}
                      <ChevronDown className={cn("w-5 h-5 transition-transform", isAboutOpen && "rotate-180")} />
                    </button>
                    {isAboutOpen && (
                      <div className="flex flex-col pl-4 border-l-2 border-primary/20 mt-1 gap-1">
                        <Link
                          href={link.href}
                          className="py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name} Kami
                        </Link>
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="py-2 text-lg font-medium text-foreground hover:text-primary transition-colors block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="#contact"
              className="mt-4 px-6 py-3 bg-secondary text-white text-center font-bold rounded-xl shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all active:scale-[0.98]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dapatkan Penawaran
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
