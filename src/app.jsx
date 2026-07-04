// Top-level app: header + nav + page routing.

const NAV = ['Home', "What's On", 'Sports', 'Coaching', 'Membership', 'About', 'Shop'];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "displayFont": "General Sans"
}/*EDITMODE-END*/;

const FONT_OPTIONS = {
  'General Sans':   { roman: '"General Sans"',   italic: '"Inter Tight"',    tracking: '-0.025em' },
  'Cabinet Grotesk':{ roman: '"Cabinet Grotesk"',italic: '"Inter Tight"',    tracking: '-0.03em'  },
  'Inter Tight':    { roman: '"Inter Tight"',    italic: '"Inter Tight"',    tracking: '-0.03em'  },
};

function applyFont(name) {
  const f = FONT_OPTIONS[name] || FONT_OPTIONS['General Sans'];
  const root = document.documentElement;
  root.style.setProperty('--display-font', f.roman);
  root.style.setProperty('--display-italic', f.italic);
  root.style.setProperty('--display-tracking', f.tracking);
  // apply tracking via a style tag
  let s = document.getElementById('tweak-display-style');
  if (!s) { s = document.createElement('style'); s.id = 'tweak-display-style'; document.head.appendChild(s); }
  s.textContent = `.display{letter-spacing:${f.tracking} !important;}`;
}

function TweaksPanel({ visible, font, setFont }) {
  if (!visible) return null;
  return (
    <div className="fixed bottom-5 right-5 z-50 w-72 rounded-md bg-ink text-paper shadow-2xl border border-paper/10 overflow-hidden">
      <div className="px-4 py-3 border-b border-paper/10 flex items-center justify-between">
        <div className="text-sm font-medium">Tweaks</div>
        <div className="mono text-[10px] uppercase tracking-wider text-paper/50">Typography</div>
      </div>
      <div className="p-4">
        <div className="mono text-[10px] uppercase tracking-wider text-paper/50 mb-3">Display font</div>
        <div className="space-y-2">
          {Object.keys(FONT_OPTIONS).map(name => (
            <button key={name} onClick={()=>setFont(name)}
              className={`w-full text-left px-3 py-2.5 rounded border transition flex items-center justify-between ${font===name ? 'bg-clay border-clay text-paper' : 'border-paper/20 hover:bg-paper/5'}`}>
              <span style={{ fontFamily: FONT_OPTIONS[name].roman, fontWeight: 600, letterSpacing: FONT_OPTIONS[name].tracking }} className="text-lg">
                {name}
              </span>
              {font===name && <Icon name="check" size={14}/>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header({ current, navigate }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [pastHero, setPastHero] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // "past hero" = scrolled beyond the fullscreen video into the second section
      setPastHero(window.scrollY > window.innerHeight - 90);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  React.useEffect(() => { setOpen(false); }, [current]);

  // Keep the transparent, light-on-video header over the Home hero until the second section.
  const overVideo = current === 'Home' && !pastHero && !open;

  return (
    <header className={`sticky top-0 z-40 transition-all ${overVideo ? 'bg-transparent text-paper' : 'bg-canvas/92 backdrop-blur'}`}>
      {overVideo && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/60 to-transparent"></div>
      )}
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between gap-6">
        {/* Mark */}
        <button onClick={()=>navigate('Home')} className="flex items-center gap-3 group">
          <img src={`assets/bltsc-crest.png?v=2`} alt="BLTSC crest" width="40" height="46" className="flex-shrink-0"/>
          <div className="hidden sm:block leading-tight">
            <div className="display text-[15px] font-semibold">Bromley LTSC</div>
            <div className={`mono text-[9px] uppercase tracking-[0.14em] ${overVideo ? 'text-paper/70' : 'text-mute'}`}>Est. 1880</div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV.map(item => (
            item === 'Shop'
              ? <a key={item} href={SHOP_URL} target="_blank" rel="noopener noreferrer"
                  className={`nav-link text-[14px] font-medium transition inline-flex items-center gap-1 ${overVideo ? 'text-paper/85 hover:text-paper' : 'text-ink/75 hover:text-ink'}`}>
                  {item} <Icon name="arrowUpRight" size={13}/>
                </a>
              : <button key={item} onClick={()=>navigate(item)} data-active={current === item}
                  className={`nav-link text-[14px] font-medium transition ${overVideo ? 'text-paper/85 hover:text-paper' : 'text-ink/75 hover:text-ink'}`}>{item}</button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Btn size="sm" className="hidden md:inline-flex" onClick={()=>navigate('Membership')}>Join</Btn>
          <button onClick={()=>setOpen(v=>!v)} className={`md:hidden w-10 h-10 grid place-items-center rounded-md border ${overVideo ? 'border-paper/30' : 'border-line'}`} aria-label="Menu">
            <Icon name={open ? 'x' : 'menu'} size={20}/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-canvas">
          <nav className="px-6 py-4 flex flex-col">
            {NAV.map(item => (
              item === 'Shop'
                ? <a key={item} href={SHOP_URL} target="_blank" rel="noopener noreferrer"
                    className="py-3 text-left border-b border-line text-[15px] font-medium text-ink inline-flex items-center gap-1.5">
                    {item} <Icon name="arrowUpRight" size={14}/>
                  </a>
                : <button key={item} onClick={()=>navigate(item)}
                    className={`py-3 text-left border-b border-line text-[15px] font-medium ${current===item ? 'text-club' : 'text-ink'}`}>
                    {item}
                  </button>
            ))}
            <div className="pt-4 flex gap-3">
              <Btn size="sm" className="flex-1" onClick={()=>navigate('Membership')}>Join</Btn>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function App() {
  const [page, setPage] = React.useState('Home');
  const [article, setArticle] = React.useState(null);
  const [font, setFontState] = React.useState(TWEAK_DEFAULTS.displayFont);
  const [tweaksOn, setTweaksOn] = React.useState(false);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const openArticle = (item) => {
    setArticle(item);
    setPage('NewsArticle');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const setFont = (name) => {
    setFontState(name);
    applyFont(name);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { displayFont: name } }, '*');
  };

  React.useEffect(() => {
    applyFont(font);
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode')   setTweaksOn(true);
      if (e.data.type === '__deactivate_edit_mode') setTweaksOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const Pages = {
    'Home':        window.HomePage,
    "What's On":   window.WhatsOnPage,
    'NewsArticle': window.NewsArticlePage,
    'Sports':      window.SportsPage,
    'Coaching':    window.CoachingPage,
    'Membership':  window.MembershipPage,
    'About':       window.AboutPage,
  };
  const Current = Pages[page] || window.HomePage;

  return (
    <div className="min-h-screen flex flex-col">
      <Header current={page === 'NewsArticle' ? "What's On" : page} navigate={navigate}/>
      <main className="flex-1">
        <div key={page === 'NewsArticle' ? article && article.id : page}>
          <Current navigate={navigate} openArticle={openArticle} article={article}/>
        </div>
      </main>
      <Footer navigate={navigate}/>
      <TweaksPanel visible={tweaksOn} font={font} setFont={setFont}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
