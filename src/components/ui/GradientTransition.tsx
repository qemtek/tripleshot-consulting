interface GradientTransitionProps {
  from: 'dark' | 'light';
  to: 'dark' | 'light';
  variant?: 'simple' | 'radial' | 'layered' | 'animated' | 'subtle' | 'wave';
  height?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function GradientTransition({
  from,
  to,
  variant = 'layered',
  height = 'md',
}: GradientTransitionProps) {
  // Height classes
  const heightClasses = {
    sm: 'h-16 md:h-24',
    md: 'h-32 md:h-48',
    lg: 'h-48 md:h-64',
    xl: 'h-64 md:h-80',
  };

  // Color mappings with more nuanced stops
  const colorMap = {
    dark: {
      primary: '#0A0A0B',
      secondary: '#111113',
      tertiary: '#18181B',
      accent: '#1a1a1d',
    },
    light: {
      primary: '#FFFFFF',
      secondary: '#FAFAFA',
      tertiary: '#F5F5F5',
      accent: '#F0F0F0',
    },
  };

  const fromColor = colorMap[from];
  const toColor = colorMap[to];

  // Determine which accent colors to use based on direction
  const isDarkToLight = from === 'dark' && to === 'light';

  // Variant rendering
  const renderVariant = () => {
    switch (variant) {
      case 'simple':
        return (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg,
                ${fromColor.primary} 0%,
                ${fromColor.secondary} 20%,
                ${toColor.tertiary} 80%,
                ${toColor.primary} 100%)`,
            }}
          />
        );

      case 'radial':
        return (
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 120% 80% at 50% 0%, ${fromColor.primary} 0%, transparent 60%),
                  radial-gradient(ellipse 120% 80% at 50% 100%, ${toColor.primary} 0%, transparent 60%),
                  linear-gradient(180deg, ${fromColor.secondary} 0%, ${toColor.secondary} 100%)
                `,
              }}
            />
          </div>
        );

      case 'layered':
        return (
          <div className="absolute inset-0">
            {/* Multi-stop base gradient for smoother transition */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg,
                  ${fromColor.primary} 0%,
                  ${fromColor.secondary} 15%,
                  ${isDarkToLight ? '#0d0d0f' : '#f7f7f7'} 35%,
                  ${isDarkToLight ? '#e8e8e8' : '#1a1a1c'} 65%,
                  ${toColor.secondary} 85%,
                  ${toColor.primary} 100%)`,
              }}
            />

            {/* Colored accent glow - left side (cyan) */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 50% 70% at 15% 50%,
                  ${isDarkToLight ? 'rgba(0, 212, 255, 0.12)' : 'rgba(0, 212, 255, 0.08)'} 0%,
                  transparent 70%)`,
              }}
            />

            {/* Colored accent glow - right side (purple) */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 50% 70% at 85% 50%,
                  ${isDarkToLight ? 'rgba(139, 92, 246, 0.10)' : 'rgba(139, 92, 246, 0.06)'} 0%,
                  transparent 70%)`,
              }}
            />

            {/* Center emerald accent for depth */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 40% 50% at 50% 60%,
                  rgba(16, 185, 129, 0.05) 0%,
                  transparent 70%)`,
              }}
            />
          </div>
        );

      case 'animated':
        return (
          <div className="absolute inset-0">
            {/* Smooth multi-stop gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg,
                  ${fromColor.primary} 0%,
                  ${fromColor.secondary} 10%,
                  ${isDarkToLight ? '#131315' : '#f2f2f2'} 30%,
                  ${isDarkToLight ? '#d0d0d0' : '#252528'} 70%,
                  ${toColor.secondary} 90%,
                  ${toColor.primary} 100%)`,
              }}
            />

            {/* Large sweeping cyan glow */}
            <div
              className="absolute w-full h-full"
              style={{
                background: `radial-gradient(ellipse 80% 60% at 25% 40%,
                  rgba(0, 212, 255, 0.15) 0%,
                  rgba(0, 212, 255, 0.05) 40%,
                  transparent 70%)`,
              }}
            />

            {/* Purple accent sweep */}
            <div
              className="absolute w-full h-full"
              style={{
                background: `radial-gradient(ellipse 70% 50% at 75% 60%,
                  rgba(139, 92, 246, 0.12) 0%,
                  rgba(139, 92, 246, 0.04) 40%,
                  transparent 70%)`,
              }}
            />

            {/* Subtle emerald highlight */}
            <div
              className="absolute w-full h-full"
              style={{
                background: `radial-gradient(ellipse 50% 40% at 50% 80%,
                  rgba(16, 185, 129, 0.08) 0%,
                  transparent 60%)`,
              }}
            />
          </div>
        );

      case 'wave':
        return (
          <div className="absolute inset-0">
            {/* Base gradient with wave-like color stops */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg,
                  ${fromColor.primary} 0%,
                  ${fromColor.secondary} 8%,
                  ${isDarkToLight ? '#0f0f11' : '#fafafa'} 20%,
                  ${isDarkToLight ? '#1a1a1c' : '#f5f5f5'} 35%,
                  ${isDarkToLight ? '#a0a0a0' : '#404045'} 50%,
                  ${isDarkToLight ? '#e5e5e5' : '#1f1f22'} 65%,
                  ${isDarkToLight ? '#f5f5f5' : '#151517'} 80%,
                  ${toColor.secondary} 92%,
                  ${toColor.primary} 100%)`,
              }}
            />

            {/* Flowing cyan accent */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 60% 40% at 20% 30%, rgba(0, 212, 255, 0.12) 0%, transparent 60%),
                  radial-gradient(ellipse 50% 35% at 80% 70%, rgba(0, 212, 255, 0.08) 0%, transparent 60%)
                `,
              }}
            />

            {/* Flowing purple accent */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 55% 40% at 70% 25%, rgba(139, 92, 246, 0.10) 0%, transparent 60%),
                  radial-gradient(ellipse 45% 35% at 30% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)
                `,
              }}
            />

            {/* Emerald accents */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 40% 30% at 50% 50%,
                  rgba(16, 185, 129, 0.06) 0%,
                  transparent 70%)`,
              }}
            />
          </div>
        );

      case 'subtle':
        return (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg,
                ${fromColor.primary} 0%,
                ${fromColor.tertiary} 40%,
                ${toColor.tertiary} 60%,
                ${toColor.primary} 100%)`,
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
      {renderVariant()}
    </div>
  );
}
