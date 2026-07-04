// Single article / event detail page, opened from the News & events feed.

function NewsArticlePage({ article, navigate, openArticle }) {
  // Guard: if we somehow land here with no article, bounce to What's On.
  React.useEffect(() => {
    if (!article) navigate("What's On");
  }, [article]);
  if (!article) return null;

  const isEvent = article.kind === 'Event';
  const lead = article.excerpt || article.blurb;
  const body = article.body || [];

  const related = NEWS_FEED.filter(x => x.id !== article.id).slice(0, 3);

  return (
    <article className="fade-up max-w-4xl mx-auto px-6 md:px-10 pt-8 md:pt-12">
      {/* Back */}
      <button
        onClick={()=>navigate("What's On")}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-mute hover:text-ink transition group">
        <Icon name="arrowLeft" size={15} className="group-hover:-translate-x-0.5 transition-transform" />
        Back to News &amp; events
      </button>

      {/* Meta */}
      <div className="mt-7 flex items-center gap-2.5">
        <Pill tone={isEvent ? 'clay' : 'club'}>{article.kind}</Pill>
        <span className="mono text-[11px] uppercase tracking-wider text-mute">{article.date}</span>
        <span className="text-ink/25">·</span>
        <span className="mono text-[11px] uppercase tracking-wider text-club">{article.tag}</span>
      </div>

      {/* Title */}
      <h1 className="display text-4xl md:text-6xl leading-[1.05] mt-4 pb-1">{article.title}</h1>

      {/* Lead */}
      {lead && <p className="mt-5 text-xl md:text-2xl text-ink/75 leading-relaxed font-light">{lead}</p>}

      {/* Event details card */}
      {isEvent && (
        <div className="mt-7 rounded-md border border-line bg-club/5 p-5 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="flex items-start gap-3">
            <Icon name="calendar" size={18} className="text-club mt-0.5" />
            <div>
              <div className="mono text-[10px] uppercase tracking-wider text-mute mb-1">Date</div>
              <div className="font-medium">{article.date}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="clock" size={18} className="text-club mt-0.5" />
            <div>
              <div className="mono text-[10px] uppercase tracking-wider text-mute mb-1">Time</div>
              <div className="font-medium">{article.time || 'TBC'}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="mapPin" size={18} className="text-club mt-0.5" />
            <div>
              <div className="mono text-[10px] uppercase tracking-wider text-mute mb-1">Where</div>
              <div className="font-medium">{article.where || 'Bromley LTSC'}</div>
            </div>
          </div>
        </div>
      )}

      {/* Hero image */}
      <Photo label={article.title.toLowerCase()} src={article.img} className="aspect-[16/9] mt-8" />

      {/* Body */}
      <div className="mt-8 max-w-2xl space-y-5 text-lg text-ink/80 leading-relaxed">
        {body.map((p, i) => <p key={i}>{p}</p>)}
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-3">
        {isEvent ? (
          <>
            <Btn variant="clay" onClick={()=>navigate('Membership')}>Become a member <Icon name="arrowRight" size={15}/></Btn>
            <Btn variant="secondary" onClick={()=>navigate("What's On")}>All events</Btn>
          </>
        ) : (
          <Btn variant="secondary" onClick={()=>navigate("What's On")}>
            <Icon name="arrowLeft" size={15}/> Back to all news
          </Btn>
        )}
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-16">
          <Divider />
          <div className="mono text-[11px] uppercase tracking-[0.16em] text-mute mt-8 mb-6">More from the club</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {related.map((item) => (
              <button
                key={item.id}
                onClick={()=>openArticle && openArticle(item)}
                className="text-left group">
                <div className="relative">
                  <Photo label={item.title.toLowerCase().slice(0,22)} src={item.img} className="aspect-[5/4] mb-3" />
                  <Pill tone={item.kind === 'Event' ? 'clay' : 'club'} className="absolute top-2.5 left-2.5 !bg-paper">{item.kind}</Pill>
                </div>
                <div className="mono text-[11px] uppercase tracking-wider text-mute mb-1.5">{item.date}</div>
                <h3 className="display text-lg leading-snug group-hover:text-club transition">{item.title}</h3>
              </button>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

window.NewsArticlePage = NewsArticlePage;
