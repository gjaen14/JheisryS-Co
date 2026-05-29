import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x181514, 0.015);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 15, 30);
    camera.lookAt(0, 5, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Weave (Alta Costura Digital)
    const columns = 65;
    const rows = 45;
    const count = columns * rows;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const baseColorArr = [
      new THREE.Color(0xb39e8c), // Accent Taupe
      new THREE.Color(0x251e1a), // Deep Warm Brown
      new THREE.Color(0xfafafa), // Pure Neutral Light
    ];

    let index = 0;
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows; r++) {
        // Grid layout stretching outward
        const x = (c - columns / 2) * 1.2;
        const z = (r - rows / 2) * 1.2;
        const y = 0;

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        // Color interpolation based on position for fine luxury shades
        const mixRatio = (c / columns + r / rows) / 2;
        const col = new THREE.Color().copy(baseColorArr[0]).lerp(baseColorArr[1], mixRatio);
        
        colors[index * 3] = col.r;
        colors[index * 3 + 1] = col.g;
        colors[index * 3 + 2] = col.b;

        // Varying sizes for a starry mesh feeling
        sizes[index] = Math.random() * 1.5 + 0.5;

        index++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom shader material for smooth premium particles
    const vertexShader = `
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z) * 0.4;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      void main() {
        // Soft circular smooth dots instead of rigid squares
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = smoothstep(0.5, 0.2, dist);
        // Add a slight golden bloom look
        gl_FragColor = vec4(vColor, alpha * 0.85);
      }
    `;

    // Assign sizes custom attribute
    const sizesAttribute = new THREE.BufferAttribute(sizes, 1);
    geometry.setAttribute("size", sizesAttribute);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Floating Sparkles (Brillo / Chispa) representing exclusivity and boutique detail
    const sparkCount = 45;
    const sparkGeometry = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkVelocities: number[] = [];
    const sparkOffsets: number[] = [];

    for (let i = 0; i < sparkCount; i++) {
      // Random coordinates in space
      sparkPositions[i * 3] = (Math.random() - 0.5) * 60;
      sparkPositions[i * 3 + 1] = Math.random() * 20 - 5;
      sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      sparkVelocities.push(0.01 + Math.random() * 0.02);
      sparkOffsets.push(Math.random() * Math.PI * 2);
    }

    sparkGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));

    const sparkMaterial = new THREE.PointsMaterial({
      color: 0xb39e8c,
      size: 1.8,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const sparkles = new THREE.Points(sparkGeometry, sparkMaterial);
    scene.add(sparkles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x181514, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xb39e8c, 0.8, 100);
    pointLight.position.set(0, 10, 15);
    scene.add(pointLight);

    // Mouse Tracking setup
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      targetX = x * 8;
      targetY = y * 4;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clock
    const clock = new THREE.Clock();

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow dynamic wave interpolation for the particle weave
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      let pIdx = 0;
      for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows; r++) {
          const x = posAttr.getX(pIdx);
          const z = posAttr.getZ(pIdx);

          // Double waves for silk/ribbon luxurious feeling
          const y =
            Math.sin(x * 0.12 + elapsedTime * 0.4) * Math.cos(z * 0.1 + elapsedTime * 0.3) * 2.5 +
            Math.sin((x + z) * 0.05 + elapsedTime * 0.2) * 1.5;

          posAttr.setY(pIdx, y - 4); // Position below main text elements
          pIdx++;
        }
      }
      posAttr.needsUpdate = true;

      // Float sparkles upwards with sinusoidal sway
      const sparkPosAttr = sparkGeometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < sparkCount; i++) {
        let y = sparkPosAttr.getY(i);
        let x = sparkPosAttr.getX(i);
        
        y += sparkVelocities[i];
        x += Math.sin(elapsedTime * 0.5 + sparkOffsets[i]) * 0.01;

        // Reset if float out of bounds
        if (y > 25) {
          y = -10;
          x = (Math.random() - 0.5) * 60;
        }

        sparkPosAttr.setY(i, y);
        sparkPosAttr.setX(i, x);
      }
      sparkPosAttr.needsUpdate = true;

      // Smooth camera interpolation based on mouse coordinates (luxury inertia damping)
      camera.position.x += (targetX - camera.position.x) * 0.035;
      camera.position.y += (15 + targetY - camera.position.y) * 0.035;
      camera.lookAt(0, -1, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer for perfect Responsive styling without window resize flickering
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = entry.contentRect.width;
        height = entry.contentRect.height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      sparkGeometry.dispose();
      sparkMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full z-0 overflow-hidden"
      style={{ pointerEvents: 'none' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
}
