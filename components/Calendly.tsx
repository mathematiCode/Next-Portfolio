'use client';

import { useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
      }) => void;
    };
  }
}

function Calendly() {
  const widgetRef = useRef<HTMLDivElement>(null);

  const initCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly && widgetRef.current) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/juliannamessineo/meeting',
        parentElement: widgetRef.current,
      });
    }
  };

  return (
    <div className="text-center mt-6">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={initCalendly}
      />
      <div ref={widgetRef} style={{ minWidth: '320px', height: '700px' }}></div>
    </div>
  );
}

export default Calendly;
