interface GradientTransitionProps {
  from: 'dark' | 'light';
  to: 'dark' | 'light';
  variant?: 'simple' | 'radial' | 'layered' | 'animated' | 'subtle';
  height?: 'sm' | 'md' | 'lg';
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
  };

  // Color mappings
  const colorMap = {
    dark: {
      primary: '#0A0A0B',
      secondary: '#111113',
      tertiary: '#18181B',
    },
    light: {
      primary: '#FFFFFF',
      secondary: '#F9FAFB',
      tertiary: '#F3F4F6',
    },
  };

  const fromColor = colorMap[from];
  const toColor = colorMap[to];

  // Variant rendering
  const renderVariant = () => {
    switch (variant) {
      case 'simple':
        return (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${fromColor.primary} 0%, ${toColor.primary} 100%)`,
            }}
          />
        );

      case 'radial':
        return (
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${toColor.primary} 0%, ${fromColor.primary} 100%)`,
              }}
            />
          </div>
        );

      case 'layered':
        return (
          <div className="absolute inset-0">
            {/* Base gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, ${fromColor.primary} 0%, ${toColor.primary} 100%)`,
              }}
            />

            {/* Radial accent overlays */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                  radial-gradient(ellipse at 20% 50%, rgba(0, 212, 255, 0.2) 0%, transparent 50%),
                  radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 55%)
                `,
              }}
            />

            {/* Subtle radial accents - using gradients instead of blur for performance */}
            <div
              className="absolute top-1/2 left-1/4 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
              style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)' }}
            />
            <div
              className="absolute top-1/2 right-1/4 w-48 h-48 translate-x-1/2 -translate-y-1/2"
              style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)' }}
            />
          </div>
        );

      case 'animated':
        return (
          <div className="absolute inset-0">
            {/* Base gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, ${fromColor.primary} 0%, ${toColor.primary} 100%)`,
              }}
            />

            {/* Static gradient accents - removed expensive blur animations for performance */}
            <div
              className="absolute w-96 h-96 top-0 left-1/4"
              style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)' }}
            />
            <div
              className="absolute w-64 h-64 top-1/2 right-1/4"
              style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)' }}
            />
            <div
              className="absolute w-48 h-48 bottom-0 left-1/2"
              style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)' }}
            />
          </div>
        );

      case 'subtle':
        return (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${fromColor.primary}CC 0%, ${toColor.secondary}CC 100%)`,
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
