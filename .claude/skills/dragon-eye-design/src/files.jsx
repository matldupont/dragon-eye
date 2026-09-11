/* global React */

// ============================================================
// FILES SECTION — search, filter, grid, modal open (Dossier)
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
            <h2 className="de-section-title">Classified Database</h2>
          </div>
          <p style={{maxWidth:'36ch', fontFamily:'var(--de-body)', fontSize:'1rem', lineHeight:1.4, margin:0, color:'var(--de-ink-soft)'}}>
            {cryptids.length} subjects. Browse by region or threat level. Clearance checks apply.
          </p>
        </div>

        <div className="de-search-row">
          <div className="files-search">
            <span className="files-search-icon">⌕</span>
            <input
              className="de-input"
              type="text"
              placeholder="SEARCH SUBJECT, CODENAME, REGION"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>
          <select className="de-input" value={region} onChange={e => setRegion(e.target.value)}>
            {regions.map(r => <option key={r} value={r}>{r === 'all' ? 'ALL REGIONS' : r}</option>)}
          </select>
          <select className="de-input" value={danger} onChange={e => setDanger(e.target.value)}>
            {dangers.map(d => <option key={d} value={d}>{d === 'all' ? 'ALL THREAT LEVELS' : d.toUpperCase()}</option>)}
          </select>
        </div>

        <div className="de-mono-label" style={{marginBottom:'1rem'}}>
          {filtered.length} / {cryptids.length} files found
        </div>

        {filtered.length === 0 ? (
          <div style={{padding:'3rem', textAlign:'center', border:'1px dashed var(--de-ink-soft)', fontFamily:'var(--de-mono)'}}>
            NO RECORDS MATCH QUERY
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
  return (
    <article
      className="de-card"
      style={{animationDelay: `${i * 40}ms`}}
      onClick={onOpen}
    >
      <div className="de-card-img-wrap">
        <img src={cryptid.image} alt={cryptid.name} className="de-card-img" loading="lazy" />
        <div className="card-secret-stamp">
          <div className="de-mono-label" style={{color:'var(--de-paper)'}}>№ {cryptid.caseNumber}</div>
        </div>
      </div>
      <div className="de-card-info">
        <h3 className="de-card-name">{cryptid.name}</h3>
        <div className="de-card-meta">
          <span>{cryptid.type}</span>
          <window.DangerPill level={cryptid.dangerLevel}/>
        </div>
        <div className="de-card-region">LOC · {cryptid.region}</div>
      </div>
    </article>
  );
}

// ============================================================
// MODAL — full case file (Dossier)
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
      <div className="de-modal de-modal-secret" onClick={e => e.stopPropagation()}>
        <button className="de-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <ModalSecret c={cryptid}/>
      </div>
    </div>
  );
};

function ModalSecret({ c }) {
  return (
    <div className="modal-secret">
      <div className="modal-secret-header">
        <div>
          <div className="de-mono-label">DOSSIER №</div>
          <div style={{fontFamily:'var(--de-label)', fontSize:'1.4rem'}}>{c.caseNumber}</div>
        </div>
        <div className="de-stamp">{c.status.toUpperCase()}</div>
        <div style={{textAlign:'right'}}>
          <div className="de-mono-label">CLEARANCE</div>
          <div style={{fontFamily:'var(--de-label)', fontSize:'1.4rem'}}>LVL 5</div>
        </div>
      </div>

      <div className="modal-secret-body">
        <div>
          <img src={c.image} alt={c.name} className="modal-secret-photo"/>
          <div className="de-mono-label" style={{marginTop:'8px'}}>PHOTOGRAPHIC EVIDENCE · EXHIBIT A</div>
        </div>
        <div>
          <h2 style={{fontFamily:'var(--de-display)', fontSize:'3rem', margin:'0 0 8px', lineHeight:1}}>{c.name}</h2>
          <div style={{display:'flex', gap:'8px', marginBottom:'1rem'}}>
            <window.DangerPill level={c.dangerLevel}/>
          </div>
          <dl className="modal-secret-dl">
            <dt>Codename</dt><dd>{c.codename}</dd>
            <dt>Type</dt><dd>{c.type}</dd>
            <dt>Region</dt><dd>{c.region}</dd>
            <dt>First Sighting</dt><dd>{c.firstSighting}</dd>
            <dt>Alias</dt><dd>{c.alias || '—'}</dd>
            <dt>Associates</dt><dd>{c.knownAssociates || '—'}</dd>
          </dl>
          <div className="de-mono-label" style={{marginTop:'1.2rem'}}>INVESTIGATOR CASE NOTES</div>
          <p style={{fontFamily:'var(--de-body)', lineHeight:1.6, marginTop:'6px'}}>{c.description}</p>
        </div>
      </div>
    </div>
  );
}
