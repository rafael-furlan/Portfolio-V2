import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const updateCursorText = (e) => {
      const clientX = e?.clientX ?? position.x;
      const clientY = e?.clientY ?? position.y;
      const el = document.elementFromPoint(clientX, clientY);

      if (!el) return; // 🔒 evita erro se não encontrar nada

      if (el.closest('[data-cursor="hidden"]') || el.closest('.cursor-hidden')) {
        setHidden(true);
        return;
      } else {
        setHidden(false);
      }

      if (el.closest('[data-cursor="scroll"]')) {
        setText('Scroll');
      } else if (el.closest('[data-cursor="view"]')) {
        setText('View');
      } else if (el.closest('[data-cursor="top"]')) {
        setText('Top');
      } else {
        setText('');
      }
    };

    const move = (e) => {
      if (!initialized) setInitialized(true);
      setPosition({ x: e.clientX, y: e.clientY });
      updateCursorText(e);
    };

    const handleDown = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isScrollArea = el?.closest('[data-cursor="scroll"]');
      if (!isScrollArea) setPressed(true);
    };

    const handleUp = () => setPressed(false);

    // ✅ event listeners só uma vez no mount
    window.addEventListener('mousemove', move);
    window.addEventListener('scroll', updateCursorText);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('scroll', updateCursorText);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [initialized]); // 🔒 não depende de position → não recria a cada movimento

  const size = 80;
  const background = pressed
    ? 'rgba(51, 65, 85, 0.7)'
    : 'rgba(51, 65, 85, 0.4)';

  if (hidden || !initialized) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] flex items-center justify-center rounded-full transition-all 
      duration-100 ease-out w-[80px] h-[80px] backdrop-blur-md font-sora font-medium text-sm text-gray-50 tracking-widest border border-gray-50/20"
      style={{
        background,
        transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`
      }}
    >
      {text}
    </div>
  );
}

