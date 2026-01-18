"use client"

import { ArrowUp, Phone } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const waButtonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    useGSAP(
        () => {
            // Entrance Animation
            if (isVisible) {
                gsap.to(containerRef.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)",
                    display: "flex",
                })

                // Subtle Floating Loop for WhatsApp Button
                gsap.to(waButtonRef.current, {
                    y: -5,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                })
            } else {
                gsap.to(containerRef.current, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    display: "none",
                })
            }
        },
        { scope: containerRef, dependencies: [isVisible] },
    )

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div
            ref={containerRef}
            className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-4 hidden opacity-0 scale-0"
        >

            <button
                onClick={scrollToTop}
                className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center"
                aria-label="Back to top"
            >
                <ArrowUp className="w-6 h-6" />
            </button>
        </div>
    )
}
