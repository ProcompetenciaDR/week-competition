import React, { useEffect, useRef } from 'react';

interface HexagonParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  rotation: number;
  rotationSpeed: number;
  glowIntensity: number;
  pulsePhase: number;
}

interface Connection {
  particle1: HexagonParticle;
  particle2: HexagonParticle;
  opacity: number;
  distance: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HexagonParticle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      const particles: HexagonParticle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000); // Density based on screen size
      
      for (let i = 0; i < particleCount; i++) {
        const isBlue = Math.random() < 0.7; // 70% blue, 30% red for ProCompetencia colors
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5, // Slow movement
          vy: (Math.random() - 0.5) * 0.5,
          size: 3 + Math.random() * 8, // Varied sizes
          opacity: 0.3 + Math.random() * 0.7,
          hue: isBlue ? 200 : 0, // Blue or red
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          glowIntensity: 0.5 + Math.random() * 0.5,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
      
      particlesRef.current = particles;
    };

    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + rotation;
        const px = x + Math.cos(angle) * size;
        const py = y + Math.sin(angle) * size;
        
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();
    };

    const drawParticle = (ctx: CanvasRenderingContext2D, particle: HexagonParticle, time: number) => {
      const pulseEffect = Math.sin(time * 0.003 + particle.pulsePhase) * 0.2 + 0.8;
      const currentSize = particle.size * pulseEffect;
      const currentOpacity = particle.opacity * pulseEffect;
      
      ctx.save();
      
      // Draw glow effect
      const glowSize = currentSize * 3;
      const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowSize);
      gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, ${currentOpacity * 0.8})`);
      gradient.addColorStop(0.3, `hsla(${particle.hue}, 70%, 60%, ${currentOpacity * 0.4})`);
      gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 50%, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw hexagon outline
      ctx.strokeStyle = `hsla(${particle.hue}, 90%, 65%, ${currentOpacity})`;
      ctx.lineWidth = 1.5;
      drawHexagon(ctx, particle.x, particle.y, currentSize, particle.rotation);
      ctx.stroke();
      
      // Draw inner hexagon (filled)
      ctx.fillStyle = `hsla(${particle.hue}, 85%, 70%, ${currentOpacity * 0.3})`;
      drawHexagon(ctx, particle.x, particle.y, currentSize * 0.7, particle.rotation);
      ctx.fill();
      
      // Draw center dot
      ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, ${currentOpacity})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentSize * 0.2, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const drawConnection = (ctx: CanvasRenderingContext2D, connection: Connection) => {
      const { particle1, particle2, opacity } = connection;
      
      // Draw main connection line
      ctx.strokeStyle = `hsla(220, 60%, 60%, ${opacity * 0.6})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(particle1.x, particle1.y);
      ctx.lineTo(particle2.x, particle2.y);
      ctx.stroke();
      
      // Draw glow effect for connection
      ctx.strokeStyle = `hsla(220, 80%, 70%, ${opacity * 0.3})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const updateParticles = (time: number) => {
      const particles = particlesRef.current;
      const connections: Connection[] = [];
      const maxDistance = 120;
      const mouseInfluence = 100;
      
      // Update particle positions and properties
      particles.forEach(particle => {
        // Move particles
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }
        
        // Rotate hexagons
        particle.rotation += particle.rotationSpeed;
        
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseInfluence) {
          const force = (mouseInfluence - distance) / mouseInfluence;
          particle.vx += (dx / distance) * force * 0.02;
          particle.vy += (dy / distance) * force * 0.02;
          particle.opacity = Math.min(1, particle.opacity + force * 0.3);
          particle.glowIntensity = Math.min(1, particle.glowIntensity + force * 0.5);
        } else {
          // Return to normal
          particle.vx *= 0.99;
          particle.vy *= 0.99;
          particle.opacity = Math.max(0.3, particle.opacity - 0.01);
          particle.glowIntensity = Math.max(0.5, particle.glowIntensity - 0.01);
        }
      });
      
      // Create connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const particle1 = particles[i];
          const particle2 = particles[j];
          
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (maxDistance - distance) / maxDistance;
            connections.push({
              particle1,
              particle2,
              opacity,
              distance,
            });
          }
        }
      }
      
      connectionsRef.current = connections;
    };

    const animate = () => {
      timeRef.current += 16;
      const time = timeRef.current;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateParticles(time);
      
      // Draw connections first (behind particles)
      connectionsRef.current.forEach(connection => {
        drawConnection(ctx, connection);
      });
      
      // Draw particles on top
      particlesRef.current.forEach(particle => {
        drawParticle(ctx, particle, time);
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'linear-gradient(135deg, #171717 0%, #121212 25%, #000000 50%, #121212 75%, #171717 100%)'
        // background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 25%, #243447 50%, #1a2332 75%, #0f1419 100%)'
      }}
    />
  );
};

export default ParticleBackground;