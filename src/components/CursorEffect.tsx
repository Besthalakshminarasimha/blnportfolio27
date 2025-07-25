
import React, { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const flareSize = hidden ? 0 : 30;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 transition duration-300 ${
        hidden ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: `radial-gradient(circle ${flareSize}px at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
      }}
    />
  );
};

export default CursorEffect;
