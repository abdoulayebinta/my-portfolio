export function EidsrVisual() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="300" height="200" fill="currentColor" opacity="0.02" />

      {/* Desktop Monitor */}
      <g>
        {/* Screen */}
        <rect x="20" y="20" width="140" height="100" rx="4" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        {/* Map/Dashboard content */}
        <circle cx="50" cy="45" r="8" fill="currentColor" opacity="0.2" />
        <circle cx="90" cy="50" r="6" fill="currentColor" opacity="0.15" />
        <circle cx="130" cy="55" r="5" fill="currentColor" opacity="0.1" />
        <line x1="30" y1="70" x2="150" y2="70" stroke="currentColor" opacity="0.1" strokeWidth="1" />
        <line x1="30" y1="80" x2="150" y2="80" stroke="currentColor" opacity="0.1" strokeWidth="1" />
        <line x1="30" y1="90" x2="100" y2="90" stroke="currentColor" opacity="0.1" strokeWidth="1" />
        {/* Stand */}
        <rect x="75" y="120" width="70" height="4" rx="2" fill="currentColor" opacity="0.15" />
      </g>

      {/* Mobile Phone */}
      <g>
        {/* Phone frame */}
        <rect x="160" y="40" width="60" height="110" rx="6" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        {/* Screen */}
        <rect x="165" y="48" width="50" height="90" rx="3" fill="currentColor" opacity="0.08" />
        {/* Content elements */}
        <rect x="170" y="55" width="40" height="4" rx="2" fill="currentColor" opacity="0.15" />
        <rect x="170" y="65" width="35" height="3" rx="1" fill="currentColor" opacity="0.1" />
        <rect x="170" y="72" width="38" height="3" rx="1" fill="currentColor" opacity="0.1" />
        <circle cx="177" cy="85" r="4" fill="currentColor" opacity="0.12" />
        <circle cx="195" cy="85" r="3" fill="currentColor" opacity="0.1" />
        {/* Notch */}
        <rect x="190" y="48" width="10" height="6" rx="2" fill="currentColor" opacity="0.1" />
      </g>

      {/* Connection indicator */}
      <line x1="160" y1="80" x2="150" y2="80" stroke="currentColor" opacity="0.08" strokeWidth="1" strokeDasharray="2,2" />
    </svg>
  );
}
