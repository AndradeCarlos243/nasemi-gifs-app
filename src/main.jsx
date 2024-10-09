import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
);
