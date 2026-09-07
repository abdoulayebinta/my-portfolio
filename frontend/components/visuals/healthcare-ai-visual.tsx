export function HealthcareAiVisual() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="300" height="200" fill="currentColor" opacity="0.02" />

      {/* Isometric AI Platform Blocks */}
      {/* Center main block */}
      <g>
        {/* Top face */}
        <polygon points="150,60 190,40 190,80 150,100" fill="currentColor" opacity="0.15" />
        {/* Left face */}
        <polygon points="150,60 110,40 110,80 150,100" fill="currentColor" opacity="0.1" />
        {/* Right face */}
        <polygon points="190,40 190,80 230,60 230,20" fill="currentColor" opacity="0.08" />

        {/* Center icon - circuit or data nodes */}
        <circle cx="150" cy="70" r="4" fill="currentColor" opacity="0.2" />
        <line x1="145" y1="65" x2="155" y2="65" stroke="currentColor" opacity="0.12" strokeWidth="1" />
        <line x1="145" y1="75" x2="155" y2="75" stroke="currentColor" opacity="0.12" strokeWidth="1" />
      </g>

      {/* Left data block */}
      <g>
        <polygon points="90,100 130,80 130,120 90,140" fill="currentColor" opacity="0.1" />
        <polygon points="90,100 50,80 50,120 90,140" fill="currentColor" opacity="0.06" />
        <polygon points="130,80 130,120 170,100 170,60" fill="currentColor" opacity="0.08" />
        {/* Data indicator */}
        <line x1="85" y1="110" x2="95" y2="110" stroke="currentColor" opacity="0.1" strokeWidth="1" />
        <line x1="85" y1="120" x2="95" y2="120" stroke="currentColor" opacity="0.1" strokeWidth="1" />
      </g>

      {/* Right workflow block */}
      <g>
        <polygon points="210,100 250,80 250,120 210,140" fill="currentColor" opacity="0.1" />
        <polygon points="210,100 170,80 170,120 210,140" fill="currentColor" opacity="0.06" />
        <polygon points="250,80 250,120 290,100 290,60" fill="currentColor" opacity="0.08" />
        {/* Workflow indicator */}
        <rect x="210" y="105" width="30" height="2" rx="1" fill="currentColor" opacity="0.12" />
        <rect x="215" y="115" width="20" height="2" rx="1" fill="currentColor" opacity="0.09" />
      </g>

      {/* Connecting lines - data flow */}
      <line x1="130" y1="100" x2="170" y2="80" stroke="currentColor" opacity="0.08" strokeWidth="1.5" strokeDasharray="2,2" />
      <line x1="170" y1="100" x2="210" y2="110" stroke="currentColor" opacity="0.08" strokeWidth="1.5" strokeDasharray="2,2" />

      {/* Bottom connecting nodes */}
      <circle cx="120" cy="145" r="2.5" fill="currentColor" opacity="0.12" />
      <circle cx="150" cy="155" r="2.5" fill="currentColor" opacity="0.1" />
      <circle cx="180" cy="145" r="2.5" fill="currentColor" opacity="0.1" />

      {/* Subtle bottom connections */}
      <line x1="120" y1="145" x2="150" y2="155" stroke="currentColor" opacity="0.06" strokeWidth="1" />
      <line x1="150" y1="155" x2="180" y2="145" stroke="currentColor" opacity="0.06" strokeWidth="1" />
    </svg>
  );
}
