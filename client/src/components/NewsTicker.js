import React, { useEffect, useRef } from 'react';


const NewsTicker = ({ headlines }) => {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    let totalWidth = 0;

    const calculateWidth = () => {
      totalWidth = 0;
      Array.from(ticker.children).forEach(child => {
        totalWidth += child.offsetWidth;
      });
      ticker.style.width = `${totalWidth}px`;
    };

    calculateWidth();

    const scroll = () => {
      if (ticker.scrollLeft >= totalWidth) {
        ticker.scrollLeft = 0;
      } else {
        ticker.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 20);

    window.addEventListener('resize', calculateWidth);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', calculateWidth);
    };
  }, []);

  return (
    <div className="ticker-container">
      <div className="ticker" ref={tickerRef}>
        {headlines.map((headline, index) => (
          <div key={index} className="ticker-item">
            {headline}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
