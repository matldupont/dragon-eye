/* global React */
const { useState, useEffect, useMemo } = React;

// ============================================================
// DRAGON EYE EMBLEM — dragon eye SVG mark
// ============================================================
window.DragonEyeMark = function DragonEyeMark({ size = 34, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={style}>
      <ellipse cx="32" cy="32" rx="30" ry="14" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="32" cy="32" r="11" fill="currentColor"/>
      <ellipse cx="32" cy="32" rx="4" ry="10" fill="#000"/>
      <circle cx="29" cy="28" r="2" fill="#fff"/>
    </svg>
  );
};

// ============================================================
// CLASSIFIED MARQUEE BAR
// ============================================================
window.ClassifiedBar = function ClassifiedBar({ theme }) {
  const msg = {
    secret:  "// CLASSIFIED — DRAGON EYE AGENCY — LEVEL 5 CLEARANCE REQUIRED — INTERNAL USE ONLY — DO NOT DISTRIBUTE — ",
    xfiles:  "⚠ SIGNAL INTERCEPTED — FOX-DE-001 — CRYPTID ACTIVITY ELEVATED — LEVEL 5 CLEARANCE — TRANSMISSION LOGGED — ",
    journal: "★ FIELD NOTES — ENTRY 47 — WEATHER: OVERCAST — MOON: WAXING — COFFEE: RESTOCKED — INVESTIGATIONS: 13 ACTIVE — "
  }[theme];
  const content = msg.repeat(6);
  return (
    <div className="de-classbar">
      <div className="de-classbar-track">{content}{content}</div>
    </div>
  );
};

// ============================================================
// NAV
// ============================================================
window.Nav = function Nav({ theme }) {
  return (
    <nav className="de-nav">
      <div className="de-wrap de-nav-inner">
        <div className="de-logo">
          <window.DragonEyeMark size={30} />
          <span>Dragon Eye</span>
        </div>
        <div className="de-nav-links">
          <a href="#files">Files</a>
          <a href="#about">About</a>
          <a href="#merch">Evidence Locker</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

// ============================================================
// DANGER PILL
// ============================================================
window.DangerPill = function DangerPill({ level }) {
  const cls = `de-danger-pill de-danger-${level.toLowerCase()}`;
  return (
    <span className={cls}>
      <span className="de-danger-dot"/>
      {level}
    </span>
  );
};
