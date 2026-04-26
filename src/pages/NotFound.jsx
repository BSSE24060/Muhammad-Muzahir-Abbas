import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found`;
  }, []);

  return (
    <div className="not-found container fade-in" style={{ textAlign: 'center', padding: '100px 0' }}>
      <h1 style={{ fontSize: '6rem', color: 'var(--primary-color)', marginBottom: '20px' }}>404</h1>
      <h2 style={{ marginBottom: '20px' }}>Oops! Page not found.</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        <Home size={18} /> Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
