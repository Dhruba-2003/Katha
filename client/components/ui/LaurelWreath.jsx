/**
 * Golden laurel branches used to frame the app-store / play-store stats.
 * `side={1}` renders the right-hand branch, `side={-1}` mirrors it.
 */
export function LaurelBranch({ side = 1, className = "" }) {
  const leaves = [];
  const count = 16;

  // stem: x = 7 + 44 * sin(t * PI),  y = -50 + 100 * t
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const px = 7 + 44 * Math.sin(t * Math.PI);
    const py = -50 + 100 * t;

    // tangent of the stem
    const tx = 44 * Math.PI * Math.cos(t * Math.PI);
    const ty = 100;

    // outward normal (points away from the wreath centre)
    const len = Math.hypot(tx, ty);
    const nx = ty / len;
    const ny = -tx / len;
    const nAngle = (Math.atan2(ny, nx) * 180) / Math.PI;

    const lx = px + nx * 10;
    const ly = py + ny * 10;

    leaves.push(
      <ellipse
        key={i}
        cx={lx}
        cy={ly}
        rx={9.5}
        ry={4.2}
        transform={`rotate(${nAngle} ${lx} ${ly})`}
        fill="currentColor"
      />
    );
  }

  return (
    <svg
      viewBox="-56 -58 112 116"
      className={`text-katha-gold ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <g transform={side === 1 ? undefined : "scale(-1,1)"}>
        <path
          d="M 7 -50 Q 51 0 7 50"
          stroke="currentColor"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
        {leaves}
      </g>
    </svg>
  );
}

export default function LaurelWreath({ className = "" }) {
  return (
    <span className={`inline-flex items-center text-katha-gold ${className}`}>
      <LaurelBranch side={-1} className="h-full w-auto" />
      <LaurelBranch side={1} className="h-full w-auto" />
    </span>
  );
}
