import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';

interface TiltState {
  rotateX: number;
  rotateY: number;
  scale: number;
}

interface UseTiltEffectOptions {
  maxTilt?: number;
  scale?: number;
  speed?: number;
}

export const useTiltEffect = (options: UseTiltEffectOptions = {}) => {
  const { maxTilt = 15, scale = 1.05, speed = 400 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    
    setTilt({ rotateX, rotateY, scale });
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!ref.current || e.touches.length === 0) return;

    const rect = ref.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    
    setTilt({ rotateX, rotateY, scale });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  const handleTouchEnd = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  const style = {
    transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
    transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
  };

  return {
    ref,
    style,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  };
};

