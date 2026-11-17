"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * True 3D Extruded Logo in Three.js
 * - Real extruded geometry with bevels, materials, and depth
 * - Real lighting with specular reflections
 * - Continuous ambient floating / breathing loop
 * - Tracks mouse movements across the screen with smooth 3D tilt
 */
export default function ThreeDLogoCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 400;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0, 480);

    // 2. Renderer with Antialiasing & Alpha (transparent background)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 3. Materials
    const navyMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e40af, // Rich Royal Navy Blue
      roughness: 0.28,
      metalness: 0.18,
    });

    const darkNavyMaterial = new THREE.MeshStandardMaterial({
      color: 0x172554, // Deep Navy for skull cap
      roughness: 0.35,
      metalness: 0.12,
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b, // Vibrant Warm Gold / Amber
      roughness: 0.22,
      metalness: 0.32,
    });

    const whiteTrimMaterial = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.2,
      metalness: 0.05,
    });

    // Main Group containing all 3D parts
    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // Common Extrude Settings
    const extrudeCapSettings = {
      depth: 10,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 2.2,
      bevelThickness: 2.2,
    };

    const extrudeWingSettings = {
      depth: 8,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 1.8,
      bevelThickness: 1.8,
    };

    // -------------------------------------------------------------
    // Part A: Mortarboard Diamond Top (Navy)
    // -------------------------------------------------------------
    const capTopShape = new THREE.Shape();
    capTopShape.moveTo(0, 75);
    capTopShape.lineTo(135, 25);
    capTopShape.lineTo(0, -25);
    capTopShape.lineTo(-135, 25);
    capTopShape.closePath();

    const capTopGeo = new THREE.ExtrudeGeometry(capTopShape, extrudeCapSettings);
    capTopGeo.center();
    const capTopMesh = new THREE.Mesh(capTopGeo, navyMaterial);
    capTopMesh.position.set(0, 35, 12);
    capTopMesh.castShadow = true;
    logoGroup.add(capTopMesh);

    // Center Gold Pin on Top of Cap
    const pinGeo = new THREE.CylinderGeometry(5, 5, 4, 16);
    const pinMesh = new THREE.Mesh(pinGeo, goldMaterial);
    pinMesh.rotation.x = Math.PI / 2;
    pinMesh.position.set(0, 35, 20);
    logoGroup.add(pinMesh);

    // Gold Tassel Hanging to the Right
    const tasselCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 35, 20),
      new THREE.Vector3(30, 33, 19),
      new THREE.Vector3(75, 25, 16),
      new THREE.Vector3(100, 10, 14),
      new THREE.Vector3(105, -12, 12),
    ]);
    const tasselGeo = new THREE.TubeGeometry(tasselCurve, 20, 2, 8, false);
    const tasselMesh = new THREE.Mesh(tasselGeo, goldMaterial);
    logoGroup.add(tasselMesh);

    // Tassel End Fringe
    const fringeGeo = new THREE.ConeGeometry(5, 14, 16);
    const fringeMesh = new THREE.Mesh(fringeGeo, goldMaterial);
    fringeMesh.position.set(105, -19, 12);
    fringeMesh.rotation.z = Math.PI;
    logoGroup.add(fringeMesh);

    // -------------------------------------------------------------
    // Part B: Skull Cap Base & Gold Ring
    // -------------------------------------------------------------
    const skullCapShape = new THREE.Shape();
    skullCapShape.moveTo(-52, 22);
    skullCapShape.lineTo(52, 22);
    skullCapShape.lineTo(44, -30);
    skullCapShape.quadraticCurveTo(0, -42, -44, -30);
    skullCapShape.closePath();

    const skullCapGeo = new THREE.ExtrudeGeometry(skullCapShape, {
      depth: 18,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 2,
      bevelThickness: 2,
    });
    skullCapGeo.center();
    const skullCapMesh = new THREE.Mesh(skullCapGeo, darkNavyMaterial);
    skullCapMesh.position.set(0, 10, 0);
    skullCapMesh.castShadow = true;
    logoGroup.add(skullCapMesh);

    // Gold Trim Band
    const bandShape = new THREE.Shape();
    bandShape.moveTo(-45, -28);
    bandShape.lineTo(45, -28);
    bandShape.lineTo(40, -40);
    bandShape.quadraticCurveTo(0, -50, -40, -40);
    bandShape.closePath();

    const bandGeo = new THREE.ExtrudeGeometry(bandShape, {
      depth: 20,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 1.5,
      bevelThickness: 1.5,
    });
    bandGeo.center();
    const bandMesh = new THREE.Mesh(bandGeo, goldMaterial);
    bandMesh.position.set(0, -2, 1);
    logoGroup.add(bandMesh);

    // White Divider Line
    const dividerShape = new THREE.Shape();
    dividerShape.moveTo(-42, -26);
    dividerShape.lineTo(42, -26);
    dividerShape.lineTo(41, -29);
    dividerShape.quadraticCurveTo(0, -36, -41, -29);
    dividerShape.closePath();

    const dividerGeo = new THREE.ExtrudeGeometry(dividerShape, {
      depth: 21,
      bevelEnabled: false,
    });
    dividerGeo.center();
    const dividerMesh = new THREE.Mesh(dividerGeo, whiteTrimMaterial);
    dividerMesh.position.set(0, 1, 1.5);
    logoGroup.add(dividerMesh);

    // -------------------------------------------------------------
    // Part C: Open Book Wings (Amber Upper & Navy Lower)
    // -------------------------------------------------------------
    // 1. Left Upper Wing (Gold)
    const leftUpperShape = new THREE.Shape();
    leftUpperShape.moveTo(-5, -45);
    leftUpperShape.bezierCurveTo(-50, -42, -120, -18, -170, -14);
    leftUpperShape.bezierCurveTo(-145, -34, -75, -55, -5, -60);
    leftUpperShape.closePath();

    const leftUpperGeo = new THREE.ExtrudeGeometry(leftUpperShape, extrudeWingSettings);
    const leftUpperMesh = new THREE.Mesh(leftUpperGeo, goldMaterial);
    leftUpperMesh.castShadow = true;
    logoGroup.add(leftUpperMesh);

    // 2. Right Upper Wing (Gold)
    const rightUpperShape = new THREE.Shape();
    rightUpperShape.moveTo(5, -45);
    rightUpperShape.bezierCurveTo(50, -42, 120, -18, 170, -14);
    rightUpperShape.bezierCurveTo(145, -34, 75, -55, 5, -60);
    rightUpperShape.closePath();

    const rightUpperGeo = new THREE.ExtrudeGeometry(rightUpperShape, extrudeWingSettings);
    const rightUpperMesh = new THREE.Mesh(rightUpperGeo, goldMaterial);
    rightUpperMesh.castShadow = true;
    logoGroup.add(rightUpperMesh);

    // 3. Left Lower Wing (Navy)
    const leftLowerShape = new THREE.Shape();
    leftLowerShape.moveTo(-8, -64);
    leftLowerShape.bezierCurveTo(-50, -60, -100, -44, -135, -42);
    leftLowerShape.bezierCurveTo(-110, -58, -60, -74, -8, -78);
    leftLowerShape.closePath();

    const leftLowerGeo = new THREE.ExtrudeGeometry(leftLowerShape, extrudeWingSettings);
    const leftLowerMesh = new THREE.Mesh(leftLowerGeo, navyMaterial);
    leftLowerMesh.castShadow = true;
    logoGroup.add(leftLowerMesh);

    // 4. Right Lower Wing (Navy)
    const rightLowerShape = new THREE.Shape();
    rightLowerShape.moveTo(8, -64);
    rightLowerShape.bezierCurveTo(50, -60, 100, -44, 135, -42);
    rightLowerShape.bezierCurveTo(110, -58, 60, -74, 8, -78);
    rightLowerShape.closePath();

    const rightLowerGeo = new THREE.ExtrudeGeometry(rightLowerShape, extrudeWingSettings);
    const rightLowerMesh = new THREE.Mesh(rightLowerGeo, navyMaterial);
    rightLowerMesh.castShadow = true;
    logoGroup.add(rightLowerMesh);

    // Center the whole logo vertically
    logoGroup.position.y = 12;

    // -------------------------------------------------------------
    // Lighting Setup for High-End 3D Specular Shimmer
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(120, 160, 200);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x93c5fd, 1.1); // subtle blue fill
    fillLight.position.set(-140, -80, 120);
    scene.add(fillLight);

    const goldPointLight = new THREE.PointLight(0xfef08a, 2.5, 350); // warm gold shimmer
    goldPointLight.position.set(0, 0, 120);
    scene.add(goldPointLight);

    // Ground Soft Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(360, 120);
    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext("2d");
    if (sCtx) {
      const grad = sCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, "rgba(15, 23, 42, 0.28)");
      grad.addColorStop(0.5, "rgba(15, 23, 42, 0.08)");
      grad.addColorStop(1, "rgba(15, 23, 42, 0)");
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const groundShadow = new THREE.Mesh(shadowGeo, shadowMat);
    groundShadow.rotation.x = -Math.PI / 2;
    groundShadow.position.set(0, -115, 0);
    scene.add(groundShadow);

    // -------------------------------------------------------------
    // Mouse Interaction Tracking
    // -------------------------------------------------------------
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let isInteracting = false;
    let animId = null;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalized coordinates (-1 to +1)
      const normX = (x / rect.width) * 2 - 1;
      const normY = (y / rect.height) * 2 - 1;

      // 3D tilt targets
      targetRotY = normX * 0.65; // ~37 degrees
      targetRotX = -normY * 0.55; // ~31 degrees
      isInteracting = true;
    };

    const onMouseLeave = () => {
      isInteracting = false;
    };

    // Touch support for mobile
    const onTouchMove = (e) => {
      if (!e.touches[0]) return;
      const rect = container.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      const normX = Math.max(-1, Math.min(1, (x / rect.width) * 2 - 1));
      const normY = Math.max(-1, Math.min(1, (y / rect.height) * 2 - 1));

      targetRotY = normX * 0.55;
      targetRotX = -normY * 0.45;
      isInteracting = true;
    };

    const onTouchEnd = () => {
      isInteracting = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 600;
      const newH = container.clientHeight || 400;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", onResize);

    // -------------------------------------------------------------
    // Animation Loop (Continuous Floating + Physics Easing)
    // -------------------------------------------------------------
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Ambient floating sine wave
      const ambientFloatY = Math.sin(elapsed * 1.6) * 12;
      const ambientBobX = Math.cos(elapsed * 1.1) * 0.08;
      const ambientBobY = Math.sin(elapsed * 0.9) * 0.12;

      if (!isInteracting) {
        // Smoothly return toward ambient floating pose
        logoGroup.rotation.y += (ambientBobY - logoGroup.rotation.y) * 0.05;
        logoGroup.rotation.x += (ambientBobX - logoGroup.rotation.x) * 0.05;
        logoGroup.rotation.z += (Math.sin(elapsed * 0.8) * 0.04 - logoGroup.rotation.z) * 0.05;
      } else {
        // Follow mouse in 3D with spring ease
        logoGroup.rotation.y += (targetRotY - logoGroup.rotation.y) * 0.09;
        logoGroup.rotation.x += (targetRotX - logoGroup.rotation.x) * 0.09;
        logoGroup.rotation.z += (targetRotY * -0.1 - logoGroup.rotation.z) * 0.08;
      }

      logoGroup.position.y = 12 + ambientFloatY;

      // Adjust ground shadow with floating height
      groundShadow.scale.set(
        1 - ambientFloatY * 0.015,
        1 - ambientFloatY * 0.015,
        1
      );
      groundShadow.position.x = logoGroup.rotation.y * -30;

      // Move specular point light with rotation
      goldPointLight.position.x = Math.sin(elapsed * 1.5) * 60;
      goldPointLight.position.y = Math.cos(elapsed * 1.2) * 40;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);

      // Clean up Three.js resources
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full max-w-[560px] h-[320px] sm:h-[380px] md:h-[420px] mx-auto cursor-grab active:cursor-grabbing select-none"
    />
  );
}

