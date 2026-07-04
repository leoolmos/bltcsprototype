// Inline SVG icon set — small, consistent, no CDN dependency at runtime.
// Stroke 1.75, 24×24 viewBox, currentColor. Subset we actually use.

const P = {
  menu:       'M3 6h18M3 12h18M3 18h18',
  x:          'M6 6l12 12M18 6L6 18',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  arrowLeft:  'M19 12H5M11 18l-6-6 6-6',
  arrowUpRight:'M7 17 17 7M8 7h9v9',
  chevronDown:'m6 9 6 6 6-6',
  chevronRight:'m9 6 6 6-6 6',
  chevronLeft:'m15 6-6 6 6 6',
  mapPin:     'M12 22s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  phone:      'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z',
  mail:       'M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z M22 8 12 14 2 8',
  calendar:   'M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z M3 10h18 M8 2v4 M16 2v4',
  clock:      'M12 12V7 M12 12l3 2 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
  users:      'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  trophy:     'M6 9H4a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1h3 M18 9h2a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-3 M6 4h12v7a6 6 0 0 1-12 0V4z M8 21h8 M12 17v4',
  dumbbell:   'M6 5v14 M3 7v10 M21 7v10 M18 5v14 M6 12h12',
  sparkles:   'M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z M19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z',
  check:      'M5 12l4 4L19 7',
  wifi:       'M2 8.5a15 15 0 0 1 20 0 M5 12a10 10 0 0 1 14 0 M8.5 15.5a5 5 0 0 1 7 0 M12 19h.01',
  coffee:     'M6 2v3 M10 2v3 M14 2v3 M4 7h14v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7z M18 8h2a2 2 0 0 1 0 4h-2',
  home:       'M3 11 12 3l9 8 M5 10v10h14V10',
  car:        'M5 17h14 M5 17a2 2 0 1 1-4 0 M19 17a2 2 0 1 0 4 0 M3 17v-4l2-6a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 6v4 M6 13h12',
  racquet:    'M12 2a6 6 0 0 1 6 6c0 3-2 5-4 6l6 8-2 2-8-6c-1 2-3 4-6 4a6 6 0 0 1-6-6c0-8 8-14 14-14z',
  circle:     'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z',
  facebook:   'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z',
  instagram:  'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2z M17.5 6.5v.01',
  star:       'M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z',
  play:       'M5 3l14 9-14 9V3z',
  tag:        'M20 12 12 20a2 2 0 0 1-3 0l-7-7V4h9l9 8a2 2 0 0 1 0 3z M7 7v.01',
};

function Icon({ name, size = 18, stroke = 1.75, className = '' }) {
  const d = P[name];
  if (!d) {
    return <span className={className} style={{ display: 'inline-block', width: size, height: size }} />;
  }
  // multi-path support: split on ' M ' but keep the M
  const parts = d.split(/(?=M)/).map(s => s.trim()).filter(Boolean);
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {parts.map((p, i) => <path key={i} d={p} />)}
    </svg>
  );
}

window.Icon = Icon;
