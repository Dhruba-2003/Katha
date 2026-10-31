import Image from "next/image";
import { Assets } from "@/assets/Assets";

/* ------------------------------------------------------------------
 * Film reel ring + strip band that runs behind the three phones.
 * Geometry lives in the 980x560 viewBox; phones are HTML positioned
 * in % so everything scales together with the container.
 * ------------------------------------------------------------------ */

const RING = { cx: 650, cy: 320, r: 190, band: 78 };
const BAND = 78;
const BAND_P0 = [-40, 470];
const BAND_P1 = [180, 540];
const BAND_P2 = [340, 520];
const BAND_P3 = [470, 400];

/* Sample a cubic bezier and its tangent so the film perforations can be
   placed along the strip. */
function bezier(p0, p1, p2, p3, t) {
  const mt = 1 - t;
  const a = mt * mt * mt;
  const b = 3 * mt * mt * t;
  const c = 3 * mt * t * t;
  const d = t * t * t;
  const x = a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0];
  const y = a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1];

  const dx =
    3 * mt * mt * (p1[0] - p0[0]) +
    6 * mt * t * (p2[0] - p1[0]) +
    3 * t * t * (p3[0] - p2[0]);
  const dy =
    3 * mt * mt * (p1[1] - p0[1]) +
    6 * mt * t * (p2[1] - p1[1]) +
    3 * t * t * (p3[1] - p2[1]);

  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  return { x, y, angle };
}

const BAND_D = `M ${BAND_P0[0]} ${BAND_P0[1]} C ${BAND_P1[0]} ${BAND_P1[1]}, ${BAND_P2[0]} ${BAND_P2[1]}, ${BAND_P3[0]} ${BAND_P3[1]}`;

function buildBandHoles() {
  const holes = [];
  const offset = BAND / 2 - 13;

  for (let i = 0; i <= 18; i++) {
    const t = i / 18;
    const point = bezier(BAND_P0, BAND_P1, BAND_P2, BAND_P3, t);
    const rad = (point.angle * Math.PI) / 180;

    for (const side of [-1, 1]) {
      const hx = point.x + Math.sin(rad) * offset * side;
      const hy = point.y - Math.cos(rad) * offset * side;
      holes.push(
        <rect
          key={`b-${i}-${side}`}
          x={hx - 7}
          y={hy - 4.5}
          width="14"
          height="9"
          rx="2.5"
          transform={`rotate(${point.angle} ${hx} ${hy})`}
          fill="#0a0409"
          opacity="0.9"
        />
      );
    }
  }

  return holes;
}

function buildRingHoles() {
  const holes = [];
  const offset = RING.band / 2 - 13;
  const count = 40;

  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const deg = (a * 180) / Math.PI + 90;

    for (const side of [-1, 1]) {
      const rr = RING.r + side * offset;
      const x = RING.cx + Math.cos(a) * rr;
      const y = RING.cy + Math.sin(a) * rr;
      holes.push(
        <rect
          key={`r-${i}-${side}`}
          x={x - 8}
          y={y - 5}
          width="16"
          height="10"
          rx="3"
          transform={`rotate(${deg} ${x} ${y})`}
          fill="#0a0409"
          opacity="0.9"
        />
      );
    }
  }

  return holes;
}

export default function FilmStrip({ className = "", idPrefix = "katha" }) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <svg
        viewBox="0 0 980 560"
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${idPrefix}-film`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff3d8f" />
            <stop offset="55%" stopColor="#e0246e" />
            <stop offset="100%" stopColor="#8b1e9c" />
          </linearGradient>
          <radialGradient id={`${idPrefix}-glow`}>
            <stop offset="0%" stopColor="#ff3d8f" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#ff3d8f" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ff3d8f" stopOpacity="0" />
          </radialGradient>
          <filter id={`${idPrefix}-blur`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        {/* soft glow behind the reel */}
        <circle cx={RING.cx} cy={RING.cy} r={300} fill={`url(#${idPrefix}-glow)`} />

        {/* glow behind the strip band */}
        <path
          d={BAND_D}
          stroke={`url(#${idPrefix}-film)`}
          strokeWidth={BAND + 30}
          strokeLinecap="round"
          opacity="0.18"
          filter={`url(#${idPrefix}-blur)`}
        />

        {/* the strip band running behind the phones */}
        <path
          d={BAND_D}
          stroke={`url(#${idPrefix}-film)`}
          strokeWidth={BAND}
          strokeLinecap="round"
        />
        <path
          d={BAND_D}
          stroke="#ffffff"
          strokeOpacity="0.15"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {buildBandHoles()}

        {/* the reel ring */}
        <circle
          cx={RING.cx}
          cy={RING.cy}
          r={RING.r}
          stroke={`url(#${idPrefix}-film)`}
          strokeWidth={RING.band}
        />
        <circle
          cx={RING.cx}
          cy={RING.cy}
          r={RING.r - RING.band / 2}
          stroke="#ffffff"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />
        <circle
          cx={RING.cx}
          cy={RING.cy}
          r={RING.r + RING.band / 2}
          stroke="#ffffff"
          strokeOpacity="0.22"
          strokeWidth="1.5"
        />
        {buildRingHoles()}
      </svg>

      {/* pink glow behind the hero phone */}
      <div className="pointer-events-none absolute left-[16%] top-[12%] h-[75%] w-[44%] rounded-full bg-[radial-gradient(closest-side,rgba(255,61,143,0.32),transparent)] blur-2xl" />

      {/* left phone */}
      <div className="absolute left-[-2%] top-[36%] w-[22%] -rotate-[8deg]">
        <div className="overflow-hidden rounded-[16px] border border-white/20 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.75)]">
          <Image
            src={Assets.Download1}
            alt="Katha app screen"
            width={340}
            height={700}
            className="block h-auto w-full"
          />
        </div>
      </div>

      {/* center phone */}
      <div className="absolute left-[21%] top-[19%] w-[33%] rotate-[2deg]">
        <div className="overflow-hidden rounded-[22px] border border-white/25 bg-black shadow-[0_28px_70px_rgba(0,0,0,0.85)]">
          <Image
            src={Assets.Download2}
            alt="Katha app discover screen"
            width={340}
            height={700}
            className="block h-auto w-full"
          />
        </div>
      </div>

      {/* right phone */}
      <div className="absolute left-[57%] top-[38%] w-[20%] rotate-[8deg]">
        <div className="overflow-hidden rounded-[16px] border border-white/20 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.75)]">
          <Image
            src={Assets.Download3}
            alt="Katha app chat screen"
            width={340}
            height={700}
            className="block h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
