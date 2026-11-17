"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Interactive 3D Animated Logo
 * - Runs a smooth continuous floating/breathing loop
 * - Tracks mouse movements in 3D perspective with realistic depth & tilt
 * - Displays a dynamic ground shadow and light sheen reflecting the cursor
 */
export default function Interactive3DLogo() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0, translateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  // Physics animation refs
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const isInteracting = useRef(false);
  const animFrameRef = useRef(null);

  useEffect(() => {
    let startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = (now - startTime) * 0.0018;

      if (!isInteracting.current) {
        // Continuous ambient floating loop
        const ambientY = Math.sin(elapsed * 1.5) * 14;
        const ambientRotX = Math.cos(elapsed * 1.2) * 5;
        const ambientRotY = Math.sin(elapsed * 1.0) * 8;
        const ambientRotZ = Math.sin(elapsed * 0.8) * 2;

        // Smoothly interpolate current to ambient
        currentX.current += (ambientRotX - currentX.current) * 0.05;
        currentY.current += (ambientRotY - currentY.current) * 0.05;

        setRotation({
          x: currentX.current,
          y: currentY.current,
          z: ambientRotZ,
          translateY: ambientY,
        });

        // Ambient glare shift
        setGlarePos({
          x: 50 + Math.sin(elapsed) * 25,
          y: 50 + Math.cos(elapsed) * 25,
          opacity: 0.25,
        });
      } else {
        // User is interacting: smoothly follow mouse
        currentX.current += (targetX.current - currentX.current) * 0.12;
        currentY.current += (targetY.current - currentY.current) * 0.12;

        setRotation({
          x: currentX.current,
          y: currentY.current,
          z: (targetY.current - currentY.current) * 0.08,
          translateY: -4,
        });
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Mouse move handler
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalized from -1 to 1
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Tilt limits: rotateY up to 30deg, rotateX up to 26deg
    targetX.current = -normY * 26;
    targetY.current = normX * 32;
    isInteracting.current = true;
    setIsHovered(true);

    // Specular light position
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.45,
    });
  };

  const handleMouseLeave = () => {
    isInteracting.current = false;
    setIsHovered(false);
  };

  // Touch move for mobile screens
  const handleTouchMove = (e) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;

    const normX = Math.max(-1, Math.min(1, (x / rect.width) * 2 - 1));
    const normY = Math.max(-1, Math.min(1, (y / rect.height) * 2 - 1));

    targetX.current = -normY * 24;
    targetY.current = normX * 28;
    isInteracting.current = true;
    setIsHovered(true);

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.4,
    });
  };

  const handleTouchEnd = () => {
    isInteracting.current = false;
    setIsHovered(false);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-6 select-none">
      
      {/* 3D Perspective Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full max-w-[620px] h-[280px] sm:h-[350px] md:h-[390px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible"
        style={{ perspective: "1300px" }}
      >
        {/* Soft Background Radial Light Aura */}
        <div
          className="absolute w-[360px] sm:w-[480px] h-[220px] sm:h-[280px] rounded-full blur-3xl opacity-40 pointer-events-none transition-all duration-700"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.25) 0%, rgba(245, 158, 11, 0.2) 45%, transparent 75%)",
            transform: `translate3d(${rotation.y * -1.2}px, ${rotation.x * 1.2}px, -40px)`,
          }}
        />

        {/* 3D Dynamic Floating Logo Object */}
        <div
          className="relative flex items-center justify-center"
          style={{
            transform: `translate3d(0, ${rotation.translateY}px, 0) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Specular Glare Reflection Sheen */}
          <div
            className="absolute inset-0 z-30 pointer-events-none rounded-3xl mix-blend-overlay transition-opacity duration-300"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)`,
              transform: "translateZ(80px)",
            }}
          />

          {/* Realistic Dynamic Ground Shadow Underneath */}
          <div
            className="absolute -bottom-10 sm:-bottom-14 w-[75%] h-8 sm:h-12 rounded-[100%] bg-slate-950/20 blur-xl pointer-events-none transition-all duration-300"
            style={{
              transform: `translate3d(${rotation.y * -1.8}px, ${-rotation.translateY * 0.4}px, -60px) scale(${
                1 - Math.abs(rotation.translateY) * 0.015
              })`,
              opacity: 0.35 + Math.abs(rotation.translateY) * 0.01,
            }}
          />

          {/* High-Resolution Big Site Logo with 3D Depth */}
          <div
            className="relative w-[300px] sm:w-[420px] md:w-[490px] h-[180px] sm:h-[250px] md:h-[290px] flex items-center justify-center filter drop-shadow-[0_24px_38px_rgba(15,23,42,0.18)] transition-all duration-300"
            style={{ transform: "translateZ(50px)" }}
          >
            <Image
              src="/bbaeasynoteslogo.png"
              alt="BBA Easy Notes 3D Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 440px, 500px"
            />
          </div>
        </div>
      </div>

      {/* Interactive Helper Hint */}
      <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/70 text-[11px] sm:text-xs text-slate-500 font-medium shadow-2xs">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span>
          {isHovered ? "Interactive 3D active · Drag or tilt" : "Move mouse to explore 3D logo"}
        </span>
      </div>

    </div>
  );
}

