export function Sparkle({ className = "h-3 w-3", filled = true }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? 0 : 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.4c.5 4.7 1.9 6.2 6.6 6.7-4.7.5-6.1 2-6.6 6.7-.5-4.7-1.9-6.2-6.6-6.7 4.7-.5 6.1-2 6.6-6.7Z" />
      <path d="M19 14.2c.25 2.2.9 2.9 3.1 3.15-2.2.25-2.85.95-3.1 3.15-.25-2.2-.9-2.9-3.1-3.15 2.2-.25 2.85-.95 3.1-3.15Z" />
    </svg>
  );
}

export function Heart({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function Star({ className = "h-3.5 w-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.55l-5.9 3.12 1.13-6.57L2.45 9.44l6.6-.96L12 2.5z" />
    </svg>
  );
}

export function PlayStore({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#00D6FF"
        d="M3.6 2.3a1 1 0 0 0-.6.93v17.54a1 1 0 0 0 .6.93l9.35-9.7L3.6 2.3Z"
      />
      <path
        fill="#00F076"
        d="M3.6 2.3 15.9 11.1l2.4-2.44L4.9 1.4a1 1 0 0 0-1.3.9Z"
      />
      <path
        fill="#FFCE00"
        d="M3.6 21.7 15.9 12.9l2.4 2.44L4.9 22.6a1 1 0 0 1-1.3-.9Z"
      />
      <path
        fill="#FF3A44"
        d="m18.3 11.35 2.3-2.34L18.6 7.4a1 1 0 0 0-1.4-.1L15.9 8.72l2.4 2.63Z"
      />
    </svg>
  );
}

export function Apple({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.36 12.68c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.72-1.35-.14-2.64.79-3.33.79-.69 0-1.75-.77-2.88-.75-1.48.02-2.85.86-3.61 2.18-1.54 2.68-.39 6.65 1.11 8.83.73 1.07 1.61 2.27 2.76 2.23 1.11-.04 1.53-.72 2.87-.72 1.33 0 1.72.72 2.89.7 1.19-.02 1.94-1.09 2.67-2.16.84-1.24 1.19-2.44 1.21-2.5-.03-.01-2.32-.89-2.34-3.57ZM14.2 5.6c.61-.74 1.02-1.76.91-2.78-.88.04-1.94.59-2.57 1.32-.56.65-1.05 1.7-.92 2.7.98.08 1.98-.5 2.58-1.24Z" />
    </svg>
  );
}

export function XIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.53 3H20.5l-6.49 7.42L21.75 21h-5.98l-4.68-6.12L5.73 21H2.76l6.94-7.93L2.5 3h6.13l4.23 5.59L17.53 3Zm-1.04 16.2h1.65L7.6 4.71H5.83l10.66 14.49Z" />
    </svg>
  );
}

export function LinkedIn({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05C21.1 8.59 22 11.1 22 14.6V21h-4v-5.66c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99V21h-4V9Z" />
    </svg>
  );
}

export function ArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function SendIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3.4 20.4 21.6 12 3.4 3.6 3.4 10.2 15.6 12 3.4 13.8 3.4 20.4Z" />
    </svg>
  );
}

export function FilmIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M2.5 12h19M2.5 8h4.5M2.5 16h4.5M17 8h4.5M17 16h4.5" />
    </svg>
  );
}

export function LogoMark({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
