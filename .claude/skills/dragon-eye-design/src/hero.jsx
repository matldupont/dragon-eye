/* global React */

// ============================================================
// HERO — Cryptid of the Month (Dossier: case file tossed on a desk)
// ============================================================
window.Hero = function Hero({ featured, onOpen }) {
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
};
