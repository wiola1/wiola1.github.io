import { useState } from 'react';

const REQUIRED_CLICKS = 5;
const MAX_TIME_MS = 500;

declare global {
  interface Window {
    _tapTimeout: number | undefined;
  }
}

export function useTapSequence() {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [sequenceComplete, setSequenceComplete] = useState(false);

  const resetSequence = () => {
      setSequenceComplete(false);
  };

  const handleTap = () => {
    const now = Date.now();
    let newCount: number;
    
    newCount = now - lastClickTime < MAX_TIME_MS ? clickCount + 1 : 1;
    
    setClickCount(newCount);
    setLastClickTime(now);
    
    if (newCount === REQUIRED_CLICKS) {
      setSequenceComplete(true);
      setClickCount(0);
    }
    
    window.clearTimeout(window._tapTimeout);
    window._tapTimeout = window.setTimeout(() => setClickCount(0), MAX_TIME_MS);
  };
  
  return { handleTap, sequenceComplete, resetSequence };
}