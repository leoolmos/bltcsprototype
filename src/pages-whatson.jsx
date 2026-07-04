// Next open day — edit the date/time here when the club sets the next one.
const OPEN_DAY = {
  label: 'Free Open Morning',
  date: 'Sunday 20 September 2026',
  time: '10:00 – 13:00',
  iso: '2026-09-20T10:00:00',
  blurb: 'Free courts, coaching taster sessions and refreshments for tennis, squash and pickleball. No booking needed — bring a friend.',
};

function useCountdown(targetIso) {
  const target = React.useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const s = Math.floor(diff / 1000);
  return {
    passed: diff === 0,
    days:    Math.floor(s / 86400),
    hours:   Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function OpenDayCountdown({ navigate }) {
  const c = useCountdown(OPEN_DAY.iso);
  const units = [
    { v: c.days, l: 'Days' },
    { v: c.hours, l: 'Hours' },
    { v: c.minutes, l: 'Mins' },
    { v: c.seconds, l: 'Secs' },
  ];
  return (
    <div className="mt-10 rounded-xl bg-club text-paper overflow-hidden shadow-card">
      <div className="p-7 md:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <Pill tone="clay" className="!bg-clay/20 !border-clay/40 !text-paper mb-4">
            <Icon name="star" size={12}/> Next open day
          </Pill>
          <h2 className="display text-3xl md:text-4xl leading-[1.05]">{OPEN_DAY.label}</h2>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-paper/90">
            <span className="flex items-center gap-2"><Icon name="calendar" size={16}/> {OPEN_DAY.date}</span>
            <span className="flex items-center gap-2"><Icon name="clock" size={16}/> {OPEN_DAY.time}</span>
          </div>
          <p className="mt-4 text-paper/75 leading-relaxed max-w-md">{OPEN_DAY.blurb}</p>
        </div>
        <div className="lg:col-span-6">
          {c.passed ? (
            <div className="rounded-lg bg-paper/10 border border-paper/20 p-6 text-center">
              <div className="display text-2xl">Happening now — come on down!</div>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {units.map((u, i) => (
                <div key={i} className="rounded-lg bg-paper text-ink py-4 md:py-5 text-center">
                  <div className="display text-3xl md:text-5xl leading-none tabular-nums">{String(u.v).padStart(2, '0')}</div>
                  <div className="mono text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-mute mt-2">{u.l}</div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-5">
            <Btn variant="clay" size="md" onClick={()=>navigate && navigate('Membership')}>
              Join the club <Icon name="arrowRight" size={15}/>
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

const NEWS_PER_PAGE = 4;

function WhatsOnPage({ navigate, openArticle }) {
  const [tab, setTab] = React.useState('news');
  const [sportFilter, setSportFilter] = React.useState('All');
  const [newsPage, setNewsPage] = React.useState(0);

  const tabs = [
    { id: 'news',      label: 'News & events' },
    { id: 'fixtures',  label: 'Fixtures' },
    { id: 'sessions',  label: 'Social sessions' },
  ];

  const newsPageCount = Math.ceil(NEWS_FEED.length / NEWS_PER_PAGE);
  const pagedNews = NEWS_FEED.slice(newsPage * NEWS_PER_PAGE, newsPage * NEWS_PER_PAGE + NEWS_PER_PAGE);

  const filteredFixtures = sportFilter === 'All' ? FIXTURES : FIXTURES.filter(f => f.sport === sportFilter);

  return (
    <div className="fade-up max-w-6xl mx-auto px-6 md:px-10 pt-10 md:pt-14">
      <div className="max-w-3xl">
        <SectionLabel index="W / O">What's on</SectionLabel>
        <h1 className="display text-5xl md:text-7xl leading-[1.08] md:leading-[1.05] pb-1">
          The club this <span className="italic text-club">week</span>, and the weeks ahead.
        </h1>
        <p className="mt-5 text-lg text-ink/70 leading-relaxed">
          Social sessions, team fixtures, tournaments, and everything in between. If you're a member, this is your page.
        </p>
      </div>

      {/* NEXT OPEN DAY — feature countdown */}
      <OpenDayCountdown navigate={navigate} />

      {/* TABS */}
      <div className="mt-12 border-b border-ink/15 flex gap-6 md:gap-10 overflow-x-auto no-scrollbar">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={()=>setTab(t.id)}
            data-active={tab === t.id}
            className="tab-btn pb-4 -mb-px border-b-2 border-transparent text-ink/50 hover:text-ink whitespace-nowrap text-[15px] font-medium transition"
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* SESSIONS */}
      {tab === 'sessions' && (
        <div className="mt-10 fade-up">
          <div className="mb-6">
            <h2 className="display text-2xl">A typical week</h2>
            <div className="mono text-xs text-mute uppercase tracking-wider mt-1">{SESSIONS_THIS_WEEK.length} sessions · recurring social play, every week</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].filter(d => SESSIONS_THIS_WEEK.some(s=>s.day===d)).map(day => {
              const items = SESSIONS_THIS_WEEK.filter(s=>s.day===day);
              return (
                <div key={day} className="rounded-md border border-line bg-paper p-5">
                  <div className="mb-4 pb-3 border-b border-line">
                    <div className="display text-2xl">{day}</div>
                  </div>
                  <div className="space-y-4">
                    {items.map((s, i) => (
                      <div key={i}>
                        <div className="mono text-xs text-club mb-1">{s.time}</div>
                        <div className="font-medium text-[15px] leading-snug">{s.title}</div>
                        <div className="text-xs text-mute mt-0.5">{s.where}</div>
                        <div className="mt-2"><Pill><SportDot sport={s.sport}/> {s.sport}</Pill></div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-md border border-line bg-club/5 p-5 flex items-center gap-4">
            <Icon name="sparkles" className="text-club" size={20}/>
            <div className="flex-1 text-sm">
              <span className="font-medium">Recurring social play.</span> Mon / Wed / Sat 13:30–15:30 tennis · Tue 19:00–21:00 evening tennis · Thu 18:30 squash club night.
            </div>
          </div>
        </div>
      )}

      {/* FIXTURES */}
      {tab === 'fixtures' && (
        <div className="mt-10 fade-up">
          <div className="flex items-center gap-2 mb-6">
            <span className="mono text-xs uppercase tracking-wider text-mute mr-2">Filter:</span>
            {['All','Tennis','Squash'].map(s => (
              <button key={s} onClick={()=>setSportFilter(s)}
                className={`text-xs font-medium px-3 py-1.5 rounded border transition ${sportFilter===s ? 'bg-ink text-paper border-ink' : 'border-line text-ink hover:bg-ink/5'}`}>
                {s}
              </button>
            ))}
          </div>
          <div className="rounded-md border border-line bg-paper overflow-hidden">
            <div className="grid grid-cols-12 gap-3 px-5 md:px-7 py-3 border-b border-line mono text-[10px] uppercase tracking-wider text-mute">
              <div className="col-span-3 md:col-span-2">Date</div>
              <div className="hidden md:block md:col-span-1">Time</div>
              <div className="col-span-5 md:col-span-3">Team</div>
              <div className="col-span-4 md:col-span-3">Opponent</div>
              <div className="hidden md:block md:col-span-2">League</div>
              <div className="hidden md:block md:col-span-1 text-right">Home/Away</div>
            </div>
            {filteredFixtures.map((f, i) => (
              <div key={i} className="grid grid-cols-12 gap-3 px-5 md:px-7 py-5 border-t border-line items-center">
                <div className="col-span-3 md:col-span-2">
                  <div className="font-medium">{f.date}</div>
                  <div className="md:hidden mono text-xs text-mute">{f.time}</div>
                </div>
                <div className="hidden md:block md:col-span-1 mono text-sm text-ink/80">{f.time}</div>
                <div className="col-span-5 md:col-span-3 flex items-center gap-2">
                  <SportDot sport={f.sport}/>
                  <span className="font-medium text-sm">{f.team}</span>
                </div>
                <div className="col-span-4 md:col-span-3 text-sm text-ink/80">{f.opp}</div>
                <div className="hidden md:block md:col-span-2 text-xs text-mute">{f.league}</div>
                <div className="hidden md:block md:col-span-1 text-right">
                  <Pill tone={f.venue === 'Home' ? 'club' : 'ink'}>{f.venue}</Pill>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* NEWS & EVENTS — merged feed */}
      {tab === 'news' && (
        <div className="mt-10 fade-up">
          <div className="divide-y divide-line rounded-md border border-line bg-paper overflow-hidden">
            {pagedNews.map((item) => (
              <button
                key={item.id}
                onClick={()=>openArticle && openArticle(item)}
                className="w-full text-left grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-7 p-5 md:p-6 hover:bg-ink/[0.02] transition group">
                <div className="md:col-span-4 lg:col-span-3">
                  <div className="relative">
                    <Photo label={`${item.kind.toLowerCase()} — ${item.title.toLowerCase().slice(0,22)}`} src={item.img} className="aspect-[16/10]" />
                    <Pill tone={item.kind === 'Event' ? 'clay' : 'club'} className="absolute top-2.5 left-2.5 !bg-paper">
                      {item.kind}
                    </Pill>
                  </div>
                </div>
                <div className="md:col-span-8 lg:col-span-9 flex flex-col">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="mono text-[11px] uppercase tracking-wider text-mute">{item.date}</span>
                    <span className="text-ink/25">·</span>
                    <span className="mono text-[11px] uppercase tracking-wider text-club">{item.tag}</span>
                  </div>
                  <h3 className="display text-2xl leading-snug group-hover:text-club transition">{item.title}</h3>
                  <p className="mt-2 text-ink/70 leading-relaxed">{item.excerpt || item.blurb}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-club group-hover:gap-2.5 transition-all">
                    {item.kind === 'Event' ? 'Event details' : 'Read more'} <Icon name="arrowRight" size={15}/>
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Pagination */}
          {newsPageCount > 1 && (
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={()=>{ setNewsPage(p=>Math.max(0, p-1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                disabled={newsPage === 0}
                className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-md border border-line text-ink hover:bg-ink/5 disabled:opacity-30 disabled:cursor-not-allowed transition">
                <Icon name="chevronLeft" size={16}/> Newer
              </button>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: newsPageCount }).map((_, i) => (
                  <button
                    key={i}
                    onClick={()=>{ setNewsPage(i); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    aria-label={`Page ${i + 1}`}
                    className={`w-8 h-8 grid place-items-center rounded-md mono text-xs transition ${newsPage === i ? 'bg-ink text-paper' : 'border border-line text-ink hover:bg-ink/5'}`}>
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={()=>{ setNewsPage(p=>Math.min(newsPageCount - 1, p+1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                disabled={newsPage >= newsPageCount - 1}
                className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-md border border-line text-ink hover:bg-ink/5 disabled:opacity-30 disabled:cursor-not-allowed transition">
                Older <Icon name="chevronRight" size={16}/>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

window.WhatsOnPage = WhatsOnPage;
window.OpenDayCountdown = OpenDayCountdown;
