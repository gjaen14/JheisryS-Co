import React from 'react';

interface BrandLogoProps {
  theme?: 'dark' | 'light' | 'gold' | 'champagne';
  className?: string;
  size?: number; // width/height in px
  showText?: boolean;
  textPosition?: 'right' | 'bottom';
  textType?: 'full' | 'short';
}

export default function BrandLogo({
  theme = 'dark',
  className = '',
  size = 48,
  showText = false,
  textPosition = 'right',
  textType = 'short'
}: BrandLogoProps) {
  // Select color based on luxury theme
  const getColor = () => {
    switch (theme) {
      case 'dark':
        return '#FAFAFA'; // White/off-white for obsidian background
      case 'light':
        return '#181514'; // Obsidian/espresso for sand background
      case 'gold':
        return '#B39E8C'; // Signature Muted Taupe/Gold style
      case 'champagne':
        return '#D1C6BD'; // Sand/Champagne tone
      default:
        return '#FAFAFA';
    }
  };

  const color = getColor();

  // Custom high-precision paths modeled on the logo:
  // Sweep wings rising from bottom-left to top-right plus a 4-point glint star.
  return (
    <div className={`inline-flex items-center ${textPosition === 'bottom' ? 'flex-col space-y-3' : 'space-x-4'} ${className}`}>
      <img
        src="./public/logo.png"
        alt="S&CO Logo"
        style={{ width: size, height: 'auto', objectFit: 'contain' }}
        className="transition-transform duration-500 hover:scale-105"
      />

      {showText && (
        <div className={`flex flex-col text-left ${textPosition === 'bottom' ? 'items-center text-center' : ''}`}>
          <span
            className="font-serif text-lg tracking-[0.25em] font-light leading-none"
            style={{ color }}
          >
            {textType === 'short' ? 'S&CO+' : 'SOARITY & CO.'}
          </span>
          <span
            className="font-sans text-[9px] tracking-[0.4em] uppercase opacity-60 mt-1 font-medium"
            style={{ color }}
          >
            Alta Costura Digital
          </span>
        </div>
      )}
    </div>
  );
}
