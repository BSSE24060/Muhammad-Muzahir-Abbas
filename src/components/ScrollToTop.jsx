import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Runs on every render
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return null;
};

export default ScrollToTop;
