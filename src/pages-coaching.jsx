// Coaching page — organised by sport so members find their programme fast.
// Sport accent colours mirror the rest of the site (club=green, clay=terracotta, ink=charcoal).
const COACH_ACCENT = {
  tennis:     { bar: 'bg-club', text: 'text-club', dot: 'Tennis' },
  squash:     { bar: 'bg-clay', text: 'text-clay', dot: 'Squash' },
  pickleball: { bar: 'bg-ink',  text: 'text-ink',  dot: 'Pickleball' },
};

// A single adult/junior programme strand within a sport.
function StrandList({ title, icon, items }) {
  return (
    <div className="rounded-md border border-line bg-paper p-6 flex flex-col h-full">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-9 h-9 rounded-md bg-ink text-paper grid place-items-center flex-shrink-0">
          <Icon name={icon} size={16} stroke={2} />
        </span>
        <h4 className="display text-xl">{title}</h4>
      </div>
      <ul className="space-y-2.5 flex-1">
        {items.map((s, j) => (
          <li key={j} className="flex items-start gap-2 text-sm text-ink/80">
            <Icon name="check" size={14} className="text-club mt-1 flex-shrink-0"/>
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Section header for a sport — accent bar + label, matches Membership page rhythm.
function SportHeader({ sport, title, lead }) {
  const a = COACH_ACCENT[sport];
  return (
    <div className="flex items-stretch gap-4 mb-7">
      <div className={`w-1 rounded-full ${a.bar}`} />
      <div>
        <div className={`mono text-[11px] uppercase tracking-[0.14em] ${a.text} mb-1`}>{a.dot}</div>
        <h2 className="display text-3xl md:text-4xl leading-none">{title}</h2>
        <p className="mt-2 text-ink/70 leading-relaxed max-w-xl">{lead}</p>
      </div>
    </div>
  );
}

function CoachingPage({ navigate }) {
  return (
    <div className="fade-up max-w-6xl mx-auto px-6 md:px-10 pt-10 md:pt-14">
      <div className="max-w-3xl">
        <SectionLabel index="C / O">Coaching</SectionLabel>
        <h1 className="display text-5xl md:text-7xl leading-[1.08] md:leading-[1.05] pb-1">
          Good coaching<br/>
          <span className="italic text-club">for every level</span>.
        </h1>
        <p className="mt-5 text-lg text-ink/70 leading-relaxed max-w-2xl">
          Coaching is organised by sport. Tennis is run by <span className="font-medium text-ink">Jason's Totally Tennis</span>, squash by resident coach <span className="font-medium text-ink">Steve London</span>, and pickleball by qualified coach <span className="font-medium text-ink">Katy</span>. Jump to your sport below.
        </p>
      </div>

      {/* Free coaching banner */}
      <div className="mt-10 rounded-md border border-clay/30 bg-clay/8 overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-clay text-paper grid place-items-center flex-shrink-0">
              <Icon name="sparkles" size={20}/>
            </div>
            <Pill tone="clay">New member perk</Pill>
          </div>
          <div className="flex-1">
            <div className="display text-2xl md:text-3xl">One free coaching session a week, for your first year.</div>
            <div className="text-ink/75 mt-2">
              Wednesday evenings for tennis. Thursday evenings (term time) for squash. Every new full member, every week.
            </div>
          </div>
        </div>
      </div>

      {/* Sport nav chips */}
      <div className="mt-12 flex flex-wrap items-center gap-2">
        <span className="mono text-[11px] uppercase tracking-wider text-mute mr-1">Jump to</span>
        {[['tennis','Tennis'],['squash','Squash'],['pickleball','Pickleball']].map(([id,label]) => (
          <a key={id} href={`#coach-${id}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-sm font-medium hover:border-ink transition">
            <SportDot sport={label}/> {label}
          </a>
        ))}
        <a href="#coach-camps" className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-sm font-medium hover:border-ink transition">
          <Icon name="sparkles" size={13} className="text-clay"/> Holiday camps
        </a>
      </div>

      <div className="mt-10 space-y-16">

        {/* ── TENNIS — Jason's Totally Tennis ─────────────────── */}
        <section id="coach-tennis" className="scroll-mt-24">
          <SportHeader
            sport="tennis"
            title="Tennis coaching"
            lead="All tennis coaching at the club — every adult class, squad and junior session — is run by Jason's Totally Tennis, the club's appointed tennis programme."
          />

          {/* Jason responsibility / contact-first callout */}
          <div className="rounded-xl bg-club text-paper overflow-hidden shadow-card mb-6">
            <div className="p-7 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
              <div className="lg:col-span-7">
                <Pill tone="clay" className="!bg-clay/20 !border-clay/40 !text-paper mb-4">Run by Jason's Totally Tennis</Pill>
                <h3 className="display text-2xl md:text-3xl leading-tight">Book tennis coaching through Jason's team.</h3>
                <p className="mt-3 text-paper/80 leading-relaxed max-w-lg">
                  Jason's Totally Tennis handles all tennis lessons and squads directly. Please <span className="font-medium text-paper">contact them first</span> to check availability and be placed with the right coach — before booking any session online.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-lg bg-paper text-ink p-5">
                  <div className="mono text-[11px] uppercase tracking-wider text-mute mb-3">Contact Jason's Totally Tennis</div>
                  <a href="mailto:enquiries@jasonstotallytennis.com" className="flex items-center gap-3 group mb-3">
                    <span className="w-9 h-9 rounded-md border border-line grid place-items-center group-hover:bg-ink group-hover:text-paper transition flex-shrink-0">
                      <Icon name="mail" size={15}/>
                    </span>
                    <span className="text-sm break-all">enquiries@jasonstotallytennis.com</span>
                  </a>
                  <a href="tel:02084668473" className="flex items-center gap-3 group">
                    <span className="w-9 h-9 rounded-md border border-line grid place-items-center group-hover:bg-ink group-hover:text-paper transition flex-shrink-0">
                      <Icon name="phone" size={15}/>
                    </span>
                    <span className="text-sm">020 8466 8473</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Adult + Junior strands */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <StrandList
              title="Adult tennis"
              icon="users"
              items={[
                'Individual, pair and group lessons — beginner to advanced',
                'Cardio Tennis to music, weekday mornings',
                'Improver, performance and county squads',
                'Private 1-to-1 by arrangement',
              ]}
            />
            <StrandList
              title="Junior tennis"
              icon="sparkles"
              items={[
                'Full LTA pathway from age 4 to county squad',
                'Mini red / orange / green stages',
                'Yellow-ball performance squad',
                'Easter, summer and half-term camps',
              ]}
            />
          </div>

          {/* Programme link — check but contact first */}
          <div className="rounded-md border border-line bg-paper p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div className="flex items-start gap-3">
              <Icon name="calendar" size={18} className="text-club mt-0.5 flex-shrink-0"/>
              <p className="text-sm text-ink/75 leading-relaxed max-w-xl">
                Browse the full adults &amp; junior timetable online. <span className="font-medium text-ink">Please contact Jason's Totally Tennis before you book</span> so they can confirm your level and space in the class.
              </p>
            </div>
            <Btn href="https://jasonstotallytennisbltc.pembee.app/iframe" target="_blank" variant="primary" size="md" className="flex-shrink-0">
              View adults &amp; junior programme <Icon name="arrowUpRight" size={15}/>
            </Btn>
          </div>
        </section>

        {/* ── HOLIDAY CAMPS — Jason's Totally Tennis ───────────── */}
        <section id="coach-camps" className="scroll-mt-24">
          <SportHeader
            sport="tennis"
            title="Holiday camps"
            lead="Four hours of tennis and multi-sport fun each day of the school holidays — football, racketball, badminton, rounders and fun tennis games alongside the tennis. No experience needed, all standards welcome, and every camp is run by LTA-licensed, DBS-checked coaches."
          />

          {/* Contact-first callout */}
          <div className="rounded-xl bg-club text-paper overflow-hidden shadow-card mb-6">
            <div className="p-7 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
              <div className="lg:col-span-7">
                <Pill tone="clay" className="!bg-clay/20 !border-clay/40 !text-paper mb-4">Run by Jason's Totally Tennis</Pill>
                <h3 className="display text-2xl md:text-3xl leading-tight">Book a holiday camp through Jason's team.</h3>
                <p className="mt-3 text-paper/80 leading-relaxed max-w-lg">
                  Sessions run 9:00am–1:00pm and all equipment is provided. Please <span className="font-medium text-paper">contact Jason's Totally Tennis first</span> to check the right group and availability — before booking a place online. Holiday courses are non-refundable as staff are set in advance.
                </p>
                <div className="mt-5">
                  <Btn href="https://jasonstotallytennis.pembee.app/iframe?filters=621e123bd7da5300097609d3-621e12e37b407a0009f5a930" target="_blank" variant="clay" size="md">
                    Browse &amp; book all camps <Icon name="arrowUpRight" size={15}/>
                  </Btn>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-lg bg-paper text-ink p-5">
                  <div className="mono text-[11px] uppercase tracking-wider text-mute mb-3">Contact Jason's Totally Tennis</div>
                  <a href="mailto:enquiries@jasonstotallytennis.com" className="flex items-center gap-3 group mb-3">
                    <span className="w-9 h-9 rounded-md border border-line grid place-items-center group-hover:bg-ink group-hover:text-paper transition flex-shrink-0">
                      <Icon name="mail" size={15}/>
                    </span>
                    <span className="text-sm break-all">enquiries@jasonstotallytennis.com</span>
                  </a>
                  <a href="tel:02084668473" className="flex items-center gap-3 group">
                    <span className="w-9 h-9 rounded-md border border-line grid place-items-center group-hover:bg-ink group-hover:text-paper transition flex-shrink-0">
                      <Icon name="phone" size={15}/>
                    </span>
                    <span className="text-sm">020 8466 8473</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Two age-group camp cards — compact, showing only what differs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                name: 'Mini Holiday Fun', age: 'Age 4–8',
                note: 'The gentlest introduction — plus an optional short arts & craft session to break up the day.',
                href: 'https://jasonstotallytennis.pembee.app/activity/6a05a7278ea2b939e124f46b',
              },
              {
                name: 'Junior Holiday Fun', age: 'Age 9–15',
                note: 'A great intro for new players and a fun way for existing players to keep building their skills.',
                href: 'https://jasonstotallytennis.pembee.app/activity/6a05a60222230f37346e6e7f',
              },
            ].map((camp) => (
              <div key={camp.name} className="rounded-md border border-line bg-paper p-6 flex flex-col h-full">
                <div className="mono text-[11px] uppercase tracking-[0.14em] text-club mb-1.5">{camp.age}</div>
                <h4 className="display text-2xl leading-none">{camp.name}</h4>
                <p className="mt-3 text-sm text-ink/75 leading-relaxed flex-1">{camp.note}</p>
                <Btn href={camp.href} target="_blank" variant="primary" size="md" className="w-full justify-center mt-5">
                  Book {camp.name.split(' ')[0]} camp <Icon name="arrowUpRight" size={15}/>
                </Btn>
              </div>
            ))}
          </div>
        </section>

        {/* ── SQUASH — Steve London ───────────────────────────── */}
        <section id="coach-squash" className="scroll-mt-24">
          <SportHeader
            sport="squash"
            title="Squash coaching"
            lead="BLTSC's resident coach Steve London — an elite-qualified coach — takes individual, group and shared sessions for adults and juniors. Whatever your standard, from first-timer to seasoned player, coaching will move your game on."
          />

          {/* Steve London contact card */}
          <div className="rounded-md border border-clay/30 bg-clay/[0.06] p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
            <div className="w-12 h-12 rounded-md bg-clay text-paper grid place-items-center flex-shrink-0">
              <Icon name="racquet" size={20}/>
            </div>
            <div className="flex-1">
              <div className="display text-xl leading-tight">Steve London · resident squash coach</div>
              <p className="text-sm text-ink/70 mt-1">A personalised, holistic approach — technique, strategy, progress and enjoyment. Contact Steve directly to arrange coaching.</p>
            </div>
            <Btn href="tel:07749101104" variant="clay" size="md" className="flex-shrink-0">
              <Icon name="phone" size={15}/> Call Steve · 07749 101104
            </Btn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <StrandList
              title="Adults"
              icon="users"
              items={[
                'Individual, group or shared-basis coaching',
                'Technique, strategy and match tactics',
                'Advice on racquets and equipment',
                'From learning the basics to seasoned players',
              ]}
            />
            <StrandList
              title="Juniors"
              icon="sparkles"
              items={[
                'Coaching for aspiring newcomers upward',
                'Small groups or one-to-one',
                'Focus on technique and enjoyment',
                'Arranged directly with Steve',
              ]}
            />
          </div>
        </section>

        {/* ── PICKLEBALL — Coach Katy ─────────────────────────── */}
        <section id="coach-pickleball" className="scroll-mt-24">
          <SportHeader
            sport="pickleball"
            title="Pickleball coaching"
            lead="Coaching for beginners and intermediate players with our qualified coach Katy. Learn the rules and skills, build confidence, and — for more advanced players — sharpen shots, strategy and mindset."
          />

          {/* Coach Katy contact card */}
          <div className="rounded-md border border-ink/15 bg-ink/[0.04] p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
            <div className="w-12 h-12 rounded-md bg-ink text-paper grid place-items-center flex-shrink-0">
              <Icon name="racquet" size={20}/>
            </div>
            <div className="flex-1">
              <div className="display text-xl leading-tight">Katy · qualified pickleball coach</div>
              <p className="text-sm text-ink/70 mt-1">Coaching for beginners through to intermediate level. Contact Katy for more information or to book.</p>
            </div>
            <Btn href="mailto:Info@ktstennis.co.uk" variant="secondary" size="md" className="flex-shrink-0">
              <Icon name="mail" size={15}/> Email Katy
            </Btn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <StrandList
              title="Beginners"
              icon="sparkles"
              items={[
                'Learn the basic rules and skills of the game',
                'Build confidence in your abilities',
                'Play to your strengths',
                'Drills and specific training in sessions',
              ]}
            />
            <StrandList
              title="Intermediate & up"
              icon="dumbbell"
              items={[
                'Identify and neutralise errors',
                'Develop consistency to win rallies',
                'Improve shots, strategy and mindset',
                'Take your game to another level',
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

window.CoachingPage = CoachingPage;
