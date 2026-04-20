/* global React */

// ============================================================
// HERO — Cryptid of the Month, theme-aware
// ============================================================
window.Hero = function Hero({ theme, featured, onOpen }) {
  if (theme === "secret") return <HeroSecret featured={featured} onOpen={onOpen} />;
  if (theme === "xfiles") return <HeroXFiles featured={featured} onOpen={onOpen} />;
  return <HeroJournal featured={featured} onOpen={onOpen} />;
};

// -------- SECRET: dossier tossed on a desk ----------
function HeroSecret({ featured, onOpen }) {
  const today = new Date().toISOString().slice(0,10);
  return (
    <section className="de-hero hero-secret">
      <div className="de-wrap">
        <div className="hero-secret-grid">
          <div>
            <div className="hero-secret-meta">
              <span>DOSSIER № {featured.caseNumber}</span>
              <span>FILED {today}</span>
              <span>CLEARANCE // LVL 5</span>
            </div>
            <h1 className="de-title-xl" style={{marginTop: '0.2em'}}>
              CRYPTID<br/>OF THE<br/>MONTH.
            </h1>
            <p className="de-hero-sub">
              Thirteen active investigations. One creature selected for deep file review.
              This month the Dragon Eye Agency turns its glass on <b>{featured.name}</b> —
              {featured.alias ? ` also known as ${featured.alias.split(",")[0]}.` : "."}
            </p>
            <div style={{display:'flex', gap:'1rem', marginTop:'2rem', flexWrap:'wrap'}}>
              <button className="de-btn de-btn-primary" onClick={onOpen}>
                ▸ Open Dossier
              </button>
              <a className="de-btn" href="#files">Browse All Files</a>
            </div>
          </div>
          <div className="hero-secret-dossier">
            <div className="hero-secret-folder">
              <div className="hero-secret-tab">CASE {featured.caseNumber}</div>
              <img src={featured.image} alt={featured.name} className="hero-secret-photo" />
              <div className="hero-secret-stamps">
                <div className="de-stamp" style={{transform:'rotate(-6deg)'}}>TOP SECRET</div>
                <div className="de-stamp" style={{transform:'rotate(4deg)', marginTop:'-8px', color:'var(--de-accent-2)', borderColor:'var(--de-accent-2)'}}>EYES ONLY</div>
              </div>
              <div className="hero-secret-caption">
                <div className="de-mono-label">SUBJECT</div>
                <div style={{fontFamily:'var(--de-display)', fontSize:'2rem', lineHeight:1}}>{featured.name}</div>
                <div className="de-mono-label" style={{marginTop:'6px'}}>
                  LOCATION · {featured.region} · FIRST SEEN · {featured.firstSighting}
                </div>
              </div>
              <window.DangerPill level={featured.dangerLevel} />
            </div>
            <div className="hero-secret-paperclip"/>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------- XFILES: terminal briefing ----------
function HeroXFiles({ featured, onOpen }) {
  const [typed, setTyped] = useState("");
  const target = `> TARGET: ${featured.name.toUpperCase()}`;
  useEffect(() => {
    setTyped("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, [featured.slug]);

  return (
    <section className="de-hero hero-xfiles">
      <div className="de-wrap">
        <div className="hero-xfiles-grid">
          <div>
            <div className="hero-xfiles-meta">
              [ TRANSMISSION 04.18.2026 / 23:47 UTC ] <span className="xfiles-rec">● REC</span>
            </div>
            <h1 className="de-title-xl hero-xfiles-title">
              THE TRUTH<br/>IS<br/>&nbsp;&nbsp;FILED.
            </h1>
            <div className="hero-xfiles-type">
              {typed}<span className="xfiles-cursor">_</span>
            </div>
            <p className="de-hero-sub" style={{fontFamily:'var(--de-body)', fontSize:'1.3rem', lineHeight:1.3}}>
              &gt; 13 case files active. &gt; Cross-referencing sightings,
              newspaper scans, radio intercepts. &gt; This month's featured subject
              originates from Point Pleasant, WV. &gt; Begin review.
            </p>
            <div style={{display:'flex', gap:'1rem', marginTop:'2rem', flexWrap:'wrap'}}>
              <button className="de-btn" onClick={onOpen}>▸ OPEN_FILE.EXE</button>
              <a className="de-btn" href="#files">GREP ARCHIVES</a>
            </div>
          </div>
          <div className="hero-xfiles-monitor">
            <div className="hero-xfiles-screen">
              <div className="hero-xfiles-hud">
                <div>CAM 04 · POINT PLEASANT</div>
                <div>REC · {featured.firstSighting}</div>
              </div>
              <img src={featured.image} alt={featured.name} className="hero-xfiles-photo" />
              <div className="hero-xfiles-crosshair"/>
              <div className="hero-xfiles-hud hero-xfiles-hud-btm">
                <div>● THREAT: {featured.dangerLevel.toUpperCase()}</div>
                <div>{featured.codename}</div>
              </div>
            </div>
            <div className="hero-xfiles-serial">SN-{featured.caseNumber}-FOX</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------- JOURNAL: notebook spread ----------
function HeroJournal({ featured, onOpen }) {
  return (
    <section className="de-hero hero-journal">
      <div className="de-wrap">
        <div className="hero-journal-grid">
          <div>
            <div className="hero-journal-meta">Field Entry · {featured.firstSighting}</div>
            <h1 className="de-title-xl hero-journal-title">
              Cryptid<br/>of the<br/><em>Month.</em>
            </h1>
            <p className="de-hero-sub">
              Thirteen active investigations this season. I've been chasing this one{' '}
              <span className="hero-journal-highlight">across the river country</span>{' '}
              since the first report came in. Big wings. Red eyes. Bad feeling.
            </p>
            <div className="hero-journal-sign">
              — M.<span style={{color:'var(--de-accent)'}}>D.</span>, lead investigator
            </div>
            <div style={{display:'flex', gap:'1rem', marginTop:'1.6rem', flexWrap:'wrap'}}>
              <button className="de-btn" onClick={onOpen}>Read the file</button>
              <a className="de-btn" href="#files" style={{background:'transparent', color:'var(--de-ink)', boxShadow:'none'}}>Browse all 13</a>
            </div>
          </div>
          <div className="hero-journal-polaroid-stack">
            <div className="hero-journal-polaroid hero-journal-polaroid-back">
              <div className="hero-journal-polaroid-img" style={{background:'#2c3540'}}/>
            </div>
            <div className="hero-journal-polaroid">
              <div className="hero-journal-tape hero-journal-tape-l"/>
              <div className="hero-journal-tape hero-journal-tape-r"/>
              <img src={featured.image} alt={featured.name} className="hero-journal-polaroid-img"/>
              <div className="hero-journal-polaroid-caption">
                <span className="hero-journal-polaroid-name">{featured.name}?</span>
                <br/>
                <span style={{fontSize:'1rem'}}>{featured.region} · {featured.firstSighting}</span>
              </div>
              <window.DangerPill level={featured.dangerLevel} />
            </div>
            <div className="hero-journal-scribble">"eyes glowed — camera
              <br/>wouldn't focus."</div>
          </div>
        </div>
      </div>
    </section>
  );
}
