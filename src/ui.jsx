// Shared UI atoms: buttons, pills, section headers, photo placeholders, footer.

function Btn({ children, onClick, variant = 'primary', size = 'md', href, className = '', type, target, rel }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-md font-medium transition whitespace-nowrap';
  const sizes = {
    sm: 'text-sm px-3.5 py-2',
    md: 'text-[15px] px-5 py-2.5',
    lg: 'text-base px-6 py-3.5',
  };
  const variants = {
    primary:   'bg-club text-paper hover:bg-clubDark',
    secondary: 'border border-ink/70 text-ink hover:bg-ink hover:text-paper',
    ghost:     'text-ink hover:bg-ink/5',
    clay:      'bg-clay text-paper hover:brightness-95',
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) return <a href={href} onClick={onClick} className={cls} target={target} rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}>{children}</a>;
  return <button type={type || 'button'} onClick={onClick} className={cls}>{children}</button>;
}

function Pill({ children, tone = 'ink', className = '' }) {
  const tones = {
    ink:   'bg-ink/5 text-ink border-ink/15',
    club:  'bg-club/10 text-club border-club/20',
    clay:  'bg-clay/12 text-clay border-clay/25',
    paper: 'bg-paper text-ink border-line',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.08em] px-2 py-1 rounded border ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}

function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-mute mb-5">
      {index && <span className="mono text-ink/60">{index}</span>}
      <span className="h-px bg-ink/20 flex-1 max-w-[40px]" />
      <span>{children}</span>
    </div>
  );
}

function Photo({ label, src, className = '', children }) {
  return (
    <div className={`photo-ph rounded-md ${className}`}>
      {src && <img src={src} alt={label || ''} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />}
      {children}
      {!src && <span className="lbl">{label}</span>}
    </div>
  );
}

function Divider({ className = '' }) {
  return <div className={`h-px bg-ink/10 ${className}`} />;
}

// Google Maps embed with a pin at the club — clean, no tint.
function MapEmbed({ className = '', tone = 'light', label = 'BR2 9AN' }) {
  const q = 'Bromley+Lawn+Tennis+and+Squash+Club,+Sandford+Road,+Bromley+BR2+9AN';
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <iframe
        title="Map — Bromley Lawn Tennis & Squash Club"
        src={`https://www.google.com/maps?q=${q}&z=15&output=embed`}
        width="100%" height="100%" loading="lazy"
        style={{ border: 0, display: 'block', width: '100%', height: '100%' }}
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {label && (
        <span className={`absolute left-2 bottom-2 mono text-[9px] tracking-[0.08em] uppercase px-1.5 py-0.5 rounded ${tone === 'dark' ? 'text-paper/80 bg-ink/50' : 'text-ink/70 bg-paper/85'}`}>{label}</span>
      )}
    </div>
  );
}

// Section header — big display type with optional eyebrow + meta on the right.
function SectionHeader({ eyebrow, title, sub, meta, className = '' }) {
  // Normalise the eyebrow so a leading number (e.g. "02 · This week") always
  // renders as [02] —line— TEXT, matching direct <SectionLabel index=…> usage.
  let eyebrowIndex, eyebrowText = eyebrow;
  if (typeof eyebrow === 'string') {
    const m = eyebrow.match(/^\s*(\d[\w/]*)\s*·\s*(.+)$/);
    if (m) { eyebrowIndex = m[1]; eyebrowText = m[2]; }
  }
  return (
    <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 ${className}`}>
      <div className="max-w-2xl">
        {eyebrow && <SectionLabel index={eyebrowIndex}>{eyebrowText}</SectionLabel>}
        <h2 className="display text-4xl md:text-5xl leading-[1.02]">{title}</h2>
        {sub && <p className="mt-4 text-ink/70 text-lg leading-relaxed">{sub}</p>}
      </div>
      {meta && <div className="text-sm text-mute">{meta}</div>}
    </div>
  );
}

// Sport label dot
function SportDot({ sport, className = '' }) {
  const map = {
    Tennis:     'bg-club',
    Squash:     'bg-clay',
    Pickleball: 'bg-ink',
  };
  return <span className={`inline-block w-1.5 h-1.5 rounded-full ${map[sport] || 'bg-ink'} ${className}`} />;
}

// Footer
function Footer({ navigate }) {
  return (
    <footer className="bg-ink text-paper/90 mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-start gap-4">
              <img src="assets/bltsc-crest.png?v=2" alt="BLTSC crest" width="64" height="74" className="flex-shrink-0"/>
              <div>
                <div className="display text-3xl leading-tight">Bromley Lawn Tennis<br/>& Squash Club</div>
                <p className="mt-4 text-paper/60 max-w-sm">
                  A members' club for tennis, squash and pickleball on the edge of Bromley, South East London. Founded 1880.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 grid place-items-center rounded-md border border-paper/20 hover:bg-paper/10"><Icon name="facebook" size={16} /></a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 grid place-items-center rounded-md border border-paper/20 hover:bg-paper/10"><Icon name="instagram" size={16} /></a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.14em] text-paper/50 mb-4">Visit</div>
            <div className="flex items-start gap-2 mb-3">
              <Icon name="mapPin" size={16} className="mt-0.5 text-paper/60" />
              <div className="leading-snug">Sandford Road<br/>Bromley BR2 9AN</div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Icon name="phone" size={16} className="text-paper/60" />
              <a className="hover:underline" href="tel:02084600936">020 8460 0936</a>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="mail" size={16} className="text-paper/60" />
              <a className="hover:underline" href="mailto:office@bromleyltsc.co.uk">office@bromleyltsc.co.uk</a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.14em] text-paper/50 mb-4">Explore</div>
            <ul className="space-y-2">
              {['Home','What\'s On','Sports','Coaching','Membership','About'].map(item => (
                <li key={item}>
                  <a href="#" onClick={(e)=>{e.preventDefault(); navigate(item);}} className="hover:text-paper">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.14em] text-paper/50 mb-4">Find us</div>
            <button
              type="button"
              onClick={() => {
                navigate('About');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                }, 120);
              }}
              className="block w-full text-left aspect-[4/3] rounded-md overflow-hidden border border-paper/15 relative bg-paper/5 group cursor-pointer"
              aria-label="Open map on the About page"
            >
              {/* abstract map placeholder */}
              <svg width="100%" height="100%" viewBox="0 0 100 75" preserveAspectRatio="none">
                <rect width="100" height="75" fill="#1a3a28"/>
                <path d="M0 40 L100 30" stroke="#F6F1E8" strokeOpacity="0.18" strokeWidth="0.6" fill="none"/>
                <path d="M20 0 L35 75" stroke="#F6F1E8" strokeOpacity="0.18" strokeWidth="0.6" fill="none"/>
                <path d="M60 0 L75 75" stroke="#F6F1E8" strokeOpacity="0.12" strokeWidth="0.6" fill="none"/>
                <path d="M0 55 L100 65" stroke="#F6F1E8" strokeOpacity="0.12" strokeWidth="0.6" fill="none"/>
                <circle cx="48" cy="42" r="2.2" fill="#C4623C"/>
                <circle cx="48" cy="42" r="5" fill="#C4623C" fillOpacity="0.25"/>
              </svg>
              <span className="absolute left-2 bottom-2 mono text-[9px] tracking-[0.08em] uppercase text-paper/70">BR2 9AN</span>
              <span className="absolute right-2 top-2 mono text-[9px] uppercase tracking-[0.08em] text-paper/0 group-hover:text-paper/70 transition flex items-center gap-1">
                Open map <Icon name="arrowUpRight" size={11}/>
              </span>
            </button>
          </div>
        </div>

        <Divider className="bg-paper/10 mt-12 mb-6" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-paper/50">
          <div>© {new Date().getFullYear()} Bromley Lawn Tennis & Squash Club. Registered members' club.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-paper">Safeguarding</a>
            <a href="#" className="hover:text-paper">Privacy</a>
            <a href="#" className="hover:text-paper">Court priority</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Btn, Pill, SectionLabel, Photo, Divider, SectionHeader, SportDot, Footer, MapEmbed });
