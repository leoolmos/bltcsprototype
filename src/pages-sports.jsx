function SportsPage({ navigate }) {
  const [tab, setTab] = React.useState('tennis');

  const sports = {
    tennis: {
      name: 'Tennis',
      hero: 'Fourteen courts. Four surfaces. One of the strongest tennis clubs in Kent.',
      facilities: [
        { label: '2 indoor acrylic',    sub: 'Year-round, floodlit' },
        { label: '5 clay',              sub: 'The club\'s signature surface' },
        { label: '3 artificial grass',  sub: 'Fast, forgiving, all-weather' },
        { label: '4 outdoor acrylic',   sub: 'Floodlit into the evening' },
      ],
      features: ['REBO practice wall', 'Adult & junior coaching', 'Cardio Tennis', 'Club teams: Kent & N. Kent Leagues', 'Box leagues · American tournaments'],
      coach: "Jason's Totally Tennis — adult, junior and performance pathways.",
      photos: ['clay — morning light','indoor — rally','junior group','rebo wall'],
      imgs: [IMG.clubDusk, IMG.courtsBalcony, IMG.play3, IMG.play1],
    },
    squash: {
      name: 'Squash & Squash 57',
      hero: 'Three glass-backed courts with viewing galleries. A serious squash programme in the heart of Bromley.',
      facilities: [
        { label: '3 glass-backed courts', sub: 'With viewing galleries' },
        { label: 'Both disciplines',      sub: 'Squash and Squash 57 (racketball)' },
        { label: 'Kent Premier league',   sub: 'Recently promoted 1sts' },
        { label: 'Club nights weekly',    sub: 'Thursdays 18:30 — all levels' },
      ],
      features: ['Former PSA-player head coach', 'Box leagues & internal ladders', 'County teams across age groups', 'Junior squash pathway'],
      coach: 'Former PSA tour player — private and group coaching available.',
      photos: ['court — match','gallery view','coaching','juniors'],
      imgs: [IMG.squashGallery, IMG.squashCoach, IMG.squashCoach, IMG.squashGallery],
    },
    pickleball: {
      name: 'Pickleball',
      hero: 'Daily indoor and outdoor sessions. The fastest-growing racquet sport in the UK, and we\'re in on it.',
      facilities: [
        { label: 'Indoor sessions',  sub: 'Most mornings, year-round' },
        { label: 'Outdoor courts',   sub: 'Weekends from April' },
        { label: 'Paddles provided', sub: 'For first sessions' },
        { label: 'Beginner groups',  sub: 'No experience needed' },
      ],
      features: ['Daily social drop-in', 'Coaching for beginners and improvers', 'Round-robin mini-tournaments', 'All ages welcome'],
      coach: 'Dedicated pickleball coaches for every level.',
      photos: ['dink rally','doubles','outdoor','paddle'],
      imgs: [IMG.pickleball, IMG.clubModern, IMG.pickleball, IMG.clubModern],
    },
  };

  const s = sports[tab];

  return (
    <div className="fade-up max-w-6xl mx-auto px-6 md:px-10 pt-10 md:pt-14">
      <div className="max-w-3xl">
        <SectionLabel index="S / P">Sports</SectionLabel>
        <h1 className="display text-5xl md:text-7xl leading-[1.08] md:leading-[1.05] pb-1">
          Tennis. Squash. Pickleball.
        </h1>
        <p className="mt-5 text-lg text-ink/70 leading-relaxed">
          One membership, three sports, and fourteen courts across four surfaces. Here's what you'll play on.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex flex-wrap items-center gap-2">
        {Object.entries(sports).map(([id, v]) => (
          <button key={id} onClick={()=>setTab(id)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition ${tab===id ? 'bg-ink text-paper border-ink' : 'border-line bg-paper hover:border-ink'}`}>
            <SportDot sport={v.name.split(' ')[0]}/>
            {v.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 fade-up" key={tab}>
        <div className="md:col-span-7">
          <h2 className="display text-3xl md:text-4xl leading-[1.1]">{s.hero}</h2>
          <p className="mt-5 text-ink/70 leading-relaxed">{s.coach}</p>

          <h3 className="mt-10 mono text-xs uppercase tracking-[0.14em] text-mute mb-4">Facilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {s.facilities.map((f, i) => (
              <div key={i} className="p-4 rounded-md bg-paper border border-line">
                <div className="font-medium">{f.label}</div>
                <div className="text-sm text-mute mt-1">{f.sub}</div>
              </div>
            ))}
          </div>

          <h3 className="mt-10 mono text-xs uppercase tracking-[0.14em] text-mute mb-4">Play & programmes</h3>
          <ul className="space-y-2.5">
            {s.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <Icon name="check" size={18} className="text-club mt-0.5 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Btn onClick={()=>navigate('Membership')}>Join and play <Icon name="arrowRight" size={16}/></Btn>
            <Btn variant="secondary" onClick={()=>navigate('Coaching')}>Coaching options</Btn>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="grid grid-cols-2 gap-3">
            <Photo label={s.photos[0]} src={s.imgs[0]} className="aspect-[3/4] col-span-2" />
            <Photo label={s.photos[1]} src={s.imgs[1]} className="aspect-square" />
            <Photo label={s.photos[2]} src={s.imgs[2]} className="aspect-square" />
            <Photo label={s.photos[3]} src={s.imgs[3]} className="aspect-[3/2] col-span-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

window.SportsPage = SportsPage;
