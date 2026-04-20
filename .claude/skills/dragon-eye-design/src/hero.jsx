/* global React */

// ============================================================
// HERO — Cryptid of the Month (Field Journal)
// ============================================================
window.Hero = function Hero({ featured, onOpen }) {
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
};
