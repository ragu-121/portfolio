// FeatherTrail.tsx
// "use client";
import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  rotation: number;
};

const FeatherTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 5; i++) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: 5 + Math.random() * 5,
          alpha: 1,
          rotation: Math.random() * Math.PI * 2,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;         // gravity-like
        p.alpha -= 0.02;
        p.rotation += 0.02;

        if (p.alpha <= 0) {
          particles.current.splice(idx, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          // draw feather — here just a rectangle / line, but you can draw your feather image or path
          ctx.fillStyle = "#60A5FA";
          ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size * 2);
          ctx.restore();
        }
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }} />;
};

export default FeatherTrail;
