/* global React */

// ============================================================
// FILES SECTION — search, filter, grid, modal open
// ============================================================
window.FilesSection = function FilesSection({ theme, cryptids, onOpen }) {
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

  const label = {
    secret: "Classified Database",
    xfiles: "// GREP ./ARCHIVES",
    journal: "All my files"
  }[theme];
  const sub = {
    secret: `${cryptids.length} subjects. Browse by region or threat level. Clearance checks apply.`,
    xfiles: `> ${cryptids.length} records loaded. Use filters to narrow intercepted data.`,
    journal: `I've got ${cryptids.length} of them so far. Some are just rumors. Some I've seen.`
  }[theme];

  return (
    <section className="de-section files-section" id="files">
      <div className="de-wrap">
        <div className="de-section-head">
          <div>
            <div className="de-eyebrow">Case Archive</div>
            <h2 className="de-section-title">{label}</h2>
          </div>
          <p style={{maxWidth:'36ch', fontFamily:'var(--de-body)', fontSize:'1rem', lineHeight:1.4, margin:0, color:'var(--de-ink-soft)'}}>
            {sub}
          </p>
        </div>

        <div className="de-search-row">
          <div className="files-search">
            <span className="files-search-icon">⌕</span>
            <input
              className="de-input"
              type="text"
              placeholder={theme === 'xfiles' ? '> query_subject...' : theme === 'journal' ? 'Scribble a name...' : 'SEARCH SUBJECT, CODENAME, REGION'}
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>
          <select className="de-input" value={region} onChange={e => setRegion(e.target.value)}>
            {regions.map(r => <option key={r} value={r}>{r === 'all' ? (theme==='journal'?'Every region':'ALL REGIONS') : r}</option>)}
          </select>
          <select className="de-input" value={danger} onChange={e => setDanger(e.target.value)}>
            {dangers.map(d => <option key={d} value={d}>{d === 'all' ? (theme==='journal'?'Any danger':'ALL THREAT LEVELS') : `${theme==='xfiles'?'THREAT: ':''}${d.toUpperCase()}`}</option>)}
          </select>
        </div>

        <div className="de-mono-label" style={{marginBottom:'1rem'}}>
          {filtered.length} / {cryptids.length} {theme === 'journal' ? 'entries' : 'files found'}
        </div>

        {filtered.length === 0 ? (
          <div style={{padding:'3rem', textAlign:'center', border:'1px dashed var(--de-ink-soft)', fontFamily:'var(--de-mono)'}}>
            {theme === 'journal' ? "Nothing in the notebook matches that." : "NO RECORDS MATCH QUERY"}
          </div>
        ) : (
          <div className="de-files-grid">
            {filtered.map((c, i) => (
              <FileCard key={c.slug} cryptid={c} i={i} theme={theme} onOpen={() => onOpen(c)} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

function FileCard({ cryptid, i, theme, onOpen }) {
  const rot = ((i * 37) % 5) - 2;  // deterministic rotation for journal
  return (
    <article
      className="de-card"
      style={{animationDelay: `${i * 40}ms`, '--rot': `${rot}deg`}}
      onClick={onOpen}
    >
      <div className="de-card-img-wrap">
        <img src={cryptid.image} alt={cryptid.name} className="de-card-img" loading="lazy" />
        {theme === 'xfiles' && (
          <div className="card-xfiles-hud">
            <span>● {cryptid.codename}</span>
          </div>
        )}
        {theme === 'secret' && (
          <div className="card-secret-stamp">
            <div className="de-mono-label" style={{color:'var(--de-paper)'}}>№ {cryptid.caseNumber}</div>
          </div>
        )}
      </div>
      <div className="de-card-info">
        <h3 className="de-card-name">{cryptid.name}</h3>
        <div className="de-card-meta">
          <span>{cryptid.type}</span>
          <window.DangerPill level={cryptid.dangerLevel}/>
        </div>
        <div className="de-card-region">
          {theme === 'journal' ? cryptid.region : `LOC · ${cryptid.region}`}
        </div>
      </div>
    </article>
  );
}

// ============================================================
// MODAL — full case file
// ============================================================
window.FileModal = function FileModal({ cryptid, theme, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  if (!cryptid) return null;

  return (
    <div className="de-modal-backdrop" onClick={onClose}>
      <div className={`de-modal de-modal-${theme}`} onClick={e => e.stopPropagation()}>
        <button className="de-modal-close" onClick={onClose} aria-label="Close">✕</button>

        {theme === 'secret' && <ModalSecret c={cryptid}/>}
        {theme === 'xfiles' && <ModalXFiles c={cryptid}/>}
        {theme === 'journal' && <ModalJournal c={cryptid}/>}
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

function ModalXFiles({ c }) {
  return (
    <div className="modal-xfiles">
      <div className="modal-xfiles-header">
        <span>╔═ DRAGON_EYE::ARCHIVE ═╗</span>
        <span className="xfiles-rec">● REC LIVE</span>
      </div>
      <pre className="modal-xfiles-pre">
{`> LOAD ${c.codename}
> DECRYPTING...
> [OK] SUBJECT LOCATED`}
      </pre>
      <div className="modal-xfiles-body">
        <div className="modal-xfiles-screen">
          <img src={c.image} alt={c.name} className="hero-xfiles-photo"/>
          <div className="hero-xfiles-hud"><span>CAM 04</span><span>REC</span></div>
          <div className="hero-xfiles-hud hero-xfiles-hud-btm">
            <span style={{color:'var(--de-accent)'}}>● {c.dangerLevel.toUpperCase()}</span>
            <span>{c.codename}</span>
          </div>
        </div>
        <div>
          <h2 style={{fontFamily:'var(--de-display)', fontSize:'2.6rem', margin:'0', letterSpacing:'0.04em', textShadow:'0 0 10px rgba(120,240,160,0.5)'}}>{c.name.toUpperCase()}</h2>
          <div style={{fontFamily:'var(--de-mono)', color:'var(--de-ink-soft)', marginBottom:'1rem', fontSize:'1rem'}}>
            &gt; {c.alias || 'no known alias'}
          </div>
          <div className="modal-xfiles-grid">
            <div><span className="de-mono-label">TYPE</span><div>{c.type}</div></div>
            <div><span className="de-mono-label">REGION</span><div>{c.region}</div></div>
            <div><span className="de-mono-label">SIGHTED</span><div>{c.firstSighting}</div></div>
            <div><span className="de-mono-label">STATUS</span><div>{c.status}</div></div>
          </div>
          <pre className="modal-xfiles-pre" style={{marginTop:'1rem', whiteSpace:'pre-wrap'}}>
{`> cat notes.txt
${c.description}`}
          </pre>
        </div>
      </div>
    </div>
  );
}

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
