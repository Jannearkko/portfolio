import React, { useEffect, useRef, useState } from 'react';

interface SphereProps {
  size: number;
  startX: number;
  startY: number;
  speedX: number;
  speedY: number;
}

const Sphere: React.FC<SphereProps> = ({ size, startX, startY, speedX, speedY }) => {
  const sphereRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: startX, y: startY });
  const [velocity, setVelocity] = useState({ x: speedX, y: speedY });
  const [hue, setHue] = useState(Math.floor(Math.random() * 360));

  useEffect(() => {
    const updatePosition = () => {
      setPosition((prev) => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;

        const maxX = window.innerWidth * 0.5; // 50% of the viewport width
        const maxY = window.innerHeight;

        if (newX <= 0 || newX + size >= maxX) {
          setVelocity((v) => ({ ...v, x: -v.x }));
          newX = Math.max(0, Math.min(newX, maxX - size));
        }
        if (newY <= 0 || newY + size >= maxY) {
          setVelocity((v) => ({ ...v, y: -v.y }));
          newY = Math.max(0, Math.min(newY, maxY - size));
        }

        return { x: newX, y: newY };
      });
    };

    const updateHue = () => {
      setHue((prevHue) => (prevHue + 1) % 360);
    };

    const positionInterval = setInterval(updatePosition, 16);
    const hueInterval = setInterval(updateHue, 100); // Slower hue change

    return () => {
      clearInterval(positionInterval);
      clearInterval(hueInterval);
    };
  }, [velocity, size]);

  return (
    <div
      ref={sphereRef}
      className="sphere"
      style={{
        width: size,
        height: size,
        left: position.x,
        top: position.y,
        background: `radial-gradient(circle, hsla(${hue}, 100%, 50%, 0.2) 0%, hsla(${hue}, 100%, 50%, 0.1) 50%, hsla(${hue}, 100%, 50%, 0) 100%)`,
        filter: 'blur(30px)',
      }}
    />
  );
};

export default Sphere;





