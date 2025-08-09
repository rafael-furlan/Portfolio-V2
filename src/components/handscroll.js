const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Calcula a transformação baseada no scroll - começa da esquerda e vai para esquerda
const translateX = Math.max(-28, Math.min(0, 0 - (scrollY / 7)));

className='whitespace-nowrap'>
          <div className='flex' style={{ 
              transform: `translateX(${translateX}%)`,
              transition: 'transform 0.1s linear'
            }}
          ></div>