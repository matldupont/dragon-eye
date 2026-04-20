/* global React */

// ============================================================
// FILES SECTION — search, filter, grid, modal open (Field Journal)
// ============================================================
window.FilesSection = function FilesSection({ cryptids, onOpen }) {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("all");
  const [danger, setDanger] = useState("all");

  const regions = useMemo(() => {
    const set = new Set(cryptids.map(c => c.region));
    return ["all", ...Array.from(set)];
  }, [cryptids]);

  const dangers = ["all", "Low", "Medium", "High", "Unknown"];

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return cryptids.filter(c => {
      if (region !== "all" && c.region !== region) return false;
      if (danger !== "all" && c.dangerLevel !== danger) return false;
      if (!needle) return true;
      return (c.name + " " + c.codename + " " + c.region + " " + c.type + " " + (c.alias||""))
        .toLowerCase().includes(needle);
    });
  }, [cryptids, q, region, danger]);

  return (
    <section className="de-section files-section" id="files">
      <div className="de-wrap">
        <div className="de-section-head">
          <div>
            <div className="de-eyebrow">Case Archive</div>
            <h2 className="de-section-title">All my files</h2>
          </div>
          <p style={{maxWidth:'36ch', fontFamily:'var(--de-body)', fontSize:'1.2rem', lineHeight:1.4, margin:0, color:'var(--de-ink-soft)'}}>
            I've got {cryptids.length} of them so far. Some are just rumors. Some I've seen.
          </p>
        </div>

        <div className="de-search-row">
          <div className="files-search">
            <span className="files-search-icon">⌕</span>
            <input
              className="de-input"
              type="text"
              placeholder="Scribble a name..."
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>
          <select className="de-input" value={region} onChange={e => setRegion(e.target.value)}>
            {regions.map(r => <option key={r} value={r}>{r === 'all' ? 'Every region' : r}</option>)}
          </select>
          <select className="de-input" value={danger} onChange={e => setDanger(e.target.value)}>
            {dangers.map(d => <option key={d} value={d}>{d === 'all' ? 'Any danger' : d}</option>)}
          </select>
        </div>

        <div className="de-mono-label" style={{marginBottom:'1rem'}}>
          {filtered.length} / {cryptids.length} entries
        </div>

        {filtered.length === 0 ? (
          <div style={{padding:'3rem', textAlign:'center', border:'1px dashed var(--de-ink-soft)', fontFamily:'var(--de-body)', fontSize:'1.4rem'}}>
            Nothing in the notebook matches that.
          </div>
        ) : (
          <div className="de-files-grid">
            {filtered.map((c, i) => (
              <FileCard key={c.slug} cryptid={c} i={i} onOpen={() => onOpen(c)} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

function FileCard({ cryptid, i, onOpen }) {
  const rot = ((i * 37) % 5) - 2;  // deterministic rotation for journal
  return (
    <article
      className="de-card"
      style={{animationDelay: `${i * 40}ms`, '--rot': `${rot}deg`}}
      onClick={onOpen}
    >
      <div className="de-card-img-wrap">
        <img src={cryptid.image} alt={cryptid.name} className="de-card-img" loading="lazy" />
      </div>
      <div className="de-card-info">
        <h3 className="de-card-name">{cryptid.name}</h3>
        <div className="de-card-meta">
          <span>{cryptid.type}</span>
          <window.DangerPill level={cryptid.dangerLevel}/>
        </div>
        <div className="de-card-region">{cryptid.region}</div>
      </div>
    </article>
  );
}

// ============================================================
// MODAL — full case file (Field Journal)
// ============================================================
window.FileModal = function FileModal({ cryptid, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  if (!cryptid) return null;

  return (
    <div className="de-modal-backdrop" onClick={onClose}>
      <div className="de-modal de-modal-journal" onClick={e => e.stopPropagation()}>
        <button className="de-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <ModalJournal c={cryptid}/>
      </div>
    </div>
  );
};

function ModalJournal({ c }) {
  return (
    <div className="modal-journal">
      <div className="modal-journal-tape modal-journal-tape-l"/>
      <div className="modal-journal-tape modal-journal-tape-r"/>
      <div className="modal-journal-body">
        <div style={{position:'relative'}}>
          <div className="hero-journal-polaroid">
            <div className="hero-journal-tape hero-journal-tape-l" style={{top:'-10px'}}/>
            <img src={c.image} alt={c.name} className="hero-journal-polaroid-img"/>
            <div className="hero-journal-polaroid-caption">
              <span className="hero-journal-polaroid-name">{c.name}</span>
              <br/>
              <span style={{fontSize:'1rem'}}>{c.firstSighting}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="hero-journal-meta">Entry · Case № {c.caseNumber}</div>
          <h2 className="hero-journal-title" style={{fontSize:'3.5rem', margin:'0.2em 0'}}>
            The <em>{c.name}</em> File
          </h2>
          <window.DangerPill level={c.dangerLevel}/>
          <dl className="modal-journal-dl">
            <dt>Codename</dt><dd>{c.codename}</dd>
            <dt>Type</dt><dd>{c.type}</dd>
            <dt>Where</dt><dd>{c.region}</dd>
            <dt>Aliases</dt><dd>{c.alias || '—'}</dd>
            <dt>Known associates</dt><dd>{c.knownAssociates || '—'}</dd>
          </dl>
          <p style={{fontFamily:'var(--de-body)', fontSize:'1.4rem', lineHeight:1.4, marginTop:'1rem'}}>
            {c.description}
          </p>
          <div className="hero-journal-sign">— M.<span style={{color:'var(--de-accent)'}}>D.</span></div>
        </div>
      </div>
    </div>
  );
}
