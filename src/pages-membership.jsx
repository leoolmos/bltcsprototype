function MembershipCard({ m }) {
  return (
    <div className={`rounded-md border p-6 flex flex-col ${m.tag === 'Most popular' ? 'border-club bg-club/5' : 'border-line bg-paper'}`}>
      {m.tag && <Pill tone={m.tag === 'Most popular' ? 'club' : 'clay'} className="mb-3 self-start">{m.tag}</Pill>}
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="display text-xl leading-snug">{m.name}</h4>
      </div>
      <div className="text-xs text-mute mb-1">{m.qual}</div>
      <div className="mono text-sm text-ink font-medium mb-4">{m.price}</div>
      <ul className="space-y-2 flex-1">
        {m.includes.map((inc, j) => (
          <li key={j} className="flex items-start gap-2 text-sm">
            <Icon name="check" size={14} className="text-club mt-1 flex-shrink-0"/>
            <span>{inc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// All-access card — light card that pops on the dark feature band.
function AllAccessCard({ m }) {
  return (
    <div className="rounded-md bg-paper p-6 flex flex-col shadow-card">
      <div className="flex items-center gap-1.5 mb-3">
        <SportDot sport="Tennis"/><SportDot sport="Squash"/><SportDot sport="Pickleball"/>
        <span className="mono text-[10px] uppercase tracking-[0.1em] text-clay ml-1">All 3 sports</span>
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="display text-2xl leading-snug text-ink">{m.name}</h4>
      </div>
      <div className="text-xs text-mute mb-1">{m.qual}</div>
      <div className="mono text-base text-ink font-medium mb-4">{m.price}</div>
      <ul className="space-y-2 flex-1">
        {m.includes.map((inc, j) => (
          <li key={j} className="flex items-start gap-2 text-sm text-ink">
            <Icon name="check" size={14} className="text-club mt-1 flex-shrink-0"/>
            <span>{inc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Sport accent colours for the section headers
const SPORT_ACCENT = {
  tennis:     { bar: 'bg-club',  text: 'text-club'  },
  squash:     { bar: 'bg-clay',  text: 'text-clay'  },
  pickleball: { bar: 'bg-ink',   text: 'text-ink'   },
};

function MembershipPage({ navigate }) {
  const [form, setForm] = React.useState({ name:'', email:'', phone:'', sport:'Tennis', message:'' });
  const [submitted, setSubmitted] = React.useState(false);

  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="fade-up">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-10 md:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <SectionLabel index="M / S">Membership</SectionLabel>
            <h1 className="display text-5xl md:text-7xl leading-[1.1] pb-1">
              Join the club.<br/>
              <span className="italic text-club">Play tomorrow.</span>
            </h1>
            <p className="mt-8 text-lg text-ink/70 leading-relaxed max-w-xl">
              One joining fee, one annual subscription, full access to tennis, squash and pickleball. The membership year runs 1 April — 31 March, pro-rata if you join mid-year.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn size="lg" href="#join-form">Enquire about joining <Icon name="arrowRight" size={16}/></Btn>
              <Btn size="lg" variant="secondary" onClick={()=>navigate("What's On")}>Come to an Open Day</Btn>
            </div>
          </div>
          <div className="md:col-span-5">
            <Photo label="clubhouse balcony — summer" src={IMG.clubModern} className="aspect-[5/4]" />
          </div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 mt-16">
        <div className="flex items-start gap-3 p-4 rounded-md border border-line bg-paper/60 text-sm text-ink/70">
          <Icon name="tag" size={16} className="mt-0.5 text-clay flex-shrink-0" />
          <div>
            <span className="font-medium text-ink">2026/27 rates.</span> Subscriptions run 1 April — 31 March and are non-refundable. Eight-month standing orders available April–November. Interim memberships for joiners mid-year are charged at a premium rate — contact the office for a pro-rata quote.
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 mt-10">
        <SectionHeader
          eyebrow="01 · Categories"
          title="Pick a sport, or take them all."
          sub="Two kinds of membership. All-access categories that cover every sport at the club, and sport-specific categories priced per sport."
        />

        {/* ── TIER 1: ALL-ACCESS (feature band) ─────────────── */}
        {(() => {
          const allGroup = MEMBERSHIP_GROUPS.find(g => g.id === 'all');
          return (
            <div className="mt-12 rounded-xl bg-club text-paper overflow-hidden shadow-card">
              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4">
                    <Pill tone="clay" className="!bg-clay/20 !border-clay/40 !text-paper mb-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-paper"/>
                        <span className="w-1.5 h-1.5 rounded-full bg-paper"/>
                        <span className="w-1.5 h-1.5 rounded-full bg-paper"/>
                      </span>
                      Covers every sport
                    </Pill>
                    <h3 className="display text-3xl md:text-4xl leading-[1.05]">One membership,<br/>every sport.</h3>
                    <p className="mt-4 text-paper/75 leading-relaxed max-w-sm">
                      All-access categories open tennis, squash <em>and</em> pickleball on a single subscription — plus full clubhouse life. The simplest way in.
                    </p>
                  </div>
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    {allGroup.items.map((m, i) => (
                      <AllAccessCard key={i} m={m} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ── TIER 2: SPORT-SPECIFIC ────────────────────────── */}
        <div className="mt-16">
          <div className="flex items-center gap-4">
            <div className="mono text-[11px] uppercase tracking-[0.14em] text-mute whitespace-nowrap">Or · One sport at a time</div>
            <div className="h-px bg-ink/15 flex-1" />
          </div>
          <h3 className="display text-3xl md:text-4xl leading-none mt-4">Sport-specific memberships</h3>
          <p className="mt-3 text-ink/65 max-w-xl">Priced for a single sport — join the one you play. Combine two or three at a multisport rate on request.</p>
        </div>

        <div className="mt-12 space-y-16">
          {MEMBERSHIP_GROUPS.filter(g => g.id !== 'all').map((group) => {
            const accent = SPORT_ACCENT[group.id] || SPORT_ACCENT.tennis;
            return (
              <div key={group.id} className="scroll-mt-24">
                {/* sport header — colour-accented bar for at-a-glance separation */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-7">
                  <div className="flex items-stretch gap-4">
                    <div className={`w-1 rounded-full ${accent.bar}`} />
                    <div>
                      <div className={`mono text-[11px] uppercase tracking-[0.14em] ${accent.text} mb-1`}>{group.sport}</div>
                      <h3 className="display text-3xl md:text-4xl leading-none">{group.label}</h3>
                      <p className="mt-2 text-sm text-ink/65 max-w-md">{group.blurb}</p>
                    </div>
                  </div>
                  <div className="mono text-[11px] uppercase tracking-wider text-mute whitespace-nowrap">
                    {group.items.length} {group.items.length === 1 ? 'option' : 'options'}
                  </div>
                </div>

                {/* cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {group.items.map((m, i) => (
                    <MembershipCard key={i} m={m} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* multisport note */}
        <div className="mt-12 flex items-start gap-3 p-4 rounded-md border border-line bg-paper/60 text-sm text-ink/70">
          <Icon name="users" size={16} className="mt-0.5 text-club flex-shrink-0" />
          <div>
            <span className="font-medium text-ink">Play more than one sport?</span> Multisport rates combining tennis, squash and pickleball are available on request — contact the office for a tailored quote.
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <SectionLabel index="02">What you get</SectionLabel>
            <h2 className="display text-4xl md:text-5xl leading-[1.05]">More than a court booking.</h2>
          </div>
          <div className="md:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ['14 tennis courts','Four surfaces, indoor and out'],
                ['3 squash courts','Glass-backed, with galleries'],
                ['Daily pickleball','Indoor and outdoor'],
                ['Free first-year coaching','One session a week for 12 months'],
                ['Club teams & leagues','Kent & N. Kent tennis · Kent squash'],
                ['Bar & balcony','Full clubhouse access'],
                ['Sports massage','On-site, members\' rates'],
                ['Racquet stringing','On-site service'],
              ].map(([k, v], i) => (
                <li key={i} className="flex gap-3 p-4 rounded-md bg-paper border border-line">
                  <Icon name="check" size={16} className="text-club mt-0.5 flex-shrink-0"/>
                  <div>
                    <div className="font-medium">{k}</div>
                    <div className="text-sm text-mute mt-0.5">{v}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 mt-20">
        <SectionLabel index="03">How to join</SectionLabel>
        <h2 className="display text-4xl md:text-5xl leading-[1.05] max-w-2xl">Three steps. About two days.</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {[
            { n:'01', title:'Get in touch', body:'Email us or come to an Open Day. We\'ll show you round and answer anything.' },
            { n:'02', title:'Complete the application', body:'A short form, proposer and seconder where relevant. We\'ll help with both.' },
            { n:'03', title:'Start playing', body:'Most new members are playing within two business days of applying.' },
          ].map((s, i) => (
            <div key={i} className="relative">
              <div className="mono text-xs text-clay mb-4">STEP {s.n}</div>
              <div className="display text-2xl mb-3">{s.title}</div>
              <div className="text-ink/70 leading-relaxed">{s.body}</div>
              {i < 2 && <div className="hidden md:block absolute top-1 -right-4 text-mute"><Icon name="chevronRight" size={20}/></div>}
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section id="join-form" className="max-w-6xl mx-auto px-6 md:px-10 mt-24">
        <div className="rounded-lg bg-ink text-paper overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 p-8 md:p-12 border-b md:border-b-0 md:border-r border-paper/10">
              <Pill tone="clay" className="!bg-clay/15 !border-clay/30 !text-clay">Primary CTA</Pill>
              <h2 className="display text-4xl mt-5 leading-[1.05]">Start a conversation.</h2>
              <p className="mt-4 text-paper/70 leading-relaxed">
                Fill this in and the membership secretary will reply within two working days. Or phone the office Tue–Fri, 10:00–15:00.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <div className="flex items-center gap-3"><Icon name="phone" size={16} className="text-paper/60"/><a className="hover:underline" href="tel:02084600936">020 8460 0936</a></div>
                <div className="flex items-center gap-3"><Icon name="mail" size={16} className="text-paper/60"/><a className="hover:underline" href="mailto:office@bromleyltsc.co.uk">office@bromleyltsc.co.uk</a></div>
              </div>
            </div>
            <div className="md:col-span-7 p-8 md:p-12">
              {submitted ? (
                <div className="h-full flex flex-col items-start justify-center py-10 fade-up">
                  <div className="w-14 h-14 rounded-md bg-clay grid place-items-center mb-5">
                    <Icon name="check" size={24} stroke={2.5}/>
                  </div>
                  <h3 className="display text-3xl leading-snug">Thanks, {form.name || 'friend'}.</h3>
                  <p className="mt-3 text-paper/70 max-w-md">
                    We've got your enquiry. Look out for a reply from the membership secretary within two working days.
                  </p>
                  <button onClick={()=>{setSubmitted(false); setForm({name:'',email:'',phone:'',sport:'Tennis',message:''});}}
                    className="mt-6 text-sm underline underline-offset-4 text-paper/80 hover:text-paper">Submit another</button>
                </div>
              ) : (
                <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { key:'name', label:'Full name', type:'text', span:2 },
                    { key:'email', label:'Email', type:'email' },
                    { key:'phone', label:'Phone', type:'tel' },
                  ].map(f => (
                    <label key={f.key} className={f.span===2 ? 'sm:col-span-2' : ''}>
                      <div className="mono text-[11px] uppercase tracking-wider text-paper/60 mb-2">{f.label}</div>
                      <input required type={f.type} value={form[f.key]} onChange={e=>setForm({...form, [f.key]: e.target.value})}
                        className="w-full bg-transparent border-b border-paper/25 focus:border-clay focus:outline-none py-2 text-paper placeholder:text-paper/30"/>
                    </label>
                  ))}
                  <label className="sm:col-span-2">
                    <div className="mono text-[11px] uppercase tracking-wider text-paper/60 mb-2">Sport of interest</div>
                    <div className="flex flex-wrap gap-2">
                      {['Tennis','Squash','Pickleball','All three'].map(s => (
                        <button key={s} type="button" onClick={()=>setForm({...form, sport:s})}
                          className={`px-3 py-1.5 rounded border text-sm transition ${form.sport===s ? 'bg-clay border-clay text-paper' : 'border-paper/25 text-paper/80 hover:bg-paper/10'}`}>{s}</button>
                      ))}
                    </div>
                  </label>
                  <label className="sm:col-span-2">
                    <div className="mono text-[11px] uppercase tracking-wider text-paper/60 mb-2">Anything else (optional)</div>
                    <textarea rows={3} value={form.message} onChange={e=>setForm({...form, message:e.target.value})}
                      className="w-full bg-transparent border border-paper/20 rounded-md focus:border-clay focus:outline-none p-3 text-paper placeholder:text-paper/30"
                      placeholder="Level, preferred times, questions..."/>
                  </label>
                  <div className="sm:col-span-2 flex items-center justify-between pt-2">
                    <div className="text-xs text-paper/50">We'll only use this to reply to your enquiry.</div>
                    <Btn type="submit" variant="clay" size="lg">Send enquiry <Icon name="arrowRight" size={16}/></Btn>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.MembershipPage = MembershipPage;
