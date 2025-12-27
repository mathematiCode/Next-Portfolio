function LoadingSequenceDiagram() {
  const steps = [
    { label: 'Extract Script Tags', y: 20 },
    { label: 'Replace with Markers', y: 60 },
    { label: 'Insert HTML', y: 100 },
    { label: 'Check Stores (Retry)', y: 140 },
    { label: 'Initialize Alpine', y: 180 },
  ];

  return (
    <svg
      width="280"
      height="220"
      viewBox="0 0 200 220"
      className="w-full h-full"
    >
      {/* Vertical timeline line */}
      <line x1="20" y1="10" x2="20" y2="200" stroke="#292D3E" strokeWidth="2" />

      {/* Steps */}
      {steps.map((step, index) => (
        <g key={index}>
          {/* Circle on timeline */}
          <circle
            cx="20"
            cy={step.y}
            r="6"
            fill="#292D3E"
            stroke="white"
            strokeWidth="2"
          />
          {/* Step label */}
          <text
            x="35"
            y={step.y + 5}
            fontSize="12"
            fill="#292D3E"
            className="font-medium"
          >
            {step.label}
          </text>
          {/* Arrow pointing to next step (except last) */}
          {index < steps.length - 1 && (
            <line
              x1="20"
              y1={step.y + 6}
              x2="20"
              y2={steps[index + 1].y - 6}
              stroke="#292D3E"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
          )}
        </g>
      ))}

      {/* Retry loop indicator */}
      <g>
        <path
          d="M 20 140 Q 60 140 60 160 Q 60 180 20 180"
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,4"
        />
        <text
          x="45"
          y="155"
          fontSize="10"
          fill="#ef4444"
          className="font-medium"
        >
          Retry (max 20x)
        </text>
      </g>

      {/* Arrow marker definition */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="15"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#292D3E" />
        </marker>
      </defs>
    </svg>
  );
}

export default LoadingSequenceDiagram;
