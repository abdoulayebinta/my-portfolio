export function SmartVisual() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="300" height="200" fill="currentColor" opacity="0.02" />

      {/* Left Mobile Phone */}
      <g>
        {/* Phone frame */}
        <rect x="35" y="30" width="70" height="140" rx="8" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        {/* Screen */}
        <rect x="42" y="42" width="56" height="116" rx="5" fill="currentColor" opacity="0.08" />

        {/* Header */}
        <rect x="46" y="50" width="48" height="6" rx="2" fill="currentColor" opacity="0.15" />

        {/* Content - diagnostic elements */}
        <rect x="48" y="65" width="44" height="4" rx="1" fill="currentColor" opacity="0.12" />
        <rect x="48" y="73" width="40" height="3" rx="1" fill="currentColor" opacity="0.09" />
        <rect x="48" y="80" width="42" height="3" rx="1" fill="currentColor" opacity="0.09" />

        {/* Visual indicator */}
        <circle cx="70" cy="100" r="8" fill="currentColor" opacity="0.15" />
        <path d="M 70 100 L 75 95 L 75 105 Z" fill="currentColor" opacity="0.1" />

        {/* Bottom info */}
        <rect x="48" y="120" width="44" height="3" rx="1" fill="currentColor" opacity="0.08" />
        <rect x="48" y="128" width="30" height="2" rx="1" fill="currentColor" opacity="0.06" />

        {/* Notch */}
        <rect x="65" y="42" width="10" height="8" rx="2" fill="currentColor" opacity="0.1" />
      </g>

      {/* Right Mobile Phone */}
      <g>
        {/* Phone frame */}
        <rect x="195" y="30" width="70" height="140" rx="8" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        {/* Screen */}
        <rect x="202" y="42" width="56" height="116" rx="5" fill="currentColor" opacity="0.08" />

        {/* Header */}
        <rect x="206" y="50" width="48" height="6" rx="2" fill="currentColor" opacity="0.15" />

        {/* Content - screening workflow */}
        <rect x="208" y="65" width="44" height="4" rx="1" fill="currentColor" opacity="0.12" />

        {/* Visual elements - progress indicator */}
        <line x1="210" y1="80" x2="248" y2="80" stroke="currentColor" opacity="0.1" strokeWidth="2" />
        <circle cx="215" cy="80" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="230" cy="80" r="3" fill="currentColor" opacity="0.15" />
        <circle cx="245" cy="80" r="3" fill="currentColor" opacity="0.1" />

        {/* Form elements */}
        <rect x="208" y="100" width="44" height="3" rx="1" fill="currentColor" opacity="0.09" />
        <rect x="208" y="108" width="40" height="3" rx="1" fill="currentColor" opacity="0.09" />

        {/* Button indicator */}
        <rect x="210" y="120" width="40" height="6" rx="2" fill="currentColor" opacity="0.12" />

        {/* Notch */}
        <rect x="225" y="42" width="10" height="8" rx="2" fill="currentColor" opacity="0.1" />
      </g>

      {/* Connection/sync indicator between phones */}
      <line x1="110" y1="100" x2="190" y2="100" stroke="currentColor" opacity="0.06" strokeWidth="1" strokeDasharray="3,3" />
    </svg>
  );
}
