"use client"

import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedCounterProps {
    target: number
    suffix?: string
    duration?: number
    className?: string
}

export function AnimatedCounter({ target, suffix = "", duration = 2, className = "" }: AnimatedCounterProps) {
    const [count, setCount] = useState({ value: 0 })
    const counterRef = useRef<HTMLSpanElement>(null)

    useGSAP(() => {
        const el = counterRef.current
        if (!el) return

        gsap.to(count, {
            value: target,
            duration: duration,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
            },
            onUpdate: () => {
                if (el) {
                    el.textContent = Math.floor(count.value).toLocaleString() + suffix
                }
            },
        })
    }, [target, suffix, duration])

    return (
        <span ref={counterRef} className={className}>
            0{suffix}
        </span>
    )
}
