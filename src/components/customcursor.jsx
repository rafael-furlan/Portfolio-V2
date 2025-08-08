import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const updateCursorText = (e) => {
      // Usa posição atual do mouse se estiver vindo de scroll
      const clientX = e?.clientX ?? position.x;
      const clientY = e?.clientY ?? position.y;
  
      const el = document.elementFromPoint(clientX, clientY);
  
      if (el?.closest('[data-cursor="hidden"]') || el?.closest('.cursor-hidden')) {
        setHidden(true);
        return;
      } else {
        setHidden(false);
      }
  
      if (el?.closest('[data-cursor="scroll"]')) {
        setText('Scroll');
      } else if (el?.closest('[data-cursor="view"]')) {
        setText('View');
      } else if (el?.closest('[data-cursor="top"]')) {
        setText('Top');
      } else {
        setText('');
      }
    };
  
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      updateCursorText(e);
    };
  
    const handleDown = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isScrollArea = el?.closest('[data-cursor="scroll"]');
      if (!isScrollArea) {
        setPressed(true);
      }
    };
    const handleUp = () => setPressed(false);
  
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
  }, [position]);

  const size = pressed ? 80 : 80;
  const background = pressed ? 'rgba(51, 65, 85, 0.7)' : 'rgba(51, 65, 85, 0.4)';
  const textColor = pressed ? '#fff' : '#fff';

  if (hidden) return null;

  return (
    <div
      className="pointer-events-none fixed z-[100] flex items-center justify-center rounded-full transition-all duration-100 ease-out w-[80px] h-[80px] backdrop-blur-md"
      style={{
        background,
        color: textColor,
        transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`,
        fontSize: 14,
        fontWeight: 500,
        textTransform: 'uppercase',
      }}
    >
      {text}
    </div>
  );
}