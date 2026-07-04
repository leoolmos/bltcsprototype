function AboutPage({ navigate }) {
  const anchors = [
    { id:'club',        label:'The club' },
    { id:'facilities',  label:'Facilities' },
    { id:'history',     label:'History' },
    { id:'committee',   label:'Committee' },
    { id:'policies',    label:'Policies' },
    { id:'contact',     label:'Contact' },
  ];

  return (
    <div className="fade-up max-w-6xl mx-auto px-6 md:px-10 pt-10 md:pt-14">
      <div className="max-w-3xl">
        <SectionLabel index="A / B">About</SectionLabel>
        <h1 className="display text-5xl md:text-7xl leading-[1.08] md:leading-[1.05] pb-1">
          A members' club,<br/> <span className="italic text-club">run by its members</span>.
        </h1>
        <p className="mt-5 text-lg text-ink/70 leading-relaxed max-w-2xl">
          A quick read on who we are, what we have, who runs the place, and how to get hold of us.
        </p>
      </div>

      {/* anchor nav */}
      <div className="mt-12 sticky top-16 bg-canvas/90 backdrop-blur border-y border-line z-10 -mx-6 md:-mx-10 px-6 md:px-10 py-3 overflow-x-auto">
        <div className="flex gap-6 md:gap-8 text-sm">
          {anchors.map(a => (
            <a key={a.id} href={`#${a.id}`} className="text-ink/60 hover:text-ink whitespace-nowrap font-medium">{a.label}</a>
          ))}
        </div>
      </div>

      {/* The club */}
      <section id="club" className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <SectionLabel>The club</SectionLabel>
          <h2 className="display text-4xl leading-[1.05]">Bromley's racquet-sports club since 1880.</h2>
        </div>
        <div className="md:col-span-7 text-ink/75 leading-relaxed space-y-4">
          <p>We're a private members' club on Sandford Road, a short walk from Bromley South. Three sports, fourteen tennis courts, three squash courts, and a clubhouse with a bar and balcony that look out over the clay.</p>
          <p>Everything we do is for the benefit of members — play, coaching, teams, social life. The club is run by a volunteer committee with a small professional office team and our coaching staff.</p>
          <p>New members are always welcome. If that's you, the fastest way in is an Open Day or a quick note to the office.</p>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="mt-24">
        <SectionHeader eyebrow="Facilities" title="What's on site."/>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {FACILITIES.map((f, i) => (
            <div key={i} className="rounded-md border border-line bg-paper p-6">
              <div className="w-10 h-10 rounded-md bg-ink text-paper grid place-items-center mb-4">
                <Icon name={f.icon} size={18} stroke={2}/>
              </div>
              <div className="font-medium">{f.label}</div>
              <div className="text-sm text-mute mt-1.5">{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* History */}
      <section id="history" className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Photo label="archive — founding pavilion, c.1895" src={IMG.clubDusk} className="aspect-[4/5]" />
        </div>
        <div className="md:col-span-7">
          <SectionLabel>History</SectionLabel>
          <h2 className="display text-4xl md:text-5xl leading-[1.05]">Founded 1880. Still here.</h2>
          <div className="mt-8 space-y-6">
            {[
              ['1880', 'Bromley Lawn Tennis Club founded on land off Sandford Road.'],
              ['1927', 'Squash courts added — the club adopts its current name.'],
              ['1968', 'First floodlights installed on the outdoor courts.'],
              ['2004', 'Indoor tennis courts and modern clubhouse opened.'],
              ['2023', 'Pickleball added as the club\'s third sport.'],
              ['2025', 'Court 7 resurfaced; full four-surface tennis offer secured.'],
            ].map(([y, t], i) => (
              <div key={i} className="grid grid-cols-12 gap-4 border-t border-line pt-5">
                <div className="col-span-3 md:col-span-2 display text-xl text-club">{y}</div>
                <div className="col-span-9 md:col-span-10 text-ink/80">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee */}
      <section id="committee" className="mt-24">
        <SectionHeader eyebrow="Committee" title="Who runs the club." sub="Volunteer committee, elected annually at the AGM."/>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {COMMITTEE.map((c, i) => (
            <div key={i} className="rounded-md border border-line bg-paper p-5">
              <div className="mono text-[11px] uppercase tracking-wider text-clay">{c.role}</div>
              <div className="display text-xl mt-2">{c.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section id="policies" className="mt-24">
        <SectionHeader eyebrow="Policies" title="The small print."/>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {[
            { t:'Court priority', b:'Team matches take priority on match days. Social sessions take priority in their allotted slots. Otherwise, first come first served via the booking system.' },
            { t:'Safeguarding',    b:'We take safeguarding seriously — especially for juniors. Our designated officer is contactable via the office. Policy available on request.' },
            { t:'Privacy',         b:'We store contact information and booking history for the purpose of running the club. We don\'t share it with third parties. Full policy on request.' },
          ].map((p,i)=>(
            <div key={i} className="rounded-md border border-line bg-paper p-6">
              <div className="display text-xl mb-3">{p.t}</div>
              <div className="text-sm text-ink/70 leading-relaxed">{p.b}</div>
              <a className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-club hover:gap-2.5 transition-all" href="#">Read full policy <Icon name="arrowUpRight" size={14}/></a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-24">
        <SectionHeader eyebrow="Contact" title="Come and find us."/>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-4">
            <div className="rounded-md border border-line bg-paper p-5 flex items-start gap-4">
              <Icon name="mapPin" size={20} className="text-club mt-0.5"/>
              <div>
                <div className="font-medium">Sandford Road, Bromley</div>
                <div className="text-sm text-mute">BR2 9AN · Kent</div>
              </div>
            </div>
            <div className="rounded-md border border-line bg-paper p-5 flex items-start gap-4">
              <Icon name="phone" size={20} className="text-club mt-0.5"/>
              <div>
                <div className="font-medium">020 8460 0936</div>
                <div className="text-sm text-mute">Tue–Fri · 10:00–15:00</div>
              </div>
            </div>
            <div className="rounded-md border border-line bg-paper p-5 flex items-start gap-4">
              <Icon name="mail" size={20} className="text-club mt-0.5"/>
              <div>
                <div className="font-medium">office@bromleyltsc.co.uk</div>
                <div className="text-sm text-mute">For everything else</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <MapEmbed className="aspect-[4/3] rounded-md border border-line" label="SANDFORD ROAD · BR2 9AN" />
            <div className="mt-3 text-xs text-mute flex items-center gap-2">
              <Icon name="car" size={14}/> On-site parking · 5 min walk from Bromley South station
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.AboutPage = AboutPage;
