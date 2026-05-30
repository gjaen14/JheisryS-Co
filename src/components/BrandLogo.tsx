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

  return (
    <div
      className={`flex items-center justify-center mt-0 md:mt-2 ${className}`}
      style={{ height: size, width: size * 4.5 }} // El contenedor no crece, protege el layout del menú
    >
      <img
        src="/Logo.png"
        alt="Jheisry S&CO Logo"
        className="mix-blend-screen transition-transform duration-500"
        style={{ transform: 'scale(1.1)', transformOrigin: 'center' }} // Escalado visual extremo para anular el borde negro
      />
    </div>
  );
}
