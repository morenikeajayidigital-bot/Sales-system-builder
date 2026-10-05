import React from 'react';

interface RenLogoProps {
  className?: string;
  variant?: 'light' | 'reversed' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
}

export const RenLogo: React.FC<RenLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const isReversed = variant === 'reversed';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Brand Icon: Emerald Squircle with Bold R and Gold square accent */}
      <div
        className={`${iconSizes[size]} relative rounded-xl bg-[#0F6B50] flex items-center justify-center shrink-0 shadow-xs select-none`}
        style={{ borderRadius: '28%' }}
        aria-hidden="true"
      >
        <span
          className="text-white font-extrabold leading-none tracking-tight"
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: size === 'sm' ? '14px' : size === 'md' ? '18px' : '24px',
            transform: 'translateX(-1px)',
          }}
        >
          R
        </span>
        {/* Gold Square Accent Dot in top right */}
        <span
          className="absolute bg-[#C9A24B] rounded-xs"
          style={{
            width: size === 'sm' ? '3.5px' : size === 'md' ? '4.5px' : '6px',
            height: size === 'sm' ? '3.5px' : size === 'md' ? '4.5px' : '6px',
            top: size === 'sm' ? '5px' : size === 'md' ? '6.5px' : '9px',
            right: size === 'sm' ? '5px' : size === 'md' ? '6.5px' : '9px',
          }}
        />
      </div>

      {/* Brand Typography Lockup */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-extrabold tracking-tight ${
              isReversed ? 'text-white' : 'text-[#08402F]'
            }`}
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: size === 'sm' ? '14px' : size === 'md' ? '17px' : '22px',
              letterSpacing: '-0.02em',
            }}
          >
            REN
          </span>
          <span
            className="font-medium tracking-[0.22em] text-[#A9832F]"
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: size === 'sm' ? '7px' : size === 'md' ? '8.5px' : '11px',
              marginTop: '1.5px',
            }}
          >
            DIGITALS
          </span>
        </div>
      )}
    </div>
  );
};
