import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function LuxuryCloud() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 100);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create a luxurious, soft cloud texture using canvas
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      // Brand taupe/champagne tones for the cloud - Much softer now
      gradient.addColorStop(0, 'rgba(200, 182, 166, 0.08)'); 
      gradient.addColorStop(0.5, 'rgba(150, 130, 110, 0.03)');
      gradient.addColorStop(1, 'rgba(19, 15, 8, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const cloudParticles: THREE.Mesh[] = [];
    // Larger planes for a smoother, home-like glow effect
    const cloudGeometry = new THREE.PlaneGeometry(60, 60);
    const cloudMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.3, // Lower opacity to make it less visible
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < 15; i++) { // Fewer, larger clouds
      const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
      // Distribute randomly in a larger volume
      cloud.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 15 - 5
      );
      cloud.rotation.z = Math.random() * Math.PI * 2;
      
      // Increased speeds for noticeable but smooth movement
      cloud.userData = {
        rotationSpeed: (Math.random() - 0.5) * 0.008,
        driftSpeedX: (Math.random() - 0.5) * 0.05,
        driftSpeedY: (Math.random() - 0.5) * 0.04,
      };

      scene.add(cloud);
      cloudParticles.push(cloud);
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      cloudParticles.forEach(p => {
        p.rotation.z += p.userData.rotationSpeed;
        p.position.x += p.userData.driftSpeedX;
        p.position.y += p.userData.driftSpeedY;

        // Wrap around to keep the cloud infinite
        if (p.position.x > 30) p.position.x = -30;
        if (p.position.x < -30) p.position.x = 30;
        if (p.position.y > 20) p.position.y = -20;
        if (p.position.y < -20) p.position.y = 20;
        
        // Always face camera
        p.lookAt(camera.position);
      });

      // Slowly drift camera for parallax feel (increased speed slightly)
      camera.position.x = Math.sin(time * 0.4) * 5;
      camera.position.y = Math.cos(time * 0.3) * 3;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0" 
      style={{
        // Fade out top and bottom so it blends smoothly into the section
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
      }}
    />
  );
}
