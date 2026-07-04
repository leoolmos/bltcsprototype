function HomePage({ navigate, openArticle }) {
  return (
    <div className="fade-up">
      {/* HERO — fullscreen video */}
      <section className="relative -mt-16 md:-mt-20 min-h-screen flex items-center overflow-hidden">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://video.wixstatic.com/video/b2ee2c_91f29df9b9df401d82d106337d36ac46/1080p/mp4/file.mp4"
          autoPlay muted loop playsInline
        ></video>
        {/* Legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-ink/20"></div>

        {/* Content */}
        <div className="relative w-full px-6 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            <div className="mono text-xs tracking-[0.16em] uppercase text-paper/80 mb-6 flex items-center gap-3">
              <span>Est. 1880</span>
              <span className="h-px w-8 bg-paper/40"></span>
              <span>Sandford Rd, Bromley</span>
            </div>
            <h1 className="display text-paper text-[44px] leading-[1.08] md:text-[88px] md:leading-[1.05] tracking-[-0.03em] pb-1">
              Bromley's<br/>
              <span className="italic font-normal text-paper/95">racquet-sports</span><br/>
              club since 1880.
            </h1>
            <p className="mt-7 text-lg text-paper/85 max-w-lg leading-relaxed">
              Fourteen tennis courts across four surfaces. Three squash courts. Daily pickleball. A warm bar with a balcony over the courts. Five minutes from Bromley South.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Btn size="lg" onClick={() => navigate('Membership')}>
                Become a member <Icon name="arrowRight" size={16} />
              </Btn>
              <Btn size="lg" variant="secondary" className="!border-paper/40 !text-paper bg-paper/10 backdrop-blur-sm hover:!bg-paper hover:!text-ink" onClick={() => navigate("What's On")}>
                What's on this week
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {/* THREE-UP STRIP */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 mt-24">
        <SectionLabel index="01">Three sports, one club</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border-t border-ink/10 pt-8">
          {[
            { sport: 'Tennis',     img: IMG.courtsBalcony, desc: 'Fourteen courts across four surfaces — clay, indoor acrylic, artificial grass and outdoor acrylic. Leagues, teams, coaching.' },
            { sport: 'Squash & Squash 57', img: IMG.squashGallery, desc: 'Three glass-backed courts with viewing galleries. PSA-background head coach. Box leagues and county teams.' },
            { sport: 'Pickleball', img: IMG.pickleball, desc: 'Daily sessions on indoor and outdoor courts. Coaching for beginners and improvers. The fastest-growing racquet sport in the UK.' },
          ].map((s, i) => (
            <div key={s.sport} className="group">
              <Photo label={`${s.sport.toLowerCase()} — match play`} src={s.img} className="aspect-[4/3] mb-5" />
              <div className="flex items-center gap-2 mb-2">
                <span className="mono text-xs text-mute">0{i+1}</span>
                <SportDot sport={s.sport.split(' ')[0]} />
              </div>
              <h3 className="display text-2xl mb-2">{s.sport}</h3>
              <p className="text-ink/70 leading-relaxed">{s.desc}</p>
              <button onClick={() => navigate('Sports')} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-club hover:gap-2.5 transition-all">
                Learn more <Icon name="arrowRight" size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* THIS WEEK */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 mt-24">
        <SectionHeader
          eyebrow="02 · This week at the club"
          title="What's on between now and Sunday"
          meta={<a href="#" onClick={(e)=>{e.preventDefault();navigate("What's On");}} className="inline-flex items-center gap-1.5 font-medium text-ink hover:text-club">Full schedule <Icon name="arrowRight" size={14}/></a>}
        />
        <div className="mt-8 rounded-md border border-line bg-paper overflow-hidden">
          {SESSIONS_THIS_WEEK.slice(0,5).map((s, i) => (
            <div key={i} className={`grid grid-cols-12 gap-3 items-center px-5 md:px-7 py-5 ${i>0 ? 'border-t border-line' : ''}`}>
              <div className="col-span-3 md:col-span-2">
                <div className="display text-2xl leading-none">{s.day}</div>
                <div className="mono text-[10px] uppercase tracking-wider text-mute mt-1">{s.date}</div>
              </div>
              <div className="col-span-4 md:col-span-2 mono text-sm text-ink/80">{s.time}</div>
              <div className="col-span-12 md:col-span-5 mt-2 md:mt-0">
                <div className="font-medium">{s.title}</div>
                <div className="text-sm text-mute mt-0.5">{s.where}</div>
              </div>
              <div className="col-span-12 md:col-span-3 flex md:justify-end items-center gap-2">
                {s.pill && <Pill tone="clay">{s.pill}</Pill>}
                <Pill><SportDot sport={s.sport}/> {s.sport}</Pill>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 mt-24">
        <SectionHeader eyebrow="03 · Latest news" title="From the committee and the courts"/>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {NEWS.slice(0,3).map((n, i) => (
            <button key={n.id} onClick={()=>openArticle && openArticle(n)} className="group text-left">
              <Photo label={`news — ${n.title.toLowerCase().slice(0,24)}`} src={n.img} className="aspect-[5/4] mb-4" />
              <div className="mono text-[11px] uppercase tracking-wider text-mute mb-2">{n.date}</div>
              <h3 className="display text-xl leading-snug group-hover:text-club transition">{n.title}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{n.excerpt}</p>
            </button>
          ))}
        </div>
      </section>

      {/* BENEFITS TILES + CLUB SHOP */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 mt-24">
        <SectionLabel index="04">Why members stay</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Benefits */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-4 md:gap-6">
            {[
              { n: '14', unit: 'courts', sub: 'across four surfaces, indoor and out' },
              { n: '1 yr', unit: 'free coaching', sub: 'weekly session for every new member' },
              { n: 'Bar', unit: '& balcony', sub: 'first floor, match-day afternoons and beyond' },
              { n: '5 min', unit: 'from Bromley South', sub: 'on-site parking, easy from central London' },
            ].map((t,i)=>(
              <div key={i} className="rounded-md border border-line bg-paper p-5 md:p-6">
                <div className="display text-4xl md:text-5xl leading-none">{t.n}</div>
                <div className="mt-1 text-club font-medium">{t.unit}</div>
                <div className="mt-3 text-sm text-mute leading-relaxed">{t.sub}</div>
              </div>
            ))}
          </div>

          {/* Club shop teaser — links to Kitlocker in a new tab */}
          <aside className="lg:col-span-4">
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer"
              className="flex h-full flex-col rounded-md border border-line bg-ink text-paper p-5 md:p-6 group hover:border-clay transition">
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] uppercase tracking-[0.14em] text-paper/50">Club shop</span>
                <Icon name="arrowUpRight" size={16} className="text-paper/50 group-hover:text-clay transition"/>
              </div>
              <h3 className="display text-2xl mt-3 mb-1.5">Club kit &amp; clothing</h3>
              <p className="text-sm text-paper/60 leading-relaxed">
                Official BLTSC kit, made to order at Kitlocker. Tap any piece to shop the range.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2.5">
                {SHOP_ITEMS.map((item) => (
                  <div key={item.label}>
                    <div className="aspect-square rounded bg-white overflow-hidden border border-paper/10">
                      <img src={item.img} alt={item.label} loading="lazy"
                        className="w-full h-full object-contain p-1" />
                    </div>
                    <div className="mt-1.5 text-[10px] leading-tight text-paper/55">{item.label}</div>
                  </div>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clay group-hover:gap-2.5 transition-all">
                Shop the full range <Icon name="arrowUpRight" size={14} />
              </span>
            </a>
          </aside>
        </div>
      </section>

      {/* CONVERSION BAND — next open day countdown */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 mt-24">
        <OpenDayCountdown navigate={navigate} />
      </section>
    </div>
  );
}

window.HomePage = HomePage;
