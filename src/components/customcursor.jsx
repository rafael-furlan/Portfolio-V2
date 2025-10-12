import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const [svgContent, setSvgContent] = useState(null);
  const [cursorType, setCursorType] = useState('text'); // 'text' ou 'svg'
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // SVGs padrão para cada tipo de cursor
  const defaultSvgs = {
    scroll: '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#f9fafb"/></svg>',
    view: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M21 1L1 21M21 1V21M21 1H1" stroke="#f9fafb" stroke-width="2"/></svg>',
    top: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    soon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  useEffect(() => {
    const updateCursorContent = (e) => {
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

      // Verifica se o elemento tem data-cursor-svg definido (prioridade máxima)
      const svgElement = el.closest('[data-cursor-svg]');
      if (svgElement) {
        const svgData = svgElement.getAttribute('data-cursor-svg');
        setCursorType('svg');
        setSvgContent(svgData);
        setText('');
        return;
      }

      // Verifica se o elemento tem data-cursor-svg-custom para tipos específicos
      const customSvgElement = el.closest('[data-cursor-svg-custom]');
      if (customSvgElement) {
        const customSvgData = customSvgElement.getAttribute('data-cursor-svg-custom');
        setCursorType('svg');
        setSvgContent(customSvgData);
        setText('');
        return;
      }

      // Verifica tipos de cursor com SVG padrão
      const scrollElement = el.closest('[data-cursor="scroll"]');
      const viewElement = el.closest('[data-cursor="view"]');
      const topElement = el.closest('[data-cursor="top"]');
      const soonElement = el.closest('[data-cursor="soon"]');

      if (scrollElement) {
        // Verifica se tem data-cursor-svg-scroll para SVG customizado
        const customScrollSvg = scrollElement.getAttribute('data-cursor-svg-scroll');
        if (customScrollSvg) {
          setCursorType('svg');
          setSvgContent(customScrollSvg);
          setText('');
        } else {
          setCursorType('svg');
          setSvgContent(defaultSvgs.scroll);
          setText('');
        }
      } else if (viewElement) {
        const customViewSvg = viewElement.getAttribute('data-cursor-svg-view');
        if (customViewSvg) {
          setCursorType('svg');
          setSvgContent(customViewSvg);
          setText('');
        } else {
          setCursorType('svg');
          setSvgContent(defaultSvgs.view);
          setText('');
        }
      } else if (topElement) {
        const customTopSvg = topElement.getAttribute('data-cursor-svg-top');
        if (customTopSvg) {
          setCursorType('svg');
          setSvgContent(customTopSvg);
          setText('');
        } else {
          setCursorType('svg');
          setSvgContent(defaultSvgs.top);
          setText('');
        }
      } else if (soonElement) {
        const customSoonSvg = soonElement.getAttribute('data-cursor-svg-soon');
        if (customSoonSvg) {
          setCursorType('svg');
          setSvgContent(customSoonSvg);
          setText('Soon');
        } else {
          setCursorType('svg');
          setSvgContent(defaultSvgs.soon);
          setText('');
        }
      } else {
        setCursorType('text');
        setSvgContent(null);
        setText('');
      }
    };

    const move = (e) => {
      if (!initialized) setInitialized(true);
      setPosition({ x: e.clientX, y: e.clientY });
      updateCursorContent(e);
    };

    const handleDown = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isScrollArea = el?.closest('[data-cursor="scroll"]');
      if (!isScrollArea) setPressed(true);
    };

    const handleUp = () => setPressed(false);

    // ✅ event listeners só uma vez no mount
    window.addEventListener('mousemove', move);
    window.addEventListener('scroll', updateCursorContent);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('scroll', updateCursorContent);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [initialized]); // 🔒 não depende de position → não recria a cada movimento

  const size = 80;
  const background = pressed
    ? 'rgba(51, 65, 85, 0.0)'
    : 'rgba(51, 65, 85, 0.0)';

  if (hidden || !initialized) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] flex items-center justify-center rounded-full transition-all 
      duration-100 ease-out w-[80px] h-[80px] tracking-widest inset-0 outline outline-1 outline-gray-50 mix-blend-difference pointer-events-none"
      style={{
        background,
        transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`
      }}
    >
      {cursorType === 'svg' && svgContent ? (
        <div 
          className="w-6 h-6 flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ) : (
        text
      )}
    </div>
  );
}

