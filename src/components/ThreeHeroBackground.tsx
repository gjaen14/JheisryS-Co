import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Capture reference
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 5, 22);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Colors
    // Taupe/Gold: #B39E8C -> rgb(179, 158, 140)
    const colorGold = new THREE.Color(0xb39e8c);
    const colorEspresso = new THREE.Color(0x251e1a);

    // Create a gorgeous particle cloud wave (incorporating physical craftsmanship)
    const count = 4000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const initialY = new Float32Array(count);
    const randomOffsets = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Spread in a circular/elliptical grid
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      // Ellipse proportions
      const r = 10 + Math.random() * 25;
      const x = r * Math.cos(theta);
      const z = r * Math.sin(theta);
      const y = (Math.sin(x * 0.15) * Math.cos(z * 0.15) * 1.5) + (Math.random() - 0.5) * 0.8;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialY[i] = y;
      randomOffsets[i] = Math.random() * Math.PI * 2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom material with physical light characteristics for premium look
    const material = new THREE.PointsMaterial({
      size: 0.12,
      color: colorGold,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Create a fine wireframe architectural mesh (the structured technical blueprint)
    const meshGeometry = new THREE.PlaneGeometry(50, 50, 24, 24);
    const meshMaterial = new THREE.MeshBasicMaterial({
      color: colorEspresso,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const structureMesh = new THREE.Mesh(meshGeometry, meshMaterial);
    structureMesh.rotation.x = -Math.PI / 2;
    structureMesh.position.y = -4;
    scene.add(structureMesh);

    // Add subtle amber/gold points of light
    const pointLight = new THREE.PointLight(0xb39e8c, 2, 50);
    pointLight.position.set(0, 10, 5);
    scene.add(pointLight);

    // Track mouse
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse to -1 to 1
      targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Smooth mouse interpolation (easing)
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Animate particles - waves
      const positionAttribute = geometry.getAttribute('position') as THREE.BufferAttribute;
      const array = positionAttribute.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const x = array[i * 3];
        const z = array[i * 3 + 2];

        // Combine multiple sine waves for rich digital texture
        const wave1 = Math.sin(x * 0.1 + time * 0.5) * Math.cos(z * 0.1 + time * 0.5) * 1.6;
        const wave2 = Math.sin(x * 0.05 - time * 0.2) * 1.0;
        const waveOffset = Math.sin(randomOffsets[i] + time) * 0.15;

        // Apply mouse distortion
        const distFromCenter = Math.sqrt(x*x + z*z);
        const mouseInfluence = Math.max(0, 15 - distFromCenter) * 0.03;
        const mouseWave = Math.sin(distFromCenter * 0.2 - time * 2.0) * mouseInfluence * mouseY * 2.0;

        array[i * 3 + 1] = initialY[i] + wave1 + wave2 + waveOffset + mouseWave;
      }
      positionAttribute.needsUpdate = true;

      // Rotate particle systems slowly
      particleSystem.rotation.y = time * 0.03 + mouseX * 0.15;
      particleSystem.rotation.x = mouseY * 0.08;

      // Rotate blueprint mesh
      structureMesh.rotation.z = time * 0.015;
      structureMesh.position.y = -3 + Math.sin(time * 0.3) * 0.5 + mouseY * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Disposal of items to avoid memory leaks
      geometry.dispose();
      material.dispose();
      meshGeometry.dispose();
      meshMaterial.dispose();
      
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full z-0 overflow-hidden"
      style={{ pointerEvents: 'none' }}
    />
  );
}
