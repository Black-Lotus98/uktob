"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

// Import images
import U from "../../../assets/images/uktob logo/U_white.png";
import K from "../../../assets/images/uktob logo/K_White.png";
import T from "../../../assets/images/uktob logo/T_white.png";
import O from "../../../assets/images/uktob logo/O_white.png";
import B from "../../../assets/images/uktob logo/B_White.png";

const Logo = () => {
    const logoRef = useRef<HTMLDivElement>(null);
    const lettersRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        if (!lettersRef.current) return;

        // Create GSAP timeline
        tl.current = gsap.timeline({ paused: true });

        // Animate letters rolling up from behind the U
        tl.current
            .fromTo(
                lettersRef.current.children, // Target all letters inside the div
                { y: "100%", opacity: 0 }, // Start below
                { y: "0%", opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" }
            )

    }, []);

    const handleMouseEnter = () => {
        if (tl.current) tl.current.play();
    };

    const handleMouseLeave = () => {
        if (tl.current) tl.current.reverse();
    };

    return (
        <div
            ref={logoRef}
            className="relative flex items-center  overflow-hidden p-14 w-fit"
        >
            {/* U - Always Visible */}
            <div className="relative z-10 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image width={0} height={124} src={U} alt="U" className="rtl:hidden" />
                <Image width={0} height={124} src={B} alt="B" className="hidden rtl:block" />
            </div>

            {/* Other letters - Positioned below initially */}
            <div ref={lettersRef} className="relative flex gap-2 overflow-hidden p-2">
                <div className="letter transform translate-y-full">
                    <Image width={0} height={124} src={K} alt="K" className="rtl:hidden" />
                    <Image width={0} height={124} src={O} alt="O" className="hidden rtl:block" />

                </div>
                <div className="letter transform translate-y-full">
                    <Image width={0} height={124} src={T} alt="T" />
                </div>
                <div className="letter transform translate-y-full">
                    <Image width={0} height={124} src={O} alt="O" className="rtl:hidden" />
                    <Image width={0} height={124} src={K} alt="K" className="hidden rtl:block" />
                </div>
                <div className="letter transform translate-y-full">
                    <Image width={0} height={124} src={B} alt="B" className="rtl:hidden" />
                    <Image width={0} height={124} src={U} alt="U" className="hidden rtl:block" />
                </div>
            </div>
        </div>
    );
};

export default Logo;
